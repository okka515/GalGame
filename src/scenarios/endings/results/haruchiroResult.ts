import { Scene, Condition, Image } from "narraleaf-react";
import { yuujin, haruchiro } from "../../../characters";
import { gameFlags } from "../../../store/gameState";
import { tonapiResult } from "./tonapiResult";
import { bestGraduationBgm, finaleBgm, haruchiroBadendBgm } from "../../../store/gameBgm";

const haruchiroBestImg = new Image({ src: "/characters/haruchiro/haruchiro_best_graduation.png", zoom: 0.7 });
const haruchiroGradImg = new Image({ src: "/characters/haruchiro/haruchiro_graduation.png", zoom: 0.7 });
const haruchiroTriangleImg = new Image({ src: "/characters/haruchiro/haruchiro_triangle_graduation.png", zoom: 0.7 });
const haruchiroFailImg = new Image({ src: "/characters/haruchiro/haruchiro_failure.png", zoom: 0.7 });

export const haruchiroResult = new Scene(
  "finale-haruchiro-result",
  { background: "#000000" }
);

haruchiroResult.action([
  Condition.If(gameFlags.evaluate("haruchiro_graduation_power", (v) => (v || 0) >= 18), [
    finaleBgm.pause(),
    bestGraduationBgm.play(),
    haruchiroBestImg.show(),
    haruchiro.say("マチアプ、ちゃんとプロフィール直しました。DroidKaigiの子とも話したけど、ただの知り合いでしたね。卒研も無事ビルド通りました！"),
    yuujin.say("はるちろが落ち着いた。学業も恋愛も両立できる大人になっていた。"),
    bestGraduationBgm.stop(),
    finaleBgm.resume(),
  ]).ElseIf(gameFlags.evaluate("haruchiro_graduation_power", (v) => (v || 0) >= 7), [
    haruchiroGradImg.show(),
    haruchiro.say("えっと、まあ……なんとか卒業できました。課題クリアです"),
    yuujin.say("はるちろは卒業した。恋愛はまだ迷走中だが、それもまたはるちろらしい。"),
  ]).Else([
    finaleBgm.pause(),
    haruchiroBadendBgm.play(),
    Condition.If(gameFlags.evaluate("haruchiro_triangle", (v) => v === true || true), [
      haruchiroTriangleImg.show(),
      haruchiro.say("え……な、なんで2人とも来てるんですか？！デ、デッドロック……！"),
      yuujin.say("はるちろは修羅場の末、マチアプの子とDroidKaigiの子の両方にフラれた。"),
      yuujin.say("卒業はできたが、心は卒業できなかった。"),
    ]).Else([
      haruchiroFailImg.show(),
      yuujin.say("はるちろは追いコンに来なかった。永遠にマチアプを見つめているらしい。"),
      yuujin.say("卒業できなかった。引きこもった。"),
    ]),
    haruchiroBadendBgm.stop(),
    finaleBgm.resume(),
  ]),
  haruchiroResult.jumpTo(tonapiResult),
]);
