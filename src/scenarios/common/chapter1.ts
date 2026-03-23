import { Menu, Scene, Condition } from "narraleaf-react";
import { yuujin, pack, massu, saasan, haruchiro, tonapi, packImg, massuImg, saasanImg, haruchiroImg, tonapiImg } from "../../characters";
import { chapter2Scene } from "./chapter2";
import { gameFlags } from "../../store/gameState";
import { gameEvents } from "../../store/gameEvents";
import { haruchiroBaseBgm, massuBaseBgm, packBaseBgm, saasanBaseBgm, tonappiBaseBgm } from "../../store/gameBgm";
import { chapterTitleSound, menuSelectSound } from "../../store/gameSoundEffect";

// 第1章の順序制御用シーンの宣言
const ch1DispatchScene = new Scene("ch1-dispatch", { background: "/backgrounds/opening.png" });

// 第1章: 春（4月〜）「全員ちょっと危ないスタート」
// 各キャラの問題噴出シーンと選択肢を定義

// となっぴーシーン（最後）→ 第2章へ
const ch1TonapiScene = new Scene("ch1-tonapi", {
  background: "/backgrounds/opening.png",
});
ch1TonapiScene.action([
  tonappiBaseBgm.play(),
  yuujin.say("となっぴーから研究室で声をかけられた。"),
  tonapiImg.show(),
  tonapi.say("あの……春から新しい培地でカビを育ててるんですけど"),
  tonapi.say("なんか予想より全然違う色になってきてて。これ、普通のカビじゃないかもしれないんです。フフ"),
  yuujin.say("（笑顔で言っているが、目が全く笑っていない。静かな熱量を感じる）"),
  tonapi.say("教授には……まだ言ってないんですよね。どう思いますか？"),
  tonapiImg.hide(),
  Menu.prompt("どう返す？")
    .choose("「まず教授に報告しろ」", [
      menuSelectSound.play(),
      yuujin.say("「面白そうだけど、まず教授に報告するべきだろ。手順を踏んでから」"),
      tonapiImg.show(),
      tonapi.say("そうですよね……。わかりました、明日相談してみます！"),
      tonapiImg.hide(),
      yuujin.say("（きちんと手続きを踏もうとする姿勢は、彼女らしかった）"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 3 })),
    ])
    .choose("「どんな色になってるの？」", [
      menuSelectSound.play(),
      yuujin.say("「普通じゃないって、どんな色になってるんだ？」"),
      tonapiImg.show(),
      tonapi.say("……青緑と紫が混ざったような、すごく綺麗な色なんですよ。ちょっと見ますか？フフ"),
      tonapiImg.hide(),
      yuujin.say("（連れて行かれた研究室で、俺は言葉を失った。確かに綺麗だったが、確かに危なかった）"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 1 })),
    ])
    .choose("「それ、すごい発見じゃない？」", [
      menuSelectSound.play(),
      yuujin.say("「それすごい発見じゃないか！学会に出したら？」"),
      tonapiImg.show(),
      tonapi.say("ですよね！じゃあもう少し培養を続けてから……フフフ"),
      tonapiImg.hide(),
      yuujin.say("（後日、カビのシャーレが研究室を占領しているのを見て、俺は反省した）"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power - 1 })),
    ]),
  tonappiBaseBgm.stop(),
  gameFlags.assign((s) => ({ ch1_progress_value: (s.ch1_progress_value ?? 5) - 1 })),
  ch1TonapiScene.jumpTo(ch1DispatchScene),
]);

