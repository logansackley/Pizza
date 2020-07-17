FROM node:10

WORKDIR /usr/src/app

#Bundle with App sorce
COPY . .

RUN npm install

VOLUME /usr/src/app

EXPOSE 3000

CMD ["npm", "start"]