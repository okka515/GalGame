import { Scene, Menu, Condition } from "narraleaf-react";
import { yuujin, pack } from "../../characters";
import { gameFlags } from "../../store/gameState";
import { finaleScene } from "../endings/finale";
import { gameEvents } from "../../store/gameEvents";

// ぱっくルート: メインシーン
export const packRouteMain = new Scene("pack-route-main", {
  background: "#1e3a5f",
});

packRouteMain.action([
  yuujin.say("ぱっくから呼び出された。"),
  pack.say("なあ聞いてくれよ。起業の技術開発、サークルのアプリ、卒論……正直全部が噛み合ってなくてなんか詰まってる"),
  pack.say("フランスのSuica事件のせいで心理的ダメージも受けてるし、なんかうまく動けない感じがしてな"),
  yuujin.say("（あのSuica罰金事件は精神的にも効いていたらしい。でもこれが整理できれば、ぱっくは本来最強の行動力を持ってるはずだ）"),
  Menu.prompt("どう答える？")
    .choose("「まず卒論を軸にすべてを整理しろ」", [
      yuujin.say("「まず卒論を最優先に据えろ。それを出せば他の全部が動きやすくなる。起業もアプリも、卒業してからの方が胸張れるだろ」"),
      pack.say("……そうだな。卒業を基盤にするのが一番論理的か。わかった、まずそこから片付けるわ"),
      yuujin.say("ぱっくの目に、落ち着いた光が戻った。"),
      gameFlags.set("pack_graduation_power", (v) => (v || 0) + 4),
    ])
    .choose("「Suicaの話、もっと詳しく聞かせろ」", [
      yuujin.say("「詰まってる前に、まずあのSuica事件の詳細が気になりすぎる。話せ」"),
      pack.say("だよな！あのエラー音のあと改札員が3人来てな……って、そういう話じゃなかったわ。"),
      pack.say("…でも話したら、なんかちょっと気が楽になったわ。よし、とりあえず卒論やるか"),
      yuujin.say("（笑い話にすることで、ぱっくの気持ちが少し軽くなったようだ）"),
      gameFlags.set("pack_graduation_power", (v) => (v || 0) + 2),
    ])
    .choose("「たいやきのジンクス通りうまくいくよ」", [
      yuujin.say("「心配すんな。たいやきを用水路で泳がせたあのジンクスが、まだ働いてるはずだ」"),
      pack.say("……お前、覚えてたのか。まじか。なんか元気出てきたわ。全部いっちょやってやるぞ！"),
      yuujin.say("（根拠のないジンクスで奮い立つぱっくを見て、それでいいのかとも思ったが……悪くない顔をしていた）"),
      gameFlags.set("pack_graduation_power", (v) => (v || 0) + 3),
    ]),

  Condition.If(() => {
    gameEvents.triggerChapterTitle("結果発表");
    return false;
  }, []),

  packRouteMain.jumpTo(finaleScene),
]);
