import { Scene, Menu } from "narraleaf-react";
import { yuujin } from "../../characters";
import { gameFlags } from "../../store/gameState";
import { packRouteMain } from "../routes/pack";
import { massuRouteMain } from "../routes/massu";
import { saasanRouteMain } from "../routes/saasan";
import { haruchiroRouteMain } from "../routes/haruchiro";
import { tonapiRouteMain } from "../routes/tonapi";
import { exhaustionEnd } from "../endings/group";

// 第4章: 個別ルート確定
export const chapter4Scene = new Scene("chapter4", {
  background: "#111827",
});

chapter4Scene.action([
  yuujin.say("追いコンまで、あと2週間。"),
  yuujin.say("5人全員、それぞれの問題を抱えながらも、なんとかここまで来た。"),
  yuujin.say("……でも、一人だけ特別に最後まで面倒を見るとしたら？"),
  yuujin.say("自分の中で、誰かの顔が浮かぶ。"),
  Menu.prompt("誰の個別ルートへ？")
    .choose("ぱっくに全力で向き合う", [
      gameFlags.set("route_pack", true),
      chapter4Scene.jumpTo(packRouteMain),
    ])
    .choose("まっすーに全力で向き合う", [
      gameFlags.set("route_massu", true),
      chapter4Scene.jumpTo(massuRouteMain),
    ])
    .choose("さーさんに全力で向き合う", [
      gameFlags.set("route_saasan", true),
      chapter4Scene.jumpTo(saasanRouteMain),
    ])
    .choose("はるちろに全力で向き合う", [
      gameFlags.set("route_haruchiro", true),
      chapter4Scene.jumpTo(haruchiroRouteMain),
    ])
    .choose("となっぴーに全力で向き合う", [
      gameFlags.set("route_tonapi", true),
      chapter4Scene.jumpTo(tonapiRouteMain),
    ])
    .choose("全員均等に見る（真のトゥルーを目指す）", [
      yuujin.say("全員の面倒を見続けた結果……"),
      gameFlags.set("player_exhausted", true),
      chapter4Scene.jumpTo(exhaustionEnd),
    ]),
]);
