import { Scene, Condition, Image } from "narraleaf-react";
import { yuujin, massu } from "../../../characters";
import { gameFlags } from "../../../store/gameState";
import { saasanResult } from "./saasanResult";
import { bestGraduationBgm, finaleBgm, massuBadendBgm } from "../../../store/gameBgm";

const massuBestImg = new Image({ src: "/characters/massu/massu_best_graduation.png", zoom: 0.7 });
const massuGradImg = new Image({ src: "/characters/massu/massu_graduation.png", zoom: 0.7 });
const massuFailImg = new Image({ src: "/characters/massu/massu_failure.png", zoom: 0.7 });

export const massuResult = new Scene(
  "finale-massu-result",
  { background: "#000000" }
);

massuResult.action([
  Condition.If(gameFlags.evaluate("massu_graduation_power", (v) => (v || 0) >= 18), [
    finaleBgm.pause(),
    bestGraduationBgm.play(),
    massuBestImg.show(),
    massu.say("卒研、なんとか間に合ったー！東京の広告会社から内定ももらえたし、卒サプの写真は全部俺が撮るね！あはは！"),
    yuujin.say("まっすーは東京就職。遠距離になった彼女とも関係は良好らしい。写真がSNSでバズり、キラキラ業界エンドへ。"),
    bestGraduationBgm.stop(),
    finaleBgm.resume(),
  ]).ElseIf(gameFlags.evaluate("massu_graduation_power", (v) => (v || 0) >= 7), [
    massuGradImg.show(),
    massu.say("ギリギリだったけど、卒業できたよー！よかったぁ！"),
    yuujin.say("まっすーはギリギリ卒業できた。カメラは趣味として続けている。"),
  ]).Else([
    finaleBgm.pause(),
    massuBadendBgm.play(),
    massuFailImg.show(),
    yuujin.say("まっすーは追いコンに来なかった。発表会当日に寝坊して遅刻2時間。"),
    yuujin.say("卒業できなかった。カメラは壊れた。"),
    massuBadendBgm.stop(),
    finaleBgm.resume(),
  ]),
  massuResult.jumpTo(saasanResult),
]);
