import { Condition, Scene } from "narraleaf-react";
import { yuujin } from "../../../characters";
import { gameFlags } from "../../../store/gameState";
import { gameEvents } from "../../../store/gameEvents";

export const epilogue = new Scene("finale-epilogue", { background: "/backgrounds/title.png" });

// gameFlags.evaluate のコールバックで実値をキャプチャする変数
let _pack = 3;
let _massu = 3;
let _saasan = 3;
let _haruchiro = 3;
let _tonapi = 3;
let _triangle = false;

epilogue.action([
  yuujin.say("……そして俺も、なんとか卒業した。"),
  yuujin.say("追いコンは、それぞれの結末を背負った6人で迎えた。"),
  yuujin.say("最高の夜だった。"),
  // evaluate コールバック内で実値をキャプチャ（return false で条件ブロックは実行しない）
  Condition.If(gameFlags.evaluate("pack_graduation_power", (v: number) => { _pack = v ?? 3; return false; }), []),
  Condition.If(gameFlags.evaluate("massu_graduation_power", (v: number) => { _massu = v ?? 3; return false; }), []),
  Condition.If(gameFlags.evaluate("saasan_graduation_power", (v: number) => { _saasan = v ?? 3; return false; }), []),
  Condition.If(gameFlags.evaluate("haruchiro_graduation_power", (v: number) => { _haruchiro = v ?? 3; return false; }), []),
  Condition.If(gameFlags.evaluate("tonapi_graduation_power", (v: number) => { _tonapi = v ?? 3; return false; }), []),
  Condition.If(gameFlags.evaluate("haruchiro_triangle", (v: boolean) => { _triangle = v ?? false; return false; }), []),
  // キャプチャした値でモーダルを表示
  Condition.If(() => {
    gameEvents.triggerEndingModal({
      pack: _pack,
      massu: _massu,
      saasan: _saasan,
      haruchiro: _haruchiro,
      tonapi: _tonapi,
      haruchiro_triangle: _triangle,
    });
    return false;
  }, []),
]);
