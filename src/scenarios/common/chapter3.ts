import { Scene, Menu } from "narraleaf-react";
import { yuujin, pack, massu, saasan, haruchiro, tonapi } from "../../characters";
import { chapter4Scene } from "./chapter4";
import { gameFlags } from "../../store/gameState";

// 第3章: 秋（10月〜）「卒研・進路の山場、秋の修羅場」
// シーンを末端から定義して jumpTo で数珠つなぎにする

// となっぴーの秋（最後）→ 第4章へ
const ch3TonapiScene = new Scene("ch3-tonapi", {
  background: "#042f2e",
});
ch3TonapiScene.action([
  yuujin.say("【秋の修羅場: 研究室大掃除】"),
  yuujin.say("研究室の大掃除の日。となっぴーのデスクには、色とりどりのシャーレが山積みになっていた。"),
  tonapi.say("あ、触らないでください！それはまだ同定されていない新種の……フフ、カビの候補です"),
  yuujin.say("（笑い声が怖い。しかも色が完全に毒々しい）"),
  yuujin.say("指導教員が見回りに来るまであと30分。このままではとなっぴーが研究室を出禁になる。"),
  Menu.prompt("どうする？")
    .choose("「危険物は隔離しろ」", [
      yuujin.say("「頼むから、せめて危険物保管庫に隔離してくれ」"),
      tonapi.say("……仕方ないですね。大事なサンプルですが、避難させます"),
      yuujin.say("なんとか出禁は免れた。"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 3 })),
      ch3TonapiScene.jumpTo(chapter4Scene),
    ])
    .choose("「全部捨てるぞ！」", [
      yuujin.say("「問答無用で全部捨てるぞ！バイオハザードだ！」"),
      tonapi.say("きゃー！やめてください！私の努力の結晶が！"),
      yuujin.say("泣く泣く半分だけ捨てさせた。"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 2 })),
      ch3TonapiScene.jumpTo(chapter4Scene),
    ])
    .choose("「カビに名前をつけよう」", [
      yuujin.say("「よし、まずはこの青いやつから名前をつけよう」"),
      tonapi.say("いいですね！じゃあ『トナピニリン』はどうでしょうフフフ……"),
      yuujin.say("（現実逃避をした結果、教授にめっっっちゃくちゃ怒られた）"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 1 })),
      ch3TonapiScene.jumpTo(chapter4Scene),
    ]),
]);

// はるちろの秋 → となっぴーへ
const ch3HaruchiroScene = new Scene("ch3-haruchiro", {
  background: "#1e1b4b",
});
ch3HaruchiroScene.action([
  yuujin.say("【秋の修羅場: 恋愛相談LINE返信】"),
  yuujin.say("はるちろからLINEが来た。マチアプのプロフィール文の確認依頼だ。"),
  haruchiro.say("（送られてきた文面）「趣味: コード書くこと / 特技: アルゴリズムの最適化 / 一言: 一緒にコミット歴を積み上げましょう」"),
  yuujin.say("……秋になってもまだこんなことをやっているのか。"),
  Menu.prompt("どう返信する？")
    .choose("「やばい。全部書き直せ」と止める", [
      yuujin.say("「やばい。全部書き直せ」"),
      haruchiro.say("え！？ダメですか？！コンパイルエラー出ますか？！"),
      yuujin.say("全力でダメだと伝えた。一緒にプロフィールを書き直した結果、まともになった。"),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 3 })),
      ch3HaruchiroScene.jumpTo(ch3TonapiScene),
    ])
    .choose("「gitリンクも貼れ」とさらに悪化させる", [
      yuujin.say("「いっそgitのリンクも貼れ」"),
      haruchiro.say("確かに！GitHubのURLも追加して、コーディングの癖まで見せておきます！"),
      yuujin.say("（もう手遅れだ）"),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 2 })),
      ch3HaruchiroScene.jumpTo(ch3TonapiScene),
    ])
    .choose("「いいじゃん！個性的で」と褒める", [
      yuujin.say("「いいじゃん！個性的で」"),
      haruchiro.say("本当ですか！？じゃあこれでPR出してみます！"),
      yuujin.say("（そして誰からも反応は来なかった）"),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 1 })),
      ch3HaruchiroScene.jumpTo(ch3TonapiScene),
    ]),
]);

// さーさんの秋 → はるちろへ
const ch3SaasanScene = new Scene("ch3-saasan", {
  background: "#052e16",
});
ch3SaasanScene.action([
  yuujin.say("【秋の修羅場: プリンター占拠事件】"),
  yuujin.say("研究室でさーさんが大量の資料を印刷していた。"),
  saasan.say("悪いな、あと2時間はプリンター独占するわ。会社用の資料だ"),
  yuujin.say("（当然のように言っているが、今日は卒研の中間レポートの締切日だ）"),
  yuujin.say("他の学生たちが恨めしそうに見ている。このままではさーさんが研究室の敵になる。"),
  Menu.prompt("どう切り出す？")
    .choose("「先に卒研組に譲れ」と正論を言う", [
      yuujin.say("「今日は中間提出だろ。先に卒研組に譲ってやれ」"),
      saasan.say("ん？ああ、そうか。俺はいつでもいいから譲るわ"),
      yuujin.say("あっさり譲ってくれた。さーさんは強者の余裕を持っている。"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 3 })),
      ch3SaasanScene.jumpTo(ch3HaruchiroScene),
    ])
    .choose("「俺が代わりにコンビニで刷ってくるよ」", [
      yuujin.say("「しょうがない、俺が代わりにコンビニで刷ってくるよ」"),
      saasan.say("おっ、助かる！金は後で払うわ"),
      yuujin.say("俺の負担が増えただけだった。"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 2 })),
      ch3SaasanScene.jumpTo(ch3HaruchiroScene),
    ])
    .choose("「一緒に占拠しちゃおうぜ」", [
      yuujin.say("「よし、俺も一緒に占拠してやる」"),
      saasan.say("おう、お前の分も一緒に印刷するか"),
      yuujin.say("（結果、研究室全体を敵に回した）"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 1 })),
      ch3SaasanScene.jumpTo(ch3HaruchiroScene),
    ]),
]);

