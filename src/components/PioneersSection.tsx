import React, { useState } from 'react';
import { Pioneer, ReadingMode } from '../types';
import { 
  Users, 
  Volume2, 
  Quote, 
  Award, 
  Star, 
  Check, 
  Copy 
} from 'lucide-react';
import { playTextToSpeech, stopTextToSpeech } from '../utils/speech';

interface PioneersSectionProps {
  pioneers: Pioneer[];
  readingMode: ReadingMode;
}

export const PioneersSection: React.FC<PioneersSectionProps> = ({
  pioneers,
  readingMode
}) => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

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
      {/* Intro */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-1.5">
          <Users className="w-4 h-4" />
          <span>Founding Legends &bull; 傳奇靈魂人物</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
          The Lockers 舞團與創始先驅人物誌
        </h2>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl">
          了解建立這項文化的舞者們，他們如何將街頭的即興熱情化為全世界舞台上的經典傳奇，以及他們的名言與歷史貢獻。
        </p>
      </div>

      {/* Pioneers Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {pioneers.map((p) => {
          const isPlaying = playingId === p.id;
          const isCopied = copiedId === p.id;

          return (
            <div
              key={p.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:border-amber-400 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                {/* Header Banner */}
                <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white p-6 border-b border-stone-800">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold text-amber-400 block mb-1">
                        {p.years}
                      </span>
                      <h3 className="text-2xl font-black text-white">
                        {p.stageName}
                      </h3>
                      <p className="text-xs text-stone-400 mt-0.5">
                        本名: {p.name}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handlePlaySpeech(`${p.stageName}. ${p.roleEn}. ${p.bioEn}`, p.id)}
                        className={`p-2 rounded-lg transition ${
                          isPlaying
                            ? 'bg-amber-500 text-stone-950 font-bold'
                            : 'bg-stone-800 text-stone-300 hover:text-amber-300 hover:bg-stone-700'
                        }`}
                        title="收聽英文生平朗讀"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleCopy(`${p.stageName} - ${p.bioZh}`, `${p.stageName} - ${p.bioEn}`, p.id)}
                        className="p-2 rounded-lg bg-stone-800 text-stone-400 hover:text-stone-200 hover:bg-stone-700"
                        title="複製文字"
                      >
                        {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Roles */}
                  <div className="mt-3 pt-3 border-t border-stone-800 text-xs">
                    <span className="font-semibold text-amber-300 block">{p.roleZh}</span>
                    <span className="text-stone-400 italic">{p.roleEn}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  {/* Bio in ZH and EN */}
                  <div className="space-y-3">
                    {(readingMode !== 'en_only') && (
                      <div className="text-sm text-stone-800 leading-relaxed">
                        <strong className="text-xs text-amber-800 block mb-1">【生平歷史簡介】</strong>
                        <p>{p.bioZh}</p>
                      </div>
                    )}

                    {(readingMode !== 'zh_only') && (
                      <div className="text-sm text-stone-600 italic leading-relaxed pt-2 border-t border-stone-100">
                        <strong className="text-xs text-stone-500 not-italic block mb-1">【Historical Biography】</strong>
                        <p>{p.bioEn}</p>
                      </div>
                    )}
                  </div>

                  {/* Signature Moves */}
                  <div className="pt-2">
                    <span className="text-xs font-bold text-stone-700 block mb-1.5 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500" />
                      代表性標誌招式 / Signature Moves:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {p.signatureMoves.map((m, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200/70 text-amber-900 font-medium"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote Footer if present */}
              {p.keyQuote && (
                <div className="p-5 bg-stone-50 border-t border-stone-200 text-xs text-stone-700 flex items-start gap-3">
                  <Quote className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-medium text-stone-900">{p.keyQuote.zh}</p>
                    <p className="text-stone-500 italic">{p.keyQuote.en}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
