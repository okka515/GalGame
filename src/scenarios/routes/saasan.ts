import { Scene, Menu, Condition, Image } from "narraleaf-react";
import { yuujin, saasan } from "../../characters";
import { gameFlags } from "../../store/gameState";
import { finaleScene } from "../endings/finale";
import { gameEvents } from "../../store/gameEvents";
import { resultAnnounceSound } from "../../store/gameSoundEffect";

const saasanRouteImg = new Image({ src: "/characters/saasan/saasan_route.png" });

export const saasanRouteMain = new Scene("saasan-route-main", {
  background: "#052e16",
});

saasanRouteMain.action([
  saasanRouteImg.show(),
  yuujin.say("さーさんから連絡が来た。珍しい。"),
  saasan.say("なあ、俺のことちょっと相談に乗ってくれるか"),
  yuujin.say("いつも完璧でいるさーさんが、珍しく言葉を選んでいた。"),
  saasan.say("名古屋に来てから全部うまくいってる。CTOとして会社の技術は俺が全部持つ。スマブラも、カラオケも、まあ余裕だ"),
  saasan.say("でも……料理はダメで、車のことで迷惑かけたのは本当に悪かったと思ってる。完璧じゃいられないこともあるよな"),
  yuujin.say("（さーさんが弱さを見せた。珍しいことだ）"),
  Menu.prompt("どう答える？")
    .choose("「CTOとしての話をもっと聞かせてくれ」", [
      yuujin.say("「弱点はわかった。でもCTOとしての話、もっと聞かせてくれよ。お前の技術の話が聞きたい」"),
      saasan.say("……そうか。じゃあ話す。俺の描いてるアーキテクチャ、聞いてくれるか"),
      yuujin.say("（さーさんの目が輝いた。これが彼の本当の領域だ）"),
      gameFlags.set("saasan_graduation_power", (v) => (v || 0) + 2),
    ])
    .choose("「俺のカルボナーラを食わせてやる」", [
      yuujin.say("「よし、今夜俺が本物のカルボナーラを作ってやる。ネギは入れないから安心しろ」"),
      saasan.say("……マジか？お前が作れるのか？"),
      yuujin.say("（その夜、さーさんは初めて炒り卵が入っていないカルボナーラを食べた。少し目が潤んでいた）"),
      gameFlags.set("saasan_graduation_power", (v) => (v || 0) - 1),
    ])
    .choose("「完璧じゃなくていい。そのままでいろ」", [
      yuujin.say("「お前が完璧である必要はない。料理が下手でも、車をぶつけても、それでもお前はお前だろ」"),
      saasan.say("……ははっ。そうだな。お前に言われると、素直に聞ける気がするわ"),
      yuujin.say("（強者が弱さを認めたとき、それは本当の強さになる）"),
      gameFlags.set("saasan_graduation_power", (v) => (v || 0) + 4),
    ])
    .choose("「まあ余裕だろ。お前ならなんとかなる」", [
      yuujin.say("「お前なら全部大丈夫だろ。余裕余裕」"),
      saasan.say("……まあ、そうかもな。余裕だ"),
      yuujin.say("（この後、さーさんは何も解決しないまま静かに突き進んでいった）"),
      gameFlags.set("saasan_graduation_power", (v) => (v || 0) - 3),
    ]),

  Condition.If(() => {
    gameEvents.triggerChapterTitle("結果発表");
    return false;
  }, []),
  resultAnnounceSound.play(),

  saasanRouteMain.jumpTo(finaleScene),
]);
