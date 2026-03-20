import { Story } from "narraleaf-react";
import { openingScene } from "./opening";

// OP → プロローグ → 共通ルート → 個別ルート → エンディング
export const mainStory = new Story("main");
mainStory.entry(openingScene);
