FROM node:alpine
#FROM node:carbon
ENV TERM="xterm-256color"
LABEL maintainer="anton@lukichev.pro"

RUN npm install -g nodemon yarn

WORKDIR /app

COPY package.json .
RUN yarn install
ENV PATH /app/node_modules/.bin:$PATH

# RUN rm -rf /app/node_modules/sharp/vendor && yarn add sharp

COPY . .

EXPOSE 3000
CMD [ "nodemon", "app.js" ]
