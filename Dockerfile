FROM node:alpine
# FROM node:carbon   for development
ENV TERM="xterm-256color"

WORKDIR /app

RUN npm install -g nodemon

COPY package.json .
RUN npm install
# RUN npm install --production
ENV PATH /app/node_modules/.bin:$PATH

COPY . .

EXPOSE 3001
CMD [ "nodemon", "app.js" ]
