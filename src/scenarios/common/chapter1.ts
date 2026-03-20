import { Menu, Scene } from "narraleaf-react";
import { yuujin, pack, massu, saasan, haruchiro, tonapi } from "../../characters";
import { chapter2Scene } from "./chapter2";
import { gameFlags } from "../../store/gameState";

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
      ch1TonapiScene.jumpTo(chapter2Scene),
    ])
    .choose("新しい化合物として学会に出そう", [
      yuujin.say("「新しい化合物として学会に出そう」"),
      tonapi.say("ですよね！ちょっと教授に相談してみます！フフフ……"),
      yuujin.say("（危ない方向へ背中を押してしまったかもしれない）"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 1 })),
      ch1TonapiScene.jumpTo(chapter2Scene),
    ])
    .choose("バレーの応援がんばれ", [
      yuujin.say("「とりあえずバレーの応援がんばれ」"),
      tonapi.say("はい！全力で応援してきます！カビは放置しておきますね。"),
      yuujin.say("（放置するな）"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 2 })),
      ch1TonapiScene.jumpTo(chapter2Scene),
    ]),
]);

// はるちろシーン → となっぴーへ
const ch1HaruchiroScene = new Scene("ch1-haruchiro", {
  background: "#1e1b4b",
});
ch1HaruchiroScene.action([
  yuujin.say("はるちろが浮かれている。"),
  haruchiro.say("あ、あの！マチアプで気になる人ができまして！レスポンスが早いんですよ！"),
  haruchiro.say("でもDroidKaigiでも出会いがあって……コンフリクト起きてるんですけど、どっちにマージするのが正解だと思いますか？"),
  yuujin.say("（脳内が恋愛100%になっている。しかも技術用語が漏れている）"),
  haruchiro.say("とりあえずプロフィールにgitのリンク貼ったんですけど、なんか404というか、反応がなくて……"),
  haruchiro.say("あ、あと卒研のタスク、ちょっとだけ積んでるの忘れてました"),
  Menu.prompt("どうツッコミを入れる？")
    .choose("早く卒研のタスクやれ", [
      yuujin.say("「コンフリクト直す前に、早く卒研のタスクやれ」"),
      haruchiro.say("うっ……正論のPRが来ました。マージして卒研やります……"),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 3 })),
      ch1HaruchiroScene.jumpTo(ch1TonapiScene),
    ])
    .choose("gitのリンク直せばワンチャンある", [
      yuujin.say("「gitのリンク直せばワンチャンある」"),
      haruchiro.say("ですよね！ポートフォリオ充実させてきます！"),
      yuujin.say("（そっちじゃない）"),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 1 })),
      ch1HaruchiroScene.jumpTo(ch1TonapiScene),
    ])
    .choose("どっちにもいい顔しとけ", [
      yuujin.say("「どっちにもいい顔しとけ」"),
      haruchiro.say("なるほど！両方と並行稼働してみます！"),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 2 })),
      ch1HaruchiroScene.jumpTo(ch1TonapiScene),
    ]),
]);

// さーさんシーン → はるちろへ
const ch1SaasanScene = new Scene("ch1-saasan", {
  background: "#052e16",
});
ch1SaasanScene.action([
  yuujin.say("さーさんが珍しく連絡してきた。"),
  saasan.say("会社立ち上げようと思ってる。よし、卒業したら即稼働だな"),
  yuujin.say("（それ自体はさーさんなら普通の発言だ）"),
  saasan.say("ただ、車のミラーを昨日ちょっと当ててな。車検が来月なんだけど、まあ余裕だろ"),
  saasan.say("あと炒り卵カルボナーラの作り方を教えてくれ。絶対にネギは入れるなよ、成分表示も見たいから"),
  yuujin.say("（相談が3方向同時に来ている。これでハッカソンも優勝しているのだから末恐ろしい）"),
  Menu.prompt("どう答える？")
    .choose("生活習慣だけはどうにかしろ", [
      yuujin.say("「とりあえず、生活習慣だけはどうにかしろ。ネギも食え」"),
      saasan.say("チッ、わかったよ。野菜ジュースくらいは飲んどくわ。"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 3 })),
      ch1SaasanScene.jumpTo(ch1HaruchiroScene),
    ])
    .choose("車乗るのやめろ", [
      yuujin.say("「頼むから、しばらく車乗るのやめろ」"),
      saasan.say("なんでだよ！俺のドライビングテクニックを舐めるなよ！"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 2 })),
      ch1SaasanScene.jumpTo(ch1HaruchiroScene),
    ])
    .choose("炒り卵カルボナーラ食わせろ", [
      yuujin.say("「あとでその炒り卵カルボナーラ食わせろ」"),
      saasan.say("おう、任せとけ。最高のジャンクフードにしてやるよ！"),
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
  yuujin.say("最初に来たのはぱっくだった。"),
  pack.say("なあ聞いてくれよ。フランス人の彼氏ができたんだが、"),
  pack.say("同時に起業の話も進んでてさ。俺、エンジニアに転向した方がいいと思うんだよな"),
  pack.say("全部うまくいく気がするんだ。根拠？たいやきが用水路泳いでたからな、縁起いいだろ"),
  yuujin.say("（全部やろうとするのはわかった。ジンクスの根拠は意味不明だ）"),
  pack.say("留学生の女の子のお出迎えも今週あるし、天文学サークルのアプリもFlutterで作ってるしな"),
  Menu.prompt("どう答える？")
    .choose("まずは一つずつ確実に片付けろ", [
      yuujin.say("「まずは一つずつ確実に片付けろ。キャパオーバーするぞ」"),
      pack.say("んー、まあ確かに一気にやると死ぬかもな。わかった、優先順位つけるわ。"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 3 })),
      ch1PackScene.jumpTo(ch1MassuScene),
    ])
    .choose("とりあえず全部全力でやれ！", [
      yuujin.say("「とりあえず全部全力でやれ！いけるいける！」"),
      pack.say("おっ、わかってるじゃねえか！全部やってやるよ！"),
      yuujin.say("（破滅へのカウントダウンが始まった気がする）"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 1 })),
      ch1PackScene.jumpTo(ch1MassuScene),
    ])
    .choose("留学生のお出迎えだけは絶対に行くな", [
      yuujin.say("「留学生のお出迎えだけは絶対に行くな。絶対にだ」"),
      pack.say("なんでだよ！そこが一番行きたいところだろ！絶対行くわ！"),
      yuujin.say("（案の定、話を聞かなかった）"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 0 })),
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
