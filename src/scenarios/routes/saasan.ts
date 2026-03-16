import { Scene, Menu } from "narraleaf-react";
import { yuujin, saasan } from "../../characters";
import { gameFlags } from "../../store/gameState";
import { groupTrueEnd } from "../endings/group";

export const saasanRouteMain = new Scene("saasan-route-main", {
  background: "#052e16",
});

const saasanHappyEnd = new Scene("saasan-happy-end", {
  background: "#d1fae5",
});
saasanHappyEnd.action([
  saasan.say("車検通った。会社の登記も終わった。卒研の発表、一番よかったって言われた"),
  saasan.say("まあ、俺の人生に失敗はなかった"),
  yuujin.say("さーさんが卒業した。当然のように首席だった。"),
  yuujin.say("会社は翌年に軌道に乗り始め、海陽町への凱旋を果たした。"),
  yuujin.say("――さーさん ハッピーエンド――"),
  saasanRouteMain.jumpTo(groupTrueEnd),
]);

const saasanNormalEnd = new Scene("saasan-normal-end", {
  background: "#bbf7d0",
});
saasanNormalEnd.action([
  saasan.say("なんとか卒業した。会社は来年ゆっくり動かす"),
  yuujin.say("さーさんが卒業した。最強だが卒業もした。"),
  yuujin.say("――さーさん ノーマルエンド――"),
  saasanRouteMain.jumpTo(groupTrueEnd),
]);

const saasanBadEnd = new Scene("saasan-bad-end", {
  background: "#1c1c2e",
});
saasanBadEnd.action([
  yuujin.say("何も言わずに放置した結果——"),
  saasan.say("……海陽町に帰る"),
  yuujin.say("さーさんは静かに地元へ帰った。"),
  yuujin.say("漁師になったという連絡が来た。"),
  saasan.say("（LINEより）「魚うまい」"),
  yuujin.say("――さーさん 漁師エンド――"),
]);

saasanRouteMain.action([
  yuujin.say("さーさんから連絡が来た。珍しい。"),
  saasan.say("なあ、会社立ち上げの件、ちょっと聞いてほしいんだけど"),
  saasan.say("車のミラーをちょっと接触させたかもしれない。車検も来月だ。それと炒り卵カルボナーラの作り方を教えてほしい"),
  yuujin.say("（相談が多方向すぎる。でもこれがさーさんだ）"),
  Menu.prompt("どう答える？")
    .choose("現実的な問題から一個ずつ整理する", [
      yuujin.say("車検を先に通せ。カルボナーラは今夜作ってやる。会社の話は週末にじっくり聞く"),
      saasan.say("……さすがだな。そうする"),
      gameFlags.set("saasan_good_choice", true),
      saasanRouteMain.jumpTo(saasanHappyEnd),
    ])
    .choose("会社立ち上げの話を最優先で聞く", [
      yuujin.say("会社の話を聞こう。他は後でなんとかなる"),
      saasan.say("そうか。じゃあ話すか"),
      saasanRouteMain.jumpTo(saasanNormalEnd),
    ])
    .choose("何もアドバイスせず「お前なら大丈夫」と言う", [
      yuujin.say("お前なら全部大丈夫だろ"),
      saasan.say("……まあ、そうかもな"),
      yuujin.say("（この後、さーさんは何も解決しないまま静かにフェードアウトした）"),
      gameFlags.set("saasan_good_choice", false),
      saasanRouteMain.jumpTo(saasanBadEnd),
    ]),
]);

export { saasanHappyEnd, saasanNormalEnd, saasanBadEnd };
