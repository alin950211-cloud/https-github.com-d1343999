/**
 * Web Speech API helper for reading out English and Chinese texts
 */
let currentUtterance: SpeechSynthesisUtterance | null = null;

export function playTextToSpeech(
  text: string,
  lang: 'en' | 'zh' = 'en',
  onEnd?: () => void
): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported on this browser.');
    return false;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang === 'en' ? 'en-US' : 'zh-TW';
  utterance.rate = 0.95; // Slightly measured for clear learning & pronunciation
  utterance.pitch = 1.0;

  utterance.onend = () => {
    currentUtterance = null;
    if (onEnd) onEnd();
  };

  utterance.onerror = (e) => {
    console.warn('Speech error', e);
    currentUtterance = null;
    if (onEnd) onEnd();
  };

  currentUtterance = utterance;
  window.speechSynthesis.speak(utterance);
  return true;
}

export function stopTextToSpeech(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    currentUtterance = null;
  }
}
