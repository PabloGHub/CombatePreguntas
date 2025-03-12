FROM node:22-alpine
LABEL authors="SUI"

WORKDIR /app

COPY package*.json ./
# RUN npm install

COPY . .

# Si lo hago manualmente no da error, pero si lo hago con el comando RUN da error.
# RUN npm install -g @angular/cli
# RUN ng build --configuration development
# RUN ls -la /app # No lo muestra.

COPY /home/sui/repos/CombatePreguntas/combateCartas/www /app

# RUN npm install -g http-server || \
#     (sleep 5 && npm install -g http-server) || \
#     (sleep 5 && npm install -g http-server) || \
#     (sleep 5 && npm install -g http-server) || \
#     (sleep 5 && npm install -g http-server)

# ME QUIERO MORIR

EXPOSE 4200

CMD ["http-server", "-p", "4200"]
