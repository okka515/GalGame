import { Scene, Menu, Condition, Image } from "narraleaf-react";
import { yuujin, pack } from "../../characters";
import { gameFlags } from "../../store/gameState";
import { finaleScene } from "../endings/finale";
import { gameEvents } from "../../store/gameEvents";

const packRouteImg = new Image({ src: "/characters/pack/pack_route.png" });

// ぱっくルート: メインシーン
export const packRouteMain = new Scene("pack-route-main", {
  background: "#1e3a5f",
});

packRouteMain.action([
  packRouteImg.show(),
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
    .choose("「Suicaの話、笑い飛ばせ」", [
      yuujin.say("「あのSuica事件、詰まってる場合か。笑い飛ばして前に進めよ」"),
      pack.say("だよな！あのエラー音のあと改札員が3人来てな……って、憑き物が落ちた気がするわ。よし、卒論やるか"),
      yuujin.say("（笑い話にしたら気が軽くなったようだ。これでいい）"),
      gameFlags.set("pack_graduation_power", (v) => (v || 0) + 2),
    ])
    .choose("「たいやきのジンクスを信じろ」", [
      yuujin.say("「心配すんな。たいやきを用水路で泳がせたあのジンクスが、まだ働いてるはずだ」"),
      pack.say("……お前、覚えてたのか。まじか。なんか元気出てきたわ。全部いっちょやってやるぞ！"),
      yuujin.say("（根拠のないジンクスで奮い立つぱっくを見て……まあ、これはこれでいいかと思った）"),
      gameFlags.set("pack_graduation_power", (v) => (v || 0) - 1),
    ])
    .choose("「全部同時にやれ！お前なら絶対いける！」", [
      yuujin.say("「全部いけるって！起業も、アプリも、卒論も、フランスも！お前なら絶対いける！」"),
      pack.say("そうか！全部やる！！面白いことしか起きないから問題なし！"),
      yuujin.say("（この後、ぱっくはすべてを同時に動かし始めた。結果は……聞かない方がいいかもしれない）"),
      gameFlags.set("pack_graduation_power", (v) => (v || 0) - 3),
    ]),

  Condition.If(() => {
    gameEvents.triggerChapterTitle("結果発表");
    return false;
  }, []),

  packRouteMain.jumpTo(finaleScene),
]);
