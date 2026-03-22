import { Scene, Condition } from "narraleaf-react";
import { yuujin, pack, massu, saasan, haruchiro, tonapi, packImg, massuImg, saasanImg, haruchiroImg, tonapiImg } from "../characters";
import { gameEvents } from "../store/gameEvents";
import { prologueScene } from "./prologue";

// OPムービー: 大学4年の春、新しいクラスで緊張している
export const openingScene = new Scene("opening", {
  background: "/backgrounds/opening.png",
});

openingScene.action([
  yuujin.say("4月。"),
  yuujin.say("大学4年生の春が、始まった。"),
  yuujin.say("今日から新しいゼミ。顔ぶれが変わって、また少し緊張している。"),
  yuujin.say("……まあ、慣れた顔も混じってるけど。"),

  packImg.show(),
  pack.say("よっ！同じゼミじゃん！最高か！"),
  packImg.hide(),

  yuujin.say("テンション高い人が来た。"),

  massuImg.show(),
  massu.say("あ、席取っといたよ。あとこれ、入学式の写真——って4年だけど"),
  massuImg.hide(),

  yuujin.say("まっすーは入学式ですらカメラを持ち込んでいた。なぜ今それを出すんだ。"),

  saasanImg.show(),
  saasan.say("ここのゼミか。まあいいけど"),
  saasanImg.hide(),

  yuujin.say("この春、徳島の海陽町から名古屋に引っ越してきたばかりのさーさん。新しい環境なのに、まるで動じた様子がない。"),

  haruchiroImg.show(),
  haruchiro.say("えーと、今日の自己紹介、Markdownで書いてきたんですけど……やっぱり紙に出力します"),
  haruchiroImg.hide(),

  yuujin.say("成長したのか退化したのかわからない。"),

  tonapiImg.show(),
  tonapi.say("今年は新しい培地で試してみようと思っています"),
  tonapiImg.hide(),

  yuujin.say("初日からカビの話をするな。"),

  yuujin.say("……でも、こういう感じが好きだと思っている。"),
  yuujin.say("緊張して、笑って、また始まる春。"),
  yuujin.say("これが最後の春なんだって、まだ実感がない。"),
  yuujin.say("全員ちゃんと卒業して、追いコンで終わろう。"),
  yuujin.say("そう思っていたのは、この日の午前中だけだった。"),

  // OP 終了 → 「プロローグ」チャプタータイトル表示 → プロローグへ
  Condition.If(() => {
    gameEvents.triggerChapterTitle("プロローグ");
    return false;
  }, []),

  openingScene.jumpTo(prologueScene),
]);
