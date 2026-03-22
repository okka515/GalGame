import { useState } from "react";
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

  return (
    <>
      {!started ? (
        <TitleScreen onStart={() => setStarted(true)} />
      ) : (
        <>
          <GameProviders>
            <Player
              story={mainStory}
              onReady={({ liveGame }) => {
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
