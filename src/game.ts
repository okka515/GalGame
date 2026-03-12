import { Game } from "narraleaf-react";
import { mainStory } from "./scenarios/main";

// NarraLeaf-React のゲームインスタンスを初期化
export const game = new Game({
  width: 1280,
  height: 720,
});

game.story(mainStory);
