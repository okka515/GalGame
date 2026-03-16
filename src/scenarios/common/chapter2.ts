import { Scene } from "narraleaf-react";
import { yuujin, pack, massu, saasan, haruchiro, tonapi } from "../../characters";
import { chapter3Scene } from "./chapter3";

// 第2章: 過去エピソード回想週間
// シーンを末端から定義して jumpTo で数珠つなぎにする

// となっぴー回想（最後）→ 第3章へ
const tonapiFlashback = new Scene("tonapi-flashback", {
  background: "#042f2e",
});
tonapiFlashback.action([
  yuujin.say("【回想: となっぴーの旅行】"),
  yuujin.say("となっぴーが旅行に行ったとき、河原で石を積みすぎたらしい。"),
  tonapi.say("なんとなく積みたくなって"),
  yuujin.say("バレーボール観戦では、推しチームの一点で顔色が大きく変わった。"),
  tonapi.say("あれは感情が動いただけです"),
  yuujin.say("研究室では、カビの培養速度が「理論値を超えた」という謎の報告がされていた。"),
  yuujin.say("となっぴーは静かに危なかった。"),
  tonapiFlashback.jumpTo(chapter3Scene),
]);

// はるちろ回想 → となっぴーへ
const haruchiroFlashback = new Scene("haruchiro-flashback", {
  background: "#2d1b69",
});
haruchiroFlashback.action([
  yuujin.say("【回想: はるちろとマチアプ】"),
  yuujin.say("はるちろがマチアプを始めると言いだしたとき、服を買いに行く話になった。"),
  haruchiro.say("店員さん、めちゃくちゃ丁寧に教えてくれましたよ。メンターみたいだった"),
  yuujin.say("翌日、自己紹介文をMarkdownで書きかけているのを発見した。"),
  haruchiro.say("gitのリンクは載せるべきですよね？"),
  yuujin.say("絶対にやめろと止めた。"),
  yuujin.say("その後、DroidKaigiで「いい出会いがあった」と連絡が来た。嫌な予感がした。"),
  haruchiroFlashback.jumpTo(tonapiFlashback),
]);

// さーさん回想 → はるちろへ
const saasanFlashback = new Scene("saasan-flashback", {
  background: "#052e16",
});
saasanFlashback.action([
  yuujin.say("【回想: さーさんと海陽町】"),
  yuujin.say("さーさんが海陽町から転校してきた日のことを覚えている。"),
  saasan.say("海の町から来た"),
  yuujin.say("それだけ言って、翌週にはハッカソンで無双していた。"),
  yuujin.say("去年の卒サプ事件——プリンターを終電まで占拠された話——は今でも語り草だ。"),
  saasan.say("あれは俺も悪かった。でも卒論は間に合った"),
  saasanFlashback.jumpTo(haruchiroFlashback),
]);

// まっすー回想 → さーさんへ
const massuFlashback = new Scene("massu-flashback", {
  background: "#2d1f3d",
});
massuFlashback.action([
  yuujin.say("【回想: まっすーの卒研中間発表】"),
  yuujin.say("ソフトボール全国に行くくらいの実力者が、なぜ卒研の中間発表に2時間遅刻したのか。"),
  massu.say("遠距離の彼から電話が来て……つい"),
  yuujin.say("発表室の外で待つ指導教員の顔は、今でも夢に見る。"),
  massu.say("さーさんに恋愛相談してたのも、あの頃だったなあ"),
  yuujin.say("さーさんに恋愛相談、というのが謎すぎて逆に和んだ。"),
  massuFlashback.jumpTo(saasanFlashback),
]);

// ぱっく回想 → まっすーへ
const packFlashback = new Scene("pack-flashback", {
  background: "#1c2e4a",
});
packFlashback.action([
  yuujin.say("【回想: ぱっくとたいやき】"),
  yuujin.say("それは、ある春の日のことだった。"),
  pack.say("あ"),
  yuujin.say("橋の上で、ぱっくの手からたいやきが落ちた。"),
  yuujin.say("たいやきは弧を描き、用水路の中へと消えた。"),
  pack.say("……泳いでる"),
  yuujin.say("二人で5分間、用水路を流れるたいやきを見つめた。"),
  pack.say("なんかこれ、縁起いいな"),
  yuujin.say("以来、ぱっくの中で「たいやきを流す＝成功のジンクス」という謎の方程式が生まれた。"),
  packFlashback.jumpTo(massuFlashback),
]);

// 第2章 エントリーシーン → ぱっく回想へ
export const chapter2Scene = new Scene("chapter2", {
  background: "#1e1b4b",
});
chapter2Scene.action([
  yuujin.say("【第2章: 過去エピソード回想週間】"),
  yuujin.say("追いコンの準備をしながら、ふとした瞬間に過去のことを思い出す。"),
  yuujin.say("この6人、よく考えたらずっとこんな感じだった。"),
  chapter2Scene.jumpTo(packFlashback),
]);
