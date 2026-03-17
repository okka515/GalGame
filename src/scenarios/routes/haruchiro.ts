import { Scene, Menu } from "narraleaf-react";
import { yuujin, haruchiro } from "../../characters";
import { gameFlags } from "../../store/gameState";
import { finaleScene } from "../endings/finale";

export const haruchiroRouteMain = new Scene("haruchiro-route-main", {
  background: "#1e1b4b",
});

haruchiroRouteMain.action([
  yuujin.say("はるちろから深刻な相談が来た。"),
  haruchiro.say("あの、実はマチアプで気になる人ができて……"),
  haruchiro.say("でもDroidKaigiで出会った人もいて。プロフィールにgitリンク貼ろうとしたら止められたし、服装も店員さんに全部決めてもらったし"),
  yuujin.say("（脳内が恋愛で埋まっている。しかも技術者らしいズレが随所に出ている）"),
  Menu.prompt("どう答える？")
    .choose("ブレーキを踏んで卒研を優先させる", [
      yuujin.say("まず卒研を終わらせろ。gitリンクはプロフィールじゃなくてポートフォリオに貼れ"),
      haruchiro.say("そ、そうですよね……わかりました"),
      gameFlags.set("haruchiro_graduation_power", (v) => (v || 0) + 4),
      haruchiroRouteMain.jumpTo(finaleScene),
    ])
    .choose("両方うまくいくよう応援する", [
      yuujin.say("どちらも大事にしていこう。でも卒研だけは絶対に終わらせるんだぞ"),
      haruchiro.say("頑張ります！"),
      gameFlags.set("haruchiro_graduation_power", (v) => (v || 0) + 2),
      haruchiroRouteMain.jumpTo(finaleScene),
    ])
    .choose("「両方行け！」と煽る", [
      yuujin.say("両方いい顔しとけ！二股上等！"),
      haruchiro.say("え？！そ、そういうことに？！"),
      gameFlags.set("haruchiro_triangle", true),
      gameFlags.set("haruchiro_graduation_power", (v) => (v || 0) - 1),
      haruchiroRouteMain.jumpTo(finaleScene),
    ])
    .choose("恋愛だけを全力で応援する", [
      yuujin.say("恋愛だ！卒研より大事なものがある！"),
      haruchiro.say("そうですよね！！行ってきます！！"),
      gameFlags.set("haruchiro_graduation_power", (v) => (v || 0) - 3),
      haruchiroRouteMain.jumpTo(finaleScene),
    ]),
]);
