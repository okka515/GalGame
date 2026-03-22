import { Scene, Menu, Condition, Sound } from "narraleaf-react";
import { yuujin, pack, massu, saasan, haruchiro, tonapi, packImg, massuImg, saasanImg, haruchiroImg, tonapiImg } from "../characters";
import { chapter1Scene } from "./common/chapter1";
import { gameFlags } from "../store/gameState";
import { gameEvents } from "../store/gameEvents";

export const prologueScene = new Scene("prologue", {
  background: "/backgrounds/opening.png",
});

const prologueMenu = new Scene("prologue-menu", {
  background: "/backgrounds/opening.png",
});

const prologuePrompt = new Scene("prologue-prompt", {
  background: "/backgrounds/opening.png",
});

const prologueBgm = new Sound({
  src: "/public/audio/bgm/prologue_bgm.mp3",
  loop: true,
  volume: 0.3,
});

prologueScene.action([
  prologueBgm.play(),
  // opening.ts の内容
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

  yuujin.say("まっすーはガイダンスですらカメラを持ち込んでいた。なぜ今それを出すんだ。"),

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

  Condition.If(() => {
    gameEvents.triggerChapterTitle("相談");
    return false;
  }, []),

  yuujin.say("昼休み、学食でいつものように6人で集まっていた時のことだ。"),

  packImg.show(),
  pack.say("おい来年の追いコン、絶対みんなで行くぞ！面白そうだしな！"),
  packImg.hide(),
  massuImg.show(),
  massu.say("絶対！今年一年がんばって、その上で全員ちゃんと卒業しようよー！あはは！"),
  massuImg.hide(),
  saasanImg.show(),
  saasan.say("まあ、俺は当然卒業するけどな"),
  saasanImg.hide(),
  haruchiroImg.show(),
  haruchiro.say("えっと、卒業……はします。たぶん。単位計算のアルゴリズム的には……"),
  haruchiroImg.hide(),
  tonapiImg.show(),
  tonapi.say("……私も、行けると思います。はい。"),
  tonapiImg.hide(),

  yuujin.say("卒業まであと1年。俺たち6人は、気づけばずっと一緒にいた。"),
  yuujin.say("「今年一年がんばって、全員無事に卒業して追いコンを迎えよう」"),
  yuujin.say("そんな決意を新たにした、直後のことだった。"),

  yuujin.say("雑談が続く中で、俺がそれぞれの近況に対して適当な相槌や客観的な意見を返していたら……"),
  yuujin.say("なぜか『お前、相談役に向いてるじゃん』という謎の評価が下され、満場一致で頷かれてしまったのだ。"),

  yuujin.say("その結果、5人全員がそれぞれ抱える厄介な問題を、俺のところに持ち込んでくる流れになってしまった。"),
  yuujin.say("当然のように。"),
  yuujin.say("これが、波乱に満ちた最後の一年の始まりだった。"),
  prologueBgm.stop(),
  prologueScene.jumpTo(prologueMenu),
]);

prologueMenu.action([
  Condition.If(gameFlags.evaluate("prologue_talk_count", (v) => (v || 0) >= 5), [
    Condition.If(() => {
      gameEvents.triggerChapterTitle("第1章");
      return false;
    }, []),

    prologueMenu.jumpTo(chapter1Scene),
  ]).Else([
    prologueMenu.jumpTo(prologuePrompt),
  ]),
]);