// はるちろシーン → となっぴーへ
const ch1HaruchiroScene = new Scene("ch1-haruchiro", {
  background: "/backgrounds/opening.png",
});
ch1HaruchiroScene.action([
  haruchiroBaseBgm.play(),
  yuujin.say("はるちろが何かぶつぶつ言いながら端末を眺めている。"),
  haruchiroImg.show(),
  haruchiro.say("あの、発表スライドってPowerPointで作るべきか、MarkdownをRemarkで変換するべきか……"),
  haruchiro.say("GitHubにまとめようとしたら、プロフィールのリンクがなぜか404になってて"),
  yuujin.say("（完全に技術寄りのことで悩んでいる。この人はいつもこんな感じだ）"),
  haruchiro.say("あと卒研のタスク、ちょっとだけ積んでるの忘れてました"),
  haruchiroImg.hide(),
  Menu.prompt("どうツッコミを入れる？")
    .choose("どっちにもいい顔しとけ", [
      menuSelectSound.play(),
      yuujin.say("「PowerPointでもMarkdownでもいいから完成させろ」"),
      haruchiroImg.show(),
      haruchiro.say("なるほど！完成ファーストで並列処理します！"),
      haruchiroImg.hide(),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 1 })),
    ])
    .choose("早く卒研のタスクやれ", [
      menuSelectSound.play(),
      yuujin.say("「スライドの形式より卒研のタスクやれ」"),
      haruchiroImg.show(),
      haruchiro.say("うっ……それはそう。でもMarkdownの方が効率よくて……"),
      haruchiroImg.hide(),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 3 })),
    ])
    .choose("gitのリンク直せばワンチャンある", [
      menuSelectSound.play(),
      yuujin.say("「gitのリンク直してからスライドも卒研もやれ」"),
      haruchiroImg.show(),
      haruchiro.say("ですよね！まずプロフィール整えます！"),
      haruchiroImg.hide(),
      yuujin.say("（そっちが優先じゃないと思うが）"),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power - 1 })),
    ]),
  haruchiroBaseBgm.stop(),
  gameFlags.assign((s) => ({ ch1_progress_value: (s.ch1_progress_value ?? 5) - 1 })),
  ch1HaruchiroScene.jumpTo(ch1DispatchScene),
]);

// さーさんシーン → はるちろへ
const ch1SaasanScene = new Scene("ch1-saasan", {
  background: "/backgrounds/opening.png",
});
ch1SaasanScene.action([
  saasanBaseBgm.play(),
  yuujin.say("さーさんが研究室の奥で、優雅にコーヒーを飲んでいた。"),
  saasanImg.show(),
  saasan.say("おお、お疲れ。この前のサイバーのハッカソン、余裕だったわ"),
  yuujin.say("（当然のように言っているが、倍率も技術レベルも尋常じゃない大会だ）"),
  saasan.say("ただのものづくりじゃ満足できないってこの前話したろ。一緒に立ち上げる会社、俺がCTOとして技術周りは全部持つからな"),
  saasanImg.hide(),
  yuujin.say("誰もが認める『黒ポロ』で頂点の存在。俺を容赦なく巻き込んで起業の計画が進んでいく。"),
  Menu.prompt("どう答える？")
    .choose("「じゃあ俺は何をすればいいんだ？」", [
      menuSelectSound.play(),
      yuujin.say("「力強いけど、じゃあ俺は何をすればいいんだ？」"),
      saasanImg.show(),
      saasan.say("お前はビジネス側と雑務全部だ。代表取締役として前に立てよ"),
      saasanImg.hide(),
      yuujin.say("（いきなり一番責任の重い役割を実質的に丸投げされた）"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 1 })),
    ])
    .choose("「俺の出資比率はどうなる？」", [
      menuSelectSound.play(),
      yuujin.say("「で、俺の出資比率（株）はどうなるんだ？」"),
      saasanImg.show(),
      saasan.say("お前が代表なんだからお前が決めろよ。俺は開発費と最高の環境さえあれば文句ねえぞ"),
      saasanImg.hide(),
      yuujin.say("（お金の重圧がのしかかってきた。ビジネスパートナーとしての責任が重い）"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power - 1 })),
    ])
    .choose("「よし、一緒に世界を獲ろう」", [
      menuSelectSound.play(),
      yuujin.say("「よし、お前がCTOなら最強だな。一緒に世界を獲ろうぜ」"),
      saasanImg.show(),
      saasan.say("はっはっは！お前ならそう言うと思ったぜ。最高のプロダクト作ってやるよ"),
      saasanImg.hide(),
      yuujin.say("（肩を叩かれた。彼が技術トップなら本当にできそうな気がする）"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 3 })),
    ]),
  saasanBaseBgm.stop(),
  gameFlags.assign((s) => ({ ch1_progress_value: (s.ch1_progress_value ?? 5) - 1 })),
  ch1SaasanScene.jumpTo(ch1DispatchScene),
]);

