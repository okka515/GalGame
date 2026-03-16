import { Scene } from "narraleaf-react";
import { yuujin, pack, massu, saasan, haruchiro, tonapi } from "../../characters";
import { chapter2Scene } from "./chapter2";

// 第1章: 全員ちょっと危ない
// 各キャラの問題噴出シーンを末端から順に定義

// となっぴーシーン（最後）→ 第2章へ
const ch1TonapiScene = new Scene("ch1-tonapi", {
  background: "#042f2e",
});
ch1TonapiScene.action([
  yuujin.say("となっぴーから不穏なLINEが届いた。"),
  tonapi.say("カビが予想より2倍の速度で増えています。新しい化合物かもしれません"),
  tonapi.say("あと、旅行の写真を見返したら河原に積んだ石が崩れていて少し気になっています"),
  yuujin.say("（「少し気になる」の基準がわからない）"),
  tonapi.say("バレーの応援も来週あるので、少し忙しいです"),
  yuujin.say("……静かに、確実に危ない方向へ進んでいる。"),
  ch1TonapiScene.jumpTo(chapter2Scene),
]);

// はるちろシーン → となっぴーへ
const ch1HaruchiroScene = new Scene("ch1-haruchiro", {
  background: "#1e1b4b",
});
ch1HaruchiroScene.action([
  yuujin.say("はるちろが浮かれている。"),
  haruchiro.say("マチアプで気になる人ができまして！"),
  haruchiro.say("DroidKaigiでも出会いがあって……どっちがいいと思いますか？"),
  yuujin.say("（脳内が恋愛100%になっている）"),
  haruchiro.say("プロフィールにgitのリンク貼ったんですけど、なんか反応がなくて"),
  yuujin.say("……そっちが問題だと伝えた。"),
  haruchiro.say("あと卒研のこと、ちょっとだけ忘れてました"),
  yuujin.say("「ちょっとだけ」で済む量ではなかった。"),
  ch1HaruchiroScene.jumpTo(ch1TonapiScene),
]);

// さーさんシーン → はるちろへ
const ch1SaasanScene = new Scene("ch1-saasan", {
  background: "#052e16",
});
ch1SaasanScene.action([
  yuujin.say("さーさんが珍しく連絡してきた。"),
  saasan.say("会社立ち上げようと思ってる。卒業したら即動かす"),
  yuujin.say("（それ自体はさーさんなら普通の発言だ）"),
  saasan.say("ただ、車のミラーを昨日ちょっとやった。車検が来月なんだけど大丈夫かな"),
  saasan.say("あと炒り卵カルボナーラの作り方を教えてほしい。ネギは入れないで"),
  yuujin.say("（相談が3方向同時に来ている。これがさーさんだ）"),
  saasan.say("ハッカソンはまた優勝した。カラオケのスコアも更新した"),
  yuujin.say("強い。でも生活面は本当に危ない。"),
  ch1SaasanScene.jumpTo(ch1HaruchiroScene),
]);

// まっすーシーン → さーさんへ
const ch1MassuScene = new Scene("ch1-massu", {
  background: "#1f2937",
});
ch1MassuScene.action([
  yuujin.say("まっすーから相談が来た。珍しく深刻な顔をしている。"),
  massu.say("実はさ……卒研の時間感覚がちょっとやばくて"),
  massu.say("遠距離の彼のこと、就職のこと、カメラのこと、全部考えてたら何も進まなくて"),
  yuujin.say("（ソフトボール全国行ったパワーはどこへ）"),
  massu.say("先週の進捗報告、ちょっとだけ遅れちゃったんだよね。2時間くらい"),
  yuujin.say("「ちょっと」の感覚がおかしい。"),
  massu.say("東京で働きたいとは思ってるんだけど、遠距離がさらに遠くなるし"),
  yuujin.say("まっすーの相談に乗り始めた。"),
  ch1MassuScene.jumpTo(ch1SaasanScene),
]);

// ぱっくシーン（最初）→ まっすーへ
const ch1PackScene = new Scene("ch1-pack", {
  background: "#1c2e4a",
});
ch1PackScene.action([
  yuujin.say("最初に来たのはぱっくだった。"),
  pack.say("なあ聞いてくれ。フランス人の彼氏ができたんだけど"),
  pack.say("同時に起業の話も進んでて、エンジニアとしての転向もしたくて"),
  pack.say("全部うまくいく気がするんだよな。根拠はたいやきのジンクス"),
  yuujin.say("（全部やろうとするのはわかった。ジンクスの根拠は意味不明だ）"),
  pack.say("留学生のお出迎えも今週あるし、天文学サークルのアプリも作ってるし"),
  pack.say("全然余裕あるよ"),
  yuujin.say("全然余裕があるように見えない。"),
  ch1PackScene.jumpTo(ch1MassuScene),
]);

// 第1章 エントリーシーン → ぱっくへ
export const chapter1Scene = new Scene("chapter1", {
  background: "#111827",
});
chapter1Scene.action([
  yuujin.say("【第1章: 全員ちょっと危ない】"),
  yuujin.say("追いコンの準備を始めようとした、その瞬間。"),
  yuujin.say("5人から同時に連絡が来た。"),
  yuujin.say("……なんとなく、嫌な予感がした。"),
  chapter1Scene.jumpTo(ch1PackScene),
]);
