import { Scene, Menu, Condition } from "narraleaf-react";
import { yuujin, pack, massu, saasan, haruchiro, tonapi, packImg, massuImg, saasanImg, haruchiroImg, tonapiImg } from "../../characters";
import { gameFlags } from "../../store/gameState";
import { packRouteMain } from "../routes/pack";
import { massuRouteMain } from "../routes/massu";
import { saasanRouteMain } from "../routes/saasan";
import { haruchiroRouteMain } from "../routes/haruchiro";
import { tonapiRouteMain } from "../routes/tonapi";
import { gameEvents } from "../../store/gameEvents";
import { haruchiroLoveBgm, massuBaseBgm, packBaseBgm, saasanBaseBgm, tonappiBaseBgm } from "../../store/gameBgm";
import { chapterTitleSound, menuSelectSound } from "../../store/gameSoundEffect";

// 第4章: 冬（12月〜）「最終追い込みと個別ルート確定」
// シーンを末端から定義して jumpTo で数珠つなぎにする

// 個別ルート選択シーン（最後）
const chapter4RouteSelect = new Scene("chapter4-route-select", {
  background: "/backgrounds/university_winter.png",
});
chapter4RouteSelect.action([
  yuujin.say("冬が終わろうとしている。卒業と追いコンまで、あと少し。"),
  yuujin.say("5人全員、それぞれの問題を抱えながらも、なんとかここまで来た。"),
  yuujin.say("……でも、一人だけ特別に最後まで面倒を見るとしたら？"),
  yuujin.say("自分の中で、誰かの顔が浮かぶ。"),
  Menu.prompt("誰の個別ルートへ？")
    .choose("ぱっくに全力で向き合う", [
      menuSelectSound.play(),
      gameFlags.set("route_pack", true),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 2 })), // ルート選択ボーナス
      chapter4RouteSelect.jumpTo(packRouteMain),
    ])
    .choose("まっすーに全力で向き合う", [
      menuSelectSound.play(),
      gameFlags.set("route_massu", true),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 2 })),
      chapter4RouteSelect.jumpTo(massuRouteMain),
    ])
    .choose("さーさんに全力で向き合う", [
      menuSelectSound.play(),
      gameFlags.set("route_saasan", true),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 2 })),
      chapter4RouteSelect.jumpTo(saasanRouteMain),
    ])
    .choose("はるちろに全力で向き合う", [
      menuSelectSound.play(),
      gameFlags.set("route_haruchiro", true),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 2 })),
      chapter4RouteSelect.jumpTo(haruchiroRouteMain),
    ])
    .choose("となっぴーに全力で向き合う", [
      menuSelectSound.play(),
      gameFlags.set("route_tonapi", true),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 2 })),
      chapter4RouteSelect.jumpTo(tonapiRouteMain),
    ]),
]);

