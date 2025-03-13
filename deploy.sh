/home/sui/repos/CombatePreguntas/combateCartas#!/bin/bash

# Configuración
REPO_DIR="/home/sui/repos/CombatePreguntas/combateCartas"
DOCKER_IMAGE="combate"
DOCKER_CONTAINER="combate"
BRANCH="producion"

# Ir al directorio del repositorio
cd "$REPO_DIR" || exit

# Obtener cambios remotos
git fetch origin $BRANCH

# Verificar si hay cambios en la rama
if ! git diff --quiet HEAD origin/$BRANCH; then
    echo "Cambios detectados en la rama $BRANCH. Actualizando..."

    # Traer los cambios
    git pull origin $BRANCH

    # Construir la nueva imagen de Docker
    docker build -t $DOCKER_IMAGE .

    # Detener y eliminar el contenedor anterior (si existe)
    docker stop $DOCKER_CONTAINER || true
    docker rm $DOCKER_CONTAINER || true

    # Ejecutar el nuevo contenedor
    docker run -it -p 4200:4200 --name $DOCKER_CONTAINER $DOCKER_IMAGE

    echo "Despliegue actualizado correctamente."
else
    echo "No hay cambios en la rama $BRANCH."
fi
    