FROM node:16 AS deps

WORKDIR /app

ADD package.json /app/package.json
ADD yarn.lock /app/yarn.lock
RUN yarn


# Rebuild the source code only when needed
FROM node:16
WORKDIR /app

COPY --from=deps /app/package.json /app/package.json
COPY --from=deps /app/node_modules /app/node_modules

ADD . .

RUN ls

RUN yarn build

ENV NODE_ENV development

EXPOSE 3000

ENV PORT 3000

CMD ["yarn", "dev"]
