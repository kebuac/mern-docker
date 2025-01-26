## Prerrequisitos

- Docker Desktop https://docs.docker.com/compose/install/#scenario-one-install-docker-desktop

## Funcionamiento

- Clona el repositorio
- Accede a la carpeta backend y ejecuta `npm install`
- Accede a la carpeta frontend y ejecuta `npm install`
- Inicia el contenedor de la aplicación con `docker compose up -d`
- Accede a la aplicación a través de http://localhost:3000

## Configuración de Docker Compose

El archivo `docker-compose.yml` incluye la configuración para todos los servicios:

- **frontend**: Contenedor cone el frontend creado con React.
- **backend**: Contenedor con el backend creado con Node.js + Express con conexión a MongoDB.
- **db**: Contenedor de MongoDB para la base de datos.

## Uso

### 1. Clona el repositorio y navega al directorio del proyecto.

### 2. Asegúrate de que todos los servicios están configurados correctamente y que las variables de entorno (credenciales de la base de datos) estén configuradas en docker-compose.yml y en los archivos de conexión de la API.

### 3. Ejecuta el proyecto con: `docker compose up --build -d`

### 4. La aplicación estará disponible en los siguientes puertos:

- **Puerto 3000:** Servidor de Angular.
- **Puerto 5000:** API de Node.js.

## Notas

- Para reconstruir el proyecto sin caché, usa: `docker compose down y docker compose up --build -d`.

## Comandos útiles

- `docker system prune --all --volumes --force`: Limpia todos los contenedores y imágenes de Docker.
- `docker compose down`: Detiene todos los servicios de Docker Compose.
- `docker compose up -d --remove-orphans`: Permite limpiar los servicios que quedan colgados.
- `docker compose up --build -d`: Inicia todos los servicios de Docker Compose y construye los contenedores si no existen.º