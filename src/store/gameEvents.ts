// NarraLeaf シーンと React コンポーネントを繋ぐイベントバス
// Condition.If のラムダ内から呼び出して React 側の表示を制御する

type ChapterTitleHandler = (title: string) => void;

let chapterTitleHandler: ChapterTitleHandler | null = null;

export const gameEvents = {
  onChapterTitle(fn: ChapterTitleHandler) {
    chapterTitleHandler = fn;
  },
  triggerChapterTitle(title: string) {
    chapterTitleHandler?.(title);
  },
};
