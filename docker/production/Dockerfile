FROM node:20.12-alpine AS base
WORKDIR /usr/src/app

FROM base AS install-prod
RUN mkdir -p /temp/prod
COPY package.json package-lock.json /temp/prod/
RUN cd /temp/prod && npm install --frozen-lockfile --production --ignore-scripts

FROM base AS install
RUN mkdir -p /temp/prod
COPY package.json package-lock.json /temp/prod/
RUN cd /temp/prod && npm install --frozen-lockfile --ignore-scripts

FROM base AS builder
COPY --from=install /temp/prod/node_modules node_modules
COPY . .
ENV NODE_ENV=production
RUN npm run build

FROM base AS release
COPY --from=install-prod /temp/prod/node_modules node_modules
COPY --from=builder /usr/src/app/.next .next
COPY --from=builder /usr/src/app/package.json .

EXPOSE 3000/tcp
ENTRYPOINT [ "npm", "start" ]
