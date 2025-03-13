FROM node:22.14.0-alpine
LABEL authors="SUI"

WORKDIR /app

COPY package*.json ./
# RUN npm install

COPY . .


# Si lo hago manualmente no da error, pero si lo hago con el comando RUN da error.
# RUN npm install -g @angular/cli
# RUN ng build --configuration development

COPY ./www /app

# RUN npm install -g http-server
# RUN npm install http-server

EXPOSE 4200

CMD ["http-server", "-p", "4200"]
