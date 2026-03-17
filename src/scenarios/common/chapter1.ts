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
  tonapi.say("あの……カビが予想より2倍の速度で増えていて。これ、新しい化合物かもしれません。"),
  tonapi.say("あと、旅行の写真を見返したら河原に積んだ石が崩れていたんです。少し気になりますよね……フフ"),
  yuujin.say("（「少し気になる」の基準がわからない。笑っているが目が笑っていない）"),
  tonapi.say("来週はバレーの応援もあるので、少し忙しくなりそうです！"),
  yuujin.say("……静かに、確実に危ない方向へ進んでいる。"),
  ch1TonapiScene.jumpTo(chapter2Scene),
]);

// はるちろシーン → となっぴーへ
const ch1HaruchiroScene = new Scene("ch1-haruchiro", {
  background: "#1e1b4b",
});
ch1HaruchiroScene.action([
  yuujin.say("はるちろが浮かれている。"),
  haruchiro.say("あ、あの！マチアプで気になる人ができまして！レスポンスが早いんですよ！"),
  haruchiro.say("でもDroidKaigiでも出会いがあって……コンフリクト起きてるんですけど、どっちにマージするのが正解だと思いますか？"),
  yuujin.say("（脳内が恋愛100%になっている。しかも技術用語が漏れている）"),
  haruchiro.say("とりあえずプロフィールにgitのリンク貼ったんですけど、なんか404というか、反応がなくて……"),
  yuujin.say("……そっちが問題だと伝えた。"),
  haruchiro.say("あ、あと卒研のタスク、ちょっとだけ積んでるの忘れてました"),
  yuujin.say("「ちょっとだけ」で済む量ではなかった。"),
  ch1HaruchiroScene.jumpTo(ch1TonapiScene),
]);

// さーさんシーン → はるちろへ
const ch1SaasanScene = new Scene("ch1-saasan", {
  background: "#052e16",
});
ch1SaasanScene.action([
  yuujin.say("さーさんが珍しく連絡してきた。"),
  saasan.say("会社立ち上げようと思ってる。よし、卒業したら即稼働だな"),
  yuujin.say("（それ自体はさーさんなら普通の発言だ）"),
  saasan.say("ただ、車のミラーを昨日ちょっと当ててな。車検が来月なんだけど、まあ余裕だろ"),
  saasan.say("あと炒り卵カルボナーラの作り方を教えてくれ。絶対にネギは入れるなよ、成分表示も見たいから"),
  yuujin.say("（相談が3方向同時に来ている。これがさーさんだ）"),
  saasan.say("そういやハッカソンはまた優勝したわ。カラオケのスコアも更新しといた"),
  yuujin.say("強い。でも生活面は本当に危ない。"),
  ch1SaasanScene.jumpTo(ch1HaruchiroScene),
]);

// まっすーシーン → さーさんへ
const ch1MassuScene = new Scene("ch1-massu", {
  background: "#1f2937",
});
ch1MassuScene.action([
  yuujin.say("まっすーから相談が来た。珍しく深刻な顔をしている。"),
  massu.say("ねえ聞いてよ！実はさ……卒研の時間感覚がちょっとやばくて！あはは！"),
  massu.say("遠距離の彼のこととか、東京での就活とか、カメラのこととか！全部考えてたら何も進まなくて！"),
  yuujin.say("（ソフトボール全国行ったパワーはどこへ）"),
  massu.say("先週の進捗報告さ、ちょっとだけ遅れちゃったんだよねー。2時間くらい！"),
  yuujin.say("「ちょっと」の感覚がおかしい。"),
  massu.say("東京でキラキラ広報やりたいなーとは思ってるんだけど、彼との距離がさらに遠くなるしー！"),
  yuujin.say("まっすーの相談に乗り始めた。"),
  ch1MassuScene.jumpTo(ch1SaasanScene),
]);

// ぱっくシーン（最初）→ まっすーへ
const ch1PackScene = new Scene("ch1-pack", {
  background: "#1c2e4a",
});
ch1PackScene.action([
  yuujin.say("最初に来たのはぱっくだった。"),
  pack.say("なあ聞いてくれよ。フランス人の彼氏ができたんだが、"),
  pack.say("同時に起業の話も進んでてさ。俺、エンジニアに転向した方がいいと思うんだよな"),
  pack.say("全部うまくいく気がするんだ。根拠？たいやきが用水路泳いでたからな、縁起いいだろ"),
  yuujin.say("（全部やろうとするのはわかった。ジンクスの根拠は意味不明だ）"),
  pack.say("留学生の女の子のお出迎えも今週あるし、天文学サークルのアプリもFlutterで作ってるしな"),
  pack.say("普通に考えて、全然余裕だろ"),
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
