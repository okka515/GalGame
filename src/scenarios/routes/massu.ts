import { Scene, Menu } from "narraleaf-react";
import { yuujin, massu } from "../../characters";
import { gameFlags } from "../../store/gameState";
import { groupTrueEnd } from "../endings/group";

export const massuRouteMain = new Scene("massu-route-main", {
  background: "#1f2937",
});

const massuHappyEnd = new Scene("massu-happy-end", {
  background: "#fce7f3",
});
massuHappyEnd.action([
  massu.say("卒研、なんとか間に合った！発表もうまくいったよ！"),
  massu.say("東京の広告会社から内定ももらえたし、遠距離もとりあえず続けてみる"),
  massu.say("卒サプの写真、全部私が撮るね。任せて"),
  yuujin.say("まっすーが東京就職。広報・広告方面で輝いていた。"),
  yuujin.say("写真がSNSでバズり、キラキラ業界エンドへ。"),
  yuujin.say("――まっすー ハッピーエンド――"),
  massuRouteMain.jumpTo(groupTrueEnd),
]);

const massuNormalEnd = new Scene("massu-normal-end", {
  background: "#dbeafe",
});
massuNormalEnd.action([
  massu.say("ギリギリだったけど、卒業できた。ありがとうね"),
  yuujin.say("まっすーが普通に卒業した。それで十分だ。"),
  yuujin.say("――まっすー ノーマルエンド――"),
  massuRouteMain.jumpTo(groupTrueEnd),
]);

const massuBadEnd = new Scene("massu-bad-end", {
  background: "#1c1c2e",
});
massuBadEnd.action([
  yuujin.say("「趣味だけを全肯定した」結果——"),
  massu.say("卒研？えっ……今日でしたっけ"),
  yuujin.say("発表会当日に寝坊したまっすーが遅刻2時間。"),
  yuujin.say("卒業できなかった。カメラは壊れた。人生もやり直しになった。"),
  yuujin.say("――まっすー バッドエンド――"),
]);

massuRouteMain.action([
  yuujin.say("まっすーに呼び出された。珍しく真面目な顔をしている。"),
  massu.say("ねえ、ちょっと聞いてほしいんだけど。卒研とカメラと遠距離、全部あって……正直何も手につかない"),
  massu.say("先週の中間発表、ちょっと遅れちゃったし、このままだとやばいかなって"),
  yuujin.say("（ソフトボール全国まで行った努力家が、珍しくしんどそうだ）"),
  Menu.prompt("どう答える？")
    .choose("卒研を最優先にするよう整理する", [
      yuujin.say("まず卒研。カメラは卒業後にいくらでもできる。遠距離の不安は話し合いで解決しろ"),
      massu.say("……そうだよね。わかった。今週末、ちゃんと向き合う"),
      gameFlags.set("massu_good_choice", true),
      massuRouteMain.jumpTo(massuHappyEnd),
    ])
    .choose("カメラも遠距離も大事にするよう応援する", [
      yuujin.say("全部大事だよ。バランスよくやっていこう"),
      massu.say("うん、頑張ってみる！"),
      massuRouteMain.jumpTo(massuNormalEnd),
    ])
    .choose("「カメラが一番大事」と全肯定する", [
      yuujin.say("カメラ、めちゃくちゃいいじゃん。それで生きていこうよ"),
      massu.say("そ、そうだよね……！カメラで生きる！！"),
      gameFlags.set("massu_good_choice", false),
      massuRouteMain.jumpTo(massuBadEnd),
    ]),
]);

export { massuHappyEnd, massuNormalEnd, massuBadEnd };
