import { Menu, Scene, Condition } from "narraleaf-react";
import { yuujin, pack, massu, saasan, haruchiro, tonapi } from "../../characters";
import { chapter2Scene } from "./chapter2";
import { gameFlags } from "../../store/gameState";
import { gameEvents } from "../../store/gameEvents";

// 第1章: 春（4月〜）「全員ちょっと危ないスタート」
// 各キャラの問題噴出シーンと選択肢を定義

// となっぴーシーン（最後）→ 第2章へ
const ch1TonapiScene = new Scene("ch1-tonapi", {
  background: "#042f2e",
});
ch1TonapiScene.action([
  yuujin.say("となっぴーから不穏なLINEが届いた。"),
  tonapi.say("あの……カビが予想より2倍の速度で増えていて。これ、新しい化合物かもしれません。"),
  tonapi.say("あと、旅行の写真を見返したら河原に積んだ石が崩れていたんです。少し気になりますよね……フフ"),
  yuujin.say("（「少し気になる」の基準がわからない。笑っているが目が笑っていない）"),
  tonapi.say("来週はバレーの応援もあるので、少し忙しくなりそうです！"),
  Menu.prompt("どう返信する？")
    .choose("カビは早く捨てろ", [
      yuujin.say("「カビは早く捨てろ。バイオハザードになるぞ」"),
      tonapi.say("えっ、もったいない……でも、言われた通り安全第一で処分します。"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 3 })),
    ])
    .choose("新しい化合物として学会に出そう", [
      yuujin.say("「新しい化合物として学会に出そう」"),
      tonapi.say("ですよね！ちょっと教授に相談してみます！フフフ……"),
      yuujin.say("（危ない方向へ背中を押してしまったかもしれない）"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 1 })),
    ])
    .choose("バレーの応援がんばれ", [
      yuujin.say("「とりあえずバレーの応援がんばれ」"),
      tonapi.say("はい！全力で応援してきます！カビは放置しておきますね。"),
      yuujin.say("（放置するな）"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 2 })),
    ]),

  Condition.If(() => {
    gameEvents.triggerChapterTitle("第2章");
    return false;
  }, []),

  ch1TonapiScene.jumpTo(chapter2Scene),
]);

// はるちろシーン → となっぴーへ
const ch1HaruchiroScene = new Scene("ch1-haruchiro", {
  background: "#1e1b4b",
});
ch1HaruchiroScene.action([
  yuujin.say("はるちろが何かぶつぶつ言いながら端末を眺めている。"),
  haruchiro.say("あの、発表スライドってPowerPointで作るべきか、MarkdownをRemarkで変換するべきか……"),
  haruchiro.say("GitHubにまとめようとしたら、プロフィールのリンクがなぜか404になってて"),
  yuujin.say("（完全に技術寄りのことで悩んでいる。この人はいつもこんな感じだ）"),
  haruchiro.say("あと卒研のタスク、ちょっとだけ積んでるの忘れてました"),
  Menu.prompt("どうツッコミを入れる？")
    .choose("早く卒研のタスクやれ", [
      yuujin.say("「スライドの形式より卒研のタスクやれ」"),
      haruchiro.say("うっ……それはそう。でもMarkdownの方が効率よくて……"),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 3 })),
      ch1HaruchiroScene.jumpTo(ch1TonapiScene),
    ])
    .choose("gitのリンク直せばワンチャンある", [
      yuujin.say("「gitのリンク直してからスライドも卒研もやれ」"),
      haruchiro.say("ですよね！まずプロフィール整えます！"),
      yuujin.say("（そっちが優先じゃないと思うが）"),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 1 })),
      ch1HaruchiroScene.jumpTo(ch1TonapiScene),
    ])
    .choose("どっちにもいい顔しとけ", [
      yuujin.say("「PowerPointでもMarkdownでもいいから完成させろ」"),
      haruchiro.say("なるほど！完成ファーストで並列処理します！"),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 2 })),
      ch1HaruchiroScene.jumpTo(ch1TonapiScene),
    ]),
]);

// さーさんシーン → はるちろへ
const ch1SaasanScene = new Scene("ch1-saasan", {
  background: "#052e16",
});
ch1SaasanScene.action([
  yuujin.say("さーさんが研究室の奥で、優雅にコーヒーを飲んでいた。"),
  saasan.say("おお、お疲れ。この前のサイバーのハッカソン、余裕だったわ"),
  yuujin.say("（当然のように言っているが、倍率も技術レベルも尋常じゃない大会だ）"),
  saasan.say("ただのものづくりじゃ満足できないってこの前話したろ。一緒に立ち上げる会社、俺がCTOとして技術周りは全部持つからな"),
  yuujin.say("誰もが認める『黒ポロ』で頂点の存在。俺を容赦なく巻き込んで起業の計画が進んでいく。"),
  Menu.prompt("どう答える？")
    .choose("「よし、一緒に世界を獲ろう」", [
      yuujin.say("「よし、お前がCTOなら最強だな。一緒に世界を獲ろうぜ」"),
      saasan.say("はっはっは！お前ならそう言うと思ったぜ。最高のプロダクト作ってやるよ"),
      yuujin.say("（肩を叩かれた。彼が技術トップなら本当にできそうな気がする）"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 3 })),
      ch1SaasanScene.jumpTo(ch1HaruchiroScene),
    ])
    .choose("「じゃあ俺は何をすればいいんだ？」", [
      yuujin.say("「力強いけど、じゃあ俺は何をすればいいんだ？」"),
      saasan.say("お前はビジネス側と雑務全部だ。代表取締役として前に立てよ"),
      yuujin.say("（いきなり一番責任の重い役割を実質的に丸投げされた）"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 2 })),
      ch1SaasanScene.jumpTo(ch1HaruchiroScene),
    ])
    .choose("「俺の出資比率はどうなる？」", [
      yuujin.say("「で、俺の出資比率（株）はどうなるんだ？」"),
      saasan.say("お前が代表なんだからお前が決めろよ。俺は開発費と最高の環境さえあれば文句ねえぞ"),
      yuujin.say("（お金の重圧がのしかかってきた。ビジネスパートナーとしての責任が重い）"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 1 })),
      ch1SaasanScene.jumpTo(ch1HaruchiroScene),
    ]),
]);

