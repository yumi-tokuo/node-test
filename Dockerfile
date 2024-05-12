FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm install 

COPY index.js .

CMD ["node", "index.js"]