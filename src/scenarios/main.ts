import { Story, Scene } from "narraleaf-react";
import { aoi } from "../characters";

// メインシナリオのスケルトン
// 好感度の加算はシーン遷移のコールバックで行う（NarraLeaf の action は専用オブジェクトのみ受け付ける）
const openingScene = new Scene("opening", {
  background: "#1a1a2e",
});

openingScene.action([
  aoi.say("ねえ、ちょっと相談に乗ってほしいんだけど…"),
]);

export const mainStory = new Story("main");
mainStory.entry(openingScene);
