import { Scene, Menu } from "narraleaf-react";
import { yuujin, pack, massu, saasan, haruchiro, tonapi } from "../characters";
import { chapter1Scene } from "./common/chapter1";

export const prologueScene = new Scene("prologue", {
  background: "#0f172a",
});

prologueScene.action([
  yuujin.say("卒業まで、あと少し。"),
  yuujin.say("俺たち6人は、気づけばずっと一緒にいた。"),
  yuujin.say("いろんな相談を持ち込んでくる連中で、俺はいつの間にかその中心にいた。"),
  pack.say("追いコン、絶対みんなで行こうな！"),
  massu.say("全員ちゃんと卒業して、最高の夜にしよう！"),
  saasan.say("まあ、俺は普通に卒業するけど"),
  haruchiro.say("卒業……はします。たぶん"),
  tonapi.say("……行けると思います"),
  yuujin.say("「全員無事に卒業して追いコンを迎えよう」"),
  yuujin.say("その約束をした翌日から、5人全員が厄介な相談を持ち込んできた。"),
  yuujin.say("当然のように。"),
  yuujin.say("これが、6人組最後の春の始まりだった。"),
  // gameFlags.set() が有効なアクションか未確認のため一旦除外し、jumpTo のみで動作確認
  Menu.prompt("誰の相談から最初に聞く？（進行順は変わらないが最初の印象が変わる）")
    .choose("ぱっく（恋愛・起業・転向、全部同時進行）", [
      yuujin.say("まずはぱっくの話を聞くことにした。"),
      prologueScene.jumpTo(chapter1Scene),
    ])
    .choose("まっすー（遠距離・就活・カメラ、時間感覚が死んでいる）", [
      yuujin.say("まずはまっすーの話を聞くことにした。"),
      prologueScene.jumpTo(chapter1Scene),
    ])
    .choose("さーさん（会社・車・炒り卵カルボナーラ）", [
      yuujin.say("まずはさーさんの話を聞くことにした。"),
      prologueScene.jumpTo(chapter1Scene),
    ])
    .choose("はるちろ（マチアプ脳、DroidKaigiの出会い）", [
      yuujin.say("まずははるちろの話を聞くことにした。"),
      prologueScene.jumpTo(chapter1Scene),
    ])
    .choose("となっぴー（カビ・石積み・バレー）", [
      yuujin.say("まずはとなっぴーの話を聞くことにした。"),
      prologueScene.jumpTo(chapter1Scene),
    ]),
]);
