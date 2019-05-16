FROM node:alpine
#FROM node:carbon
ENV TERM="xterm-256color"
LABEL maintainer="anton@lukichev.pro"

RUN npm install -g nodemon yarn

WORKDIR /app

COPY package.json .

ARG SHARP_URL="https://github.com/lovell/sharp-libvips/releases/download/v8.7.4/libvips-8.7.4-linux-x64.tar.gz"
ENV SHARP_DIST_BASE_URL="${SHARP_URL}"

RUN yarn install
ENV PATH /app/node_modules/.bin:$PATH

# RUN rm -rf /app/node_modules/sharp/vendor && yarn add sharp

COPY . .

EXPOSE 3000
CMD [ "nodemon", "app.js" ]
