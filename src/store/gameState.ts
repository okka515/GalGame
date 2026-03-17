import { Persistent } from "narraleaf-react";

// ゲーム全体のフラグ管理（NarraLeaf の Persistent API を使用）
type GameFlags = {
  // プロローグ: 話を聞いたキャラの記録
  prologue_talk_count: number;
  prologue_talked_pack: number;
  prologue_talked_massu: number;
  prologue_talked_saasan: number;
  prologue_talked_haruchiro: number;
  prologue_talked_tonapi: number;

  // 第1章: 最初に助けるキャラ
  ch1_first_pack: boolean;
  ch1_first_massu: boolean;
  ch1_first_saasan: boolean;
  ch1_first_haruchiro: boolean;
  ch1_first_tonapi: boolean;

  // 各キャラの問題解決フラグ
  pack_resolved: boolean;
  massu_resolved: boolean;
  saasan_resolved: boolean;
  haruchiro_resolved: boolean;
  tonapi_resolved: boolean;

  // 個別ルート選択フラグ
  route_pack: boolean;
  route_massu: boolean;
  route_saasan: boolean;
  route_haruchiro: boolean;
  route_tonapi: boolean;

  // 各キャラの卒業力（0〜10）
  // 0〜3: バッドエンド（卒業不可）
  // 4〜6: ノーマルエンド（普通に卒業）
  // 7〜10: ハッピーエンド（首席級）
  pack_graduation_power: number;
  massu_graduation_power: number;
  saasan_graduation_power: number;
  haruchiro_graduation_power: number;
  tonapi_graduation_power: number;

  // 特殊フラグ
  haruchiro_triangle: boolean; // 三角関係ルート
};

export const gameFlags = new Persistent<GameFlags>("galgame_flags", {
  prologue_talk_count: 0,
  prologue_talked_pack: 0,
  prologue_talked_massu: 0,
  prologue_talked_saasan: 0,
  prologue_talked_haruchiro: 0,
  prologue_talked_tonapi: 0,
  ch1_first_pack: false,
  ch1_first_massu: false,
  ch1_first_saasan: false,
  ch1_first_haruchiro: false,
  ch1_first_tonapi: false,
  pack_resolved: false,
  massu_resolved: false,
  saasan_resolved: false,
  haruchiro_resolved: false,
  tonapi_resolved: false,
  route_pack: false,
  route_massu: false,
  route_saasan: false,
  route_haruchiro: false,
  route_tonapi: false,
  pack_graduation_power: 3,
  massu_graduation_power: 3,
  saasan_graduation_power: 3,
  haruchiro_graduation_power: 3,
  tonapi_graduation_power: 3,
  haruchiro_triangle: false,
});