// となっぴーの冬 → ルート選択へ
const ch4TonapiScene = new Scene("ch4-tonapi", {
  background: "/backgrounds/university_winter.png",
});
ch4TonapiScene.action([
  tonappiBaseBgm.play(),
  yuujin.say("【冬の追い込み: ノーベル賞か、全国制覇か】"),
  yuujin.say("12月。となっぴーの研究が、ついに指導教員を動かした。"),
  tonapiImg.show(),
  tonapi.say("教授から『これは本物かもしれない』って言ってもらえて……フフ、ついに私の時代が来ました"),
  yuujin.say("（穏やかに、しかし確実に狂気の目をしている）"),
  yuujin.say("だが机の上には、推しの全国大会のチケットが置いてある。"),
  tonapi.say("ただ今週末が推しチームの全国大会の決勝で。論文の最終提出期限も、同じ日なんです"),
  tonapiImg.hide(),
  yuujin.say("（このままでは、どちらかを諦めさせることになる）"),
  Menu.prompt("どうアドバイスする？")
    .choose("「論文の執筆に集中しろ」", [
      menuSelectSound.play(),
      yuujin.say("「バレーは来年もある。今は論文の執筆に集中しろ」"),
      tonapiImg.show(),
      tonapi.say("うぅ……わかりました。推しには心の中でエールを送ります……"),
      tonapiImg.hide(),
      yuujin.say("論文は無事に提出された。その夜、となっぴーはライブ配信で推しのチームが優勝する瞬間を見て、静かに泣いていたという。"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 3 })),
    ])
    .choose("「俺も応援に行く」", [
      menuSelectSound.play(),
      yuujin.say("「よし、じゃあ俺も応援に行くか」"),
      tonapiImg.show(),
      tonapi.say("本当ですか！？じゃあ一緒にメガホン叩きましょう！フフフ！"),
      tonapiImg.hide(),
      yuujin.say("（結局、二人で論文そっちのけで応援してしまった。それでも、となっぴーの笑顔は本物だった）"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power - 1 })),
    ])
    .choose("「現地で応援しながら書け」", [
      menuSelectSound.play(),
      yuujin.say("「現地で応援しながらノートPCで論文書け」"),
      tonapiImg.show(),
      tonapi.say("スポ根ですね！よし、タイピングの音がバレーのスパイクみたいに響かせてきます！"),
      tonapiImg.hide(),
      yuujin.say("（結果、推しのチームのスパイクで勢いよくEnterをたたいて提出したらしい）"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 1 })),
    ]),
  tonappiBaseBgm.stop(),
  Condition.If(() => {
    gameEvents.triggerChapterTitle("誰を選ぶ？");
    return false;
  }, []),
  chapterTitleSound.play(),
  ch4TonapiScene.jumpTo(chapter4RouteSelect),
]);

// はるちろの冬 → となっぴーへ
const ch4HaruchiroScene = new Scene("ch4-haruchiro", {
  background: "/backgrounds/university_winter.png",
});
ch4HaruchiroScene.action([
  haruchiroLoveBgm.play(),
  yuujin.say("【冬の追い込み: デートか、発表練習か】"),
  yuujin.say("卒論の最終発表が迫る中、はるちろはスマホの画面と睨めっこしていた。"),
  haruchiroImg.show(),
  haruchiro.say("どうしよう！クリスマスのデートの約束、発表練習の日と完全に被っちゃいました！！"),
  yuujin.say("そもそもマッチングアプリで出会った相手とクリスマスまで関係が続いていることに驚きだ。"),
  haruchiro.say("でもここで行かないと、せっかくの継続的インテグレーションが……"),
  haruchiroImg.hide(),
  Menu.prompt("どうツッコミを入れる？")
    .choose("俺が代わりに発表してやるよ", [
      menuSelectSound.play(),
      yuujin.say("「しょうがない。俺が代わりに発表してやるよ」"),
      haruchiroImg.show(),
      haruchiro.say("えっ！？代打ち！？ありがてええぇぇ！行ってきます！"),
      haruchiroImg.hide(),
      yuujin.say("（はるちろの卒業が完全に俺の手にかかってしまった）"),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power - 1 })),
    ])
    .choose("発表練習が最優先だろ", [
      menuSelectSound.play(),
      yuujin.say("「お前、卒業できなきゃデートどころじゃないだろ。発表練習が最優先だ」"),
      haruchiroImg.show(),
      haruchiro.say("っ！……ですね。リスケのお願いを送ってみます！"),
      haruchiroImg.hide(),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 3 })),
    ])
    .choose("マチアプの子を練習相手にしろ", [
      menuSelectSound.play(),
      yuujin.say("「デートでマチアプの子を発表練習の相手にしろ」"),
      haruchiroImg.show(),
      haruchiro.say("なるほど！専門外の人に伝わるかどうかのテストですね！"),
      haruchiroImg.hide(),
      yuujin.say("（デートが完全に学会発表の場になってしまったらしい）"),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 1 })),
    ]),
  haruchiroLoveBgm.stop(),
  ch4HaruchiroScene.jumpTo(ch4TonapiScene),
]);

