import { useState } from "react";
import { GameProviders, Player } from "narraleaf-react";
import { mainStory } from "./scenarios/main";
import TitleScreen from "./components/TitleScreen";
import ChapterTitle from "./components/ChapterTitle";

export default function App() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return <TitleScreen onStart={() => setStarted(true)} />;
  }

  return (
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
      {/* NarraLeaf の上に重ねるチャプタータイトルオーバーレイ */}
      <ChapterTitle />
    </>
  );
}
