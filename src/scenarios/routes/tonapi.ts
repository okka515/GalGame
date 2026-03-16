import { Scene, Menu } from "narraleaf-react";
import { yuujin, tonapi } from "../../characters";
import { gameFlags } from "../../store/gameState";
import { groupTrueEnd } from "../endings/group";

export const tonapiRouteMain = new Scene("tonapi-route-main", {
  background: "#042f2e",
});

const tonapiHappyEnd = new Scene("tonapi-happy-end", {
  background: "#ccfbf1",
});
tonapiHappyEnd.action([
  tonapi.say("卒研の発表、無事終わりました。化学系メーカーからも内定もらえました"),
  tonapi.say("バレーのチームも優勝しましたし、ちょうどよかったです"),
  yuujin.say("となっぴーが化学系メーカーに就職した。"),
  yuujin.say("研究成果と推しチームの優勝が重なり、本人は静かに歓喜していた。"),
  yuujin.say("数十年後、ノーベル賞候補の噂が流れる。"),
  yuujin.say("――となっぴー ハッピーエンド――"),
  tonapiRouteMain.jumpTo(groupTrueEnd),
]);

const tonapiNormalEnd = new Scene("tonapi-normal-end", {
  background: "#99f6e4",
});
tonapiNormalEnd.action([
  tonapi.say("卒業できました。カビも今のところ大丈夫です"),
  yuujin.say("となっぴーが堅実に卒業した。カビの行方は不明。"),
  yuujin.say("――となっぴー ノーマルエンド――"),
  tonapiRouteMain.jumpTo(groupTrueEnd),
]);

const tonapiBadEnd = new Scene("tonapi-bad-end", {
  background: "#1c1c2e",
});
tonapiBadEnd.action([
  yuujin.say("雑に扱い続けた結果——"),
  tonapi.say("……研究倫理委員会から呼ばれました"),
  yuujin.say("となっぴーは化学界から追放された。"),
  yuujin.say("河原で石を積んでいる写真がたまにInstagramに上がる。"),
  yuujin.say("――となっぴー バッドエンド――"),
]);

tonapiRouteMain.action([
  yuujin.say("となっぴーから連絡が来た。"),
  tonapi.say("えと、ちょっと相談があって。カビが思ったより増えてきて……"),
  tonapi.say("新しい化合物を発見したかもしれないんですけど、倫理的にどうなのかなと思って"),
  tonapi.say("あと、旅行で河原に石を積みすぎたのが少し気になっています"),
  yuujin.say("（静かに、しかし確実に危ない方向に向かっている）"),
  Menu.prompt("どう答える？")
    .choose("研究の倫理的な部分をきちんと確認させる", [
      yuujin.say("その発見、まず指導教員に報告しろ。倫理委員会を通してから発表するんだぞ"),
      tonapi.say("そうですね……わかりました"),
      gameFlags.set("tonapi_good_choice", true),
      tonapiRouteMain.jumpTo(tonapiHappyEnd),
    ])
    .choose("研究の話を一緒に整理してあげる", [
      yuujin.say("どんな化合物か教えてくれ。一緒に整理しよう"),
      tonapi.say("はい。実は……"),
      tonapiRouteMain.jumpTo(tonapiNormalEnd),
    ])
    .choose("「すごい！」と褒めるだけで放置する", [
      yuujin.say("それすごいじゃん！なんか大発見じゃない？"),
      tonapi.say("……そうですかね。じゃあ続けます"),
      gameFlags.set("tonapi_good_choice", false),
      tonapiRouteMain.jumpTo(tonapiBadEnd),
    ]),
]);

export { tonapiHappyEnd, tonapiNormalEnd, tonapiBadEnd };
