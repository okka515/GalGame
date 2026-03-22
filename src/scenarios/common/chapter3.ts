import { Scene, Menu, Condition } from "narraleaf-react";
import { yuujin, pack, massu, saasan, haruchiro, tonapi } from "../../characters";
import { chapter4Scene } from "./chapter4";
import { gameFlags } from "../../store/gameState";
import { gameEvents } from "../../store/gameEvents";

// 第3章: 秋（10月〜）「卒研・進路の山場、秋の修羅場」
// シーンを末端から定義して jumpTo で数珠つなぎにする

// となっぴーの秋（最後）→ 第4章へ
const ch3TonapiScene = new Scene("ch3-tonapi", {
  background: "#042f2e",
});
ch3TonapiScene.action([
  yuujin.say("【秋の修羅場: 推し活、緊急事態】"),
  yuujin.say("秋のある日、となっぴーから急に呼び出された。"),
  tonapi.say("あの……今週末、推しのバレーチームの試合があって"),
  tonapi.say("卒研の中間報告と日程が被ってしまったんです。どうすればいいでしょうか。フフ"),
  yuujin.say("（フフと笑っているが、目は全く笑っていない。絶対にバレーに行きたい目をしている）"),
  Menu.prompt("どうアドバイスする？")
    .choose("「卒研を最優先にしろ」", [
      yuujin.say("「卒研の中間報告は一度しかないだろ。バレーは次もある」"),
      tonapi.say("……そうですよね。わかりました。推しには心の中でエールを送ります"),
      yuujin.say("（後日、彼女は報告を無事終え、その夜ひとりで試合のライブ配信を見ていたらしい）"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 3 })),
    ])
    .choose("「午前中だけ報告して、午後から試合に行け」", [
      yuujin.say("「午前に報告を終わらせて、そのまま移動すれば両方いけるんじゃないか？」"),
      tonapi.say("！ その発想はなかったです！行けますね！行きます！"),
      yuujin.say("（タイムテーブルの確認を手伝った。余裕で間に合った）"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 2 })),
    ])
    .choose("「バレーに行っていいよ」", [
      yuujin.say("「バレーに行きなよ。中間報告は俺がうまく伝えておく」"),
      tonapi.say("……本当ですか！？ありがとうございます！！フフフ！"),
      yuujin.say("（彼女は全力で推し活し、俺は後日、教員への説明に追われた）"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 1 })),
    ]),

  Condition.If(() => {
    gameEvents.triggerChapterTitle("第4章");
    return false;
  }, []),

  ch3TonapiScene.jumpTo(chapter4Scene),
]);

// はるちろの秋 → となっぴーへ
const ch3HaruchiroScene = new Scene("ch3-haruchiro", {
  background: "#1e1b4b",
});
ch3HaruchiroScene.action([
  yuujin.say("【秋の修羅場: マチアプ開始・プロフィール文確認依頼】"),
  yuujin.say("はるちろがマチアプを始めたらしく、いきなりプロフィール文の確認依頼がLINEで届いた。"),
  haruchiro.say("（送られてきた文面）「趣味: コード書くこと / 特技: アルゴリズムの最適化 / 一言: 一緒にコミット歴を積み上げましょう」"),
  yuujin.say("……マチアプ始めていきなりこれか。"),
  Menu.prompt("どう返信する？")
    .choose("「やばい。全部書き直せ」と止める", [
      yuujin.say("「やばい。全部書き直せ。マチアプはGitHubじゃない」"),
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
  yuujin.say("【秋の修羅場: 強者たちの休息】"),
  yuujin.say("卒研の中間発表直前。研究室の誰もが疲労困憊でピリピリしていた。"),
  saasan.say("お前ら、進捗どうよ？俺はもう完璧だから、息抜きにスマブラやろうぜ"),
  yuujin.say("（悪魔の誘いだった。結果、全員がさーさんにボコボコにされ、プライドを粉砕された）"),
  saasan.say("はっはっは！じゃあこの後、気分転換にカラオケでも行くか？俺の美声を聞かせてやるよ"),
  yuujin.say("（全てが完璧すぎる。彼には修羅場という概念が存在しないらしい）"),
  Menu.prompt("どう反応する？")
    .choose("「先に俺たちの卒研を見てくれ」", [
      yuujin.say("「カラオケの前に、俺たちの卒研のレビューをしてくれ」"),
      saasan.say("おう、任せとけ。一瞬で終わらせてやるから、そしたらカラオケな"),
      yuujin.say("（的確すぎる指摘のおかげで、逆に全員の進捗が爆上がりした）"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 3 })),
      ch3SaasanScene.jumpTo(ch3HaruchiroScene),
    ])
    .choose("「カラオケで勝負だ！」", [
      yuujin.say("「スマブラは負けたが、カラオケで勝負だ！」"),
      saasan.say("いい度胸だ。90点以下なら奢りな？"),
      yuujin.say("（彼は軽く95点を出してきた。財布が空になった）"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 2 })),
      ch3SaasanScene.jumpTo(ch3HaruchiroScene),
    ])
    .choose("「一人で行ってこい」", [
      yuujin.say("「いいからお前は一人で行ってこい。こっちは忙しいんだ」"),
      saasan.say("なんだよ、ノリが悪いな。じゃあヒトカラで十八番叩き出してくるわ"),
      yuujin.say("（嵐は去ったが、虚無感だけが残った）"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 1 })),
      ch3SaasanScene.jumpTo(ch3HaruchiroScene),
    ]),
]);

