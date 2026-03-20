import { Scene, Menu, Condition } from "narraleaf-react";
import { yuujin, pack, massu, saasan, haruchiro, tonapi } from "../../characters";
import { chapter3Scene } from "./chapter3";
import { gameFlags } from "../../store/gameState";
import { gameEvents } from "../../store/gameEvents";

// 第2章: 夏（7月〜）「過去エピソード解放と夏のトラブル」
// シーンを末端から定義して jumpTo で数珠つなぎにする

// となっぴー回想（最後）→ 第3章へ
const tonapiFlashback = new Scene("tonapi-flashback", {
  background: "#042f2e",
});
tonapiFlashback.action([
  yuujin.say("【夏の回想: となっぴーの旅行】"),
  yuujin.say("となっぴーが旅行に行ったとき、河原で石を積みすぎたらしい。"),
  tonapi.say("なんとなく積みたくなって。フフ、崩れていて少し残念でした"),
  yuujin.say("バレーボール観戦では、推しチームの一点で顔色が大きく変わった。"),
  tonapi.say("あれは感情が動いただけです。推し活ですから！"),
  yuujin.say("研究室では、カビの培養速度が「理論値を超えた」という謎の報告がされていた。"),
  yuujin.say("となっぴーは静かに危なかった。"),
  Menu.prompt("どうツッコミを入れる？")
    .choose("研究データはちゃんと取れよ", [
      yuujin.say("「色々あるだろうが、カビの研究データはちゃんと取れよ」"),
      tonapi.say("はい、もちろん記録は残しています。論文のネタになるかもしれませんし！"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 3 })),
    ])
    .choose("一緒に推し活しよう", [
      yuujin.say("「そんなに楽しいなら、俺も一緒に推し活しようかな」"),
      tonapi.say("えっ！？本当に！？じゃあまずは用語集から覚えてもらって……"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 2 })),
    ])
    .choose("石は積み直した方がいい", [
      yuujin.say("「そこまで言うなら、河原に戻って石を積み直した方がいい」"),
      tonapi.say("ですよね！じゃあ今週末、もう一度行ってきます！フフ……"),
      yuujin.say("（なぜ背中を押してしまったのだろう）"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 1 })),
    ]),

  Condition.If(() => {
    gameEvents.triggerChapterTitle("第3章");
    return false;
  }, []),

  tonapiFlashback.jumpTo(chapter3Scene),
]);

// はるちろ回想 → となっぴーへ
const haruchiroFlashback = new Scene("haruchiro-flashback", {
  background: "#2d1b69",
});
haruchiroFlashback.action([
  yuujin.say("【夏の回想: はるちろの想い人】"),
  yuujin.say("はるちろが夏頃から、なんとなく落ち着かない様子をしていた。"),
  haruchiro.say("えっと……好きな人ができまして。どうすればいいか全然わからなくて"),
  yuujin.say("（珍しい。はるちろがそういうことを話してくるのはほぼ初めてだ）"),
  haruchiro.say("とりあえず気持ちを整理しようと思って、自己紹介文をMarkdownで書いたんですけど……"),
  yuujin.say("（なぜMarkdown……）"),
  Menu.prompt("どうアドバイスする？")
    .choose("Markdownはやめとけ", [
      yuujin.say("「頼むから、自己紹介にMarkdownを使うのはやめとけ」"),
      haruchiro.say("えーっ。可読性上がるのに。……でもわかりました。普通に書きます。"),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 3 })),
      haruchiroFlashback.jumpTo(tonapiFlashback),
    ])
    .choose("むしろGitHubの草生やしたスクショ載せろ", [
      yuujin.say("「中途半端にやるな。むしろGitHubの草生やしたスクショも見せてやれ」"),
      haruchiro.say("なるほど！技術力と継続力のアピールですね！採用します！"),
      yuujin.say("（ちょっと違う方向に行った気がする）"),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 1 })),
      haruchiroFlashback.jumpTo(tonapiFlashback),
    ])
    .choose("服屋の店員さんにアタックしろ", [
      yuujin.say("「まず服を買いに行け。店員さんに全部任せろ」"),
      haruchiro.say("えっ！？服買うんですか。……でもたしかに、ファッション全然わからないです"),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 2 })),
      haruchiroFlashback.jumpTo(tonapiFlashback),
    ]),
]);

// さーさん回想 → はるちろへ
const saasanFlashback = new Scene("saasan-flashback", {
  background: "#052e16",
});
saasanFlashback.action([
  yuujin.say("【夏のトラブル: 強者のドライブ】"),
  yuujin.say("夏の暑い日、さーさんがふらっと現れた。"),
  saasan.say("おう、昨日ちょっと車で出かけてたんだけどさ。軽くミラー当てちゃってな"),
  yuujin.say("「お前でも運転ミスることあるんだな」"),
  saasan.say("弘法にも筆の誤りってやつだな。まあ、それはいいんだが……"),
  saasan.say("よく考えたら、俺の車、半年前に車検切れてたわ"),
  yuujin.say("（全然よくない。コンプライアンスの概念が豪快に欠落している）"),
  Menu.prompt("どうツッコミを入れる？")
    .choose("「今すぐ車を封印しろ」", [
      yuujin.say("「今すぐその車を封印しろ。これ以上は犯罪だ」"),
      saasan.say("厳しいな。まあ、今日から俺は徒歩勢になるわ"),
      yuujin.say("（素直に諦めてくれたので安堵した）"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 3 })),
      saasanFlashback.jumpTo(haruchiroFlashback),
    ])
    .choose("「ミラー直すより先に車検通せ」", [
      yuujin.say("「ミラー直すより先に車検通せよ」"),
      saasan.say("だよな。じゃあ今からユーザー車検に持ち寄ってくるわ"),
      yuujin.say("（行動力は随一だが、そもそも乗るなと言いたい）"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 2 })),
      saasanFlashback.jumpTo(haruchiroFlashback),
    ])
    .choose("「名古屋に海陽町のノリを持ち込むな」", [
      yuujin.say("「名古屋に海陽町のノリを持ち込むな。お前の地元の常識だとしてもアウトだぞ」"),
      saasan.say("ははっ、海陽町でも流石に車検切れはアウトだわ！"),
      yuujin.say("（ノリツッコミのキレも良い）"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 1 })),
      saasanFlashback.jumpTo(haruchiroFlashback),
    ]),
]);

