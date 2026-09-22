export interface BilingualText {
  zh: string;
  en: string;
}

export type ReadingMode = 'side_by_side' | 'interlinear' | 'zh_only' | 'en_only';
export type TextSize = 'sm' | 'base' | 'lg';

export interface HistoryParagraph {
  id: string;
  zh: string;
  en: string;
  keyTerms?: string[];
  culturalNote?: {
    zh: string;
    en: string;
  };
}

export interface HistoryChapter {
  id: string;
  number: number;
  titleZh: string;
  titleEn: string;
  period: string;
  summaryZh: string;
  summaryEn: string;
  paragraphs: HistoryParagraph[];
  quote?: {
    textZh: string;
    textEn: string;
    authorZh: string;
    authorEn: string;
  };
  keyTakeaways: {
    zh: string;
    en: string;
  }[];
}

export interface TimelineEvent {
  id: string;
  year: string;
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
  significanceZh: string;
  significanceEn: string;
  tag: 'origin' | 'media' | 'crew' | 'global' | 'culture';
}

export interface LockingMove {
  id: string;
  nameEn: string;
  nameZh: string;
  phonetic: string;
  category: 'foundation' | 'twirls_points' | 'footwork' | 'stunts_humor';
  originStoryZh: string;
  originStoryEn: string;
  techniqueZh: string;
  techniqueEn: string;
  inventorZh?: string;
  inventorEn?: string;
  keywords: string[];
}

export interface Pioneer {
  id: string;
  name: string;
  stageName: string;
  years: string;
  roleZh: string;
  roleEn: string;
  bioZh: string;
  bioEn: string;
  signatureMoves: string[];
  keyQuote?: {
    zh: string;
    en: string;
  };
}
