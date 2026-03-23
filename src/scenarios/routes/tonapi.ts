import { Scene, Menu, Condition } from "narraleaf-react";
import { yuujin, tonapi } from "../../characters";
import { gameFlags } from "../../store/gameState";
import { finaleScene } from "../endings/finale";
import { gameEvents } from "../../store/gameEvents";
import { resultAnnounceSound } from "../../store/gameSoundEffect";
import { tonappiRouteBgm } from "../../store/gameBgm";


export const tonapiRouteMain = new Scene("tonapi-route-main", {
  background: "/characters/tonappi/tonappi_route.png",
});

tonapiRouteMain.action([
  tonappiRouteBgm.play(),
  yuujin.say("となっぴーから連絡が来た。"),
  tonapi.say("あの……ちょっとだけ、相談していいですか"),
  yuujin.say("いつもより声が少し落ち着いていた。珍しい。"),
  tonapi.say("カビの研究、論文として形にできそうで。教授も応援してくれてます。バレーの推し活も全国大会まで追えた"),
  tonapi.say("全部うまくいったみたいに見えると思うんですけど……なんか、卒業したらこの生活が終わると思ったら"),
  yuujin.say("（彼女が静かに、卒業を恐れているのがわかった）"),
  tonapi.say("石を積み直せなかった話、まだ少し引っかかってるんですよね。フフ"),
  Menu.prompt("どう答える？")
    .choose("「卒業しなくていいよ」と言う", [
      yuujin.say("「無理に卒業しなくていいんじゃないか。研究を続けたいなら院に行けばいい」"),
      tonapi.say("……そうですね！研究を続けます！ただ年単位でカビと向き合う覚悟が！フフフ！"),
      yuujin.say("（背中を押してしまった。となっぴーは卒業できるのだろうか）"),
      gameFlags.set("tonapi_graduation_power", (v) => (v || 0) - 3),
    ])
    .choose("「バレーは社会人になった方が遠征できる」", [
      yuujin.say("「推しのバレーチームは卒業後も応援できるよ。むしろ社会人になったら遠征できる」"),
      tonapi.say("……！ たしかに！就職して推し活費が増えますね！フフフ！"),
      yuujin.say("（突破口は意外なところにあったが、卒業への不安が解消されたとは言い難い）"),
      gameFlags.set("tonapi_graduation_power", (v) => (v || 0) - 1),
    ])
    .choose("「次の石積みは一緒に行こう」", [
      yuujin.say("「卒業しても、次の石積みは一緒に行こう。今度は崩れないやつを」"),
      tonapi.say("……フフ。そっか。じゃあ卒業してからも、よろしくお願いします"),
      yuujin.say("（彼女がようやく笑った。静かに、でも確かに）"),
      gameFlags.set("tonapi_graduation_power", (v) => (v || 0) + 4),
    ])
    .choose("「カビの研究は卒業後も続けられる」", [
      yuujin.say("「研究は卒業で終わらない。就職してからも続けられるし、論文になったら世界に届く」"),
      tonapi.say("……そうですね。そうか、続けていいんですね。フフ"),
      yuujin.say("（彼女の目がまた輝いた。静かな狂気が戻ってきた。それが彼女らしかった）"),
      gameFlags.set("tonapi_graduation_power", (v) => (v || 0) + 2),
    ]),
  tonappiRouteBgm.stop(),

  Condition.If(() => {
    gameEvents.triggerChapterTitle("結果発表");
    return false;
  }, []),
  resultAnnounceSound.play(),

  tonapiRouteMain.jumpTo(finaleScene),
]);
