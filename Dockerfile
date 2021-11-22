FROM node:16.11.0-alpine3.14
RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

CMD [ "npm", "run", "start" ]
