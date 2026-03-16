import { Scene } from "narraleaf-react";
import { yuujin } from "../../characters";

// ===== グループ全員卒業トゥルーエンド =====
export const groupTrueEnd = new Scene("group-true-end", {
  background: "#fef9c3",
});
groupTrueEnd.action([
  yuujin.say("追いコン当日。6人全員、ちゃんとここにいる。"),
  yuujin.say("ぱっくは起業の話を止めないし、まっすーはカメラを持ち込んでいるし、"),
  yuujin.say("さーさんは謎の自信でゲストとして喋り始めるし、"),
  yuujin.say("はるちろはマチアプの子を呼ぼうとしているし、となっぴーはカビの培養結果を発表しようとしている。"),
  yuujin.say("……うん。"),
  yuujin.say("結局この6人が一番おもろい。"),
  yuujin.say("全員卒業。めでたし。"),
]);

// ===== 友情崩壊エンド =====
export const friendshipBadEnd = new Scene("friendship-bad-end", {
  background: "#1c1c2e",
});
friendshipBadEnd.action([
  yuujin.say("追いコン当日。雰囲気がおかしい。"),
  yuujin.say("特定の子だけをずっと優先し続けた結果、他の子たちに何かが積み上がっていた。"),
  yuujin.say("「最近なんか、あんた変わったよね」"),
  yuujin.say("それが合図だった。"),
  yuujin.say("追いコンは…反省会になった。"),
  yuujin.say("――友情崩壊エンド――"),
]);

// ===== 三角関係エンド =====
export const triangleEnd = new Scene("triangle-end", {
  background: "#3b1a4a",
});
triangleEnd.action([
  yuujin.say("追いコン会場に、想定外の人物が2人来ていた。"),
  yuujin.say("はるちろのマチアプの子と、DroidKaigiで出会った子。"),
  yuujin.say("はるちろは青ざめ、会場は静まり返り、"),
  yuujin.say("さーさんだけが「これ、めちゃくちゃおもろいな」と小声で言った。"),
  yuujin.say("修羅場は3時間続いた。"),
  yuujin.say("――三角関係エンド――"),
]);

// ===== 主人公だけ疲弊エンド =====
export const exhaustionEnd = new Scene("exhaustion-end", {
  background: "#374151",
});
exhaustionEnd.action([
  yuujin.say("全員の相談に乗り続けた。"),
  yuujin.say("ぱっくの起業、まっすーの遅刻、さーさんの車検、はるちろのマチアプ、となっぴーのカビ。"),
  yuujin.say("全員、なんとか卒業した。"),
  yuujin.say("追いコンで、みんなが口を揃えて言った。"),
  yuujin.say("「お前が一番危なかったな」"),
  yuujin.say("……そうかもしれない。"),
  yuujin.say("――主人公疲弊エンド（隠しエンド）――"),
]);
