import { Scene } from "narraleaf-react";
import { yuujin } from "../../characters";
import { packResult } from "./results/packResult";
import { finaleBgm } from "../../store/gameBgm";

// ===== 統合エンディング =====
// 全ルートからここにジャンプし、各キャラの graduation_power に基づいて結末を分岐表示する
//
// フロー:
// finaleScene → packResult → massuResult → saasanResult → haruchiroResult → tonapiResult → epilogue

// ===== フィナーレ本体 =====
export const finaleScene = new Scene("finale", {
  background: "/backgrounds/office.png",
});

finaleScene.action([
  finaleBgm.play(),
  yuujin.say("追いコン当日——"),
  yuujin.say("みんながそれぞれの道を歩んだ結果が、ここに集まっている。"),
  yuujin.say(""),
  yuujin.say("——みんなの今——"),
  finaleScene.jumpTo(packResult),
]);
