import { Story } from "narraleaf-react";
import { gameFlags } from "../store/gameState";
import { openingScene } from "./opening";

// OP → プロローグ → 共通ルート → 個別ルート → エンディング
export const mainStory = new Story("main");
mainStory.registerPersistent(gameFlags);
mainStory.entry(openingScene);