import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award } from 'lucide-react';

interface QuizQuestion {
  id: number;
  questionZh: string;
  questionEn: string;
  options: {
    labelZh: string;
    labelEn: string;
    isCorrect: boolean;
  }[];
  explanationZh: string;
  explanationEn: string;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    questionZh: 'Locking（鎖舞）最初是由哪位先驅在1969年於洛杉磯意外發明的？',
    questionEn: 'Who accidentally invented Locking in Los Angeles in 1969?',
    options: [
      { labelZh: '唐·坎貝爾 (Don Campbell)', labelEn: 'Don Campbell', isCorrect: true },
      { labelZh: '麥可·傑克森 (Michael Jackson)', labelEn: 'Michael Jackson', isCorrect: false },
      { labelZh: '詹姆斯·布朗 (James Brown)', labelEn: 'James Brown', isCorrect: false },
      { labelZh: '托妮·巴西爾 (Toni Basil)', labelEn: 'Toni Basil', isCorrect: false },
    ],
    explanationZh: 'Don Campbell 在嘗試模仿當時流行的 Funky Chicken / Robot 舞步失敗而停頓時，意外創造了標誌性的「Lock」。',
    explanationEn: 'Don Campbell created the iconic "Lock" when he froze in mid-dance while failing to perform the Funky Chicken / Robot.'
  },
  {
    id: 2,
    questionZh: '將 Locking 推向全美家喻戶曉的傳奇電視音樂節目是？',
    questionEn: 'Which legendary television music show propelled Locking into nationwide fame?',
    options: [
      { labelZh: '靈魂列車 (Soul Train)', labelEn: 'Soul Train', isCorrect: true },
      { labelZh: '美國偶像 (American Idol)', labelEn: 'American Idol', isCorrect: false },
      { labelZh: '週六夜現場 (Saturday Night Live)', labelEn: 'Saturday Night Live', isCorrect: false },
      { labelZh: 'MTV 音樂錄影帶大獎', labelEn: 'MTV Video Music Awards', isCorrect: false },
    ],
    explanationZh: '1971年《Soul Train》移師洛杉磯後，Don Campbell 與早期 Lockers 成為固定表演嘉賓，其「Soul Train Line」將鎖舞傳遍全美。',
    explanationEn: 'When Soul Train moved to LA in 1971, Don Campbell and early Lockers became regulars, broadcasting the dance across America via the Soul Train Line.'
  },
  {
    id: 3,
    questionZh: '傳奇舞團 The Lockers 的標誌性服飾配件包括下列何者？',
    questionEn: 'Which of the following was part of the iconic signature attire of The Lockers?',
    options: [
      { labelZh: '彩色條紋長襪、吊帶褲與大號報童帽', labelEn: 'Striped knee-high socks, suspenders & apple boy caps', isCorrect: true },
      { labelZh: '黑色皮衣與墨鏡', labelEn: 'Black leather jackets and sunglasses', isCorrect: false },
      { labelZh: '白色西裝與禮帽', labelEn: 'White suits and top hats', isCorrect: false },
      { labelZh: '寬鬆迷彩軍裝', labelEn: 'Baggy camouflage army fatigues', isCorrect: false },
    ],
    explanationZh: 'The Lockers 確立了彩色直條紋長襪、吊帶褲、七分燈籠褲（knickers）與報童帽的友善喜劇造型。',
    explanationEn: 'The Lockers codified the comedic visual identity consisting of colorful striped knee socks, suspenders, knickers, and apple boy caps.'
  },
  {
    id: 4,
    questionZh: '哪一個經典動作的名稱與靈感來自著名美國卡通角色？',
    questionEn: 'Which classic Locking move is named and inspired by a famous American cartoon character?',
    options: [
      { labelZh: 'Scooby Doo (史酷比跳步)', labelEn: 'Scooby Doo', isCorrect: true },
      { labelZh: 'Leo Walk (里奧漫步)', labelEn: 'Leo Walk', isCorrect: false },
      { labelZh: 'The Pace (拍擊節奏步)', labelEn: 'The Pace', isCorrect: false },
      { labelZh: 'Skeeter Rabbit (跳躍換步)', labelEn: 'Skeeter Rabbit', isCorrect: false },
    ],
    explanationZh: 'Scooby Doo 模仿了卡通狗受驚時高抬膝奔跑的原地滑稽動作；而 Skeeter Rabbit 則是以舞者 James Higgins 的藝名命名。',
    explanationEn: 'Scooby Doo mimics the high-knee running panic of the cartoon character, whereas Skeeter Rabbit was named after dancer James Higgins.'
  },
  {
    id: 5,
    questionZh: 'Locking 舞蹈最核心的音樂與情感哲學是？',
    questionEn: 'What is the core musical and emotional philosophy of Locking?',
    options: [
      { labelZh: '放克音樂（Funk）強拍、眼神交流、歡樂與幽默自嘲', labelEn: 'Funk music downbeats, eye contact, joy & playful humor', isCorrect: true },
      { labelZh: '強調陰暗冷酷與強烈侵略性攻擊', labelEn: 'Aggression, grim darkness and hostility', isCorrect: false },
      { labelZh: '追求古典芭蕾的嚴格腳尖旋轉', labelEn: 'Classical ballet strict pirouettes', isCorrect: false },
      { labelZh: '單純炫耀身體速度，不需要看台下觀眾', labelEn: 'Pure physical speed without looking at the crowd', isCorrect: false },
    ],
    explanationZh: 'Don Campbell 一直強調 Locking 是「社交溝通」，需要微笑、眼神接觸、幽默自嘲與放克重拍共鳴。',
    explanationEn: 'Don Campbell always emphasized that Locking is a social conversation full of smiles, eye contact, self-deprecating wit, and Funk grooves.'
  }
];