// まっすーの秋 → さーさんへ
const ch3MassuScene = new Scene("ch3-massu", {
  background: "#1f2937",
});
ch3MassuScene.action([
  yuujin.say("【秋の修羅場: 就活説明会すっぽかし】"),
  yuujin.say("まっすーが青ざめた顔で研究室に駆け込んできた。"),
  massu.say("どうしよう！東京の就活説明会、行き忘れてたー！！あはは！"),
  yuujin.say("（全く笑い事ではない状況なのに笑っている）"),
  massu.say("卒研の中間発表と同じ週で、気づいたらカメラ持って外歩いてた！あとレンズにちょっと傷が……"),
  Menu.prompt("どう励ます？")
    .choose("「スマホのカメラで十分だろ」", [
      yuujin.say("「まず説明会を再予約しろ。カメラはスマホで十分だから卒研に集中しろ」"),
      massu.say("うーん……たしかにiPhoneのポートレート最強だもんね！切り替えていく！"),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 3 })),
      ch3MassuScene.jumpTo(ch3SaasanScene),
    ])
    .choose("「俺のカメラ貸そうか？」", [
      yuujin.say("「傷くらいどうってことない。説明会は俺のOB繋ぎで再予約してやるよ」"),
      massu.say("えっ！？神！？一生ついていく！！"),
      yuujin.say("（恩は売れたが、根本的な解決にはなっていない）"),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 2 })),
      ch3MassuScene.jumpTo(ch3SaasanScene),
    ])
    .choose("「新しいの買えよ」", [
      yuujin.say("「傷が気になるならもう新しいの買えよ。就活はまたやり直せる」"),
      massu.say("マジ！？じゃあフルサイズ行っちゃおっかなー！"),
      yuujin.say("（就活生にとんでもない発想をさせてしまった）"),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 1 })),
      ch3MassuScene.jumpTo(ch3SaasanScene),
    ]),
]);

// ぱっくの秋（最初）→ まっすーへ
const ch3PackScene = new Scene("ch3-pack", {
  background: "#1c2e4a",
});
ch3PackScene.action([
  yuujin.say("【秋の修羅場: クリキャンか、お出迎えか】"),
  pack.say("悪い、ちょっと相談に乗ってくれ！"),
  yuujin.say("秋の深まる頃、ぱっくが神妙な顔をして現れた。珍しく悩んでいる。"),
  pack.say("来月のクリキャンの日程なんだけどさ……"),
  pack.say("実は全く同じ日に、俺の寮に留学生の女の子が入寮してくるんだ。俺は日本代表として、彼女を出迎えて文化交流をする義務がある！"),
  yuujin.say("（ただの下心だ。最後のクリキャンを休む気なのだろうか）"),
  Menu.prompt("どうアドバイスする？")
    .choose("「黙ってクリキャンに行け」", [
      yuujin.say("「お前、最後のクリキャンだろ。黙ってアサインを出せ」"),
      pack.say("……だよな。もう先輩だしアサインは出さないと……ううっ、グッドバイ、マドモアゼル……"),
      yuujin.say("ぱっくは血の涙を流しながら、クリキャンのアサインを提出した。"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 3 })),
      ch3PackScene.jumpTo(ch3MassuScene),
    ])
    .choose("「午前だけ出迎えてから合流しろ」", [
      yuujin.say("「じゃあ、午前中だけ出迎えて、午後からクリキャンに合流しろよ」"),
      pack.say("天才か！よし、新幹線の乗り継ぎルートを調べてくるわ！"),
      yuujin.say("（彼ならやり遂げそうだが、アサインは入れてもらえなさそうだ）"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 2 })),
      ch3PackScene.jumpTo(ch3MassuScene),
    ])
    .choose("「よし、出迎えを優先しろ！」", [
      yuujin.say("「よし、出迎えで国際交流してこい！クリキャンのアサインは出すな！」"),
      pack.say("おっ、最高のエールをもらったぜ！サンキュー！"),
      yuujin.say("（結果、彼は出迎えには大成功したが、アサイン申請がなく、にしむーさんは悲しんだ）"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 1 })),
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
