FROM node:16.11.0-alpine3.14
# RUN mkdir /app
WORKDIR /app

COPY . .
COPY .env .env

RUN cat .env

RUN cd ./tools/ && npm install && cd .
RUN npm install --ignore-scripts
RUN npm run build

CMD [ "npm", "run", "start" ]

