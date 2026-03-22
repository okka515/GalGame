import { Scene, Menu, Condition } from "narraleaf-react";
import { yuujin, pack, massu, saasan, haruchiro, tonapi, packImg, massuImg, saasanImg, haruchiroImg, tonapiImg } from "../../characters";
import { chapter3Scene } from "./chapter3";
import { gameFlags } from "../../store/gameState";
import { gameEvents } from "../../store/gameEvents";

// 第2章: 夏（7月〜）「過去エピソード解放と夏のトラブル」
// シーンを末端から定義して jumpTo で数珠つなぎにする

// となっぴー回想（最後）→ 第3章へ
const tonapiFlashback = new Scene("tonapi-flashback", {
  background: "/backgrounds/university_summer.png",
});
tonapiFlashback.action([
  yuujin.say("【夏の回想: となっぴーと石積みの旅】"),
  yuujin.say("夏の旅行中、となっぴーが河原で石を積み始めた。"),
  tonapiImg.show(),
  tonapi.say("なんとなく、積みたくなって……フフ"),
  yuujin.say("「なんとなく」にしては、積み方が尋常ではなかった。"),
  yuujin.say("1時間後、となっぴーが積んだ石塔は他のグループが積んだものの2倍以上の高さになっていた。"),
  tonapi.say("伝承では、河原に石を積みすぎると良くないことが起きるって言われてるんですよね。フフ"),
  tonapiImg.hide(),
  yuujin.say("（それを知りながら積んでいたのか）"),
  yuujin.say("翌朝、石塔は綺麗に崩れていた。となっぴーは静かに写真を撮っていた。"),
  Menu.prompt("どうツッコミを入れる？")
    .choose("「なんで知りながら積んだんだ」", [
      yuujin.say("「伝承を知ってて、なんで積んだんだ……」"),
      tonapiImg.show(),
      tonapi.say("だって、積みたくなったんですもん。でも次は気をつけます。フフ"),
      tonapiImg.hide(),
      yuujin.say("（全然気にしていないことがわかった）"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 3 })),
    ])
    .choose("「崩れた写真、なんで撮ってるんだ」", [
      yuujin.say("「崩れた後の写真、なんで楽しそうに撮ってるんだ」"),
      tonapiImg.show(),
      tonapi.say("記録として残しておきたくて……崩れた状態も、美しいですよね。フフフ"),
      tonapiImg.hide(),
      yuujin.say("（価値観のずれを感じたが、否定はできなかった）"),
      gameFlags.assign((s) => ({ tonapi_graduation_power: s.tonapi_graduation_power + 2 })),
    ])
    .choose("「もう一回積み直そう」", [
      yuujin.say("「よし、もう一回積み直そうぜ。今度は崩れないように」"),
      tonapiImg.show(),
      tonapi.say("いいですね！じゃあ今度は伝承を無視して積みましょう！フフ"),
      tonapiImg.hide(),
      yuujin.say("（背中を押してしまったが、そのとき俺たちはどこか楽しかった）"),
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
  background: "/backgrounds/university_summer.png",
});
haruchiroFlashback.action([
  yuujin.say("【夏の回想: はるちろの想い人】"),
  yuujin.say("はるちろが夏頃から、なんとなく落ち着かない様子をしていた。"),
  haruchiroImg.show(),
  haruchiro.say("えっと……好きな人ができまして。どうすればいいか全然わからなくて"),
  yuujin.say("（珍しい。はるちろがそういうことを話してくるのはほぼ初めてだ）"),
  haruchiro.say("とりあえず気持ちを整理しようと思って、自己紹介文をMarkdownで書いたんですけど……"),
  haruchiroImg.hide(),
  yuujin.say("（なぜMarkdown……）"),
  Menu.prompt("どうアドバイスする？")
    .choose("Markdownはやめとけ", [
      yuujin.say("「頼むから、自己紹介にMarkdownを使うのはやめとけ」"),
      haruchiroImg.show(),
      haruchiro.say("えーっ。可読性上がるのに。……でもわかりました。普通に書きます。"),
      haruchiroImg.hide(),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 3 })),
      haruchiroFlashback.jumpTo(tonapiFlashback),
    ])
    .choose("むしろGitHubの草生やしたスクショ載せろ", [
      yuujin.say("「中途半端にやるな。むしろGitHubの草生やしたスクショも見せてやれ」"),
      haruchiroImg.show(),
      haruchiro.say("なるほど！技術力と継続力のアピールですね！採用します！"),
      haruchiroImg.hide(),
      yuujin.say("（ちょっと違う方向に行った気がする）"),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 1 })),
      haruchiroFlashback.jumpTo(tonapiFlashback),
    ])
    .choose("服屋の店員さんにアタックしろ", [
      yuujin.say("「まず服を買いに行け。店員さんに全部任せろ」"),
      haruchiroImg.show(),
      haruchiro.say("えっ！？服買うんですか。……でもたしかに、ファッション全然わからないです"),
      haruchiroImg.hide(),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 2 })),
      haruchiroFlashback.jumpTo(tonapiFlashback),
    ]),
]);

