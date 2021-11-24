FROM node:16.11.0-alpine3.14
RUN mkdir /app
WORKDIR /app
COPY api/  components/  tools/  utils/ assets/  context/  pages/ public/   styles/     __tests__/  ./
COPY *.ts *.js   *.json ./
COPY .env .env
RUN cd tools/ && npm install && cd ..
RUN npm install
RUN npm run build

CMD [ "npm", "run", "start" ]
