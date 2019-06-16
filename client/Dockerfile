FROM node:alpine

ENV CI=true

WORKDIR /src

COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start"]