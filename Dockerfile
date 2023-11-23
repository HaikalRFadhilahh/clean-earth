FROM node:latest as build
WORKDIR /var/www/html
COPY . .
RUN npm install
RUN npm run build

FROM nginx:latest
WORKDIR /var/www/html
COPY --from=build /var/www/html/dist .
EXPOSE 80
