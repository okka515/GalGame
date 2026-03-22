import { Scene, Condition, Image } from "narraleaf-react";
import { yuujin, tonapi } from "../../../characters";
import { gameFlags } from "../../../store/gameState";
import { epilogue } from "./epilogue";

export const tonapiResult = new Scene("finale-tonapi-result", { background: "/backgrounds/office.png" });

const tonapiBestImg = new Image({ src: "/characters/tonappi/tonappi_best_graduation.png" });
const tonapiGradImg = new Image({ src: "/characters/tonappi/tonappi_graduation.png" });
const tonapiFailureImg = new Image({ src: "/characters/tonappi/tonappi_failure.png" });

tonapiResult.action([
  Condition.If(gameFlags.evaluate("tonapi_graduation_power", (v) => (v || 0) >= 7), [
    tonapiBestImg.show(),
    tonapi.say("卒研の発表、無事終わりました！化学系メーカーからも内定もらえましたし、バレーのチームも優勝しましたよ！フフ"),
    yuujin.say("となっぴーが化学系メーカーに就職した。数十年後、ノーベル賞候補の噂が流れる。"),
  ]).ElseIf(gameFlags.evaluate("tonapi_graduation_power", (v) => (v || 0) >= 4), [
    tonapiGradImg.show(),
    tonapi.say("卒業できました。カビも今のところ大丈夫です。ふふ"),
    yuujin.say("となっぴーは堅実に卒業した。カビの行方は不明。"),
  ]).Else([
    tonapiFailureImg.show(),
    yuujin.say("となっぴーは追いコンに来なかった。研究倫理委員会から呼ばれた。"),
    yuujin.say("化学界から追放された。河原で石を積んでいる写真がたまにInstagramに上がる。"),
  ]),
  yuujin.say(""),
  tonapiResult.jumpTo(epilogue),
]);
