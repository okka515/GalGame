import { Story } from "narraleaf-react";
import { prologueScene } from "./prologue";

// 全シーンはプロローグから jumpTo で連鎖しているため、
// entry にプロローグを設定するだけでストーリー全体が動く
export const mainStory = new Story("main");
mainStory.entry(prologueScene);