// さーさんの冬 → はるちろへ
const ch4SaasanScene = new Scene("ch4-saasan", {
  background: "/backgrounds/university_winter.png",
});
ch4SaasanScene.action([
  saasanBaseBgm.play(),
  yuujin.say("【冬の追い込み: 完璧超人の致命的弱点】"),
  yuujin.say("卒論の大詰め。徹夜明けの俺たちに、さーさんが得意料理を振る舞うと言い出した。"),
  saasanImg.show(),
  saasan.say("俺の特製カルボナーラだ。……ただ、ちょっと火を通しすぎたかもな"),
  yuujin.say("（それは完全に『炒り卵パスタ』だった。だが誰も突っ込めないオーラがある）"),
  saasan.say("あと買い出しのコンビニの味噌汁、成分表示を全力で目視して、ネギが1ミリも入ってないやつを選び抜いたぜ。"),
  saasanImg.hide(),
  yuujin.say("（完璧超人の唯一にして最大の弱点。ネギへの異常な憎悪と、ポンコツすぎる家事スキルだ）"),
  yuujin.say("そう思った矢先、さーさんが盛大にオレンジジュースを床にこぼした。"),
  Menu.prompt("どうする？")
    .choose("「炒り卵パスタには大盛り激辛ソースだろ」", [
      menuSelectSound.play(),
      yuujin.say("「この炒り卵パスタ、どうせなら大盛り激辛ソースでもかけるか？」"),
      saasanImg.show(),
      saasan.say("おっ、わかってるじゃねえか。食べ物は大盛り激辛至上主義だからな！"),
      saasanImg.hide(),
      yuujin.say("（味覚も完全に狂っていることが判明した）"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 1 })),
    ])
    .choose("「お好み焼きでも頼むか」", [
      menuSelectSound.play(),
      yuujin.say("「もう出前でネギたっぷりのお好み焼きでも頼むか？」"),
      saasanImg.show(),
      saasan.say("……お前、俺を殺す気か？ネギだけは絶対に許さん！"),
      saasanImg.hide(),
      yuujin.say("（激怒された。ネギへの憎しみは本物だ）"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power - 1 })),
    ])
    .choose("「黙って床を拭く」", [
      menuSelectSound.play(),
      yuujin.say("（無言で雑巾を取り出し、オレンジジュースでベタベタの床を拭いた）"),
      saasanImg.show(),
      saasan.say("……悪いな。プログラミングならバグは出ないのに、現実世界はバグだらけだぜ"),
      saasanImg.hide(),
      yuujin.say("（名言風だが、ただのドジである）"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 3 })),
    ]),
  saasanBaseBgm.stop(),
  ch4SaasanScene.jumpTo(ch4HaruchiroScene),
]);

// まっすーの冬 → さーさんへ
const ch4MassuScene = new Scene("ch4-massu", {
  background: "/backgrounds/university_winter.png",
});
ch4MassuScene.action([
  massuBaseBgm.play(),
  yuujin.say("【冬の追い込み: 内定と大破】"),
  yuujin.say("まっすーの就活がようやく終わりを迎えた日のことだった。"),
  massuImg.show(),
  massu.say("東京の第一志望から内定出たー！やったー！あはは！"),
  yuujin.say("（よかった。本当によかった）"),
  massu.say("テンションあがりすぎて廊下で走ったら……カメラ落として大破させちゃった！！あはは！"),
  yuujin.say("（……笑っているが、目が死んでいる。センサーまで逝ったらしい）"),
  massu.say("でもさ……彼がいるのは地元じゃん？東京に行ったら、遠距離のままになっちゃうなぁって。"),
  massu.say("カメラもなくなって、なんか急にいろいろ考えちゃって……どっちを選ぶべきかな"),
  massuImg.hide(),
  Menu.prompt("どう答える？")
    .choose("「彼氏の近くに行け」", [
      menuSelectSound.play(),
      yuujin.say("「カメラも壊れたことだし、一回全部リセットして彼氏の近くでのんびり働けば？」"),
      massuImg.show(),
      massu.say("うーん……たしかにメンタルは安定するかも……内定辞退のメール書こっかな。"),
      massuImg.hide(),
      yuujin.say("（せっかくのキャリアを捨てさせてしまったかもしれない）"),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power - 1 })),
    ])
    .choose("「俺と一緒に東京に行きなよ」", [
      menuSelectSound.play(),
      yuujin.say("「遠距離が嫌ならさ、俺と一緒に東京に行きなよ」"),
      massuImg.show(),
      massu.say("えっ！？……あはは！冗談キツいよー！"),
      massuImg.hide(),
      yuujin.say("（はぐらかされたが、少し照れていた）"),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 1 })),
    ])
    .choose("「自分のキャリアを優先しろ」", [
      menuSelectSound.play(),
      yuujin.say("「カメラは直せる。東京でやりたいことがあるなら、自分のキャリアを優先しろ」"),
      massuImg.show(),
      massu.say("……うん！そうだよね。自分の夢は諦めたくない！"),
      massuImg.hide(),
      yuujin.say("まっすーの目に力が宿った。"),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 3 })),
    ]),
  massuBaseBgm.stop(),
  ch4MassuScene.jumpTo(ch4SaasanScene),
]);

