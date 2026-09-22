import React, { useState } from 'react';
import { 
  HISTORY_CHAPTERS, 
  TIMELINE_EVENTS, 
  LOCKING_MOVES, 
  PIONEERS 
} from './data/lockingHistoryData';
import { ReadingMode, TextSize } from './types';
import { Header } from './components/Header';
import { ChapterReader } from './components/ChapterReader';
import { TimelineSection } from './components/TimelineSection';
import { MovesGlossary } from './components/MovesGlossary';
import { PioneersSection } from './components/PioneersSection';
import { HistoryQuiz } from './components/HistoryQuiz';
import { ComputerScienceBonusModal } from './components/ComputerScienceBonusModal';
import { 
  ArrowUp, 
  Heart, 
  Sparkles, 
  BookOpen, 
  Headphones, 
  Globe2, 
  Languages 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('chapters');
  const [readingMode, setReadingMode] = useState<ReadingMode>('side_by_side');
  const [textSize, setTextSize] = useState<TextSize>('base');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isCsModalOpen, setIsCsModalOpen] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-100/70 text-stone-900 flex flex-col font-sans selection:bg-amber-200">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        readingMode={readingMode}
        setReadingMode={setReadingMode}
        textSize={textSize}
        setTextSize={setTextSize}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenCsBonus={() => setIsCsModalOpen(true)}
      />

      {/* Hero Highlight Sub-banner */}
      <div className="bg-white border-b border-stone-200/80 py-3 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-stone-600">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              💡 雙語閱讀提示
            </span>
            <span>
              已啟用<strong>{readingMode === 'side_by_side' ? '「左右並列對照」' : readingMode === 'interlinear' ? '「逐段交替對照」' : readingMode === 'zh_only' ? '「繁中專注閱讀」' : '「English Only」'}</strong>。點擊段落或招式右側喇叭可立即聆聽英文朗讀！
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0 text-stone-500">
            <span className="flex items-center gap-1">
              <Headphones className="w-3.5 h-3.5 text-amber-600" /> Web 語音發音輔助
            </span>
            <span className="flex items-center gap-1">
              <Globe2 className="w-3.5 h-3.5 text-amber-600" /> 中英詞庫原創典故
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {activeTab === 'chapters' && (
          <ChapterReader
            chapters={HISTORY_CHAPTERS}
            readingMode={readingMode}
            textSize={textSize}
            searchQuery={searchQuery}
          />
        )}

        {activeTab === 'timeline' && (
          <TimelineSection
            events={TIMELINE_EVENTS}
            readingMode={readingMode}
          />
        )}

        {activeTab === 'moves' && (
          <MovesGlossary
            moves={LOCKING_MOVES}
            readingMode={readingMode}
          />
        )}

        {activeTab === 'pioneers' && (
          <PioneersSection
            pioneers={PIONEERS}
            readingMode={readingMode}
          />
        )}

        {activeTab === 'quiz' && (
          <HistoryQuiz />
        )}
      </main>

      {/* Quick Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 p-3 rounded-xl bg-stone-900/90 text-amber-400 hover:bg-stone-900 hover:text-amber-300 shadow-lg border border-stone-700 transition duration-150 z-20 backdrop-blur-xs flex items-center justify-center group"
        title="回到頂部 / Back to Top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition duration-150" />
      </button>

      {/* Computer Science Bonus Modal */}
      <ComputerScienceBonusModal
        isOpen={isCsModalOpen}
        onClose={() => setIsCsModalOpen(false)}
      />

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 text-xs border-t border-stone-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-stone-200 font-semibold flex items-center justify-center md:justify-start gap-1.5">
              <span>🔒 Locking 街舞歷史與英文雙語對照館</span>
              <span className="text-[10px] text-amber-400 bg-stone-800 px-1.5 py-0.5 rounded">
                The History of Campbellocking
              </span>
            </p>
            <p className="text-stone-500">
              致敬 Don Campbell 與 The Lockers 創始先驅 &bull; 傳遞 Funk 音樂中永恆的歡樂、微笑與自嘲精神
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCsModalOpen(true)}
              className="text-stone-400 hover:text-cyan-400 transition underline underline-offset-4"
            >
              切換查看計算機科學 Locking (資料庫鎖)
            </button>
            <span className="text-stone-700">|</span>
            <button
              onClick={() => setActiveTab('quiz')}
              className="text-stone-400 hover:text-amber-400 transition underline underline-offset-4"
            >
              自我測驗
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
