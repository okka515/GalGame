import { Scene, Condition, Image } from "narraleaf-react";
import { yuujin, saasan } from "../../../characters";
import { gameFlags } from "../../../store/gameState";
import { haruchiroResult } from "./haruchiroResult";

const saasanBestImg = new Image({ src: "/characters/saasan/saasan_best_graduation.png" });
const saasanFailImg = new Image({ src: "/characters/saasan/saasan_failure.png" });

export const saasanResult = new Scene("finale-saasan-result", { background: "/backgrounds/office.png" });

saasanResult.action([
  Condition.If(gameFlags.evaluate("saasan_graduation_power", (v) => (v || 0) >= 16), [
    saasanBestImg.show(),
    saasan.say("車検通った。会社の登記も終わった。卒研の発表、一番よかったって言われたわ。まあ、俺の人生に失敗はなかったな"),
    yuujin.say("さーさんは当然のように首席卒業。会社は翌年に軌道に乗り始めた。"),
  ]).Else([
    saasanFailImg.show(),
    saasan.say("（LINEより）「魚うまいぞ。食いに来い」"),
    yuujin.say("さーさんは海陽町に帰って漁師になった。追いコンには来なかった。"),
  ]),
  yuujin.say(""),
  saasanResult.jumpTo(haruchiroResult),
]);