// さーさん回想 → はるちろへ
const saasanFlashback = new Scene("saasan-flashback", {
  background: "/backgrounds/university_summer.png",
});
saasanFlashback.action([
  yuujin.say("【夏のトラブル: 強者のドライブ】"),
  yuujin.say("夏の暑い日、さーさんがふらっと現れた。"),
  saasanImg.show(),
  saasan.say("おう、昨日ちょっと車で出かけてたんだけどさ。軽くミラー当てちゃってな"),
  yuujin.say("「お前でも運転ミスることあるんだな」"),
  saasan.say("弘法にも筆の誤りってやつだな。まあ、それはいいんだが……"),
  saasan.say("よく考えたら、俺の車、半年前に車検切れてたわ"),
  saasanImg.hide(),
  yuujin.say("（全然よくない。コンプライアンスの概念が豪快に欠落している）"),
  Menu.prompt("どうツッコミを入れる？")
    .choose("「今すぐ車を封印しろ」", [
      yuujin.say("「今すぐその車を封印しろ。これ以上は犯罪だ」"),
      saasanImg.show(),
      saasan.say("厳しいな。まあ、今日から俺は徒歩勢になるわ"),
      saasanImg.hide(),
      yuujin.say("（素直に諦めてくれたので安堵した）"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 3 })),
      saasanFlashback.jumpTo(haruchiroFlashback),
    ])
    .choose("「ミラー直すより先に車検通せ」", [
      yuujin.say("「ミラー直すより先に車検通せよ」"),
      saasanImg.show(),
      saasan.say("だよな。じゃあ今からユーザー車検に持ち寄ってくるわ"),
      saasanImg.hide(),
      yuujin.say("（行動力は随一だが、そもそも乗るなと言いたい）"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 2 })),
      saasanFlashback.jumpTo(haruchiroFlashback),
    ])
    .choose("「名古屋に海陽町のノリを持ち込むな」", [
      yuujin.say("「名古屋に海陽町のノリを持ち込むな。お前の地元の常識だとしてもアウトだぞ」"),
      saasanImg.show(),
      saasan.say("ははっ、海陽町でも流石に車検切れはアウトだわ！"),
      saasanImg.hide(),
      yuujin.say("（ノリツッコミのキレも良い）"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 1 })),
      saasanFlashback.jumpTo(haruchiroFlashback),
    ]),
]);

