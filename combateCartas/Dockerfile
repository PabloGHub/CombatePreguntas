FROM node:18-alpine
LABEL authors="SUI"

RUN ng build --configuration development

WORKDIR /app
COPY ./www /app

RUN npm install -g http-server

EXPOSE 4200

CMD ["http-server", "-p", "4200"]