export const HistoryQuiz: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleSelect = (questionId: number, optionIdx: number) => {
    if (showResults) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIdx
    }));
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach(q => {
      const selected = selectedAnswers[q.id];
      if (selected !== undefined && q.options[selected]?.isCorrect) {
        score++;
      }
    });
    return score;
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const score = calculateScore();
  const allAnswered = Object.keys(selectedAnswers).length === QUIZ_QUESTIONS.length;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
          <HelpCircle className="w-3.5 h-3.5" />
          Interactive Knowledge Check
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
          Locking 歷史與英文術語挑戰測驗
        </h2>
        <p className="text-stone-600 text-sm mt-1">
          測測看你對 Locking 的發明由來、經典招式、歷史人物與英文詞彙掌握了多少！
        </p>
      </div>

      {/* Quiz Card */}
      <div className="space-y-6">
        {QUIZ_QUESTIONS.map((q, qIdx) => {
          const selected = selectedAnswers[q.id];
          const isAnswered = selected !== undefined;

          return (
            <div
              key={q.id}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                  Q0{qIdx + 1}
                </span>
                {showResults && (
                  <div>
                    {q.options[selected]?.isCorrect ? (
                      <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> 正確 Correct
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-rose-600 flex items-center gap-1">
                        <XCircle className="w-4 h-4" /> 錯誤 Incorrect
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Question */}
              <div className="mb-4">
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  {q.questionZh}
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 italic mt-0.5">
                  {q.questionEn}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {q.options.map((opt, optIdx) => {
                  const isThisSelected = selected === optIdx;
                  let optionClass = 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-amber-50 hover:border-amber-300';

                  if (showResults) {
                    if (opt.isCorrect) {
                      optionClass = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold ring-1 ring-emerald-400';
                    } else if (isThisSelected && !opt.isCorrect) {
                      optionClass = 'bg-rose-50 border-rose-400 text-rose-950 ring-1 ring-rose-400';
                    } else {
                      optionClass = 'bg-stone-50 border-stone-200 text-stone-400 opacity-60';
                    }
                  } else if (isThisSelected) {
                    optionClass = 'bg-amber-100 border-amber-400 text-stone-950 font-bold ring-1 ring-amber-400';
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(q.id, optIdx)}
                      disabled={showResults}
                      className={`w-full text-left p-3.5 rounded-xl border transition flex items-center justify-between ${optionClass}`}
                    >
                      <div>
                        <span className="text-sm block">{opt.labelZh}</span>
                        <span className="text-xs text-stone-500 italic">{opt.labelEn}</span>
                      </div>
                      <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs shrink-0 ml-3">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation when submitted */}
              {showResults && (
                <div className="mt-4 pt-3 border-t border-stone-100 bg-amber-50/50 p-3.5 rounded-xl text-xs space-y-1">
                  <span className="font-bold text-amber-900 block">【題目解析 / Explanation】:</span>
                  <p className="text-stone-800">{q.explanationZh}</p>
                  <p className="text-stone-600 italic">{q.explanationEn}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        {!showResults ? (
          <button
            onClick={() => setShowResults(true)}
            disabled={!allAnswered}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition shadow-sm ${
              allAnswered
                ? 'bg-amber-500 hover:bg-amber-400 text-stone-950 cursor-pointer'
                : 'bg-stone-300 text-stone-500 cursor-not-allowed'
            }`}
          >
            {allAnswered ? '送出答案查看成果 / Submit Answers' : `請完成全部題目 (已完成 ${Object.keys(selectedAnswers).length}/${QUIZ_QUESTIONS.length})`}
          </button>
        ) : (
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-5 rounded-2xl border border-stone-200 shadow-sm w-full justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs text-stone-500 block">測驗成果 / Final Score:</span>
                <span className="text-xl font-black text-stone-900">
                  答對 {score} / {QUIZ_QUESTIONS.length} 題 ({Math.round((score / QUIZ_QUESTIONS.length) * 100)}分)
                </span>
                <span className="text-xs text-amber-700 block font-medium">
                  {score === 5 ? '太強了！你是不折不扣的 Locking 歷史通！' : '很棒的學習嘗試，隨時可以重測溫習！'}
                </span>
              </div>
            </div>

            <button
              onClick={resetQuiz}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 text-white hover:bg-stone-800 text-xs font-semibold transition"
            >
              <RotateCcw className="w-4 h-4" />
              <span>重新測驗 / Retake Quiz</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
