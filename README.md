# GalGame

2026年の東海追いコンの「ギャルゲー」コンテンツのリポジトリ。

仲のいい友達6人グループを題材にしたビジュアルノベルゲーム。
プレイヤーはグループの中心人物として、仲間からの相談に乗りながら好感度を高め、全員の卒業を目指す。
※ Nerraleaf Reactの部分はAIに食わせただけなので、全然違うかも

## 技術スタック

- [NarraLeaf-React](https://react.narraleaf.com/) — React 向けビジュアルノベルエンジン
- React 19 + TypeScript
- Vite
- Vercel（本番デプロイ）

## 開発環境のセットアップ

Docker が入っていれば、以下の1コマンドで環境が立ち上がります。

```bash
docker compose up -d --build
```

ブラウザで http://localhost:5173 を開く。

### 2回目以降の起動

```bash
docker compose up -d
```

`package.json` を変更した場合のみ `--build` を付けて再ビルドしてください。

### 停止

```bash
docker compose down
```

## IDE の補完を有効にする（初回のみ）

コンテナ外でも型補完が効くよう、ローカルに一度インストールします。

```bash
npm install
```

> `node_modules` はコンテナ内のものを使うため、開発自体はこの手順なしでも動作します。

## ディレクトリ構成

```
src/
├── App.tsx               # エントリーコンポーネント
├── characters/           # キャラクター定義（6人）
├── scenarios/            # シナリオスクリプト
└── store/
    └── affection.ts      # 好感度管理（localStorage）
```

## デプロイ

`main` ブランチへのプッシュで Vercel に自動デプロイされます（Vercel プロジェクトとの連携が必要）。
