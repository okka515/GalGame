import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// NarraLeaf-React は StrictMode の二重実行と相性が悪いため外している
createRoot(document.getElementById("root")!).render(<App />);
