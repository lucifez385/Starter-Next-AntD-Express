FROM registry.thinknet.co.th/sredev/node:8.9

COPY . /usr/src/app/

ARG APP_ENV

RUN yarn install --production=false -q && \
    yarn run build && \
    yarn install --production=true -q && \
    yarn cache clean