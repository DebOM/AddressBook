FROM node:10-alpine as build-step

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

RUN yarn build
 


FROM nginx:1.17.1-alpine

COPY --from=build-step /app/build /usr/share/nginx/html