import { useState, useEffect, CSSProperties } from "react";
import { gameEvents, EndingData } from "../store/gameEvents";

type EndingType = "happy" | "normal" | "bad" | "special";

type CharacterEnding = {
  name: string;
  endingType: EndingType;
  label: string;
  description: string;
};

function getEndingLabel(type: EndingType): string {
  switch (type) {
    case "happy":
      return "首席卒業";
    case "normal":
      return "卒業";
    case "bad":
      return "卒業不可";
    case "special":
      return "スペシャルエンド";
  }
}

function resolveEndings(data: EndingData): CharacterEnding[] {
  const { pack, massu, saasan, haruchiro, tonapi, haruchiro_triangle } = data;
  const results: CharacterEnding[] = [];

  // パック
  if (pack >= 18) {
    results.push({ name: "パック", endingType: "happy", label: getEndingLabel("happy"), description: "起業と国際恋愛を両立し、首席卒業。エンジニアとして羽ばたいた。" });
  } else if (pack >= 7) {
    results.push({ name: "パック", endingType: "normal", label: getEndingLabel("normal"), description: "論理的に卒業し、エンジニアとして就職。フランスの件は保留。" });
  } else {
    results.push({ name: "パック", endingType: "bad", label: getEndingLabel("bad"), description: "海外から帰ってこなかった。Suica感覚で改札を突破した結果、破滅した。" });
  }

  // まっすー
  if (massu >= 18) {
    results.push({ name: "まっすー", endingType: "happy", label: getEndingLabel("happy"), description: "東京の広告会社に就職。写真がSNSでバズり、キラキラ業界エンドへ。" });
  } else if (massu >= 7) {
    results.push({ name: "まっすー", endingType: "normal", label: getEndingLabel("normal"), description: "ギリギリ卒業。カメラは趣味として続けている。" });
  } else {
    results.push({ name: "まっすー", endingType: "bad", label: getEndingLabel("bad"), description: "発表会当日に寝坊して遅刻2時間。卒業できなかった。カメラは壊れた。" });
  }

  // さーさん
  if (saasan >= 16) {
    results.push({ name: "さーさん", endingType: "happy", label: getEndingLabel("happy"), description: "首席卒業。会社は翌年に軌道に乗り始めた。" });
  } else {
    results.push({ name: "さーさん", endingType: "bad", label: getEndingLabel("bad"), description: "海陽町に帰って漁師になった。追いコンには来なかった。" });
  }

  // はるちろ
  if (haruchiro >= 18) {
    results.push({ name: "はるちろ", endingType: "happy", label: getEndingLabel("happy"), description: "学業も恋愛も両立できる大人に。無事卒業。" });
  } else if (haruchiro >= 7) {
    results.push({ name: "はるちろ", endingType: "normal", label: getEndingLabel("normal"), description: "卒業した。恋愛はまだ迷走中だが、それもまたはるちろらしい。" });
  } else if (haruchiro_triangle) {
    results.push({ name: "はるちろ", endingType: "special", label: "スペシャルバッドエンド", description: "修羅場の末、マチアプの子とDroidKaigiの子の両方にフラれた。" });
  } else {
    results.push({ name: "はるちろ", endingType: "bad", label: getEndingLabel("bad"), description: "追いコンに来なかった。永遠にマチアプを見つめて引きこもった。" });
  }

  // となっぴー
  if (tonapi >= 18) {
    results.push({ name: "となっぴー", endingType: "happy", label: getEndingLabel("happy"), description: "化学系メーカーに就職。数十年後、ノーベル賞候補の噂が流れる。" });
  } else if (tonapi >= 7) {
    results.push({ name: "となっぴー", endingType: "normal", label: getEndingLabel("normal"), description: "堅実に卒業した。カビの行方は不明。" });
  } else {
    results.push({ name: "となっぴー", endingType: "bad", label: getEndingLabel("bad"), description: "研究倫理委員会から呼ばれた。河原で石を積んでいる写真がたまに上がる。" });
  }

  return results;
}

function endingColor(type: EndingType): string {
  switch (type) {
    case "happy":
      return "#4ade80";
    case "normal":
      return "#60a5fa";
    case "bad":
      return "#f87171";
    case "special":
      return "#c084fc";
  }
}

// ゲームをリスタートする（リロード）
function handleRestart() {
  window.location.reload();
}

export default function EndingModal() {
  const [visible, setVisible] = useState(false);
  const [endings, setEndings] = useState<CharacterEnding[]>([]);

  useEffect(() => {
    gameEvents.onEndingModal((data: EndingData) => {
      setEndings(resolveEndings(data));
      setVisible(true);
    });
  }, []);

  if (!visible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>── みんなの進路 ──</h2>
        <div style={styles.list}>
          {endings.map((e) => (
            <div key={e.name} style={styles.card}>
              <div style={styles.cardHeader}>
                <span style={styles.characterName}>{e.name}</span>
                <span style={{ ...styles.endingBadge, color: endingColor(e.endingType), borderColor: endingColor(e.endingType) }}>
                  {e.label}
                </span>
              </div>
              <p style={styles.description}>{e.description}</p>
            </div>
          ))}
        </div>
        <button style={styles.restartButton} onClick={handleRestart}>
          もう一度プレイする
        </button>
      </div>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },
  modal: {
    backgroundColor: "#1a1a2e",
    border: "1px solid #3a3a5c",
    borderRadius: "12px",
    padding: "36px 40px",
    width: "min(560px, 90vw)",
    maxHeight: "85vh",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    color: "#e0e0e0",
    fontFamily: "'Noto Serif JP', serif",
  },
  title: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: "0.15em",
    color: "#f0e68c",
    margin: 0,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  card: {
    backgroundColor: "#252540",
    borderRadius: "8px",
    padding: "14px 18px",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  characterName: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#ffffff",
  },
  endingBadge: {
    fontSize: "12px",
    border: "1px solid",
    borderRadius: "4px",
    padding: "2px 8px",
    fontWeight: "bold",
    letterSpacing: "0.05em",
  },
  description: {
    fontSize: "13px",
    color: "#b0b0c8",
    margin: 0,
    lineHeight: 1.6,
  },
  restartButton: {
    marginTop: "8px",
    padding: "12px",
    backgroundColor: "transparent",
    border: "1px solid #6060a0",
    borderRadius: "8px",
    color: "#c0c0e0",
    fontSize: "15px",
    cursor: "pointer",
    letterSpacing: "0.1em",
    transition: "background-color 0.2s",
  },
};