// まっすーシーン → さーさんへ
const ch1MassuScene = new Scene("ch1-massu", {
  background: "#1f2937",
});
ch1MassuScene.action([
  yuujin.say("まっすーから相談が来た。珍しく深刻な顔をしている。"),
  massu.say("ねえ聞いてよ！実はさ……卒研の時間感覚がちょっとやばくて！あはは！"),
  massu.say("遠距離の彼のこととか、東京での就活とか、カメラのこととか！全部考えてたら何も進まなくて！"),
  massu.say("先週の進捗報告さ、ちょっとだけ遅れちゃったんだよねー。2時間くらい！"),
  yuujin.say("（「ちょっと」の感覚がおかしい）"),
  Menu.prompt("どうアドバイスする？")
    .choose("ちゃんとスケジュール管理ツール入れろ", [
      yuujin.say("「ちゃんとスケジュール管理ツール入れろ。目に見える形でタスクを整理するんだ」"),
      massu.say("うっ……そうだよね。Notionでちゃんと管理してみる！"),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 3 })),
      ch1MassuScene.jumpTo(ch1SaasanScene),
    ])
    .choose("時間は有限だ、とりあえず寝ろ", [
      yuujin.say("「時間は有限だ、考えるのをやめてとりあえず寝ろ」"),
      massu.say("わかった！今日はふて寝する！おやすみー！"),
      yuujin.say("（問題は何も解決していない）"),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 1 })),
      ch1MassuScene.jumpTo(ch1SaasanScene),
    ])
    .choose("カメラに逃げるな！", [
      yuujin.say("「カメラに逃げるな！卒研やれ！」"),
      massu.say("痛いところ突かないでよー！わかってるってば！"),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 2 })),
      ch1MassuScene.jumpTo(ch1SaasanScene),
    ]),
]);

// ぱっくシーン（最初）→ まっすーへ
const ch1PackScene = new Scene("ch1-pack", {
  background: "#1c2e4a",
});
ch1PackScene.action([
  yuujin.say("最初に来たのはぱっくだった。就活の時期だというのに、妙に晴れやかな顔をしている。"),
  pack.say("なあ聞いてくれよ。大学入学当初からやってた起業の件なんだけどさ、俺、広報からエンジニアに転向したんだわ"),
  yuujin.say("（いきなりのキャリアチェンジ宣言。しかも文系職からゴリゴリの技術職への転向だ）"),
  pack.say("プログラミングってやってみると直感的というか……面白そうなことの解像度が上がるよな。"),
  pack.say("とりあえず一ヶ月くらい勉強して、俺が所属してる天文学サークル用のアプリをFlutterで自作し始めたところだ"),
  yuujin.say("（一ヶ月でそこまで形にするのはシンプルに天才としか言いようがない。しかし……）"),
  pack.say("で、色々やってたらタスクがコンフリクトしててさ。起業のコード書きつつ、サークルのアプリも進めたいんだけど、お前どう思う？"),
  Menu.prompt("どう答える？")
    .choose("「まずは起業の方のコードに集中しろ」", [
      yuujin.say("「まずは起業の方のコードに集中しろ。会社がかかってるんだろ」"),
      pack.say("んー、まあ確かに。利益直結のプロジェクトを優先するのは定石か。わかった、そっちのPRから処理するわ"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 3 })),
      ch1PackScene.jumpTo(ch1MassuScene),
    ])
    .choose("「両方全力で並行開発しろ！」", [
      yuujin.say("「いけるいける！両方全力で並行開発しろ！」"),
      pack.say("おっ、言うねえ！マルチスレッドで脳髄フル回転させてくるわ！"),
      yuujin.say("（彼は天才だが、確実に寿命を縮める選択をしてしまった気がする）"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 2 })),
      ch1PackScene.jumpTo(ch1MassuScene),
    ])
    .choose("「サークルのアプリ、面白そうだな」", [
      yuujin.say("「サークルのアプリ、面白そうだな。そっち見せてよ」"),
      pack.say("おっ、わかってるじゃねえか！UIのアニメーションが結構いい感じにできたんだよ！"),
      yuujin.say("（楽しそうなぱっくを見て、起業の方は大丈夫かと一抹の不安を覚えた）"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 1 })),
      ch1PackScene.jumpTo(ch1MassuScene),
    ]),
]);

// 第1章 エントリーシーン → ぱっくへ
export const chapter1Scene = new Scene("chapter1", {
  background: "#111827",
});
chapter1Scene.action([
  yuujin.say("【第1章: 春（4月〜）「全員ちょっと危ないスタート」】"),
  yuujin.say("いよいよ始まった最終学年。"),
  yuujin.say("しかし、就活や研究が本格化する春の初っ端から、5人から同時に連絡が来た。"),
  yuujin.say("……なんとなく、嫌な予感がした。"),
  chapter1Scene.jumpTo(ch1PackScene),
]);
