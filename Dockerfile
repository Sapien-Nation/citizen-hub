FROM node:16.11.0-alpine3.14
RUN mkdir /app
COPY api/  components/  tools/  utils/ assets/  context/  pages/ public/   styles/     __tests__/  /app/
COPY *.ts *.js   *.json /app/
COPY .env /app/.env
WORKDIR /app
RUN ls -l /app/
RUN cd /app/tools && npm install && cd ..
RUN npm install
RUN npm run build

CMD [ "npm", "run", "start" ]
