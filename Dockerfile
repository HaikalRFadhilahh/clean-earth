FROM node:latest as build
WORKDIR /var/www/html
COPY . .
RUN npm install -g npm@10.2.4
RUN npm install uuid@latest
RUN npm install
RUN npm run build

FROM nginx:latest
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
WORKDIR /var/www/html
COPY --from=build /var/www/html/dist .
EXPOSE 80
