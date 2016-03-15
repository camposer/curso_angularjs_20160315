# Ejercicio 1

Crear el CRUD de Producto (ver `ejercicio1.pdf`). Debe utilizar el esqueleto del frontend y la API Rest de Producto del backend provistos.

## Pre-requisitos

1. Instalar [NodeJS](https://nodejs.org/en/download/)
2. Instalar [Git](https://git-scm.com/download/win). Seleccionar: Windows Command Prompt

## Para configurar backend

El backend es ofrece una API Rest para productos y compras implementada con NodeJS.

Para configurar las dependencias e iniciar el backend:
```
$ cd backend && npm install
$ npm start
```

Las llamadas disponibles son (utilizando cURL):

- Obtener todos
```
$ curl http://localhost:3000/productos 
```

- Agregar 
```
$ curl -X POST -d '{ "nombre": "TV", "precio": 500 }' -H "Content-Type: application/json" http://localhost:3000/productos
```

- Actualizar
```
$ curl -X PUT -d '{ "nombre": "TV LED", "precio": "600" }' -H "Content-Type: application/json" http://localhost:3000/productos/3 
```

- Obtener uno
```
$ curl http://localhost:3000/productos/3
```

- Eliminar 
```
$ curl -X DELETE http://localhost:3000/productos/3
```

## Para configurar frontend

El frontend fue configurado con [Angular Seed](https://github.com/angular/angular-seed)

1. Ejecutar: 
```
$ cd frontend && npm install
$ npm start
```
2. Abrir navegador: `http://localhost:8000/app`

## Implementación

Orden de implementación sugerido:

- Listar
- Agregar
- Eliminar
- Mostrar
- Modificar
