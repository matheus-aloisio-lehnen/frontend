FROM node:iron-alpine As dev

RUN npm install -g @angular/cli

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install --legacy-peer-deps

COPY . .

CMD [ "npm", "run", "start"]

# 1 Rodar com o tail pra segurar o container
#CMD ["tail", "-f", "/dev/null"]

# 2 Pegar o ID do container e digitar docker exec -it ID sh
# 3 rodar npm install --legacy-peer-deps
# 4 Comentar o tail e descomentar o npm run start