// ぱっくの冬（最初）→ まっすーへ
const ch4PackScene = new Scene("ch4-pack", {
  background: "/backgrounds/university_winter.png",
});
ch4PackScene.action([
  packBaseBgm.play(),
  yuujin.say("【冬の追い込み: グローバルすぎるトラブル】"),
  yuujin.say("寒さの厳しい12月。ふと見ると、ぱっくが財布の中身を除き込みながら絶望の表情を浮かべていた。"),
  packImg.show(),
  pack.say("……マイナス1万7000円。痛すぎる……"),
  yuujin.say("「どうした？起業の資金繰りでもミスったか？」"),
  pack.say("いや、実は先週までフランス人の彼女に会いにフランスに行ってたんだよ。"),
  pack.say("でさ、向こうの地下鉄乗る時に、癖で無意識に日本の『Suica』をピって改札にタッチしたんだ"),
  yuujin.say("（フランスでSuica。何かがおかしい）"),
  pack.say("そしたらなぜか改札が開いてさ！そのまま乗れたんだけど、降りる駅で盛大にエラーが出て……罰金1万7000円取られたんだよ！"),
  packImg.hide(),
  yuujin.say("（ガバガバすぎる国のシステムと、見事なオチである）"),
  Menu.prompt("どうアドバイスする？")
    .choose("「彼女に慰めてもらえよ」", [
      menuSelectSound.play(),
      yuujin.say("「ドンマイ。まあ、彼女に慰めてもらえよ」"),
      packImg.show(),
      pack.say("それがさ！罰金で揉めてたらいつの間にか彼女消えてて、帰国するまでちょっと気まずかったんだよな……"),
      packImg.hide(),
      yuujin.say("（思っていたより悲惨なオチだった）"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 1 })),
    ])
    .choose("「グローバルな勉強代だと思え」", [
      menuSelectSound.play(),
      yuujin.say("「これもグローバルな経験の一部……高くついた勉強代だと思え」"),
      packImg.show(),
      pack.say("だよな！これでまた一つ、俺のスケールがでかくなったってことだ！"),
      packImg.hide(),
      yuujin.say("（ポジティブな解釈で落ち着いたようだ）"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 3 })),
    ])
    .choose("「フランスでSuicaは草」", [
      menuSelectSound.play(),
      yuujin.say("「いや、フランスでSuicaは草」"),
      packImg.show(),
      pack.say("お前なぁ！人が悲しんでるのに草生やすなよ！エラー音だけはやたら軽快だったぞ！"),
      packImg.hide(),
      yuujin.say("（笑い事ではないが、ぱっくらしいトラブルだった）"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power - 1 })),
    ]),
  packBaseBgm.stop(),
  ch4PackScene.jumpTo(ch4MassuScene),
]);

// 第4章 エントリーシーン → ぱっくへ
export const chapter4Scene = new Scene("chapter4", {
  background: "/backgrounds/university_winter.png",
});
chapter4Scene.action([
  yuujin.say("【第4章: 冬（12月〜）「最終追い込みと個別ルート確定」】"),
  yuujin.say("凍えるような冬が来た。怒涛のような一年も、いよいよ大詰め。"),
  yuujin.say("卒論の提出、就活の決着、そして卒業できるかどうかの瀬戸際。"),
  yuujin.say("これが、学生生活最後の試練だ。"),
  chapter4Scene.jumpTo(ch4PackScene),
]);
