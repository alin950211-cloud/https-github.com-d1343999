import React, { useState } from 'react';
import { LockingMove, ReadingMode } from '../types';
import { 
  Sparkles, 
  Volume2, 
  Search, 
  Filter, 
  UserCheck, 
  Check, 
  Copy,
  Activity,
  Layers
} from 'lucide-react';
import { playTextToSpeech, stopTextToSpeech } from '../utils/speech';

interface MovesGlossaryProps {
  moves: LockingMove[];
  readingMode: ReadingMode;
}

export const MovesGlossary: React.FC<MovesGlossaryProps> = ({
  moves,
  readingMode
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', labelZh: '全部招式', labelEn: 'All Moves' },
    { id: 'foundation', labelZh: '基礎停頓律動', labelEn: 'Foundation & Pacing' },
    { id: 'twirls_points', labelZh: '旋手與指向', labelEn: 'Twirls & Points' },
    { id: 'footwork', labelZh: '經典腳步步法', labelEn: 'Footwork & Grooves' },
    { id: 'stunts_humor', labelZh: '特技與舞台喜劇', labelEn: 'Stunts & Humor' },
  ];

  const filteredMoves = moves.filter(m => {
    const matchCategory = selectedCategory === 'all' || m.category === selectedCategory;
    const matchSearch = !searchFilter || (
      m.nameEn.toLowerCase().includes(searchFilter.toLowerCase()) ||
      m.nameZh.toLowerCase().includes(searchFilter.toLowerCase()) ||
      m.originStoryZh.toLowerCase().includes(searchFilter.toLowerCase()) ||
      m.originStoryEn.toLowerCase().includes(searchFilter.toLowerCase()) ||
      (m.inventorEn && m.inventorEn.toLowerCase().includes(searchFilter.toLowerCase())) ||
      m.keywords.some(k => k.toLowerCase().includes(searchFilter.toLowerCase()))
    );
    return matchCategory && matchSearch;
  });

  const handlePlaySpeech = (text: string, id: string) => {
    if (playingId === id) {
      stopTextToSpeech();
      setPlayingId(null);
    } else {
      setPlayingId(id);
      playTextToSpeech(text, 'en', () => {
        setPlayingId(null);
      });
    }
  };

  const handleCopy = (zh: string, en: string, id: string) => {
    navigator.clipboard.writeText(`【${zh}】\nEnglish: ${en}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-1.5">
          <Sparkles className="w-4 h-4" />
          <span>Moves & Terminology Dictionary &bull; 經典動作雙語辭典</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
          經典 Locking 核心招式與術語由來
        </h2>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl">
          每一個招式都有其歷史創作者、由來典故與英文名稱。點擊發音按鈕可聆聽標準英文發音，學習世界共通的街舞詞彙。
        </p>

        {/* Filter & Search Bar */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap border transition ${
                  selectedCategory === c.id
                    ? 'bg-amber-500 text-stone-950 font-bold border-amber-500 shadow-xs'
                    : 'bg-white text-stone-600 border-stone-200 hover:border-amber-300'
                }`}
              >
                {c.labelZh}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="搜尋招式、發明人或故事..."
              className="w-full bg-white border border-stone-200 rounded-lg pl-9 pr-3 py-1.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
            />
          </div>
        </div>
      </div>

      {/* Moves Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredMoves.map((move) => {
          const isPlaying = playingId === move.id;
          const isCopied = copiedId === move.id;

          return (
            <div
              key={move.id}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs hover:border-amber-400 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                {/* Title & Phonetic */}
                <div className="flex items-start justify-between gap-3 pb-3 mb-4 border-b border-stone-100">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-extrabold text-stone-900">
                        {move.nameEn}
                      </h3>
                      <button
                        onClick={() => handlePlaySpeech(`${move.nameEn}. ${move.techniqueEn}`, move.id)}
                        className={`p-1.5 rounded-full transition ${
                          isPlaying
                            ? 'bg-amber-500 text-stone-950 ring-2 ring-amber-300 animate-pulse'
                            : 'bg-stone-100 text-stone-600 hover:text-amber-700 hover:bg-amber-100'
                        }`}
                        title="收聽英文招式發音"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <span className="font-mono text-xs text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                        {move.phonetic}
                      </span>
                    </div>

                    <div className="text-base font-bold text-amber-700 mt-1">
                      {move.nameZh}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleCopy(`${move.nameZh} (${move.nameEn})`, move.originStoryEn, move.id)}
                      className="p-1.5 rounded text-stone-400 hover:text-stone-700 hover:bg-stone-100"
                      title="複製文字"
                    >
                      {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Creator info */}
                {move.inventorEn && (
                  <div className="mb-4 inline-flex items-center gap-1.5 text-xs text-stone-600 bg-stone-100/80 px-2.5 py-1 rounded-md">
                    <UserCheck className="w-3.5 h-3.5 text-amber-600" />
                    <span>發明者 / Pioneer: </span>
                    <strong className="text-stone-900 font-semibold">{move.inventorZh} ({move.inventorEn})</strong>
                  </div>
                )}

                {/* Origin Story */}
                <div className="space-y-3 mb-4 text-xs sm:text-sm">
                  <div className="bg-amber-50/60 p-3.5 rounded-xl border border-amber-200/60">
                    <span className="text-[11px] font-bold text-amber-900 block mb-1">
                      【招式誕生由來故事 / Origin Story】
                    </span>
                    {(readingMode !== 'en_only') && (
                      <p className="text-stone-800 leading-relaxed mb-2">
                        {move.originStoryZh}
                      </p>
                    )}
                    {(readingMode !== 'zh_only') && (
                      <p className="text-stone-600 italic leading-relaxed">
                        {move.originStoryEn}
                      </p>
                    )}
                  </div>

                  {/* Technique Mechanics */}
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200">
                    <span className="text-[11px] font-bold text-stone-700 block mb-1">
                      【動作要領與技巧 / Technique Mechanics】
                    </span>
                    {(readingMode !== 'en_only') && (
                      <p className="text-stone-800 leading-relaxed mb-1.5">
                        {move.techniqueZh}
                      </p>
                    )}
                    {(readingMode !== 'zh_only') && (
                      <p className="text-stone-600 italic leading-relaxed">
                        {move.techniqueEn}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Keywords Tagging */}
              <div className="pt-3 border-t border-stone-100 flex items-center gap-1.5 flex-wrap">
                {move.keywords.map((kw, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-medium"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
