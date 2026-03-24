import { Scene, Condition } from "narraleaf-react";
import { gameFlags } from "../../store/gameState";
import { finaleScene } from "../endings/finale";
import { packRouteMain } from "./pack";
import { massuRouteMain } from "./massu";
import { saasanRouteMain } from "./saasan";
import { haruchiroRouteMain } from "./haruchiro";
import { tonapiRouteMain } from "./tonapi";

// ルートディスパッチャー：選択された全ルートを順番に巡るための中継ハブ
export const routeDispatcherScene = new Scene("route-dispatcher", {
  background: "/backgrounds/university_winter.png",
});

// Scene.action をクロージャー ( () => [...] ) として渡すことでTDZ(Temporal Dead Zone)を回避
routeDispatcherScene.action(() => [
  Condition.If((ctx: any) => ctx.$("galgame_flags").content.route_pack && !ctx.$("galgame_flags").content.route_pack_done, [
    gameFlags.set("route_pack_done", true),
    routeDispatcherScene.jumpTo(packRouteMain),
  ]).ElseIf((ctx: any) => ctx.$("galgame_flags").content.route_massu && !ctx.$("galgame_flags").content.route_massu_done, [
    gameFlags.set("route_massu_done", true),
    routeDispatcherScene.jumpTo(massuRouteMain),
  ]).ElseIf((ctx: any) => ctx.$("galgame_flags").content.route_saasan && !ctx.$("galgame_flags").content.route_saasan_done, [
    gameFlags.set("route_saasan_done", true),
    routeDispatcherScene.jumpTo(saasanRouteMain),
  ]).ElseIf((ctx: any) => ctx.$("galgame_flags").content.route_haruchiro && !ctx.$("galgame_flags").content.route_haruchiro_done, [
    gameFlags.set("route_haruchiro_done", true),
    routeDispatcherScene.jumpTo(haruchiroRouteMain),
  ]).ElseIf((ctx: any) => ctx.$("galgame_flags").content.route_tonapi && !ctx.$("galgame_flags").content.route_tonapi_done, [
    gameFlags.set("route_tonapi_done", true),
    routeDispatcherScene.jumpTo(tonapiRouteMain),
  ]).Else([
    routeDispatcherScene.jumpTo(finaleScene),
  ]),
]);
