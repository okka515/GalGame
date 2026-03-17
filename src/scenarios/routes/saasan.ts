import { Scene, Menu } from "narraleaf-react";
import { yuujin, saasan } from "../../characters";
import { gameFlags } from "../../store/gameState";
import { finaleScene } from "../endings/finale";

export const saasanRouteMain = new Scene("saasan-route-main", {
  background: "#052e16",
});

saasanRouteMain.action([
  yuujin.say("さーさんから連絡が来た。珍しい。"),
  saasan.say("なあ、会社立ち上げの件、ちょっと聞いてほしいんだけど"),
  saasan.say("車のミラーをちょっと接触させたかもしれない。車検も来月だ。それと炒り卵カルボナーラの作り方を教えてほしい"),
  yuujin.say("（相談が多方向すぎる。でもこれがさーさんだ）"),
  Menu.prompt("どう答える？")
    .choose("現実的な問題から一個ずつ整理する", [
      yuujin.say("車検を先に通せ。カルボナーラは今夜作ってやる。会社の話は週末にじっくり聞く"),
      saasan.say("……さすがだな。そうする"),
      gameFlags.set("saasan_graduation_power", (v) => (v || 0) + 4),
      saasanRouteMain.jumpTo(finaleScene),
    ])
    .choose("会社立ち上げの話を最優先で聞く", [
      yuujin.say("会社の話を聞こう。他は後でなんとかなる"),
      saasan.say("そうか。じゃあ話すか"),
      gameFlags.set("saasan_graduation_power", (v) => (v || 0) + 2),
      saasanRouteMain.jumpTo(finaleScene),
    ])
    .choose("何もアドバイスせず「お前なら大丈夫」と言う", [
      yuujin.say("お前なら全部大丈夫だろ"),
      saasan.say("……まあ、そうかもな"),
      yuujin.say("（この後、さーさんは何も解決しないまま静かにフェードアウトした）"),
      gameFlags.set("saasan_graduation_power", (v) => (v || 0) - 3),
      saasanRouteMain.jumpTo(finaleScene),
    ]),
]);
