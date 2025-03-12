FROM node:18-alpine
LABEL authors="SUI"

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN ng build --configuration development
RUN ls -la /app

COPY ./www /app/www

RUN npm install -g http-server

EXPOSE 4200

CMD ["http-server", "-p", "4200"]
