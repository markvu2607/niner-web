FROM oven/bun:alpine

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install

COPY . .

ENV NODE_ENV=production

RUN bun --bun run build

EXPOSE 3000

CMD [ "bun", "start" ]
