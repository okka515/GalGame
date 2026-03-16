import { Scene, Menu } from "narraleaf-react";
import { yuujin, massu, saasan, haruchiro } from "../../characters";
import { chapter4Scene } from "./chapter4";

// 第3章: ミニゲーム・修羅場
// ミニゲーム① バイバイファイト
export const chapter3Scene = new Scene("chapter3", {
  background: "#1f2937",
});

const ch3MinigameLine = new Scene("ch3-minigame-line", {
  background: "#2d1b69",
});

// ミニゲーム② 恋愛相談LINE返信
ch3MinigameLine.action([
  yuujin.say("【ミニゲーム: 恋愛相談LINE返信】"),
  yuujin.say("はるちろからLINEが来た。マチアプのプロフィール文の確認依頼だ。"),
  haruchiro.say(
    "（送られてきた文面）「趣味: コード書くこと / 特技: アルゴリズムの最適化 / 一言: 一緒にコミット歴を積み上げましょう」"
  ),
  yuujin.say("……これはやばい。"),
  Menu.prompt("どう返信する？")
    .choose("「やばい。全部書き直せ」と止める", [
      haruchiro.say("え！？ダメですか？！"),
      yuujin.say("全力でダメだと伝えた。一緒にプロフィールを書き直した。"),
      yuujin.say("はるちろ、マッチング成功率が上がった（気がする）。"),
    ])
    .choose("「いいじゃん！個性的で」と褒める", [
      haruchiro.say("本当ですか！？送ってみます！"),
      yuujin.say("反応は……なかった。"),
    ])
    .choose("「gitリンクも貼れ」とさらに悪化させる", [
      haruchiro.say("確かに！GitHubのURLも追加します！"),
      yuujin.say("マッチング率が大幅に低下した。"),
    ]),
  ch3MinigameLine.jumpTo(chapter4Scene),
]);

// ミニゲーム① バイバイファイト（まっすーとさーさんの口論）
chapter3Scene.action([
  yuujin.say("【第3章: ミニゲーム・修羅場】"),
  yuujin.say("ある日、研究室でまっすーとさーさんが激突した。"),
  massu.say("プリンター、あと2時間使うから！卒サプの写真を現像しないといけないんだけど！"),
  saasan.say("俺も卒論の最終確認で使うんだけど。去年も終電まで占拠してたよな"),
  massu.say("去年は卒サプのためだから仕方なかったし！"),
  saasan.say("俺の卒論も仕方ないんだよ"),
  yuujin.say("（二人の間に入る必要がある）"),
  Menu.prompt("【バイバイファイト】どうする？")
    .choose("「二人とも卒業できればそれでいい」となだめる", [
      yuujin.say("二人とも、追いコンで会う約束しただろ。それが全部終わった後の話にしよう"),
      massu.say("……そうだね"),
      saasan.say("まあ、そうか"),
      yuujin.say("二人の間に平和が戻った。友情バランス維持。"),
    ])
    .choose("まっすーの味方をする", [
      yuujin.say("卒サプは大事だよ。さーさん、今日は譲ってやれ"),
      saasan.say("……わかった"),
      yuujin.say("さーさんは表向きは引いたが、微妙な空気が残った。"),
    ])
    .choose("さーさんの味方をする", [
      yuujin.say("卒論の方が優先度高くない？まっすー、後にしよう"),
      massu.say("……うん"),
      yuujin.say("まっすーは引いたが、少し傷ついた様子だった。"),
    ]),
  chapter3Scene.jumpTo(ch3MinigameLine),
]);

export { ch3MinigameLine };
