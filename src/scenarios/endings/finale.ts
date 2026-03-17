import { Scene, Condition } from "narraleaf-react";
import { yuujin, pack, massu, saasan, haruchiro, tonapi } from "../../characters";
import { gameFlags } from "../../store/gameState";

// ===== 統合エンディング =====
// 全ルートからここにジャンプし、各キャラの graduation_power に基づいて結末を分岐表示する
//
// フロー:
// finaleScene → packResult → massuResult → saasanResult → haruchiroResult → tonapiResult → epilogue

// --- 中継シーン（各キャラの結果分岐ポイント） ---
const packResult = new Scene("finale-pack-result", { background: "#fef9c3" });
const massuResult = new Scene("finale-massu-result", { background: "#fef9c3" });
const saasanResult = new Scene("finale-saasan-result", { background: "#fef9c3" });
const haruchiroResult = new Scene("finale-haruchiro-result", { background: "#fef9c3" });
const tonapiResult = new Scene("finale-tonapi-result", { background: "#fef9c3" });
const epilogue = new Scene("finale-epilogue", { background: "#fef9c3" });

// ===== フィナーレ本体 =====
export const finaleScene = new Scene("finale", {
  background: "#fef9c3",
});

finaleScene.action([
  yuujin.say("追いコン当日——"),
  yuujin.say("みんながそれぞれの道を歩んだ結果が、ここに集まっている。"),
  yuujin.say(""),
  yuujin.say("——みんなの今——"),
  finaleScene.jumpTo(packResult),
]);

// ===== ぱっくの結果 =====
packResult.action([
  Condition.If(gameFlags.evaluate("pack_graduation_power", (v) => (v || 0) >= 7), [
    pack.say("起業の話、ちゃんと固まった！フランスの彼とも会えることになったし、エンジニアとして食っていける自信もついた"),
    yuujin.say("ぱっくは起業と国際恋愛を両立させ、首席卒業を達成した。"),
  ]).ElseIf(gameFlags.evaluate("pack_graduation_power", (v) => (v || 0) >= 4), [
    pack.say("まあ、なんとか卒業はできた。起業はもうちょっと後で考える"),
    yuujin.say("ぱっくは普通に卒業した。フランスの件は保留。エンジニアとして就職した。"),
  ]).Else([
    pack.say("（LINEより）「国際ホームレスになりました。元気です」"),
    yuujin.say("ぱっくは海外から帰ってこなかった。Suica感覚で改札を突破した結果、破滅した。"),
  ]),
  yuujin.say(""),
  packResult.jumpTo(massuResult),
]);

// ===== まっすーの結果 =====
massuResult.action([
  Condition.If(gameFlags.evaluate("massu_graduation_power", (v) => (v || 0) >= 7), [
    massu.say("卒研、なんとか間に合った！東京の広告会社から内定ももらえたし、卒サプの写真は全部私が撮るね"),
    yuujin.say("まっすーは東京就職。写真がSNSでバズり、キラキラ業界エンドへ。"),
  ]).ElseIf(gameFlags.evaluate("massu_graduation_power", (v) => (v || 0) >= 4), [
    massu.say("ギリギリだったけど、卒業できた"),
    yuujin.say("まっすーはギリギリ卒業できた。カメラは趣味として続けている。"),
  ]).Else([
    yuujin.say("まっすーは追いコンに来なかった。発表会当日に寝坊して遅刻2時間。"),
    yuujin.say("卒業できなかった。カメラは壊れた。"),
  ]),
  yuujin.say(""),
  massuResult.jumpTo(saasanResult),
]);

// ===== さーさんの結果 =====
saasanResult.action([
  Condition.If(gameFlags.evaluate("saasan_graduation_power", (v) => (v || 0) >= 7), [
    saasan.say("車検通った。会社の登記も終わった。卒研の発表、一番よかったって言われた。まあ、俺の人生に失敗はなかった"),
    yuujin.say("さーさんは当然のように首席卒業。会社は翌年に軌道に乗り始めた。"),
  ]).ElseIf(gameFlags.evaluate("saasan_graduation_power", (v) => (v || 0) >= 4), [
    saasan.say("なんとか卒業した。会社は来年ゆっくり動かす"),
    yuujin.say("さーさんは卒業した。最強だが卒業もした。"),
  ]).Else([
    saasan.say("（LINEより）「魚うまい」"),
    yuujin.say("さーさんは海陽町に帰って漁師になった。追いコンには来なかった。"),
  ]),
  yuujin.say(""),
  saasanResult.jumpTo(haruchiroResult),
]);

// ===== はるちろの結果 =====
haruchiroResult.action([
  Condition.If(gameFlags.evaluate("haruchiro_graduation_power", (v) => (v || 0) >= 7), [
    haruchiro.say("マチアプ、ちゃんとプロフィール直した。DroidKaigiの子とも話したけど、ただの知り合いだった。卒研もまとまった"),
    yuujin.say("はるちろが落ち着いた。学業も恋愛も両立できる大人になっていた。"),
  ]).ElseIf(gameFlags.evaluate("haruchiro_graduation_power", (v) => (v || 0) >= 4), [
    haruchiro.say("まあ、なんとか卒業できました"),
    yuujin.say("はるちろは卒業した。恋愛はまだ迷走中だが、それもまたはるちろらしい。"),
  ]).Else([
    Condition.If(gameFlags.evaluate("haruchiro_triangle", (v) => v === true), [
      haruchiro.say("え……な、なんで2人とも来てるんですか？！"),
      yuujin.say("はるちろは修羅場の末、マチアプの子とDroidKaigiの子の両方にフラれた。"),
      yuujin.say("卒業はできたが、心は卒業できなかった。"),
    ]).Else([
      yuujin.say("はるちろは追いコンに来なかった。マチアプを開いているらしい。"),
      yuujin.say("卒業できなかった。引きこもった。"),
    ]),
  ]),
  yuujin.say(""),
  haruchiroResult.jumpTo(tonapiResult),
]);

// ===== となっぴーの結果 =====
tonapiResult.action([
  Condition.If(gameFlags.evaluate("tonapi_graduation_power", (v) => (v || 0) >= 7), [
    tonapi.say("卒研の発表、無事終わりました。化学系メーカーからも内定もらえました。バレーのチームも優勝しましたし"),
    yuujin.say("となっぴーが化学系メーカーに就職した。数十年後、ノーベル賞候補の噂が流れる。"),
  ]).ElseIf(gameFlags.evaluate("tonapi_graduation_power", (v) => (v || 0) >= 4), [
    tonapi.say("卒業できました。カビも今のところ大丈夫です"),
    yuujin.say("となっぴーは堅実に卒業した。カビの行方は不明。"),
  ]).Else([
    yuujin.say("となっぴーは追いコンに来なかった。研究倫理委員会から呼ばれた。"),
    yuujin.say("化学界から追放された。河原で石を積んでいる写真がたまにInstagramに上がる。"),
  ]),
  yuujin.say(""),
  tonapiResult.jumpTo(epilogue),
]);

// ===== エピローグ =====
epilogue.action([
  yuujin.say("……そして俺も、なんとか卒業した。"),
  yuujin.say("追いコンは、それぞれの結末を背負った6人で迎えた。"),
  yuujin.say("最高の夜だった。"),
]);
