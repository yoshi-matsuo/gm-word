"use client";

import { useState, useEffect, useCallback } from "react";
import { vocabulary, Word, Level, levelLabels, levelDescriptions } from "@/data/vocabulary";

const STORAGE_KEY = "gm-word-shown-words";
const LEVEL_KEY = "gm-word-level";
const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;

interface ShownWord {
  id: number;
  shownAt: number;
}

export default function Home() {
  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [noWordsAvailable, setNoWordsAvailable] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<Level>("middle");
  const [showSettings, setShowSettings] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // LocalStorageからレベルを取得
  useEffect(() => {
    const storedLevel = localStorage.getItem(LEVEL_KEY) as Level | null;
    if (storedLevel && ["low", "middle", "high"].includes(storedLevel)) {
      setSelectedLevel(storedLevel);
    }
    setIsInitialized(true);
  }, []);

  // LocalStorageから表示済み単語を取得
  const getShownWords = useCallback((): ShownWord[] => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  }, []);

  // 表示済み単語を保存
  const saveShownWord = useCallback((wordId: number) => {
    const shownWords = getShownWords();
    const now = Date.now();

    // 1週間以上前のデータを削除
    const filtered = shownWords.filter(
      (sw) => now - sw.shownAt < ONE_WEEK_MS
    );

    // 新しい単語を追加
    filtered.push({ id: wordId, shownAt: now });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  }, [getShownWords]);

  // 利用可能な単語を取得（レベルでフィルタ）
  const getAvailableWords = useCallback((): Word[] => {
    const shownWords = getShownWords();
    const now = Date.now();

    // 1週間以内に表示された単語のIDセット
    const recentlyShownIds = new Set(
      shownWords
        .filter((sw) => now - sw.shownAt < ONE_WEEK_MS)
        .map((sw) => sw.id)
    );

    // 選択されたレベルで、表示されていない単語をフィルタ
    return vocabulary.filter(
      (word) => word.level === selectedLevel && !recentlyShownIds.has(word.id)
    );
  }, [getShownWords, selectedLevel]);

  // 次の単語を選択
  const selectNextWord = useCallback(() => {
    const availableWords = getAvailableWords();

    if (availableWords.length === 0) {
      setNoWordsAvailable(true);
      setCurrentWord(null);
      return;
    }

    setNoWordsAvailable(false);
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    const selectedWord = availableWords[randomIndex];

    setCurrentWord(selectedWord);
    setShowAnswer(false);
    saveShownWord(selectedWord.id);
  }, [getAvailableWords, saveShownWord]);

  // 初回ロード時とレベル変更時に単語を選択
  useEffect(() => {
    if (isInitialized) {
      selectNextWord();
    }
  }, [isInitialized, selectedLevel, selectNextWord]);

  // レベル変更
  const handleLevelChange = (level: Level) => {
    setSelectedLevel(level);
    localStorage.setItem(LEVEL_KEY, level);
    setShowSettings(false);
  };

  // 発音機能
  const speakWord = () => {
    if (!currentWord) return;

    const utterance = new SpeechSynthesisUtterance(currentWord.word);
    utterance.lang = "en-US";
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  };

  // Answer ボタン
  const handleAnswer = () => {
    setShowAnswer(true);
  };

  // Next ボタン
  const handleNext = () => {
    selectNextWord();
  };

  // ローディング
  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col items-center justify-center p-8">
        <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // 設定画面
  if (showSettings) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col items-center justify-center p-8">
        <main className="w-full max-w-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800">GM Word</h1>
            <p className="text-slate-500 mt-1">レベル設定</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-slate-800 mb-6">学習レベルを選択</h2>

            <div className="space-y-4">
              {(["low", "middle", "high"] as Level[]).map((level) => (
                <button
                  key={level}
                  onClick={() => handleLevelChange(level)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    selectedLevel === level
                      ? "border-blue-500 bg-blue-50"
                      : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <div className="font-bold text-slate-800">{levelLabels[level]}</div>
                  <div className="text-sm text-slate-500 mt-1">{levelDescriptions[level]}</div>
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowSettings(false)}
              className="w-full mt-6 py-3 px-6 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-xl transition-all"
            >
              戻る
            </button>
          </div>
        </main>
      </div>
    );
  }

  // 単語がない場合
  if (noWordsAvailable) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col items-center justify-center p-8">
        <main className="w-full max-w-xl text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-6">GM Word</h1>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-slate-600 text-lg mb-4">
              {levelLabels[selectedLevel]}のすべての単語を学習済みです
            </p>
            <p className="text-slate-500 mb-6">
              1週間後に単語がリセットされます
            </p>
            <button
              onClick={() => setShowSettings(true)}
              className="py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-all"
            >
              レベルを変更
            </button>
          </div>
        </main>
      </div>
    );
  }

  // ローディング（単語取得中）
  if (!currentWord) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col items-center justify-center p-8">
        <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col items-center justify-center p-8">
      <main className="w-full max-w-xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-3xl font-bold text-slate-800">GM Word</h1>
            <button
              onClick={() => setShowSettings(true)}
              className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
              title="設定"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <p className="text-slate-500 mt-1">{levelLabels[selectedLevel]}</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {!showAnswer ? (
            /* 第1画面: 英単語表示 */
            <div className="text-center">
              <div className="py-12">
                <p className="text-5xl font-bold text-slate-800 tracking-wide">
                  {currentWord.word}
                </p>
              </div>

              <button
                onClick={handleAnswer}
                className="w-full py-4 px-8 bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Answer
              </button>
            </div>
          ) : (
            /* 第2画面: 詳細表示 */
            <div>
              {/* 単語と発音記号 */}
              <div className="text-center mb-6">
                <p className="text-4xl font-bold text-slate-800 mb-2">
                  {currentWord.word}
                </p>
                <p className="text-slate-500 text-lg">
                  {currentWord.phonetic}
                </p>
              </div>

              {/* 日本語訳 */}
              <div className="bg-slate-50 rounded-xl p-4 mb-6">
                <p className="text-slate-600 text-sm mb-1">意味</p>
                <p className="text-slate-800 text-xl font-medium">
                  {currentWord.meaning}
                </p>
              </div>

              {/* 例文 */}
              <div className="mb-6">
                <p className="text-slate-600 text-sm mb-3">例文</p>
                <ul className="space-y-3">
                  {currentWord.examples.map((example, index) => (
                    <li
                      key={index}
                      className="text-slate-700 text-base leading-relaxed pl-4 border-l-2 border-blue-300"
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ボタン */}
              <div className="flex gap-4">
                <button
                  onClick={speakWord}
                  className="flex-1 py-3 px-6 bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                  発音
                </button>
                <button
                  onClick={handleNext}
                  className="flex-1 py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-slate-400 text-sm">
          <p>{levelDescriptions[selectedLevel]}</p>
        </div>
      </main>
    </div>
  );
}
