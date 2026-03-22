import { Scene, Condition, Image } from "narraleaf-react";
import { yuujin, haruchiro } from "../../../characters";
import { gameFlags } from "../../../store/gameState";
import { tonapiResult } from "./tonapiResult";

const haruchiroBestImg = new Image({ src: "/characters/haruchiro/haruchiro_best_graduation.png" });
const haruchiroGradImg = new Image({ src: "/characters/haruchiro/haruchiro_graduation.png" });
const haruchiroTriangleImg = new Image({ src: "/characters/haruchiro/haruchiro_triangle_graduation.png" });
const haruchiroFailImg = new Image({ src: "/characters/haruchiro/haruchiro_failure.png" });

export const haruchiroResult = new Scene(
  "finale-haruchiro-result",
  { background: "/backgrounds/office.png" }
);

haruchiroResult.action([
  Condition.If(gameFlags.evaluate("haruchiro_graduation_power", (v) => (v || 0) >= 18), [
    haruchiroBestImg.show(),
    haruchiro.say("マチアプ、ちゃんとプロフィール直しました。DroidKaigiの子とも話したけど、ただの知り合いでしたね。卒研も無事ビルド通りました！"),
    yuujin.say("はるちろが落ち着いた。学業も恋愛も両立できる大人になっていた。"),
  ]).ElseIf(gameFlags.evaluate("haruchiro_graduation_power", (v) => (v || 0) >= 7), [
    haruchiroGradImg.show(),
    haruchiro.say("えっと、まあ……なんとか卒業できました。課題クリアです"),
    yuujin.say("はるちろは卒業した。恋愛はまだ迷走中だが、それもまたはるちろらしい。"),
  ]).Else([
    Condition.If(gameFlags.evaluate("haruchiro_triangle", (v) => v === true), [
      haruchiroTriangleImg.show(),
      haruchiro.say("え……な、なんで2人とも来てるんですか？！デ、デッドロック……！"),
      yuujin.say("はるちろは修羅場の末、マチアプの子とDroidKaigiの子の両方にフラれた。"),
      yuujin.say("卒業はできたが、心は卒業できなかった。"),
    ]).Else([
      haruchiroFailImg.show(),
      yuujin.say("はるちろは追いコンに来なかった。永遠にマチアプを見つめているらしい。"),
      yuujin.say("卒業できなかった。引きこもった。"),
    ]),
  ]),
  yuujin.say(""),
  haruchiroResult.jumpTo(tonapiResult),
]);
