import { Scene, Menu, Condition } from "narraleaf-react";
import { yuujin, pack, massu, saasan, haruchiro, tonapi } from "../../characters";
import { gameFlags } from "../../store/gameState";
import { packRouteMain } from "../routes/pack";
import { massuRouteMain } from "../routes/massu";
import { saasanRouteMain } from "../routes/saasan";
import { haruchiroRouteMain } from "../routes/haruchiro";
import { tonapiRouteMain } from "../routes/tonapi";
import { gameEvents } from "../../store/gameEvents";

// 第4章: 冬（12月〜）「最終追い込みと個別ルート確定」
// シーンを末端から定義して jumpTo で数珠つなぎにする

// 個別ルート選択シーン（最後）
const chapter4RouteSelect = new Scene("chapter4-route-select", {
  background: "#111827",
});
chapter4RouteSelect.action([
  yuujin.say("冬が終わろうとしている。卒業と追いコンまで、あと少し。"),
  yuujin.say("5人全員、それぞれの問題を抱えながらも、なんとかここまで来た。"),
  yuujin.say("……でも、一人だけ特別に最後まで面倒を見るとしたら？"),
  yuujin.say("自分の中で、誰かの顔が浮かぶ。"),
  Menu.prompt("誰の個別ルートへ？")
    .choose("ぱっくに全力で向き合う", [
      gameFlags.set("route_pack", true),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 2 })), // ルート選択ボーナス
      chapter4RouteSelect.jumpTo(packRouteMain),
    ])
    .choose("まっすーに全力で向き合う", [
      gameFlags.set("route_massu", true),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 2 })),
      chapter4RouteSelect.jumpTo(massuRouteMain),
    ])
    .choose("さーさんに全力で向き合う", [
      gameFlags.set("route_saasan", true),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 2 })),
      chapter4RouteSelect.jumpTo(saasanRouteMain),
    ])
    .choose("はるちろに全力で向き合う", [
      gameFlags.set("route_haruchiro", true),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 2 })),
      chapter4RouteSelect.jumpTo(haruchiroRouteMain),
    ])
    .choose("となっぴーに全力で向き合う", [
      gameFlags.set("route_tonapi", true),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 2 })),
      chapter4RouteSelect.jumpTo(tonapiRouteMain),
    ]),
]);

// となっぴーの冬 → ルート選択へ
const ch4TonapiScene = new Scene("ch4-tonapi", {
  background: "#042f2e",
});
ch4TonapiScene.action([
  yuujin.say("【冬の追い込み: 論文か、応援か】"),
  yuujin.say("となっぴーが育てていた謎のカビが、まさかの学会発表レベルの成果になりかけていた。"),
  tonapi.say("教授が『これはいける』って言ってくれて……フフ、ついに私の時代が来ました"),
  yuujin.say("だが机の上には、冬のバレーボール大会のチケットが置いてある。"),
  tonapi.say("ただ、今週末から推しチームの全国大会で。現地に行かないと死ぬ病気なんです"),
  yuujin.say("論文の提出期限も今週末だ。"),
  Menu.prompt("どうアドバイスする？")
    .choose("論文の執筆に集中しろ", [
      yuujin.say("「バレーは来年もある。今は論文の執筆に集中しろ」"),
      tonapi.say("うぅ……わかりました。推しには心の中でエールを送ります……"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 3 })),
    ])
    .choose("現地で応援しながら書け", [
      yuujin.say("「現地で応援しながらノートPCで論文書け」"),
      tonapi.say("スポ根ですね！よし、タイピングの音がバレーのスパイクみたいに響かせてきます！"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 2 })),
    ])
    .choose("俺も応援に行く", [
      yuujin.say("「よし、じゃあ俺も応援に行くか」"),
      tonapi.say("本当ですか！？じゃあ一緒にメガホン叩きましょう！フフフ！"),
      yuujin.say("（結局、二人で論文そっちのけで応援してしまった）"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 1 })),
    ]),

  Condition.If(() => {
    gameEvents.triggerChapterTitle("誰を選ぶ？");
    return false;
  }, []),

  ch4TonapiScene.jumpTo(chapter4RouteSelect),

]);

