# PASO:1 - Construir la aplicación
FROM node:18 as build


WORKDIR /app

# RUN npm install -g @angular/cli
# ng build --configuration development
COPY package*.json ./
RUN npm install

#COPY . .
#RUN npm run build --configuration development

EXPOSE 4200

CMD ["ng", "serve", "--proxy-condifg", "proxy.conf.json"]

# PASO:2 - Desplegar la aplicación con nginx
#FROM nginx:alpine

#COPY --from=build /app/dist/combateCartas /usr/share/nginx/html

#COPY nginx.conf /etc/nginx/conf.d/default.conf
