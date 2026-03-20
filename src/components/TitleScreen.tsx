type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div style={styles.root}>
      <div style={styles.inner}>
        <p style={styles.subtitle}>
          友情・進路・恋愛・研究、全部まとめて面倒を見る主人公の卒業前ラブコメADV
        </p>
        <h1 style={styles.title}>
          卒業できるの、できないの！？
          <br />
          <span style={styles.titleSub}>6人組最後の春</span>
        </h1>
        <button style={styles.button} onClick={onStart}>
          S T A R T
        </button>
      </div>

      {/* 背景の星 */}
      <div style={styles.stars} aria-hidden="true">
        {Array.from({ length: 60 }).map((_, i) => (
          <span key={i} style={starStyle()} />
        ))}
      </div>
    </div>
  );
}

function starStyle(): React.CSSProperties {
  const size = Math.random() * 3 + 1;
  return {
    position: "absolute",
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: size,
    height: size,
    borderRadius: "50%",
    background: "#fff",
    opacity: Math.random() * 0.7 + 0.3,
    animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite alternate`,
    animationDelay: `${Math.random() * 3}s`,
  };
}

const styles: Record<string, React.CSSProperties> = {
  root: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(180deg, #0a0a1a 0%, #1a0a2e 50%, #0a1a0a 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    color: "#fff",
    fontFamily: "'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
  },
  inner: {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
  },
  subtitle: {
    fontSize: "0.85rem",
    color: "#aad4ff",
    letterSpacing: "0.05em",
    maxWidth: "600px",
    lineHeight: 1.8,
  },
  title: {
    fontSize: "2.8rem",
    fontWeight: "bold",
    lineHeight: 1.4,
    textShadow: "0 0 30px rgba(150, 200, 255, 0.6)",
  },
  titleSub: {
    fontSize: "2rem",
    color: "#ffd6a5",
  },
  button: {
    marginTop: "1rem",
    padding: "1rem 3rem",
    fontSize: "1.1rem",
    letterSpacing: "0.3em",
    background: "transparent",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.6)",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  stars: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
  },
};
