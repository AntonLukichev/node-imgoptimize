#FROM node:alpine
FROM node:carbon
ENV TERM="xterm-256color"
LABEL maintainer="anton@lukichev.pro"

RUN npm install -g nodemon yarn

WORKDIR /app

COPY package.json .
RUN yarn install
# RUN npm install --production
ENV PATH /app/node_modules/.bin:$PATH

COPY . .

EXPOSE 3000
CMD [ "nodemon", "app.js" ]
