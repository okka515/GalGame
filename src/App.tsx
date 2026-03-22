import { useState } from "react";
import type React from "react";
import { GameProviders, Player } from "narraleaf-react";
import { mainStory } from "./scenarios/main";
import TitleScreen from "./components/TitleScreen";
import ChapterTitle from "./components/ChapterTitle";
import EndingModal from "./components/EndingModal";
import { gameEvents } from "./store/gameEvents";

// 開発用: ブラウザコンソールから window.__debug.showEndingModal() で確認できる
(window as Window & { __debug?: Record<string, () => void> }).__debug = {
  showEndingModal: () => gameEvents.triggerEndingModal({
    pack: 8, massu: 8, saasan: 8, haruchiro: 8, tonapi: 8, haruchiro_triangle: false,
  }),
};

export default function App() {
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {!started && !loading ? (
        <TitleScreen onStart={() => { setStarted(true); setLoading(true); }} />
      ) : loading ? (
        <div style={loadingStyles}>
          <p style={loadingTextStyles}>ロード中...</p>
        </div>
      ) : null}
      {started && (
        <>
          <GameProviders>
            <Player
              story={mainStory}
              onReady={({ liveGame }) => {
                setLoading(false);
                liveGame.newGame();
              }}
              width="100vw"
              height="100vh"
            />
          </GameProviders>
          <ChapterTitle />
        </>
      )}
      {/* EndingModal は常にマウントしてイベントを受け取れるようにする */}
      <EndingModal />
    </>
  );
}

const loadingStyles: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "#000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const loadingTextStyles: React.CSSProperties = {
  color: "#fff",
  fontSize: "1.2rem",
  fontFamily: "'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
  letterSpacing: "0.2em",
};
