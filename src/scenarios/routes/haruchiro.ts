import { Scene, Menu } from "narraleaf-react";
import { yuujin, haruchiro } from "../../characters";
import { gameFlags } from "../../store/gameState";
import { triangleEnd, groupTrueEnd } from "../endings/group";

export const haruchiroRouteMain = new Scene("haruchiro-route-main", {
  background: "#1e1b4b",
});

const haruchiroHappyEnd = new Scene("haruchiro-happy-end", {
  background: "#ede9fe",
});
haruchiroHappyEnd.action([
  haruchiro.say("マチアプ、ちゃんとプロフィール直した。DroidKaigiの子とも話したけど、ただの知り合いだった"),
  haruchiro.say("卒研もまとまった。GitHubにリンクも貼れたし"),
  yuujin.say("はるちろが落ち着いた。学業も恋愛も両立できる大人になっていた。"),
  yuujin.say("――はるちろ ハッピーエンド――"),
  haruchiroRouteMain.jumpTo(groupTrueEnd),
]);

const haruchiroNormalEnd = new Scene("haruchiro-normal-end", {
  background: "#c4b5fd",
});
haruchiroNormalEnd.action([
  haruchiro.say("まあ、なんとか卒業できました"),
  yuujin.say("はるちろが卒業した。恋愛はまだ迷走中だが、それもまたはるちろらしい。"),
  yuujin.say("――はるちろ ノーマルエンド――"),
  haruchiroRouteMain.jumpTo(groupTrueEnd),
]);

const haruchiroBadEnd = new Scene("haruchiro-bad-end", {
  background: "#1c1c2e",
});
haruchiroBadEnd.action([
  yuujin.say("恋愛を煽りすぎた結果——"),
  haruchiro.say("マチアプの子に会いに行ってきます。卒研？来年でいいでしょ"),
  yuujin.say("はるちろは引きこもった。"),
  yuujin.say("卒業できなかった。"),
  yuujin.say("――はるちろ バッドエンド――"),
]);

haruchiroRouteMain.action([
  yuujin.say("はるちろから深刻な相談が来た。"),
  haruchiro.say("あの、実はマチアプで気になる人ができて……"),
  haruchiro.say("でもDroidKaigiで出会った人もいて。プロフィールにgitリンク貼ろうとしたら止められたし、服装も店員さんに全部決めてもらったし"),
  yuujin.say("（脳内が恋愛で埋まっている。しかも技術者らしいズレが随所に出ている）"),
  Menu.prompt("どう答える？")
    .choose("ブレーキを踏んで卒研を優先させる", [
      yuujin.say("まず卒研を終わらせろ。gitリンクはプロフィールじゃなくてポートフォリオに貼れ"),
      haruchiro.say("そ、そうですよね……わかりました"),
      gameFlags.set("haruchiro_good_choice", true),
      haruchiroRouteMain.jumpTo(haruchiroHappyEnd),
    ])
    .choose("両方うまくいくよう応援する", [
      yuujin.say("どちらも大事にしていこう。でも卒研だけは絶対に終わらせるんだぞ"),
      haruchiro.say("頑張ります！"),
      haruchiroRouteMain.jumpTo(haruchiroNormalEnd),
    ])
    .choose("「両方行け！」と煽る", [
      yuujin.say("両方いい顔しとけ！二股上等！"),
      haruchiro.say("え？！そ、そういうことに？！"),
      gameFlags.set("haruchiro_triangle", true),
      haruchiroRouteMain.jumpTo(triangleEnd),
    ])
    .choose("恋愛だけを全力で応援する", [
      yuujin.say("恋愛だ！卒研より大事なものがある！"),
      haruchiro.say("そうですよね！！行ってきます！！"),
      gameFlags.set("haruchiro_good_choice", false),
      haruchiroRouteMain.jumpTo(haruchiroBadEnd),
    ]),
]);

export { haruchiroHappyEnd, haruchiroNormalEnd, haruchiroBadEnd };
