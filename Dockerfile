FROM node:16.14.2-alpine

WORKDIR /app 

COPY package*.json ./

COPY client/package*.json client/
RUN npm run install-client --only=prod

COPY server/package*.json server/
RUN npm run install-server --only=prod

COPY client/ client/
RUN npm run build --prefix client

COPY server/ server/

USER node

CMD [ "npm", "start" , "--prefix", "server" ]

EXPOSE 8000