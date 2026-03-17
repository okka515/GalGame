import { Scene, Menu } from "narraleaf-react";
import { yuujin, massu } from "../../characters";
import { gameFlags } from "../../store/gameState";
import { finaleScene } from "../endings/finale";

export const massuRouteMain = new Scene("massu-route-main", {
  background: "#1f2937",
});

massuRouteMain.action([
  yuujin.say("まっすーに呼び出された。珍しく真面目な顔をしている。"),
  massu.say("ねえ、ちょっと聞いてほしいんだけど。卒研とカメラと遠距離、全部あって……正直何も手につかないの！"),
  massu.say("先週の中間発表、ちょっと遅れちゃったし……あはは、このままだとやばいかなって！"),
  yuujin.say("（ソフトボール全国まで行った努力家が、珍しくしんどそうだ）"),
  Menu.prompt("どう答える？")
    .choose("卒研を最優先にするよう整理する", [
      yuujin.say("まず卒研。カメラは卒業後にいくらでもできる。遠距離の不安は話し合いで解決しろ"),
      massu.say("……そっか、そうだよね。わかった。今週末、ちゃんと向き合うよ"),
      gameFlags.set("massu_graduation_power", (v) => (v || 0) + 4),
      massuRouteMain.jumpTo(finaleScene),
    ])
    .choose("カメラも遠距離も大事にするよう応援する", [
      yuujin.say("全部大事だよ。バランスよくやっていこう"),
      massu.say("うん、頑張ってみるよ！私ならいける！"),
      gameFlags.set("massu_graduation_power", (v) => (v || 0) + 2),
      massuRouteMain.jumpTo(finaleScene),
    ])
    .choose("「カメラが一番大事」と全肯定する", [
      yuujin.say("カメラ、めちゃくちゃいいじゃん。それで生きていこうよ"),
      massu.say("そ、そうだよね……！私、カメラで生きる！！あはは！"),
      gameFlags.set("massu_graduation_power", (v) => (v || 0) - 3),
      massuRouteMain.jumpTo(finaleScene),
    ]),
]);
