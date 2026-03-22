import { Scene, Menu, Condition, Image } from "narraleaf-react";
import { yuujin, massu } from "../../characters";
import { gameFlags } from "../../store/gameState";
import { finaleScene } from "../endings/finale";
import { gameEvents } from "../../store/gameEvents";

const massuRouteImg = new Image({ src: "/characters/massu/massu_route.png" });

export const massuRouteMain = new Scene("massu-route-main", {
  background: "#1f2937",
});

massuRouteMain.action([
  massuRouteImg.show(),
  yuujin.say("まっすーに呼び出された。大破したカメラを両手で持っている。"),
  massu.say("ねえ……修理に出すか迷ってて。センサーも逝ってて、修理代がすごくかかりそうで"),
  massu.say("でもこのカメラ、大学4年間ずっと一緒だったんだよね。捨てたくなくて……"),
  yuujin.say("（ソフトボール全国まで行った努力家が、珍しくしんどそうだ）"),
  Menu.prompt("どう答える？")
    .choose("卒研を最優先にするよう整理する", [
      yuujin.say("まず卒研を終わらせろ。カメラは卒業後に修理しても遅くない。東京でも撮り続けられる"),
      massu.say("……そっか、そうだよね。わかった。まずは卒研、ちゃんと向き合うよ"),
      gameFlags.set("massu_graduation_power", (v) => (v || 0) + 4),
    ])
    .choose("カメラも遠距離も大事にするよう応援する", [
      yuujin.say("修理して持っていけ。このカメラが続けてくれるよ"),
      massu.say("うん……！そうだね、修理代頑張って出す！彼にも東京来てもらうかな！"),
      gameFlags.set("massu_graduation_power", (v) => (v || 0) + 2),
    ])
    .choose("「カメラが一番大事」と全肯定する", [
      yuujin.say("修理じゃなくて買い替えろ。そのままカメラマンで生きていけ"),
      massu.say("そ、そうだよね……！私、カメラで生きる！！あはは！"),
      gameFlags.set("massu_graduation_power", (v) => (v || 0) - 3),
    ]),

  Condition.If(() => {
    gameEvents.triggerChapterTitle("結果発表");
    return false;
  }, []),

  massuRouteMain.jumpTo(finaleScene),
]);
