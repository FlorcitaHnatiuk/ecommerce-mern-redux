# PROYECTO BACKEND - MOOV

Este repo es el proyecto final que hice para la cursada de Backend en Coderhouse
Aproveché la oportunidad para poder aplicar los conocimientos que adquirí durante toda la carrera de fullstack

## Techs

🛠️ HTML

🛠️ CSS

🛠️ JavaScript

🛠️ ReacJS

🛠️ Express

🛠️ NodeJS

🛠️ MongoDB

## Installation git clone

Para acceder al proyecto clonándolo, deberás ejecutar en consola:

```sh
git clone  https://github.com/FlorcitaHnatiuk/ecommerce-redux.git
npm install
npm start
Abrir otra terminal
cd frontend
npm install
npm start
```

## Installation download ZIP

```sh
Ir a “code” > download ZIP
Descomprimir el archivo
npm install
npm start
Abrir otra terminal
cd frontend
npm install
npm start
```

## Setup MongoDB

### Local MongoDB
Crea un archivo .env en el root
Set MONGODB_URL=mongodb://localhost/moov
### Atlas Cloud MongoDB
Crea DB en https://cloud.mongodb.com
Crea archivo .env en el root
Setear MONGODB_URL=mongodb+srv://your-db-connection

## Seed Users and Products
Correr en chrome: http://localhost:5000/api/users/seed
Esto devuelve un admin, email y password
Correr en chrome: http://localhost:5000/api/products/seed
Esto crea 6 productos base

## Admin Login
Correr http://localhost:3000/signin
Ingresá admin email y password y clickea en signin

## Dependencies

**Backend:**

⚡Axios

⚡Bcryptjs

⚡Body-parser

⚡Chai

⚡Compression

⚡Cookie-parser

⚡Cors

⚡Dotenv

⚡Express

⚡Express-async-handler

⚡Express-session

⚡Flash

⚡Jsonwebtoken

⚡Log4js

⚡Mongoose

⚡Morgan

⚡Multer

⚡Socket.io

⚡Supertest

⚡Swagger-jsdoc

⚡Swagger-ui-express

⚡Swagger-ui-react

**Frontend:**

⚡react-paypal-js

⚡react-google-maps/api

⚡axios

⚡react-google-charts

⚡react-helmet-async

⚡react-phone-number-input

⚡react-redux

⚡react-responsive-carousel

⚡react-router-dom

⚡react-scripts

⚡redux-thunk

⚡socket.io-client

# El proyecto cuenta con...
Perfil de *admin*, con un dashboard donde ver el flujo de usuarios, ventas y ordenes así como un diagrama de productos separado según las categorías.

Perfiles de usuarios autorizados para usar la plataforma para vender sus productos como *seller*. Podrán ver las ventas de sus productos, así como modificar la base de datos de sus productos.

Creación de perfil *user* para realizar las compras. Como usuario podrás además hacer reviews de los productos y ver tu historial de compras, así como chequear el estado del envío.