prologuePrompt.action([
  Menu.prompt("誰の相談から聞く？（早く話を聞いてあげた人ほど、後の展開で有利になるかも…？）")
    .showWhen(gameFlags.evaluate("prologue_talked_pack", (v) => (v || 0) === 0), "ぱっく（アプリ開発・起業・エンジニア転向）", [
      packImg.show(),
      Condition.If(gameFlags.evaluate("prologue_talk_count", (v) => (v || 0) === 0), [
        yuujin.say("まずは、文系から技術職へ劇的な転向を遂げたぱっくの話を聞くことに決めた。"),
      ]).Else([
        yuujin.say("次は、文系から技術職へ劇的な転向を遂げたぱっくの話を聞くことにした。"),
      ]),
      gameFlags.assign((state) => ({
        prologue_talked_pack: 5 - (state.prologue_talk_count || 0), // undefinedの場合を考慮
        pack_graduation_power: (state.pack_graduation_power || 0) + (5 - (state.prologue_talk_count || 0)) // undefinedの場合を考慮
      })),
      gameFlags.set("prologue_talk_count", (v) => (v || 0) + 1),
      packImg.hide(),
      prologuePrompt.jumpTo(prologueMenu),
    ])
    .showWhen(gameFlags.evaluate("prologue_talked_massu", (v) => (v || 0) === 0), "まっすー（遠距離・就活・カメラ、時間感覚が死んでいる）", [
      massuImg.show(),
      Condition.If(gameFlags.evaluate("prologue_talk_count", (v) => (v || 0) === 0), [
        yuujin.say("まずは、一番時間が迫っていそうなまっすーの話を聞くことに決めた。"),
      ]).Else([
        yuujin.say("次は、一番時間が迫っていそうなまっすーの話を聞くことにした。"),
      ]),
      gameFlags.assign((state) => ({
        prologue_talked_massu: 5 - (state.prologue_talk_count || 0),
        massu_graduation_power: (state.massu_graduation_power || 0) + (5 - (state.prologue_talk_count || 0))
      })),
      gameFlags.set("prologue_talk_count", (v) => (v || 0) + 1),
      massuImg.hide(),
      prologuePrompt.jumpTo(prologueMenu),
    ])
    .showWhen(gameFlags.evaluate("prologue_talked_saasan", (v) => (v || 0) === 0), "さーさん（ハッカソン無双・黒ポロ・起業）", [
      saasanImg.show(),
      Condition.If(gameFlags.evaluate("prologue_talk_count", (v) => (v || 0) === 0), [
        yuujin.say("まずは、この春に名古屋へ引っ越してきたばかりなのに、常に圧倒的強者であり続けるさーさんの話を聞くことに決めた。"),
      ]).Else([
        yuujin.say("次は、この春に名古屋へ引っ越してきたばかりなのに、常に圧倒的強者であり続けるさーさんの話を聞くことにした。"),
      ]),
      gameFlags.assign((state) => ({
        prologue_talked_saasan: 5 - (state.prologue_talk_count || 0),
        saasan_graduation_power: (state.saasan_graduation_power || 0) + (5 - (state.prologue_talk_count || 0))
      })),
      gameFlags.set("prologue_talk_count", (v) => (v || 0) + 1),
      saasanImg.hide(),
      prologuePrompt.jumpTo(prologueMenu),
    ])
    .showWhen(gameFlags.evaluate("prologue_talked_haruchiro", (v) => (v || 0) === 0), "はるちろ（マチアプ脳、DroidKaigiの出会い）", [
      haruchiroImg.show(),
      Condition.If(gameFlags.evaluate("prologue_talk_count", (v) => (v || 0) === 0), [
        yuujin.say("まずは、完全に技術より色恋沙汰に向かっているはるちろの話を聞くことに決めた。"),
      ]).Else([
        yuujin.say("次は、完全に技術より色恋沙汰に向かっているはるちろの話を聞くことにした。"),
      ]),
      gameFlags.assign((state) => ({
        prologue_talked_haruchiro: 5 - (state.prologue_talk_count || 0),
        haruchiro_graduation_power: (state.haruchiro_graduation_power || 0) + (5 - (state.prologue_talk_count || 0))
      })),
      gameFlags.set("prologue_talk_count", (v) => (v || 0) + 1),
      haruchiroImg.hide(),
      prologuePrompt.jumpTo(prologueMenu),
    ])
    .showWhen(gameFlags.evaluate("prologue_talked_tonapi", (v) => (v || 0) === 0), "となっぴー（カビ・石積み・バレー）", [
      tonapiImg.show(),
      Condition.If(gameFlags.evaluate("prologue_talk_count", (v) => (v || 0) === 0), [
        yuujin.say("まずは、一番底知れない闇を感じるとなっぴーの話を聞くことに決めた。"),
      ]).Else([
        yuujin.say("次は、一番底知れない闇を感じるとなっぴーの話を聞くことにした。"),
      ]),
      gameFlags.assign((state) => ({
        prologue_talked_tonapi: 5 - (state.prologue_talk_count || 0),
        tonapi_graduation_power: (state.tonapi_graduation_power || 0) + (5 - (state.prologue_talk_count || 0))
      })),
      gameFlags.set("prologue_talk_count", (v) => (v || 0) + 1),
      tonapiImg.hide(),
      prologuePrompt.jumpTo(prologueMenu),
    ]),
]);
