FROM node:latest

WORKDIR /api-cryptonews

COPY . .

RUN rm -rf node_modules
RUN npm install 

CMD ["npm", "start"]

EXPOSE 3000

