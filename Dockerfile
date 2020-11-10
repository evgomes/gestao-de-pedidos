FROM node:12-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY ./package*.json ./

RUN npm install -y
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run build
COPY . ./

ENV PORT 3000
EXPOSE 3000

CMD ["npm", "start"]