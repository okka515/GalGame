import { useState, useEffect, CSSProperties } from "react";
import { gameEvents } from "../store/gameEvents";

export default function ChapterTitle() {
  const [title, setTitle] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    gameEvents.onChapterTitle((t) => {
      setTitle(t);
      setVisible(true);
      setTimeout(() => setVisible(false), 2500);
      setTimeout(() => setTitle(null), 3000);
    });
  }, []);

  if (!title) return null;

  return (
    <div style={{ ...overlay, opacity: visible ? 1 : 0 }}>
      <div style={line} />
      <h2 style={titleStyle}>{title}</h2>
      <div style={line} />
    </div>
  );
}

const overlay: CSSProperties = {
  position: "fixed",
  inset: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.2rem",
  background: "rgba(0, 0, 0, 0.85)",
  zIndex: 9999,
  transition: "opacity 0.5s ease",
  pointerEvents: "none",
};
const titleStyle: CSSProperties = {
  fontSize: "3rem",
  fontWeight: "bold",
  letterSpacing: "0.4em",
  color: "#ffd6a5",
  textShadow: "0 0 20px rgba(255, 200, 100, 0.5)",
};
const line: CSSProperties = {
  width: "240px",
  height: "1px",
  background: "rgba(255, 214, 165, 0.5)",
};
