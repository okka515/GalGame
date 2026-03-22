import { Scene, Condition, Image } from "narraleaf-react";
import { yuujin, massu } from "../../../characters";
import { gameFlags } from "../../../store/gameState";
import { saasanResult } from "./saasanResult";

const massuBestImg = new Image({ src: "/characters/massu/massu_best_graduation.png" });
const massuGradImg = new Image({ src: "/characters/massu/massu_graduation.png" });
const massuFailImg = new Image({ src: "/characters/massu/massu_failure.png" });

export const massuResult = new Scene(
  "finale-massu-result",
  { background: "/backgrounds/office.png" }
);

massuResult.action([
  Condition.If(gameFlags.evaluate("massu_graduation_power", (v) => (v || 0) >= 7), [
    massuBestImg.show(),
    massu.say("卒研、なんとか間に合ったー！東京の広告会社から内定ももらえたし、卒サプの写真は全部私が撮るね！あはは！"),
    yuujin.say("まっすーは東京就職。写真がSNSでバズり、キラキラ業界エンドへ。"),
  ]).ElseIf(gameFlags.evaluate("massu_graduation_power", (v) => (v || 0) >= 4), [
    massuGradImg.show(),
    massu.say("ギリギリだったけど、卒業できたよー！よかったぁ！"),
    yuujin.say("まっすーはギリギリ卒業できた。カメラは趣味として続けている。"),
  ]).Else([
    massuFailImg.show(),
    yuujin.say("まっすーは追いコンに来なかった。発表会当日に寝坊して遅刻2時間。"),
    yuujin.say("卒業できなかった。カメラは壊れた。"),
  ]),
  yuujin.say(""),
  massuResult.jumpTo(saasanResult),
]);
