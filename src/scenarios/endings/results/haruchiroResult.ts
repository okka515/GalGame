import { Scene, Condition } from "narraleaf-react";
import { yuujin, haruchiro } from "../../../characters";
import { gameFlags } from "../../../store/gameState";
import { tonapiResult } from "./tonapiResult";

export const haruchiroResult = new Scene("finale-haruchiro-result", { background: "#fef9c3" });

haruchiroResult.action([
  Condition.If(gameFlags.evaluate("haruchiro_graduation_power", (v) => (v || 0) >= 7), [
    haruchiro.say("マチアプ、ちゃんとプロフィール直しました。DroidKaigiの子とも話したけど、ただの知り合いでしたね。卒研も無事ビルド通りました！"),
    yuujin.say("はるちろが落ち着いた。学業も恋愛も両立できる大人になっていた。"),
  ]).ElseIf(gameFlags.evaluate("haruchiro_graduation_power", (v) => (v || 0) >= 4), [
    haruchiro.say("えっと、まあ……なんとか卒業できました。課題クリアです"),
    yuujin.say("はるちろは卒業した。恋愛はまだ迷走中だが、それもまたはるちろらしい。"),
  ]).Else([
    Condition.If(gameFlags.evaluate("haruchiro_triangle", (v) => v === true), [
      haruchiro.say("え……な、なんで2人とも来てるんですか？！デ、デッドロック……！"),
      yuujin.say("はるちろは修羅場の末、マチアプの子とDroidKaigiの子の両方にフラれた。"),
      yuujin.say("卒業はできたが、心は卒業できなかった。"),
    ]).Else([
      yuujin.say("はるちろは追いコンに来なかった。永遠にマチアプを見つめているらしい。"),
      yuujin.say("卒業できなかった。引きこもった。"),
    ]),
  ]),
  yuujin.say(""),
  haruchiroResult.jumpTo(tonapiResult),
]);
