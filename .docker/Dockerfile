ARG NODE_BASE_IMAGE_TAG
FROM node:${NODE_BASE_IMAGE_TAG}

RUN apk update \
    && apk upgrade \
    && apk add --no-cache curl git bash \
    && mkdir -p /home/node \
    && chown -R node:node /home/node

WORKDIR /home/node

# node uid 1000
USER 1000
