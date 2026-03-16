import { Character, Image } from "narraleaf-react";

// 主人公（友人）- 内心モノローグ用
export const yuujin = new Character(null);

// 5人の友達
export const pack = new Character("ぱっく", {
  color: "#f59e0b",
});
export const packImg = new Image({ src: "/characters/pack.jpg" });

export const massu = new Character("まっすー", {
  color: "#ec4899",
});
export const massuImg = new Image({ src: "/characters/massu.jpg" });

export const saasan = new Character("さーさん", {
  color: "#10b981",
});
export const saasanImg = new Image({ src: "/characters/saasan.JPG" });

export const haruchiro = new Character("はるちろ", {
  color: "#6366f1",
});
export const haruchiroImg = new Image({ src: "/characters/harutiro.jpg" });

export const tonapi = new Character("となっぴー", {
  color: "#06b6d4",
});
export const tonapiImg = new Image({ src: "/characters/tonappi.jpg" });
