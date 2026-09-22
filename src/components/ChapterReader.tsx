import React, { useState } from 'react';
import { 
  HistoryChapter, 
  ReadingMode, 
  TextSize 
} from '../types';
import { 
  Volume2, 
  Copy, 
  Check, 
  Quote, 
  Bookmark, 
  Sparkles,
  ChevronRight,
  ExternalLink,
  Info
} from 'lucide-react';
import { playTextToSpeech, stopTextToSpeech } from '../utils/speech';

interface ChapterReaderProps {
  chapters: HistoryChapter[];
  readingMode: ReadingMode;
  textSize: TextSize;
  searchQuery: string;
}

export const ChapterReader: React.FC<ChapterReaderProps> = ({
  chapters,
  readingMode,
  textSize,
  searchQuery
}) => {
  const [activeChapterId, setActiveChapterId] = useState<string>(chapters[0]?.id || 'origins');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [playingParagraphId, setPlayingParagraphId] = useState<string | null>(null);

  const activeChapter = chapters.find(c => c.id === activeChapterId) || chapters[0];

  const handleCopy = (textZh: string, textEn: string, id: string) => {
    let contentToCopy = '';
    if (readingMode === 'zh_only') {
      contentToCopy = textZh;
    } else if (readingMode === 'en_only') {
      contentToCopy = textEn;
    } else {
      contentToCopy = `【中文】：\n${textZh}\n\n【English】：\n${textEn}`;
    }

    navigator.clipboard.writeText(contentToCopy);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePlaySpeech = (text: string, id: string, lang: 'en' | 'zh' = 'en') => {
    if (playingParagraphId === id) {
      stopTextToSpeech();
      setPlayingParagraphId(null);
    } else {
      setPlayingParagraphId(id);
      playTextToSpeech(text, lang, () => {
        setPlayingParagraphId(null);
      });
    }
  };

  const getTextClass = () => {
    switch (textSize) {
      case 'sm':
        return 'text-sm leading-relaxed';
      case 'lg':
        return 'text-lg leading-loose';
      case 'base':
      default:
        return 'text-base leading-relaxed';
    }
  };

  // Filter chapters based on search query if present
  const filteredChapters = chapters.filter(c => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      c.titleZh.toLowerCase().includes(q) ||
      c.titleEn.toLowerCase().includes(q) ||
      c.summaryZh.toLowerCase().includes(q) ||
      c.summaryEn.toLowerCase().includes(q) ||
      c.paragraphs.some(p => p.zh.toLowerCase().includes(q) || p.en.toLowerCase().includes(q))
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Chapter Selector Tabs / Pills */}
      <div className="mb-8">
        <h2 className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-3 flex items-center gap-1.5">
          <Bookmark className="w-3.5 h-3.5" />
          歷史專題目錄 / History Chapters
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {chapters.map((ch) => {
            const isSelected = ch.id === activeChapterId;
            return (
              <button
                key={ch.id}
                onClick={() => {
                  setActiveChapterId(ch.id);
                  stopTextToSpeech();
                  setPlayingParagraphId(null);
                }}
                className={`text-left p-3 rounded-xl border transition duration-150 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-amber-50 border-amber-400 text-stone-900 shadow-sm ring-1 ring-amber-400'
                    : 'bg-white border-stone-200 text-stone-600 hover:border-amber-300 hover:bg-stone-50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className={`font-mono font-bold ${isSelected ? 'text-amber-800' : 'text-stone-600'}`}>
                      Chapter 0{ch.number}
                    </span>
                    <span className="text-[11px] px-1.5 py-0.5 rounded bg-stone-100 text-stone-500">
                      {ch.period}
                    </span>
                  </div>
                  <div className="font-semibold text-sm line-clamp-1 text-stone-900">
                    {ch.titleZh}
                  </div>
                  <div className="text-xs text-stone-500 line-clamp-1 mt-0.5">
                    {ch.titleEn}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Chapter Content Card */}
      <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
        {/* Chapter Header Banner */}
        <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 text-white p-6 sm:p-8 border-b border-stone-800">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2 tracking-wide uppercase">
            <span>Chapter {activeChapter.number}</span>
            <span>&bull;</span>
            <span>{activeChapter.period}</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {activeChapter.titleZh}
            </h1>
            <p className="text-base sm:text-lg text-amber-200/90 font-medium">
              {activeChapter.titleEn}
            </p>
          </div>

          {/* Chapter Summaries in Both Languages */}
          <div className="mt-6 pt-5 border-t border-stone-800/80 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-stone-300">
            {(readingMode === 'side_by_side' || readingMode === 'interlinear' || readingMode === 'zh_only') && (
              <div className="bg-stone-800/60 rounded-xl p-4 border border-stone-700/50">
                <span className="text-xs font-bold text-amber-400 block mb-1">【章節摘要】</span>
                <p className="leading-relaxed text-stone-200">{activeChapter.summaryZh}</p>
              </div>
            )}
            {(readingMode === 'side_by_side' || readingMode === 'interlinear' || readingMode === 'en_only') && (
              <div className="bg-stone-800/60 rounded-xl p-4 border border-stone-700/50">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-amber-400">【Chapter Summary】</span>
                  <button
                    onClick={() => handlePlaySpeech(activeChapter.summaryEn, `sum-${activeChapter.id}`, 'en')}
                    className="text-stone-400 hover:text-amber-300 text-xs flex items-center gap-1 transition"
                    title="朗讀英文摘要"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{playingParagraphId === `sum-${activeChapter.id}` ? '停止' : '朗讀'}</span>
                  </button>
                </div>
                <p className="leading-relaxed text-stone-300 italic">{activeChapter.summaryEn}</p>
              </div>
            )}
          </div>
        </div>

        {/* Iconic Quote Section (if present) */}
        {activeChapter.quote && (
          <div className="bg-amber-50/70 border-b border-amber-200/70 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 shrink-0 mt-0.5">
                <Quote className="w-5 h-5" />
              </div>
              <div className="flex-1 space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(readingMode !== 'en_only') && (
                    <div>
                      <p className="text-stone-800 font-medium text-base sm:text-lg leading-snug">
                        {activeChapter.quote.textZh}
                      </p>
                      <span className="block text-xs font-semibold text-amber-900 mt-1.5">
                        —— {activeChapter.quote.authorZh}
                      </span>
                    </div>
                  )}
                  {(readingMode !== 'zh_only') && (
                    <div className="border-t md:border-t-0 md:border-l md:pl-4 border-amber-200/80 pt-2 md:pt-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider">
                          Original Quote
                        </span>
                        <button
                          onClick={() => handlePlaySpeech(activeChapter.quote!.textEn, `quote-${activeChapter.id}`, 'en')}
                          className="text-amber-800 hover:text-amber-900 text-xs flex items-center gap-1 font-medium"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>{playingParagraphId === `quote-${activeChapter.id}` ? '停止' : '發音'}</span>
                        </button>
                      </div>
                      <p className="text-stone-700 italic text-sm sm:text-base leading-snug">
                        {activeChapter.quote.textEn}
                      </p>
                      <span className="block text-xs font-medium text-stone-600 mt-1.5">
                        — {activeChapter.quote.authorEn}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Paragraphs Reading Section */}
        <div className="p-6 sm:p-8 space-y-8">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
              正文雙語逐段對照 / Chapter Text & English Translation
            </h3>
            <span className="text-xs text-stone-400">
              共 {activeChapter.paragraphs.length} 個段落 &bull; 點擊喇叭即可朗讀英文
            </span>
          </div>

          <div className="space-y-6">
            {activeChapter.paragraphs.map((p, idx) => {
              const isPlaying = playingParagraphId === p.id;
              const isCopied = copiedId === p.id;

              return (
                <div 
                  key={p.id}
                  className="rounded-xl border border-stone-200/90 bg-stone-50/50 hover:bg-white hover:border-amber-300 transition duration-150 p-5 group"
                >
                  {/* Top Bar of Each Paragraph */}
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-3.5 pb-2 border-b border-stone-200/70">
                    <span className="font-mono font-semibold text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded">
                      Section {idx + 1}
                    </span>

                    <div className="flex items-center gap-2">
                      {/* Audio Button */}
                      <button
                        onClick={() => handlePlaySpeech(p.en, p.id, 'en')}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition ${
                          isPlaying 
                            ? 'bg-amber-500 text-stone-950 font-bold animate-pulse'
                            : 'bg-white border border-stone-200 text-stone-600 hover:text-amber-700 hover:border-amber-300'
                        }`}
                        title="收聽英文原文標準語音朗讀"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>{isPlaying ? '朗讀中...' : '英文朗讀'}</span>
                      </button>

                      {/* Copy Button */}
                      <button
                        onClick={() => handleCopy(p.zh, p.en, p.id)}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition ${
                          isCopied
                            ? 'bg-emerald-600 text-white'
                            : 'bg-white border border-stone-200 text-stone-600 hover:text-stone-900'
                        }`}
                        title="複製這段雙語對照內容"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{isCopied ? '已複製' : '複製文字'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Body Content Rendering based on readingMode */}
                  {readingMode === 'side_by_side' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Chinese Column */}
                      <div className="space-y-2">
                        <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          繁體中文 (Traditional Chinese)
                        </div>
                        <p className={`text-stone-800 ${getTextClass()}`}>
                          {p.zh}
                        </p>
                      </div>

                      {/* English Column */}
                      <div className="space-y-2 md:border-l md:border-stone-200/80 md:pl-6">
                        <div className="text-[11px] font-bold text-stone-600 uppercase tracking-wider flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                            English Original Translation
                          </div>
                        </div>
                        <p className={`text-stone-700 ${getTextClass()} font-normal`}>
                          {p.en}
                        </p>
                      </div>
                    </div>
                  )}

                  {readingMode === 'interlinear' && (
                    <div className="space-y-4">
                      {/* Chinese text first */}
                      <div className="bg-white p-4 rounded-lg border border-stone-200/80">
                        <span className="text-[10px] font-bold text-amber-800 uppercase block mb-1">
                          中文翻譯
                        </span>
                        <p className={`text-stone-800 ${getTextClass()}`}>
                          {p.zh}
                        </p>
                      </div>

                      {/* English text immediately below */}
                      <div className="bg-amber-50/40 p-4 rounded-lg border border-amber-200/60">
                        <span className="text-[10px] font-bold text-stone-500 uppercase block mb-1">
                          English Text
                        </span>
                        <p className={`text-stone-700 ${getTextClass()} italic`}>
                          {p.en}
                        </p>
                      </div>
                    </div>
                  )}

                  {readingMode === 'zh_only' && (
                    <div>
                      <p className={`text-stone-800 ${getTextClass()}`}>
                        {p.zh}
                      </p>
                    </div>
                  )}

                  {readingMode === 'en_only' && (
                    <div>
                      <p className={`text-stone-700 ${getTextClass()}`}>
                        {p.en}
                      </p>
                    </div>
                  )}

                  {/* Key Terms Tags */}
                  {p.keyTerms && p.keyTerms.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center gap-1.5 flex-wrap">
                      <span className="text-[11px] font-semibold text-stone-600 flex items-center gap-1 mr-1">
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        核心關鍵詞:
                      </span>
                      {p.keyTerms.map((term, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs px-2 py-0.5 rounded-md bg-stone-200/80 text-stone-700 font-medium"
                        >
                          {term}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Chapter Key Takeaways Banner */}
          <div className="mt-8 rounded-xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-300/80 p-5 sm:p-6">
            <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-amber-600" />
              本章歷史要點精華 / Chapter Key Takeaways
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeChapter.keyTakeaways.map((item, idx) => (
                <div key={idx} className="bg-white/80 rounded-lg p-3.5 border border-amber-200/70 shadow-2xs">
                  <p className="text-xs font-bold text-amber-900 mb-1">
                    ✓ {item.zh}
                  </p>
                  <p className="text-xs text-stone-600 italic">
                    {item.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
