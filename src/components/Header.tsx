import React from 'react';
import { 
  BookOpen, 
  Clock, 
  Sparkles, 
  Users, 
  HelpCircle, 
  Cpu, 
  Volume2, 
  Search, 
  Layers, 
  Type,
  X
} from 'lucide-react';
import { ReadingMode, TextSize } from '../types';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  readingMode: ReadingMode;
  setReadingMode: (mode: ReadingMode) => void;
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenCsBonus: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  readingMode,
  setReadingMode,
  textSize,
  setTextSize,
  searchQuery,
  setSearchQuery,
  onOpenCsBonus
}) => {
  const tabs = [
    { id: 'chapters', labelZh: '歷史專題篇章', labelEn: 'History Chapters', icon: BookOpen },
    { id: 'timeline', labelZh: '編年發展紀事', labelEn: 'Chronological Timeline', icon: Clock },
    { id: 'moves', labelZh: '經典招式術語辭典', labelEn: 'Moves & Glossary', icon: Sparkles },
    { id: 'pioneers', labelZh: '傳奇先驅人物', labelEn: 'Iconic Pioneers', icon: Users },
    { id: 'quiz', labelZh: '雙語歷史小測驗', labelEn: 'Knowledge Quiz', icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-30 bg-stone-900 text-stone-100 shadow-md border-b border-stone-800">
      {/* Top Bar with Branding & Quick Tools */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          {/* Logo & Subtitle */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-stone-950 font-black flex items-center justify-center text-xl shadow-inner tracking-tighter">
              🔒
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                  Locking 鎖舞歷史與英文雙語對照館
                </h1>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-medium">
                  Bilingual English-Chinese
                </span>
              </div>
              <p className="text-xs text-stone-400">
                The History of Campbellocking &bull; 街舞起源、經典招式、傳奇舞團與英文對照
              </p>
            </div>
          </div>

          {/* Search and Auxiliary Controls */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜尋歷史、招式、先驅... / Search"
                className="w-full bg-stone-800/80 border border-stone-700 rounded-lg pl-9 pr-8 py-1.5 text-xs sm:text-sm text-stone-200 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-200"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Reading Mode Switcher */}
            <div className="flex items-center bg-stone-800 rounded-lg p-0.5 border border-stone-700 text-xs">
              <button
                onClick={() => setReadingMode('side_by_side')}
                className={`px-2.5 py-1 rounded transition font-medium ${
                  readingMode === 'side_by_side'
                    ? 'bg-amber-500 text-stone-950 shadow-sm'
                    : 'text-stone-300 hover:text-white'
                }`}
                title="雙欄並列對照 (左右排版)"
              >
                左右對照
              </button>
              <button
                onClick={() => setReadingMode('interlinear')}
                className={`px-2.5 py-1 rounded transition font-medium ${
                  readingMode === 'interlinear'
                    ? 'bg-amber-500 text-stone-950 shadow-sm'
                    : 'text-stone-300 hover:text-white'
                }`}
                title="逐段穿插對照"
              >
                逐段對照
              </button>
              <button
                onClick={() => setReadingMode('zh_only')}
                className={`px-2 py-1 rounded transition ${
                  readingMode === 'zh_only'
                    ? 'bg-amber-500 text-stone-950 shadow-sm'
                    : 'text-stone-300 hover:text-white'
                }`}
                title="只看繁中"
              >
                中文
              </button>
              <button
                onClick={() => setReadingMode('en_only')}
                className={`px-2 py-1 rounded transition ${
                  readingMode === 'en_only'
                    ? 'bg-amber-500 text-stone-950 shadow-sm'
                    : 'text-stone-300 hover:text-white'
                }`}
                title="只看英文"
              >
                English
              </button>
            </div>

            {/* Text Size Switcher */}
            <div className="flex items-center bg-stone-800 rounded-lg p-0.5 border border-stone-700 text-xs">
              <span className="px-1.5 text-stone-400 text-[10px]">字級</span>
              {(['sm', 'base', 'lg'] as TextSize[]).map((sz) => (
                <button
                  key={sz}
                  onClick={() => setTextSize(sz)}
                  className={`px-1.5 py-1 rounded ${
                    textSize === sz
                      ? 'bg-stone-700 text-amber-300 font-bold'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {sz === 'sm' ? '小' : sz === 'base' ? '中' : '大'}
                </button>
              ))}
            </div>

            {/* Computer Science Bonus Button */}
            <button
              onClick={onOpenCsBonus}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-amber-300 rounded-lg border border-stone-700 transition"
              title="查看計算機科學/資料庫鎖機制 (Database Locking) 歷史與英文對照"
            >
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">電腦科技鎖</span>
              <span className="sm:hidden">CS鎖</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex space-x-1 sm:space-x-2 mt-3 overflow-x-auto pb-1 text-xs sm:text-sm no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition font-medium ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 font-bold shadow'
                    : 'text-stone-300 hover:bg-stone-800 hover:text-stone-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.labelZh}</span>
                <span className="opacity-70 text-[11px] font-normal hidden lg:inline">
                  ({tab.labelEn})
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
