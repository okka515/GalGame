import { Persistent } from "narraleaf-react";

// ゲーム全体のフラグ管理（NarraLeaf の Persistent API を使用）
type GameFlags = {
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

  // 個別ルート内の選択フラグ
  pack_good_choice: boolean;
  massu_good_choice: boolean;
  saasan_good_choice: boolean;
  haruchiro_good_choice: boolean;
  tonapi_good_choice: boolean;

  // 特殊フラグ
  haruchiro_triangle: boolean; // 三角関係ルート
  friendship_broken: boolean;  // 友情崩壊
  player_exhausted: boolean;   // 主人公疲弊
};

export const gameFlags = new Persistent<GameFlags>("galgame_flags", {
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
  pack_good_choice: false,
  massu_good_choice: false,
  saasan_good_choice: false,
  haruchiro_good_choice: false,
  tonapi_good_choice: false,
  haruchiro_triangle: false,
  friendship_broken: false,
  player_exhausted: false,
});
