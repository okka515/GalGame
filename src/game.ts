import { Game } from "narraleaf-react";

// NarraLeaf-React のゲームインスタンスを初期化
export const game = new Game({
  width: 1280,
  height: 720,
});

// Enter/Returnキーでも会話を進められるようにキーバインドを追加
game.keyMap.addKeyBinding("nextAction", "Enter");