// はるちろの冬 → となっぴーへ
const ch4HaruchiroScene = new Scene("ch4-haruchiro", {
  background: "#1e1b4b",
});
ch4HaruchiroScene.action([
  yuujin.say("【冬の追い込み: デートか、発表練習か】"),
  yuujin.say("卒論の最終発表が迫る中、はるちろはスマホの画面と睨めっこしていた。"),
  haruchiro.say("どうしよう！クリスマスのデートの約束、発表練習の日と完全に被っちゃいました！！"),
  yuujin.say("そもそもマッチングアプリで出会った相手とクリスマスまで関係が続いていることに驚きだ。"),
  haruchiro.say("でもここで行かないと、せっかくの継続的インテグレーションが……"),
  Menu.prompt("どうツッコミを入れる？")
    .choose("発表練習が最優先だろ", [
      yuujin.say("「お前、卒業できなきゃデートどころじゃないだろ。発表練習が最優先だ」"),
      haruchiro.say("っ！……ですね。リスケのお願いを送ってみます！"),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 3 })),
      ch4HaruchiroScene.jumpTo(ch4TonapiScene),
    ])
    .choose("マチアプの子を練習相手にしろ", [
      yuujin.say("「デートでマチアプの子を発表練習の相手にしろ」"),
      haruchiro.say("なるほど！専門外の人に伝わるかどうかのテストですね！"),
      yuujin.say("（デートが完全に学会発表の場になってしまったらしい）"),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 2 })),
      ch4HaruchiroScene.jumpTo(ch4TonapiScene),
    ])
    .choose("俺が代わりに発表してやるよ", [
      yuujin.say("「しょうがない。俺が代わりに発表してやるよ」"),
      haruchiro.say("えっ！？代打ち！？ありがてええぇぇ！行ってきます！"),
      yuujin.say("（はるちろの卒業が完全に俺の手にかかってしまった）"),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 1 })),
      ch4HaruchiroScene.jumpTo(ch4TonapiScene),
    ]),
]);

// さーさんの冬 → はるちろへ
const ch4SaasanScene = new Scene("ch4-saasan", {
  background: "#052e16",
});
ch4SaasanScene.action([
  yuujin.say("【冬の追い込み: 完璧な資料と抜けてる足元】"),
  yuujin.say("さーさんは卒論の執筆をハイスピードで終わらせていた。"),
  saasan.say("ふぅ。卒論のドラフト、完成したわ。俺の文章力ならこれで修論でも通るだろ"),
  yuujin.say("相変わらずの自信だが、画面を覗くと致命的な欠陥があった。"),
  yuujin.say("論文の文字がすべて丸ゴシック体だ。しかも参考文献がゼロ。"),
  Menu.prompt("どう指摘する？")
    .choose("「参考文献がないぞ。あとフォント直せ」", [
      yuujin.say("「お前の論文、よく見たら参考文献がないぞ。あとフォント直せ」"),
      saasan.say("あっ。……マジか。フォーマット落としてくるわ"),
      yuujin.say("素直に直した。さーさんは有能なので修正も早い。"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 3 })),
      ch4SaasanScene.jumpTo(ch4HaruchiroScene),
    ])
    .choose("「とりあえずカルボナーラ食うか？」", [
      yuujin.say("「とりあえず、炒り卵カルボナーラ食うか？」"),
      saasan.say("おう！俺が作ってやるよ！ネギ抜きな！"),
      yuujin.say("（現実逃避に走ってしまった）"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 2 })),
      ch4SaasanScene.jumpTo(ch4HaruchiroScene),
    ])
    .choose("「とりあえず寝ろ」", [
      yuujin.say("「完璧だな。とりあえず寝ろ」"),
      saasan.say("だろ？明日は海陽町までドライブでも行くか"),
      yuujin.say("（後日、担当教員から雷が落ちた）"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 1 })),
      ch4SaasanScene.jumpTo(ch4HaruchiroScene),
    ]),
]);

