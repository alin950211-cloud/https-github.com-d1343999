import React, { useState } from 'react';
import { CS_LOCKING_BONUS } from '../data/lockingHistoryData';
import { X, Cpu, Volume2, Database, ShieldCheck, GitBranch } from 'lucide-react';
import { playTextToSpeech, stopTextToSpeech } from '../utils/speech';

interface ComputerScienceBonusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComputerScienceBonusModal: React.FC<ComputerScienceBonusModalProps> = ({
  isOpen,
  onClose
}) => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handlePlay = (text: string, id: string) => {
    if (playingId === id) {
      stopTextToSpeech();
      setPlayingId(null);
    } else {
      setPlayingId(id);
      playTextToSpeech(text, 'en', () => setPlayingId(null));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-2xl border border-stone-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-stone-900 text-white p-5 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold">
                {CS_LOCKING_BONUS.titleZh}
              </h3>
              <p className="text-xs text-stone-400">
                {CS_LOCKING_BONUS.titleEn}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          <div className="bg-cyan-50/70 border border-cyan-200 rounded-xl p-4 text-xs sm:text-sm text-stone-800 leading-relaxed">
            <p className="font-medium text-stone-900 mb-1">{CS_LOCKING_BONUS.introZh}</p>
            <p className="text-stone-600 italic">{CS_LOCKING_BONUS.introEn}</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <Database className="w-4 h-4 text-cyan-600" />
              關鍵演進里程碑與名詞對照 (Key Milestones & Terminology)
            </h4>

            {CS_LOCKING_BONUS.milestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-stone-50 rounded-xl border border-stone-200 p-4 space-y-2 hover:border-cyan-300 transition"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-black text-cyan-700 bg-cyan-100 px-2 py-0.5 rounded text-xs">
                      {m.year}
                    </span>
                    <span className="font-bold text-stone-900 text-sm">
                      {m.termZh}
                    </span>
                  </div>
                  <button
                    onClick={() => handlePlay(`${m.termEn}. ${m.descEn}`, `cs-${idx}`)}
                    className="flex items-center gap-1 text-xs text-stone-600 hover:text-cyan-700 p-1 rounded hover:bg-stone-100"
                    title="朗讀英文"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{playingId === `cs-${idx}` ? '朗讀中' : '發音'}</span>
                  </button>
                </div>

                <div className="font-semibold text-xs text-stone-700">
                  Term: <span className="italic font-mono text-cyan-800">{m.termEn}</span>
                </div>

                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                  {m.descZh}
                </p>
                <p className="text-xs text-stone-600 italic leading-relaxed">
                  {m.descEn}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-stone-700">
            <span className="font-bold text-amber-900 block mb-1">💡 詞彙對比趣味小結：</span>
            <span>
              在街舞中，「Lock」是舞者隨著放克音樂驟然收縮肌肉的「歡樂停頓」；在資訊科學中，「Lock」是保證資料並行寫入安全時的「互斥鎖定」。兩者都在各自領域譜寫了半個多世紀的演進傳奇！
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition"
          >
            關閉 / Close
          </button>
        </div>
      </div>
    </div>
  );
};
