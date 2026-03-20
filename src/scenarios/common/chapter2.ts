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
  yuujin.say("【夏の回想: はるちろとマチアプ】"),
  yuujin.say("はるちろがマチアプを始めると言いだしたとき、服を買いに行く話になった。"),
  haruchiro.say("服屋の店員さん、めちゃくちゃ丁寧に教えてくれましたよ。もうメンターみたいでした！"),
  yuujin.say("翌日、自己紹介文をMarkdownで書きかけているのを発見した。"),
  haruchiro.say("えっ、コーディングの癖とか知っときたいでしょ？gitのリンクは載せるべきですよね？"),
  yuujin.say("どう考えてもマチアプの定石から外れている。"),
  Menu.prompt("どうアドバイスする？")
    .choose("Markdownはやめとけ", [
      yuujin.say("「頼むから、マチアプの自己紹介にMarkdownを使うのはやめとけ」"),
      haruchiro.say("えーっ。可読性上がるのに。……でもわかりました。普通に書きます。"),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 3 })),
      haruchiroFlashback.jumpTo(tonapiFlashback),
    ])
    .choose("むしろGitHubの草生やしたスクショ載せろ", [
      yuujin.say("「中途半端にやるな。むしろGitHubの草生やしたスクショ載せろ」"),
      haruchiro.say("なるほど！技術力と継続力のアピールですね！採用します！"),
      yuujin.say("（絶対にマッチングしないと思う）"),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 1 })),
      haruchiroFlashback.jumpTo(tonapiFlashback),
    ])
    .choose("服屋の店員さんにアタックしろ", [
      yuujin.say("「いっそのこと、そのメンターみたいな服屋の店員さんにアタックしろよ」"),
      haruchiro.say("えっ！？そ、それは難易度高すぎません！？エラー吐きそう！"),
      gameFlags.assign((s) => ({ haruchiro_graduation_power: s.haruchiro_graduation_power + 2 })),
      haruchiroFlashback.jumpTo(tonapiFlashback),
    ]),
]);

// さーさん回想 → はるちろへ
const saasanFlashback = new Scene("saasan-flashback", {
  background: "#052e16",
});
saasanFlashback.action([
  yuujin.say("【夏の回想: さーさんと海陽町】"),
  yuujin.say("さーさんが海陽町から転校してきた日のことを覚えている。"),
  saasan.say("ああ、海の町から来たわ"),
  yuujin.say("それだけ言って、翌週には即席チームのハッカソンで無双していた。"),
  yuujin.say("だが去年の卒サプ事件——研究室のプリンターを終電まで占拠された話——は今でも語り草だ。"),
  saasan.say("あれは俺も悪かったと思ってる。でも、俺の資料は完璧だっただろ？"),
  Menu.prompt("どう振り返る？")
    .choose("プリンターは計画的に使え", [
      yuujin.say("「資料が完璧でも、プリンターはもっと計画的に使え」"),
      saasan.say("痛いところを突くね。今年はペーパーレスでいくわ。"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 3 })),
      saasanFlashback.jumpTo(haruchiroFlashback),
    ])
    .choose("次のハッカソンも一緒に出ようぜ", [
      yuujin.say("「まあいいさ。次のハッカソンも一緒に出ようぜ」"),
      saasan.say("おう、任せとけ。また優勝させてやるよ。"),
      gameFlags.assign((s) => ({ saasan_graduation_power: s.saasan_graduation_power + 2 })),
      saasanFlashback.jumpTo(haruchiroFlashback),
    ])
    .choose("海陽町ってどこだっけ？", [
      yuujin.say("「ところで、海陽町ってどこだっけ？」"),
      saasan.say("……お前、マジで言ってんの？徳島の右下だよ！！"),
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
  yuujin.say("【夏の回想: ぱっくとたいやき】"),
  yuujin.say("それは、ある蒸し暑い日のことだった。"),
  pack.say("あ"),
  yuujin.say("橋の上で、ぱっくの手からたいやきが落ちた。"),
  yuujin.say("たいやきは弧を描き、用水路の中へと消えた。"),
  pack.say("……泳いでるな。"),
  yuujin.say("二人で5分間、用水路を流れるたいやきを見つめた。"),
  pack.say("なかなか面白いことするじゃないか。なんかこれ、縁起いいな"),
  yuujin.say("以来、ぱっくの中で「たいやきを流す＝成功のジンクス」という謎の方程式が生まれたそうだ。"),
  Menu.prompt("どう突っ込む？")
    .choose("食べ物を粗末にするな", [
      yuujin.say("「ジンクス以前に、食べ物を粗末にするなとしか言えん」"),
      pack.say("うっ……正論過ぎて反論できねぇ。次はちゃんと食うわ。"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 3 })),
      packFlashback.jumpTo(massuFlashback),
    ])
    .choose("なるほど、縁起いいな！", [
      yuujin.say("「なるほど、用水路を力強く泳ぐたいやき……縁起いいな！」"),
      pack.say("おっ！お前もわかってきたか！これで俺の起業も大成功だな！"),
      gameFlags.assign((s) => ({ pack_graduation_power: s.pack_graduation_power + 2 })),
      packFlashback.jumpTo(massuFlashback),
    ])
    .choose("意味不明すぎる。もう一回落としてみろ", [
      yuujin.say("「意味不明すぎる。よし、もう一回落としてみろ」"),
      pack.say("おっ、いいぜ！って、もうたいやき持ってねえよ！"),
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
