FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./app .

EXPOSE 3069

CMD ["node", "app.js"]