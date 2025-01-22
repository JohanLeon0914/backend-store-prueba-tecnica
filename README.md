# API de Manejo de Productos

Esta es una API construida como parte de una prueba técnica. La aplicación está diseñada para manejar productos y un carrito de compras, permitiendo realizar operaciones básicas como obtener productos, agregar productos al carrito, y eliminar productos del carrito.

La API está desplegada en (https://backend-store-prueba-tecnica.vercel.app).

Además, esta API es consumida por una aplicación frontend desplegada en (https://frontend-store-prueba-tecnica.vercel.app).

## Cómo Ejecutar la API

1. Clona este repositorio en tu máquina local:
    ```bash
   git clone https://github.com/JohanLeon0914/backend-store-prueba-tecnica.git
2. Clona este repositorio en tu máquina local:
    ```bash
   cd backend-store-prueba-tecnica
3. Instala las dependencias:
    ```bash
   npm install
4. Ejecuta el proyecto:
    ```bash
   node index.js

## Endpoints

### `GET /products`
Obtiene la lista de productos disponibles.

### `POST /cart`
Agrega un producto al carrito de compras. El cuerpo de la solicitud debe contener el `id` del producto.

### `GET /cart`
Obtiene la lista de productos en el carrito de compras.

### `GET /products/:id`
Obtiene los detalles de un producto específico mediante su `id`.

### `DELETE /cart/:id`
Elimina un producto del carrito de compras. Si la cantidad del producto es mayor a 1, solo reduce la cantidad en 1. Si la cantidad es 1, elimina el producto del carrito.