// まっすー回想 → さーさんへ
const massuFlashback = new Scene("massu-flashback", {
  background: "/backgrounds/university_summer.png",
});
massuFlashback.action([
  yuujin.say("【夏の回想: まっすーの中間発表遅刻事件】"),
  yuujin.say("ソフトボール全国大会に行くくらいの実力者が、なぜ中間発表に2時間遅刻したのか。"),
  massuImg.show(),
  massu.say("ごめーん！実は最近好きな人ができてさ、その話してたら長くなっちゃって！あはは！"),
  yuujin.say("発表室の外で待つ指導教員の顔は、今でも夢に見る。"),
  massu.say("さーさんに恋愛相談してたのも、あの頃だったなあー。なんでさーさんだったんだろ？"),
  massuImg.hide(),
  Menu.prompt("どうコメントする？")
    .choose("さすがに発表前は電話切るべきだろ", [
      yuujin.say("「さすがに発表の直前くらいは電話切るべきだろ……」"),
      massuImg.show(),
      massu.say("そうだよねー、あの時は本当に反省したよ！次からは気をつける！"),
      massuImg.hide(),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 3 })),
      massuFlashback.jumpTo(saasanFlashback),
    ])
    .choose("さーさんに恋愛相談してたのが一番ウケた", [
      yuujin.say("「遅刻より、さーさんに恋愛相談してたのが一番ウケた」"),
      massuImg.show(),
      massu.say("ね！さーさん、意外と真面目に答えてくれたんだよ！？あはは！"),
      massuImg.hide(),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 2 })),
      massuFlashback.jumpTo(saasanFlashback),
    ])
    .choose("遠距離ならしょうがない", [
      yuujin.say("「まあ、好きな人ができたなら仕方ない面もあるよな」"),
      massuImg.show(),
      massu.say("でしょー！？わかってくれるー！？彼氏が一番大事だからね！"),
      massuImg.hide(),
      yuujin.say("（完全に肯定してしまった）"),
      gameFlags.assign((s) => ({ massu_graduation_power: s.massu_graduation_power + 1 })),
      massuFlashback.jumpTo(saasanFlashback),
    ]),
]);

// ぱっく回想 → まっすーへ
const packFlashback = new Scene("pack-flashback", {
  background: "/backgrounds/university_summer.png",
});
packFlashback.action([
  yuujin.say("【夏の回想: ぱっくと泳ぐたいやき】"),
  yuujin.say("蒸し暑い日、用水路を見つめるぱっくを見て、ふと高校時代の昔話を思い出した。"),
  packImg.show(),
  pack.say("そういえば昔さ、この用水路にたいやきを落としたことがあってな"),
  yuujin.say("「落とした、お前が自発的にか？」"),
  pack.say("ああ。たいやきって魚だろ？泳がせてみたらどうなるか急に気になってな"),
  yuujin.say("（行動力のベクトルが明らかにおかしい。「よくわからなくて面白いこと」を正義だと思いすぎている）"),
  pack.say("そしたらさ、結構綺麗に泳いでたんだよな。あれを見た時、俺の人生の可能性も無限大だなって確信したね"),
  packImg.hide(),
  yuujin.say("（独特すぎる価値観だ。天才と変人は紙一重である。）"),
  Menu.prompt("どう突っ込む？")
    .choose("「食べ物を粗末にするな」", [
      yuujin.say("「可能性はともかく、食べ物を粗末にするなとしか言えん」"),
      packImg.show(),
      pack.say("うっ……ごもっともすぎる。今思えば若気の至りだったわ"),
      packImg.hide(),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 3 })),
      packFlashback.jumpTo(massuFlashback),
    ])
    .choose("「なるほど、縁起いいな！」", [
      yuujin.say("「なるほど、用水路を力強く泳ぐたいやき……縁起いいな！」"),
      packImg.show(),
      pack.say("おっ！お前もわかってきたか！あの泳ぎっぷりはまさにイノベーションの予兆だったね"),
      packImg.hide(),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 2 })),
      packFlashback.jumpTo(massuFlashback),
    ])
    .choose("「じゃあ今からもう一回泳がせるか？」", [
      yuujin.say("「じゃあ今からもう一回泳がせるか？」"),
      packImg.show(),
      pack.say("おっ、いいぜ！……って、今は手元にたいやきが無いな。買ってこいよ"),
      packImg.hide(),
      yuujin.say("（乗っかってしまったが、パシリにされそうになった）"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 1 })),
      packFlashback.jumpTo(massuFlashback),
    ]),
]);

// 第2章 エントリーシーン → ぱっく回想へ
export const chapter2Scene = new Scene("chapter2", {
  background: "/backgrounds/university_summer.png",
});
chapter2Scene.action([
  yuujin.say("【第2章: 夏（7月〜）「過去エピソード解放と夏のトラブル」】"),
  yuujin.say("夏がやってきた。就活と研究の合間に、ふと思い出す。"),
  yuujin.say("そういえばこの6人、昔からずっとこんな感じでやらかしを繰り返していた。"),
  chapter2Scene.jumpTo(packFlashback),
]);
