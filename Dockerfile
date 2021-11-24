FROM node:16.11.0-alpine3.14
RUN mkdir /app
COPY api/  components/  tools/  utils/ assets/  context/  pages/ public/   styles/     __tests__/  /app/
COPY *.ts *.js   *.json /app/
COPY .env /app/.env
WORKDIR /app
COPY api/  ./api/
COPY components/  ./components/
COPY tools/  ./tools/
COPY utils/ ./utils/
COPY assets/  ./assets/
COPY context/  ./context/
COPY pages/ ./pages/
COPY public/   ./public/
COPY styles/ ./styles/    
COPY __tests__/  ./__tests__/
COPY *.ts *.js   *.json ./
COPY .env .env
RUN cd ./tools/ && npm install && cd ..
RUN npm install
RUN npm run build

CMD [ "npm", "run", "start" ]
