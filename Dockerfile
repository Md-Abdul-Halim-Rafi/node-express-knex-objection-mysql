FROM node:14.15.0

WORKDIR /app

COPY . .

COPY package*.json ./

RUN npm install -g knex

RUN npm install

EXPOSE 7060

CMD ["npm", "start"]