// NarraLeaf シーンと React コンポーネントを繋ぐイベントバス
// Condition.If のラムダ内から呼び出して React 側の表示を制御する

type ChapterTitleHandler = (title: string) => void;

export type EndingData = {
  pack: number;
  massu: number;
  saasan: number;
  haruchiro: number;
  tonapi: number;
  haruchiro_triangle: boolean;
};

type EndingModalHandler = (data: EndingData) => void;

let chapterTitleHandler: ChapterTitleHandler | null = null;
let endingModalHandler: EndingModalHandler | null = null;

export const gameEvents = {
  onChapterTitle(fn: ChapterTitleHandler) {
    chapterTitleHandler = fn;
  },
  triggerChapterTitle(title: string) {
    chapterTitleHandler?.(title);
  },
  onEndingModal(fn: EndingModalHandler) {
    endingModalHandler = fn;
  },
  triggerEndingModal(data: EndingData) {
    endingModalHandler?.(data);
  },
};
