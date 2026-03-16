import { Scene, Menu, Condition } from "narraleaf-react";
import { yuujin, pack, massu, saasan, haruchiro, tonapi } from "../characters";
import { chapter1Scene } from "./common/chapter1";
import { gameFlags } from "../store/gameState";

export const prologueScene = new Scene("prologue", {
  background: "#0f172a",
});

const prologueMenu = new Scene("prologue-menu", {
  background: "#0f172a",
});

const prologuePrompt = new Scene("prologue-prompt", {
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
  
  prologueScene.jumpTo(prologueMenu),
]);

prologueMenu.action([
  Condition.If(gameFlags.evaluate("prologue_talk_count", (v) => (v || 0) >= 5), [
    yuujin.say("……なんとか全員の初期症状（？）を聞き終えた。"),
    yuujin.say("ここから本当に全員無事に卒業できるのだろうか……。"),
    prologueMenu.jumpTo(chapter1Scene),
  ]).Else([
    prologueMenu.jumpTo(prologuePrompt),
  ]),
]);

prologuePrompt.action([
  Menu.prompt("誰の相談から聞く？（早く話を聞いてあげた人ほど、後の展開で有利になるかも…？）")
    .showWhen(gameFlags.evaluate("prologue_talked_pack", (v) => (v || 0) === 0), "ぱっく（恋愛・起業・転向、全部同時進行）", [
      yuujin.say("自分から首を絞めにいっているとしか思えないぱっくの話を聞くことにした。"),
      gameFlags.assign((state) => ({ prologue_talked_pack: 5 - state.prologue_talk_count })),
      gameFlags.set("prologue_talk_count", (v) => (v || 0) + 1),
      prologuePrompt.jumpTo(prologueMenu),
    ])
    .showWhen(gameFlags.evaluate("prologue_talked_massu", (v) => (v || 0) === 0), "まっすー（遠距離・就活・カメラ、時間感覚が死んでいる）", [
      yuujin.say("一番時間が迫っていそうなまっすーの話を聞くことにした。"),
      gameFlags.assign((state) => ({ prologue_talked_massu: 5 - state.prologue_talk_count })),
      gameFlags.set("prologue_talk_count", (v) => (v || 0) + 1),
      prologuePrompt.jumpTo(prologueMenu),
    ])
    .showWhen(gameFlags.evaluate("prologue_talked_saasan", (v) => (v || 0) === 0), "さーさん（会社・車・炒り卵カルボナーラ）", [
      yuujin.say("方向性が三次元に散らかっているさーさんの話を聞くことにした。"),
      gameFlags.assign((state) => ({ prologue_talked_saasan: 5 - state.prologue_talk_count })),
      gameFlags.set("prologue_talk_count", (v) => (v || 0) + 1),
      prologuePrompt.jumpTo(prologueMenu),
    ])
    .showWhen(gameFlags.evaluate("prologue_talked_haruchiro", (v) => (v || 0) === 0), "はるちろ（マチアプ脳、DroidKaigiの出会い）", [
      yuujin.say("完全に技術より色恋沙汰に向かっているはるちろの話を聞くことにした。"),
      gameFlags.assign((state) => ({ prologue_talked_haruchiro: 5 - state.prologue_talk_count })),
      gameFlags.set("prologue_talk_count", (v) => (v || 0) + 1),
      prologuePrompt.jumpTo(prologueMenu),
    ])
    .showWhen(gameFlags.evaluate("prologue_talked_tonapi", (v) => (v || 0) === 0), "となっぴー（カビ・石積み・バレー）", [
      yuujin.say("一番底知れない闇を感じるとなっぴーの話を聞くことにした。"),
      gameFlags.assign((state) => ({ prologue_talked_tonapi: 5 - state.prologue_talk_count })),
      gameFlags.set("prologue_talk_count", (v) => (v || 0) + 1),
      prologuePrompt.jumpTo(prologueMenu),
    ]),
]);
