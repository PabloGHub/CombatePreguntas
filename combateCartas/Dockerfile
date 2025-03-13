FROM node:22.14.0-alpine
LABEL authors="SUI"

WORKDIR /app

COPY package*.json ./
# RUN npm install # Tengo mieo

COPY . .


# RUN ng build --configuration development

COPY ./www /app


EXPOSE 4200

CMD ["ng serve", "-p", "4200"]
