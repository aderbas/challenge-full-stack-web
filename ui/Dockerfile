# Dockerfile from https://br.vuejs.org/v2/cookbook/dockerize-vuejs-app.html

FROM node:lts-alpine

RUN npm i -g @vue/cli-service-global

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD ["npm", "run", "serve"]