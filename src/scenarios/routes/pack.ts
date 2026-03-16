import { Scene, Menu, Condition } from "narraleaf-react";
import { yuujin, pack } from "../../characters";
import { gameFlags } from "../../store/gameState";
import { groupTrueEnd } from "../endings/group";

// ぱっくルート: メインシーン
export const packRouteMain = new Scene("pack-route-main", {
  background: "#1e3a5f",
});

// ぱっくハッピーエンド
const packHappyEnd = new Scene("pack-happy-end", {
  background: "#d4f1c5",
});
packHappyEnd.action([
  yuujin.say("ぱっくの話を最後まで聞いて、現実的なアドバイスをし続けた結果——"),
  pack.say("起業の話、ちゃんと固まった！フランスの彼とも向こうで会えることになったし、エンジニアとして食っていける自信もついた"),
  pack.say("なんか全部うまくいったな。たいやきのジンクスかな"),
  yuujin.say("たいやきを用水路に流したのをジンクスにするな。"),
  pack.say("追いコン、楽しみにしてるよ。ありがとな"),
  yuujin.say("ぱっくは無事卒業。その後、起業と国際恋愛を両立させ、首席卒業の超ハッピーエンドを達成した。"),
  yuujin.say("――ぱっく ハッピーエンド――"),
  packRouteMain.jumpTo(groupTrueEnd),
]);

// ぱっくノーマルエンド
const packNormalEnd = new Scene("pack-normal-end", {
  background: "#c7d2fe",
});
packNormalEnd.action([
  pack.say("まあ、なんとか卒業はできそう。起業はもうちょっと後で考える"),
  pack.say("フランスの件はちょっと保留かな"),
  yuujin.say("ぱっくが普通に卒業した。それで十分だ。"),
  yuujin.say("――ぱっく ノーマルエンド――"),
  packRouteMain.jumpTo(groupTrueEnd),
]);

// ぱっくバッドエンド
const packBadEnd = new Scene("pack-bad-end", {
  background: "#1c1c2e",
});
packBadEnd.action([
  yuujin.say("恋愛だけを煽り続けた結果——"),
  pack.say("フランス行ってきます！！"),
  yuujin.say("そのまま改札を突破するように海外へ。Suica感覚で外国の改札を通ろうとして破滅した。"),
  pack.say("（LINEより）「国際ホームレスになりました。元気です」"),
  yuujin.say("――ぱっく バッドエンド――"),
]);

// メインシーン本体
packRouteMain.action([
  yuujin.say("ぱっくから呼び出された。"),
  pack.say("なあ、聞いてくれ。フランス人の彼と、起業の話と、エンジニア転向、全部同時に進めようとしてるんだけど"),
  pack.say("正直いうと、どれも中途半端な気がして"),
  yuujin.say("（全部やろうとするのがぱっくらしい。でも今は絞る必要がある）"),
  Menu.prompt("どう答える？")
    .choose("優先順位をつけるよう助言する", [
      yuujin.say("全部同時はさすがに無理だ。まず卒業、次に就職かフリーかを決めろ。フランスの話はそれからにしろ"),
      pack.say("……そうだな。やっぱそうだよな。じゃあ卒研から片付ける"),
      gameFlags.set("pack_good_choice", true),
      packRouteMain.jumpTo(packHappyEnd),
    ])
    .choose("全部応援する", [
      yuujin.say("全部いけるって！お前なら絶対いける！"),
      pack.say("よし！全力でやる！！"),
      yuujin.say("（この後、ぱっくは全部を同時に動かし始めた。結果は……）"),
      packRouteMain.jumpTo(packNormalEnd),
    ])
    .choose("恋愛を優先するよう煽る", [
      yuujin.say("フランスの話、一番大事じゃないか？愛だろ愛"),
      pack.say("そ、そうか……！やっぱ愛か！！"),
      gameFlags.set("pack_good_choice", false),
      packRouteMain.jumpTo(packBadEnd),
    ]),
]);

export { packHappyEnd, packNormalEnd, packBadEnd };
