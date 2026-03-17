import { Scene, Menu } from "narraleaf-react";
import { yuujin, pack } from "../../characters";
import { gameFlags } from "../../store/gameState";
import { finaleScene } from "../endings/finale";

// ぱっくルート: メインシーン
export const packRouteMain = new Scene("pack-route-main", {
  background: "#1e3a5f",
});

packRouteMain.action([
  yuujin.say("ぱっくから呼び出された。"),
  pack.say("なあ聞いてくれよ。フランス人の彼氏と、起業の話と、エンジニア転向、全部同時に進めようとしてるんだが……"),
  pack.say("正直言うと、どれも中途半端な気がしてな。論理的に破綻してきている"),
  yuujin.say("（全部やろうとするのがぱっくらしい。でも今は絞る必要がある）"),
  Menu.prompt("どう答える？")
    .choose("優先順位をつけるよう助言する", [
      yuujin.say("全部同時はさすがに無理だ。まず卒業、次に就職かフリーかを決めろ。フランスの話はそれからにしろ"),
      pack.say("……そうだな。やっぱそうだよな。じゃあ卒研から論理的に片付けるか"),
      gameFlags.set("pack_graduation_power", (v) => (v || 0) + 4),
      packRouteMain.jumpTo(finaleScene),
    ])
    .choose("全部応援する", [
      yuujin.say("全部いけるって！お前なら絶対いける！"),
      pack.say("よし、じゃあ全力でやるか！たいやきのジンクスを信じるぞ"),
      yuujin.say("（この後、ぱっくは全部を同時に動かし始めた。結果は……）"),
      gameFlags.set("pack_graduation_power", (v) => (v || 0) + 2),
      packRouteMain.jumpTo(finaleScene),
    ])
    .choose("恋愛を優先するよう煽る", [
      yuujin.say("フランスの話、一番大事じゃないか？愛だろ愛"),
      pack.say("そ、そうか……！やっぱ愛か！！面白いことになりそうだな"),
      gameFlags.set("pack_graduation_power", (v) => (v || 0) - 3),
      packRouteMain.jumpTo(finaleScene),
    ]),
]);
