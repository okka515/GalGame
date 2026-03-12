import { GameProviders, Player } from "narraleaf-react";
import { mainStory } from "./scenarios/main";

export default function App() {
  return (
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
  );
}