// まっすーシーン → さーさんへ
const ch1MassuScene = new Scene("ch1-massu", {
  background: "/backgrounds/opening.png",
});
ch1MassuScene.action([
  massuBaseBgm.play(),
  yuujin.say("まっすーが写真を大量に見せてきた。"),
  massuImg.show(),
  massu.say("ゼミのフィールドワーク、全部記録してきたよ！5000枚！あはは！"),
  yuujin.say("（5000枚。写真の出来より枚数の方が心配になってきた）"),
  massu.say("卒研のレポート……ちょっとだけ後回しにしちゃってたかも！あはは！"),
  massuImg.hide(),
  yuujin.say("（「ちょっと」の感覚がおかしい）"),
  Menu.prompt("どうアドバイスする？")
    .choose("時間は有限だ、とりあえず寝ろ", [
      menuSelectSound.play(),
      yuujin.say("「時間は有限だ、考えるのをやめてとりあえず寝ろ」"),
      massuImg.show(),
      massu.say("わかった！今日はふて寝する！おやすみー！"),
      massuImg.hide(),
      yuujin.say("（問題は何も解決していない）"),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power - 1 })),
    ])
    .choose("ちゃんとスケジュール管理ツール入れろ", [
      menuSelectSound.play(),
      yuujin.say("「ちゃんとスケジュール管理ツール入れろ。目に見える形でタスクを整理するんだ」"),
      massuImg.show(),
      massu.say("うっ……そうだよね。Notionでちゃんと管理してみる！"),
      massuImg.hide(),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 3 })),
    ])
    .choose("カメラに逃げるな！", [
      menuSelectSound.play(),
      yuujin.say("「カメラに逃げるな！卒研やれ！」"),
      massuImg.show(),
      massu.say("痛いところ突かないでよー！わかってるってば！"),
      massuImg.hide(),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 1 })),
    ]),
  massuBaseBgm.stop(),
  gameFlags.assign((s) => ({ ch1_progress_value: (s.ch1_progress_value ?? 5) - 1 })),
  ch1MassuScene.jumpTo(ch1DispatchScene),
]);

// ぱっくシーン
const ch1PackScene = new Scene("ch1-pack", {
  background: "/backgrounds/opening.png",
});
ch1PackScene.action([
  packBaseBgm.play(),
  yuujin.say("ぱっくがやって来た。就活の時期だというのに、妙に晴れやかな顔をしている。"),
  packImg.show(),
  pack.say("なあ聞いてくれよ。大学入学当初からやってた起業の件なんだけどさ、俺、広報からエンジニアに転向したんだわ"),
  yuujin.say("（いきなりのキャリアチェンジ宣言。しかも文系職からゴリゴリの技術職への転向だ）"),
  pack.say("プログラミングってやってみると直感的というか……面白そうなことの解像度が上がるよな。"),
  pack.say("とりあえず一ヶ月くらい勉強して、俺が所属してる天文学サークル用のアプリをFlutterで自作し始めたところだ"),
  yuujin.say("（一ヶ月でそこまで形にするのはシンプルに天才としか言いようがない。しかし……）"),
  pack.say("で、色々やってたらタスクがコンフリクトしててさ。起業のコード書きつつ、サークルのアプリも進めたいんだけど、お前どう思う？"),
  packImg.hide(),
  Menu.prompt("どう答える？")
    .choose("「まずは起業の方のコードに集中しろ」", [
      menuSelectSound.play(),
      yuujin.say("「まずは起業の方のコードに集中しろ。会社がかかってるんだろ」"),
      packImg.show(),
      pack.say("んー、まあ確かに。利益直結のプロジェクトを優先するのは定石か。わかった、そっちのPRから処理するわ"),
      packImg.hide(),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 3 })),
    ])
    .choose("「サークルのアプリ、面白そうだな」", [
      menuSelectSound.play(),
      yuujin.say("「サークルのアプリ、面白そうだな。そっち見せてよ」"),
      packImg.show(),
      pack.say("おっ、わかってるじゃねえか！UIのアニメーションが結構いい感じにできたんだよ！"),
      packImg.hide(),
      yuujin.say("（楽しそうなぱっくを見て、起業の方は大丈夫かと一抹の不安を覚えた）"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power - 1 })),
    ])
    .choose("「両方全力で並行開発しろ！」", [
      menuSelectSound.play(),
      yuujin.say("「いけるいける！両方全力で並行開発しろ！」"),
      packImg.show(),
      pack.say("おっ、言うねえ！マルチスレッドで脳髄フル回転させてくるわ！"),
      packImg.hide(),
      yuujin.say("（彼は天才だが、確実に寿命を縮める選択をしてしまった気がする）"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 1 })),
    ]),
  packBaseBgm.stop(),
  gameFlags.assign((s) => ({ ch1_progress_value: (s.ch1_progress_value ?? 5) - 1 })),
  ch1PackScene.jumpTo(ch1DispatchScene),
]);

