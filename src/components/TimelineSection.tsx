import React, { useState } from 'react';
import { TimelineEvent, ReadingMode } from '../types';
import { 
  Clock, 
  Volume2, 
  Sparkles, 
  Tv, 
  Users, 
  Globe, 
  Lightbulb,
  Check,
  Copy
} from 'lucide-react';
import { playTextToSpeech, stopTextToSpeech } from '../utils/speech';

interface TimelineSectionProps {
  events: TimelineEvent[];
  readingMode: ReadingMode;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  events,
  readingMode
}) => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const tags = [
    { id: 'all', labelZh: '全部紀事', labelEn: 'All Events' },
    { id: 'origin', labelZh: '起源開端', labelEn: 'Origins', icon: Lightbulb },
    { id: 'media', labelZh: '電視媒介', labelEn: 'Television & Media', icon: Tv },
    { id: 'crew', labelZh: '舞團發展', labelEn: 'Crew & Attire', icon: Users },
    { id: 'global', labelZh: '全球傳播', labelEn: 'Global Legacy', icon: Globe },
  ];

  const filteredEvents = selectedTag === 'all' 
    ? events 
    : events.filter(e => e.tag === selectedTag);

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
    const text = `【${zh}】\nEnglish: ${en}`;
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'origin':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'media':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'crew':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'global':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      default:
        return 'bg-stone-100 text-stone-700 border-stone-300';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Intro Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-1.5">
          <Clock className="w-4 h-4" />
          <span>Chronological Evolution &bull; 編年歷史演進</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
          Locking 歷史重要編年大事件 (1969 - 至今)
        </h2>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl">
          從洛杉磯夜總會的偶然發明，到全國電視舞台與亞洲、歐洲的世界傳承。點擊年份可查看歷史雙語背景與英文發音。
        </p>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1">
          {tags.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTag(t.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap border transition ${
                selectedTag === t.id
                  ? 'bg-stone-900 text-amber-400 border-stone-900 shadow-sm'
                  : 'bg-white text-stone-600 border-stone-200 hover:border-amber-400 hover:bg-stone-50'
              }`}
            >
              {t.labelZh} <span className="opacity-75 text-[10px]">({t.labelEn})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Stream */}
      <div className="relative border-l-2 border-amber-300 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
        {filteredEvents.map((evt, idx) => {
          const isPlaying = playingId === evt.id;
          const isCopied = copiedId === evt.id;

          return (
            <div key={evt.id} className="relative group">
              {/* Year Marker Badge */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-500 text-stone-950 font-black flex items-center justify-center text-xs sm:text-sm shadow-md ring-4 ring-white">
                {idx + 1}
              </div>

              {/* Event Card */}
              <div className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-6 shadow-xs hover:border-amber-300 hover:shadow-sm transition">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 pb-3 border-b border-stone-100">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xl sm:text-2xl font-black font-mono text-amber-600">
                      {evt.year}
                    </span>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${getTagColor(evt.tag)}`}>
                      {evt.tag === 'origin' && '街頭起源 Origin'}
                      {evt.tag === 'media' && '電視媒體 Media'}
                      {evt.tag === 'crew' && '舞團創立 Crew'}
                      {evt.tag === 'global' && '全球風潮 Global'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handlePlaySpeech(`${evt.titleEn}. ${evt.descEn}`, evt.id)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs transition ${
                        isPlaying
                          ? 'bg-amber-500 text-stone-950 font-bold'
                          : 'bg-stone-100 hover:bg-amber-100 text-stone-700'
                      }`}
                      title="播放英文朗讀"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>{isPlaying ? '朗讀中' : '英文朗讀'}</span>
                    </button>

                    <button
                      onClick={() => handleCopy(evt.titleZh + ': ' + evt.descZh, evt.titleEn + ': ' + evt.descEn, evt.id)}
                      className="p-1 rounded text-stone-400 hover:text-stone-700 hover:bg-stone-100"
                      title="複製文字"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                    {evt.titleZh}
                  </h3>
                  <p className="text-sm font-medium text-amber-700 mt-0.5">
                    {evt.titleEn}
                  </p>
                </div>

                {/* Content description based on reading mode */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm leading-relaxed mb-4">
                  {(readingMode !== 'en_only') && (
                    <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/80">
                      <span className="text-[11px] font-bold text-amber-800 uppercase block mb-1">
                        歷史經過（繁體中文）
                      </span>
                      <p className="text-stone-800">{evt.descZh}</p>
                    </div>
                  )}

                  {(readingMode !== 'zh_only') && (
                    <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200/60">
                      <span className="text-[11px] font-bold text-stone-600 uppercase block mb-1">
                        Historical Account (English)
                      </span>
                      <p className="text-stone-700 italic">{evt.descEn}</p>
                    </div>
                  )}
                </div>

                {/* Historical Significance Pill */}
                <div className="bg-stone-100/80 rounded-lg p-3 text-xs flex items-start gap-2 text-stone-700">
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 mr-1">歷史意義 / Impact:</span>
                    <span>{evt.significanceZh}</span>
                    <span className="text-stone-600 block mt-0.5 italic">{evt.significanceEn}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
