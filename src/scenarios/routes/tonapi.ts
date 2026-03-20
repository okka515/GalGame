import { Scene, Menu, Condition } from "narraleaf-react";
import { yuujin, tonapi } from "../../characters";
import { gameFlags } from "../../store/gameState";
import { finaleScene } from "../endings/finale";
import { gameEvents } from "../../store/gameEvents";

export const tonapiRouteMain = new Scene("tonapi-route-main", {
  background: "#042f2e",
});

tonapiRouteMain.action([
  yuujin.say("となっぴーから連絡が来た。"),
  tonapi.say("あの……ちょっと相談があって。カビが思ったより増えてきているんです。ふふ"),
  tonapi.say("新しい化合物を発見したかもしれないんですけど、倫理的にどうなのかなと思って"),
  tonapi.say("あと、旅行で河原に石を積みすぎたのが少し気になっています。崩れていたので……"),
  yuujin.say("（静かに、しかし確実に危ない方向に向かっている）"),
  Menu.prompt("どう答える？")
    .choose("研究の倫理的な部分をきちんと確認させる", [
      yuujin.say("その発見、まず指導教員に報告しろ。倫理委員会を通してから発表するんだぞ"),
      tonapi.say("そうですね……はい、わかりました。ちゃんと手続きを踏みます"),
      gameFlags.set("tonapi_graduation_power", (v) => (v || 0) + 4),
    ])
    .choose("研究の話を一緒に整理してあげる", [
      yuujin.say("どんな化合物か教えてくれ。一緒に整理しよう"),
      tonapi.say("はい！実はですね……"),
      gameFlags.set("tonapi_graduation_power", (v) => (v || 0) + 2),
    ])
    .choose("「すごい！」と褒めるだけで放置する", [
      yuujin.say("それすごいじゃん！なんか大発見じゃない？"),
      tonapi.say("……そうですかね。じゃあ、もう少し培養を続けます"),
      gameFlags.set("tonapi_graduation_power", (v) => (v || 0) - 3),
    ]),

  Condition.If(() => {
    gameEvents.triggerChapterTitle("結果発表");
    return false;
  }, []),

  tonapiRouteMain.jumpTo(finaleScene),
]);
