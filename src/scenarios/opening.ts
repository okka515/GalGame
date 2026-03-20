import { Scene } from "narraleaf-react";
import { yuujin, pack, massu, saasan, haruchiro, tonapi } from "../characters";
import { prologueScene } from "./prologue";

// OPムービー: 「今日から新しいクラス！」的なノリ
export const openingScene = new Scene("opening", {
  background: "#0a1628",
});

openingScene.action([
  yuujin.say("春。"),
  yuujin.say("桜が散り始めるころ、俺たちは「卒業」という言葉と向き合っていた。"),
  yuujin.say("思えば、出会いはいつだってあっけなかった。"),

  pack.say("今日から新しいクラス！なんか気合入るな！"),
  yuujin.say("ぱっくはいつも全力だった。"),

  massu.say("よろしくね！写真撮っていい？"),
  yuujin.say("まっすーはカメラを持ってきていた。初日から。"),

  saasan.say("……海陽町から来た"),
  yuujin.say("さーさんはそれだけ言って、翌週にはハッカソンで優勝していた。"),

  haruchiro.say("あの、自己紹介をMarkdownで書いてきたんですけど……"),
  yuujin.say("はるちろの第一印象は「変な人」だった。今も変わっていない。"),

  tonapi.say("カビの培養、うまくいきました"),
  yuujin.say("となっぴーは初日から研究の話をしていた。"),

  yuujin.say("そんな5人と、気づいたらずっと一緒にいた。"),
  yuujin.say("笑いすぎて腹が痛い夜も、"),
  yuujin.say("締め切りギリギリで全員パニックになった朝も、"),
  yuujin.say("どこかに行くとき、帰ってきたとき、"),
  yuujin.say("いつもこの6人だった。"),
  yuujin.say("そして今、最後の春が始まろうとしている。"),
  yuujin.say("全員ちゃんと卒業して、追いコンで会おう。"),
  yuujin.say("――それだけのことが、なぜこんなに難しいんだ。"),

  openingScene.jumpTo(prologueScene),
]);