// 第1章の順序制御（プロローグでの選択順を反映）
const jumpToCharacter = (progressValue: number) => {
  return [
    Condition.If(gameFlags.evaluate("prologue_talked_pack", (v) => v === progressValue), [
      ch1DispatchScene.jumpTo(ch1PackScene)
    ]).ElseIf(gameFlags.evaluate("prologue_talked_massu", (v) => v === progressValue), [
      ch1DispatchScene.jumpTo(ch1MassuScene)
    ]).ElseIf(gameFlags.evaluate("prologue_talked_saasan", (v) => v === progressValue), [
      ch1DispatchScene.jumpTo(ch1SaasanScene)
    ]).ElseIf(gameFlags.evaluate("prologue_talked_haruchiro", (v) => v === progressValue), [
      ch1DispatchScene.jumpTo(ch1HaruchiroScene)
    ]).ElseIf(gameFlags.evaluate("prologue_talked_tonapi", (v) => v === progressValue), [
      ch1DispatchScene.jumpTo(ch1TonapiScene)
    ]).Else([
      // 万が一マッチしなかった場合は次へスキップ
      gameFlags.assign((s) => ({ ch1_progress_value: (s.ch1_progress_value ?? 5) - 1 })),
      ch1DispatchScene.jumpTo(ch1DispatchScene)
    ])
  ];
};

ch1DispatchScene.action([
  Condition.If(gameFlags.evaluate("ch1_progress_value", (v) => (v ?? 5) === 5), [
    ...jumpToCharacter(5)
  ]).ElseIf(gameFlags.evaluate("ch1_progress_value", (v) => (v ?? 5) === 4), [
    ...jumpToCharacter(4)
  ]).ElseIf(gameFlags.evaluate("ch1_progress_value", (v) => (v ?? 5) === 3), [
    ...jumpToCharacter(3)
  ]).ElseIf(gameFlags.evaluate("ch1_progress_value", (v) => (v ?? 5) === 2), [
    ...jumpToCharacter(2)
  ]).ElseIf(gameFlags.evaluate("ch1_progress_value", (v) => (v ?? 5) === 1), [
    ...jumpToCharacter(1)
  ]).Else([
    // 全員のイベントが終わったら第2章へ
    Condition.If(() => {
      gameEvents.triggerChapterTitle("第2章");
      return false;
    }, []),
    chapterTitleSound.play(),
    ch1DispatchScene.jumpTo(chapter2Scene),
  ])
]);

// 第1章 エントリーシーン
export const chapter1Scene = new Scene("chapter1", {
  background: "/backgrounds/opening.png",
});
chapter1Scene.action([
  yuujin.say("【第1章: 春（4月〜）「全員ちょっと危ないスタート」】"),
  yuujin.say("いよいよ始まった最終学年。"),
  yuujin.say("しかし、就活や研究が本格化する春の初っ端から、5人から同時に連絡が来た。"),
  yuujin.say("……なんとなく、嫌な予感がした。"),
  gameFlags.assign(() => ({ ch1_progress_value: 5 })),
  chapter1Scene.jumpTo(ch1DispatchScene),
]);