// まっすー回想 → さーさんへ
const massuFlashback = new Scene("massu-flashback", {
  background: "#2d1f3d",
});
massuFlashback.action([
  yuujin.say("【夏の回想: まっすーの中間発表遅刻事件】"),
  yuujin.say("ソフトボール全国大会に行くくらいの実力者が、なぜ中間発表に2時間遅刻したのか。"),
  massu.say("ごめーん！遠距離の彼から電話が来て……つい長くなっちゃって！あはは！"),
  yuujin.say("発表室の外で待つ指導教員の顔は、今でも夢に見る。"),
  massu.say("さーさんに恋愛相談してたのも、あの頃だったなあー。なんでさーさんだったんだろ？"),
  Menu.prompt("どうコメントする？")
    .choose("さすがに発表前は電話切るべきだろ", [
      yuujin.say("「さすがに発表の直前くらいは電話切るべきだろ……」"),
      massu.say("そうだよねー、あの時は本当に反省したよ！次からは気をつける！"),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 3 })),
      massuFlashback.jumpTo(saasanFlashback),
    ])
    .choose("さーさんに恋愛相談してたのが一番ウケた", [
      yuujin.say("「遅刻より、さーさんに恋愛相談してたのが一番ウケた」"),
      massu.say("ね！さーさん、意外と真面目に答えてくれたんだよ！？あはは！"),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 2 })),
      massuFlashback.jumpTo(saasanFlashback),
    ])
    .choose("遠距離ならしょうがない", [
      yuujin.say("「まあ、遠距離恋愛ならしょうがない面もあるよな」"),
      massu.say("でしょー！？わかってくれるー！？彼氏が一番大事だからね！"),
      yuujin.say("（完全に肯定してしまった）"),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 1 })),
      massuFlashback.jumpTo(saasanFlashback),
    ]),
]);

// ぱっく回想 → まっすーへ
const packFlashback = new Scene("pack-flashback", {
  background: "#1c2e4a",
});
packFlashback.action([
  yuujin.say("【夏の回想: ぱっくと泳ぐたいやき】"),
  yuujin.say("蒸し暑い日、用水路を見つめるぱっくを見て、ふと高校時代の昔話を思い出した。"),
  pack.say("そういえば昔さ、この用水路にたいやきを落としたことがあってな"),
  yuujin.say("「落とした、お前が自発的にか？」"),
  pack.say("ああ。たいやきって魚だろ？泳がせてみたらどうなるか急に気になってな"),
  yuujin.say("（行動力のベクトルが明らかにおかしい。「よくわからなくて面白いこと」を正義だと思いすぎている）"),
  pack.say("そしたらさ、結構綺麗に泳いでたんだよな。あれを見た時、俺の人生の可能性も無限大だなって確信したね"),
  yuujin.say("（独特すぎる価値観だ。天才と変人は紙一重である。）"),
  Menu.prompt("どう突っ込む？")
    .choose("「食べ物を粗末にするな」", [
      yuujin.say("「可能性はともかく、食べ物を粗末にするなとしか言えん」"),
      pack.say("うっ……ごもっともすぎる。今思えば若気の至りだったわ"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 3 })),
      packFlashback.jumpTo(massuFlashback),
    ])
    .choose("「なるほど、縁起いいな！」", [
      yuujin.say("「なるほど、用水路を力強く泳ぐたいやき……縁起いいな！」"),
      pack.say("おっ！お前もわかってきたか！あの泳ぎっぷりはまさにイノベーションの予兆だったね"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 2 })),
      packFlashback.jumpTo(massuFlashback),
    ])
    .choose("「じゃあ今からもう一回泳がせるか？」", [
      yuujin.say("「じゃあ今からもう一回泳がせるか？」"),
      pack.say("おっ、いいぜ！……って、今は手元にたいやきが無いな。買ってこいよ"),
      yuujin.say("（乗っかってしまったが、パシリにされそうになった）"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 1 })),
      packFlashback.jumpTo(massuFlashback),
    ]),
]);

// 第2章 エントリーシーン → ぱっく回想へ
export const chapter2Scene = new Scene("chapter2", {
  background: "#1e1b4b",
});
chapter2Scene.action([
  yuujin.say("【第2章: 夏（7月〜）「過去エピソード解放と夏のトラブル」】"),
  yuujin.say("夏がやってきた。就活と研究の合間に、ふと思い出す。"),
  yuujin.say("そういえばこの6人、昔からずっとこんな感じでやらかしを繰り返していた。"),
  chapter2Scene.jumpTo(packFlashback),
]);