// まっすーの冬 → さーさんへ
const ch4MassuScene = new Scene("ch4-massu", {
  background: "#1f2937",
});
ch4MassuScene.action([
  yuujin.say("【冬の追い込み: キャリアか、彼氏か】"),
  yuujin.say("まっすーの就活がようやく終わりを迎えていた。"),
  massu.say("東京の第一志望から内定出たー！やったー！あはは！"),
  yuujin.say("だが、その目はどこか泳いでいる。"),
  massu.say("でもさ……彼がいるのは地元じゃん？東京に行ったら、遠距離のままになっちゃうなぁって。"),
  massu.say("どっちを選ぶべきかな……"),
  Menu.prompt("どう答える？")
    .choose("「自分のキャリアを優先しろ」", [
      yuujin.say("「自分のキャリアを優先しろ。東京で広報やりたいんだろ？」"),
      massu.say("……うん！そうだよね。自分の夢は諦めたくない！"),
      yuujin.say("まっすーの目に力が宿った。"),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 3 })),
      ch4MassuScene.jumpTo(ch4SaasanScene),
    ])
    .choose("「俺と一緒に東京に行きなよ」", [
      yuujin.say("「遠距離が嫌ならさ、俺と一緒に東京に行きなよ」"),
      massu.say("えっ！？……あはは！冗談キツいよー！"),
      yuujin.say("（はぐらかされたが、少し照れていた）"),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 2 })),
      ch4MassuScene.jumpTo(ch4SaasanScene),
    ])
    .choose("「彼氏の近くに行け」", [
      yuujin.say("「そんなに大事なら、彼氏の近くでのんびり働けばいいんじゃないか？」"),
      massu.say("うーん……たしかにメンタルは安定するかも……内定辞退のメール書こっかな。"),
      yuujin.say("（せっかくのキャリアを捨てさせてしまったかもしれない）"),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 1 })),
      ch4MassuScene.jumpTo(ch4SaasanScene),
    ]),
]);

// ぱっくの冬（最初）→ まっすーへ
const ch4PackScene = new Scene("ch4-pack", {
  background: "#1c2e4a",
});
ch4PackScene.action([
  yuujin.say("【冬の追い込み: 会社か、卒論か】"),
  pack.say("おい、ついに登記の準備が整ったぞ！"),
  yuujin.say("12月。世間がクリスマスムードに染まる中、ぱっくが書類の束を持って現れた。"),
  pack.say("これでついに俺も社長だ！……ただ、弊害があってな"),
  yuujin.say("（言うまでもない）"),
  pack.say("卒論が1ミリも進んでねえ！！！"),
  Menu.prompt("どうアドバイスする？")
    .choose("「まずは卒論を出せ」", [
      yuujin.say("「会社は後からでも作れる！まずは卒論を出せ！」"),
      pack.say("くっ……だよな！卒業できなきゃ中卒社長になってしまう！"),
      yuujin.say("ぱっくは血走った目で研究室に籠もった。"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 3 })),
      ch4PackScene.jumpTo(ch4MassuScene),
    ])
    .choose("「会社を登記しろ」", [
      yuujin.say("「卒業なんていつでもできる。今は会社を登記しろ」"),
      pack.say("おっ、わかってるじゃねえか。よし、印鑑証明取ってくるわ！"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 2 })),
      ch4PackScene.jumpTo(ch4MassuScene),
    ])
    .choose("「フランスに逃亡しよう」", [
      yuujin.say("「もう何もかも捨てて、彼女と一緒にフランスに逃亡しようぜ」"),
      pack.say("ボナペティ！それ最高だな！……って馬鹿！"),
      yuujin.say("（ノリツッコミの余裕はあるらしい）"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 1 })),
      ch4PackScene.jumpTo(ch4MassuScene),
    ]),
]);

// 第4章 エントリーシーン → ぱっくへ
export const chapter4Scene = new Scene("chapter4", {
  background: "#111827",
});
chapter4Scene.action([
  yuujin.say("【第4章: 冬（12月〜）「最終追い込みと個別ルート確定」】"),
  yuujin.say("凍えるような冬が来た。怒涛のような一年も、いよいよ大詰め。"),
  yuujin.say("卒論の提出、就活の決着、そして卒業できるかどうかの瀬戸際。"),
  yuujin.say("これが、学生生活最後の試練だ。"),
  chapter4Scene.jumpTo(ch4PackScene),
]);