// まっすーの秋 → さーさんへ
const ch3MassuScene = new Scene("ch3-massu", {
  background: "#1f2937",
});
ch3MassuScene.action([
  yuujin.say("【秋の修羅場: カメラ大破事件】"),
  yuujin.say("まっすーが青ざめた顔で研究室に駆け込んできた。"),
  massu.say("どうしよう！大事なカメラ落としてレンズ割れちゃった！！あはは！"),
  yuujin.say("（全く笑い事ではない状況なのに笑っている）"),
  massu.say("今週末の遠距離恋愛の彼との旅行で絶対使いたかったのに！もう終わりだー！卒研も手につかない！"),
  Menu.prompt("どう励ます？")
    .choose("「スマホのカメラで十分だろ」", [
      yuujin.say("「落ち着け。最近のスマホのカメラで十分だろ。卒研に集中しろ」"),
      massu.say("うーん……たしかにiPhoneのポートレート最強だもんね！切り替えていく！"),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 3 })),
      ch3MassuScene.jumpTo(ch3SaasanScene),
    ])
    .choose("「俺のカメラ貸そうか？」", [
      yuujin.say("「しょうがないな、俺のカメラ貸そうか？」"),
      massu.say("えっ！？神！？一生ついていく！！"),
      yuujin.say("（恩は売れたが、根本的な解決にはなっていない）"),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 2 })),
      ch3MassuScene.jumpTo(ch3SaasanScene),
    ])
    .choose("「新しいの買えよ」", [
      yuujin.say("「もうローン組んで新しいの買えよ」"),
      massu.say("マジ！？じゃあフルサイズ行っちゃおっかなー！"),
      yuujin.say("（就活生にとんでもない借金を背負わせてしまった）"),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 1 })),
      ch3MassuScene.jumpTo(ch3SaasanScene),
    ]),
]);

// ぱっくの秋（最初）→ まっすーへ
const ch3PackScene = new Scene("ch3-pack", {
  background: "#1c2e4a",
});
ch3PackScene.action([
  yuujin.say("【秋の修羅場: フランスからの襲来】"),
  pack.say("おい緊急事態だ。フランス人の彼女がいきなり日本に来るって言いだした！"),
  yuujin.say("（秋の深まる頃、ぱっくが頭を抱えていた）"),
  pack.say("俺、起業の準備とアプリ開発で全く時間ねえのに！しかも今週は卒研の進捗報告もあるんだぞ！"),
  yuujin.say("フランス語もままならないのにどうするつもりなのだろうか。"),
  Menu.prompt("どうアドバイスする？")
    .choose("「研究室に彼女を連れてこい」", [
      yuujin.say("「よし、まずは研究室に彼女を連れてこい」"),
      pack.say("なるほど！国際交流と研究進捗のハブ拠点にするってことだな！"),
      yuujin.say("（数日後、研究室がフランス語教室になり指導教員が泣き崩れた）"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 1 })),
      ch3PackScene.jumpTo(ch3MassuScene),
    ])
    .choose("「一日だけ彼女の案内をしてやれ」", [
      yuujin.say("「一日だけ完全に休みにして、彼女の案内をしてやれ」"),
      pack.say("そうだな、メリハリがないとダメだな。よし、京都にでも行くか"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 2 })),
      ch3PackScene.jumpTo(ch3MassuScene),
    ])
    .choose("「まずは研究の進捗を終わらせろ」", [
      yuujin.say("「まずは死ぬ気で研究の進捗を終わらせろ。話はそれからだ」"),
      pack.say("……だよな！三日徹夜して全部終わらせてから彼氏の顔に戻るわ！"),
      yuujin.say("ぱっくは気合でタスクを片付け、無事に彼女を迎え入れた。"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 3 })),
      ch3PackScene.jumpTo(ch3MassuScene),
    ]),
]);

// 第3章 エントリーシーン → ぱっくへ
export const chapter3Scene = new Scene("chapter3", {
  background: "#111827",
});
chapter3Scene.action([
  yuujin.say("【第3章: 秋（10月〜）「卒研・進路の山場、秋の修羅場」】"),
  yuujin.say("涼しくなってきた10月。卒研の中間報告や進路決定が容赦なく襲いかかってくる季節。"),
  yuujin.say("そして当然のごとく、こいつらから次々と修羅場の連絡が舞い込んできた。"),
  chapter3Scene.jumpTo(ch3PackScene),
]);
