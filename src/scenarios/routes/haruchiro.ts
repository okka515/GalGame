import { Scene, Menu, Condition, Image } from "narraleaf-react";
import { yuujin, haruchiro } from "../../characters";
import { gameFlags } from "../../store/gameState";
import { finaleScene } from "../endings/finale";
import { gameEvents } from "../../store/gameEvents";

const haruchiroRouteImg = new Image({ src: "/characters/haruchiro/haruchiro_route.png" });

export const haruchiroRouteMain = new Scene("haruchiro-route-main", {
  background: "#1e1b4b",
});

haruchiroRouteMain.action([
  haruchiroRouteImg.show(),
  yuujin.say("はるちろから、珍しく深刻そうな相談が来た。"),
  haruchiro.say("あの……DroidKaigiで登壇したあとに、話しかけてきた人がいて"),
  haruchiro.say("マチアプでやり取りしてた人だって気づいて。どうすればいいかわからなくて……プロフィールにgitリンク貼ったのも見てくれてたみたいで"),
  yuujin.say("（マチアプとDroidKaigiで同時に繋がっていたらしい。はるちろらしい巡り合わせだ）"),
  Menu.prompt("どう答える？")
    .choose("ブレーキを踏んで卒研を優先させる", [
      yuujin.say("まず卒研を終わらせろ。恋愛はその後だ"),
      haruchiro.say("そ、そうですよね……わかりました。まずは卒研のタスクから消化します"),
      gameFlags.set("haruchiro_graduation_power", (v) => (v || 0) + 4),
    ])
    .choose("両方うまくいくよう応援する", [
      yuujin.say("どちらも大事にしていこう。でも卒研だけは絶対に終わらせるんだぞ"),
      haruchiro.say("はい！並行処理で頑張ります！"),
      gameFlags.set("haruchiro_graduation_power", (v) => (v || 0) + 2),
    ])
    .choose("「両方行け！」と煽る", [
      yuujin.say("DroidKaigiの縁もマチアプの縁も、全部使え！"),
      haruchiro.say("え？！そ、そういうことに？！デッドロック起きません？！"),
      gameFlags.set("haruchiro_triangle", true),
      gameFlags.set("haruchiro_graduation_power", (v) => (v || 0) - 1),
    ])
    .choose("恋愛だけを全力で応援する", [
      yuujin.say("恋愛だ！卒研より大事なものがある！"),
      haruchiro.say("そうですよね！！フルコミットしてきます！！"),
      gameFlags.set("haruchiro_graduation_power", (v) => (v || 0) - 3),
    ]),

  Condition.If(() => {
    gameEvents.triggerChapterTitle("結果発表");
    return false;
  }, []),

  haruchiroRouteMain.jumpTo(finaleScene),
]);
