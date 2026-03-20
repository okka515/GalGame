import { Scene, Menu, Condition } from "narraleaf-react";
import { yuujin, pack, massu, saasan, haruchiro, tonapi, packImg, massuImg, saasanImg, haruchiroImg, tonapiImg } from "../characters";
import { chapter1Scene } from "./common/chapter1";
import { gameFlags } from "../store/gameState";

export const prologueScene = new Scene("prologue", {
  background: "/backgrounds/university_outside.jpg",
});

const prologueMenu = new Scene("prologue-menu", {
  background: "/backgrounds/university_outside.jpg",
});

const prologuePrompt = new Scene("prologue-prompt", {
  background: "/backgrounds/university_outside.jpg",
});

prologueScene.action([
  yuujin.say("4月。いよいよ俺たちも最終学年になった。卒業まであと1年。"),
  yuujin.say("俺たち6人は、気づけばずっと一緒にいた。"),
  yuujin.say("いろんな相談を持ち込んでくる連中で、俺はいつの間にかその中心にいた。"),
  pack.say("おい来年の追いコン、絶対みんなで行くぞ！面白そうだしな！"),
  massu.say("絶対！今年一年がんばって、その上で全員ちゃんと卒業しようよー！あはは！"),
  saasan.say("まあ、俺は当然卒業するけどな"),
  haruchiro.say("えっと、卒業……はします。たぶん。単位計算のアルゴリズム的には……"),
  tonapi.say("……私も、行けると思います。はい。"),
  yuujin.say("「今年一年がんばって、全員無事に卒業して追いコンを迎えよう」"),
  yuujin.say("その約束をした矢先、5人全員がそれぞれ厄介な相談を持ち込んできた。"),
  yuujin.say("当然のように。"),
  yuujin.say("これが、6人組の波乱に満ちた最後の一年の始まりだった。"),

  prologueScene.jumpTo(prologueMenu),
]);

prologueMenu.action([
  Condition.If(gameFlags.evaluate("prologue_talk_count", (v) => (v || 0) >= 5), [
    prologueMenu.jumpTo(chapter1Scene),
  ]).Else([
    prologueMenu.jumpTo(prologuePrompt),
  ]),
]);

prologuePrompt.action([
  Menu.prompt("誰の相談から聞く？（早く話を聞いてあげた人ほど、後の展開で有利になるかも…？）")
    .showWhen(gameFlags.evaluate("prologue_talked_pack", (v) => (v || 0) === 0), "ぱっく（恋愛・起業・転向、全部同時進行）", [
      packImg.show(),
      yuujin.say("自分から首を絞めにいっているとしか思えないぱっくの話を聞くことにした。"),
      gameFlags.assign((state) => ({
        prologue_talked_pack: 5 - state.prologue_talk_count,
        pack_graduation_power: state.pack_graduation_power + (5 - state.prologue_talk_count)
      })),
      gameFlags.set("prologue_talk_count", (v) => (v || 0) + 1),
      packImg.hide(),
      prologuePrompt.jumpTo(prologueMenu),
    ])
    .showWhen(gameFlags.evaluate("prologue_talked_massu", (v) => (v || 0) === 0), "まっすー（遠距離・就活・カメラ、時間感覚が死んでいる）", [
      massuImg.show(),
      yuujin.say("一番時間が迫っていそうなまっすーの話を聞くことにした。"),
      gameFlags.assign((state) => ({
        prologue_talked_massu: 5 - state.prologue_talk_count,
        massu_graduation_power: state.massu_graduation_power + (5 - state.prologue_talk_count)
      })),
      gameFlags.set("prologue_talk_count", (v) => (v || 0) + 1),
      massuImg.hide(),
      prologuePrompt.jumpTo(prologueMenu),
    ])
    .showWhen(gameFlags.evaluate("prologue_talked_saasan", (v) => (v || 0) === 0), "さーさん（会社・車・炒り卵カルボナーラ）", [
      saasanImg.show(),
      yuujin.say("方向性が三次元に散らかっているさーさんの話を聞くことにした。"),
      gameFlags.assign((state) => ({
        prologue_talked_saasan: 5 - state.prologue_talk_count,
        saasan_graduation_power: state.saasan_graduation_power + (5 - state.prologue_talk_count)
      })),
      gameFlags.set("prologue_talk_count", (v) => (v || 0) + 1),
      saasanImg.hide(),
      prologuePrompt.jumpTo(prologueMenu),
    ])
    .showWhen(gameFlags.evaluate("prologue_talked_haruchiro", (v) => (v || 0) === 0), "はるちろ（マチアプ脳、DroidKaigiの出会い）", [
      haruchiroImg.show(),
      yuujin.say("完全に技術より色恋沙汰に向かっているはるちろの話を聞くことにした。"),
      gameFlags.assign((state) => ({
        prologue_talked_haruchiro: 5 - state.prologue_talk_count,
        haruchiro_graduation_power: state.haruchiro_graduation_power + (5 - state.prologue_talk_count)
      })),
      gameFlags.set("prologue_talk_count", (v) => (v || 0) + 1),
      haruchiroImg.hide(),
      prologuePrompt.jumpTo(prologueMenu),
    ])
    .showWhen(gameFlags.evaluate("prologue_talked_tonapi", (v) => (v || 0) === 0), "となっぴー（カビ・石積み・バレー）", [
      tonapiImg.show(),
      yuujin.say("一番底知れない闇を感じるとなっぴーの話を聞くことにした。"),
      gameFlags.assign((state) => ({
        prologue_talked_tonapi: 5 - state.prologue_talk_count,
        tonapi_graduation_power: state.tonapi_graduation_power + (5 - state.prologue_talk_count)
      })),
      gameFlags.set("prologue_talk_count", (v) => (v || 0) + 1),
      tonapiImg.hide(),
      prologuePrompt.jumpTo(prologueMenu),
    ]),
]);
