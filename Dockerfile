FROM node:20-alpine

WORKDIR /app

# package.json と lock ファイルのみ先にコピーしてキャッシュを活用
COPY package*.json ./

RUN npm install

# ソースコードをコピー
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
