import { Scene } from "narraleaf-react";
import { yuujin } from "../../../characters";

export const epilogue = new Scene("finale-epilogue", { background: "#fef9c3" });

epilogue.action([
  yuujin.say("……そして俺も、なんとか卒業した。"),
  yuujin.say("追いコンは、それぞれの結末を背負った6人で迎えた。"),
  yuujin.say("最高の夜だった。"),
]);
