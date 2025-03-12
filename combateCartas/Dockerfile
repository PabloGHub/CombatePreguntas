FROM node:22-alpine
LABEL authors="SUI"

WORKDIR /app

COPY package*.json ./
# RUN npm install

COPY . .

# RUN npm install -g @angular/cli
RUN ng build --configuration development
# RUN ls -la /app # No lo muestra.

COPY ./www /app/www

RUN npm install -g http-server

EXPOSE 4200

CMD ["http-server", "-p", "4200"]
