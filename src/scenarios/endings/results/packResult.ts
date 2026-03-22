import { Scene, Condition, Image } from "narraleaf-react";
import { yuujin, pack } from "../../../characters";
import { gameFlags } from "../../../store/gameState";
import { massuResult } from "./massuResult";

const packBestImg = new Image({ src: "/characters/pack/pack_best_graduation.png" });
const packGradImg = new Image({ src: "/characters/pack/pack_graduation.png" });
const packFailImg = new Image({ src: "/characters/pack/pack_failure.png" });

export const packResult = new Scene("finale-pack-result", { background: "/backgrounds/office.png" });

packResult.action([
  Condition.If(gameFlags.evaluate("pack_graduation_power", (v) => (v || 0) >= 18), [
    packBestImg.show(),
    pack.say("起業の話、ちゃんと固まったぞ！フランスの彼女とも会えることになったし、エンジニアとして食っていける自信もついた。完璧な論理だ"),
    yuujin.say("ぱっくは起業と国際恋愛を両立させ、首席卒業を達成した。"),
  ]).ElseIf(gameFlags.evaluate("pack_graduation_power", (v) => (v || 0) >= 7), [
    packGradImg.show(),
    pack.say("まあ、なんとか論理的に卒業はできたな。起業はもうちょっと後で考えるか"),
    yuujin.say("ぱっくは普通に卒業した。フランスの件は保留。エンジニアとして就職した。"),
  ]).Else([
    packFailImg.show(),
    pack.say("（LINEより）「国際ホームレスになったぞ。面白いことになってきた」"),
    yuujin.say("ぱっくは海外から帰ってこなかった。Suica感覚で改札を突破した結果、破滅した。"),
  ]),
  yuujin.say(""),
  packResult.jumpTo(massuResult),
]);
