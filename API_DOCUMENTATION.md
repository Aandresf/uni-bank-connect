# API Documentation — Banco Universitario (Prototipo)

Este documento consolida el árbol de endpoints, cuerpos de petición (request bodies) y ejemplos de respuesta (response bodies) proporcionados para el prototipo.

Base URL (dev): http://localhost:3000/v1/client

Autenticación
- Los endpoints privados requieren JWT en Authorization: Bearer <token>.
- Algunos endpoints públicos: /register, /login, /ping.

---

## Public endpoints

### POST /register
- Descripción: Registrar nuevo usuario.
- Body (request):
```json
{
  "first_name": "Jorge",
  "last_name": "Chiquin",
  "document_number": "26141319",
  "birth_date": "2020-05-18T14:40:04.341364Z",
  "phone_number": "+584245186631",
  "email": "jorgechiquinv@gmail.com",
  "password": "Abc123456789!"
}
```
- Response (example):
```json
{
  "message": "Usuario registrado con éxito",
  "errors": [],
  "data": {
    "account_number": "01689296550771014900",
    "birth_date": "2020-05-18T14:40:04.341364Z",
    "document_number": "26141319",
    "email": "jorgechiquinv@gmail.com",
    "first_name": "Jorge",
    "last_name": "Chiquin",
    "phone_number": "+584245186631"
  }
}
```

---

### POST /login
- Descripción: Autenticar usuario y recibir JWT.
- Body (request):
```json
{
  "email": "elon@gmail.com",
  "password": "12345678"
}
```
- Response (example):
```json
{
  "message": "Usuario logueado con éxito",
  "errors": [],
  "data": {
    "account_number": "01689296550771014900",
    "birth_date": "2020-05-18T14:40:04.341364Z",
    "document_number": "26141319",
    "email": "jorgechiquinv@gmail.com",
    "first_name": "Jorge",
    "jwt": "***************",
    "last_name": "Chiquin",
    "phone_number": "+584245186631"
  }
}
```

---

### GET /ping
- Descripción: Endpoint de salud (ping).
- Response: (no se provee body en los ejemplos; típicamente 200 OK)

---

## Private endpoints (requieren JWT)

### User

#### GET /user/whoami
- Descripción: Obtener perfil del usuario autenticado.
- Example curl:
```
curl --location 'http://localhost:3000/v1/client/user/whoami' \
--header 'Accept-Language: es'
```
- Response (example):
```json
{
  "message": "Usuario validado con éxito",
  "errors": [],
  "data": {
    "account_number": "01689296550771014900",
    "birth_date": "2020-05-18T14:40:04.341364Z",
    "document_number": "26141319",
    "email": "jorgechiquinv@gmail.com",
    "first_name": "Jorge",
    "last_name": "Chiquin",
    "phone_number": "+584245186631"
  }
}
```

---

#### GET /user/balance
- Descripción: Obtener balance y última actualización.
- Example curl:
```
curl --location 'http://localhost:3000/v1/client/user/balance' \
--header 'Accept-Language: es'
```
- Response (example):
```json
{
  "message": "Balance obtenido con éxito",
  "errors": [],
  "data": {
    "balance": 5000,
    "last_time": "2023-07-14T01:06:43.8227276Z"
  }
}
```

---

#### GET /user/account/:account_number
- Descripción: Buscar usuario por número de cuenta.
- Example curl:
```
curl --location 'http://localhost:3000/v1/client/user/account/34567890123456789012' \
--header 'Accept-Language: es'
```
- Response (example):
```json
{
  "message": "Usuario encontrado con éxito",
  "errors": [],
  "data": {
    "account_number": "34567890123456789012",
    "birth_date": "1989-01-17T00:00:00Z",
    "document_number": "11423344",
    "email": "mia.davis@example.com",
    "first_name": "Mia",
    "last_name": "Davis",
    "phone_number": "+9876543210"
  }
}
```

---

#### PATCH /user/password
- Descripción: Cambiar contraseña.
- Body (request):
```json
{
  "password": "Abc123456789!",
  "new_password": "12345678"
}
```
- Response (example):
```json
{
  "message": "Contraseña actualizada con éxito",
  "errors": [],
  "data": null
}
```

---

### Movement (Movimientos)

#### GET /movement?page=1&page_size=20
- Descripción: Obtener lista paginada de movimientos del usuario.
- Example curl:
```
curl --location 'http://localhost:3000/v1/client/movement?page=1&page_size=20'
```
- Response (example): arreglo de movimientos (ejemplo truncado):
```json
{
  "message": "Success",
  "errors": [],
  "data": [
    {
      "account_number": "54321098765432109876",
      "amount": 322062,
      "balance": 159523841,
      "created_at": "2023-07-14T04:19:36.408843Z",
      "description": "Bonus",
      "id": 1005,
      "multiplier": -1,
      "updated_at": "2023-07-14T04:19:36.131284Z"
    }
    // ... más movimientos
  ]
}
```

---

#### POST /movement
- Descripción: Crear una transferencia / movimiento.
- Body (request):
```json
{
  "amount": 250,
  "account_number": "54321098765432109876",
  "description": "testing"
}
```
- Response (example):
```json
{
  "message": "Transferencia realizada con éxito",
  "errors": [],
  "data": {
    "account_number": "54321098765432109876",
    "amount": 250,
    "balance": 0,
    "created_at": "2023-07-14T01:11:55.2991254Z",
    "description": "testing",
    "id": 1027,
    "multiplier": -1,
    "updated_at": "2023-07-14T01:11:55.2991254Z"
  }
}
```

---

### Contact

#### POST /contact
- Descripción: Crear contacto (alias y cuenta).
- Body (request):
```json
{
  "alias": "Chela",
  "account_number": "34567890123456789012",
  "description": "Cafetin decanato"
}
```
- Response (example):
```json
{
  "message": "Contacto registrado con éxito",
  "errors": [],
  "data": {
    "account_number": "34567890123456789012",
    "alias": "Chela",
    "created_at": "2023-07-14T01:15:26.007502Z",
    "description": "Cafetin decanato",
    "id": 1,
    "updated_at": "2023-07-14T01:15:26.007502Z"
  }
}
```

---

#### PATCH /contact/:id
- Descripción: Actualizar contacto (alias/description).
- Body (request):
```json
{
  "alias": "Empanadas",
  "description": "Cafetin del decanato"
}
```
- Response (example):
```json
{
  "message": "Contacto actualizado con éxito",
  "errors": [],
  "data": {
    "account_number": "34567890123456789012",
    "alias": "Empanadas",
    "created_at": "2023-07-14T01:15:26.007502Z",
    "description": "Cafetin del decanato",
    "id": 1,
    "updated_at": "2023-07-14T01:36:10.9145992Z"
  }
}
```

---

#### DELETE /contact/:id
- Descripción: Eliminar contacto.
- Example curl:
```
curl --location --request DELETE 'http://localhost:3000/v1/client/contact/1'
```
- Response (example):
```json
{
  "message": "Contacto eliminado con éxito",
  "errors": [],
  "data": {
    "account_number": "34567890123456789012",
    "alias": "Empanadas",
    "created_at": "2023-07-14T01:15:26.007502Z",
    "description": "Cafetin del decanato",
    "id": 1,
    "updated_at": "2023-07-14T01:36:10.914599Z"
  }
}
```

---

#### GET /contact/:id
- Descripción: Obtener un contacto.
- Response (example):
```json
{
  "message": "Contacto encontrado con éxito",
  "errors": [],
  "data": {
    "account_number": "90123456789012345678",
    "alias": "Carlos pana",
    "created_at": "2023-07-14T01:33:24.657772Z",
    "description": "El pana de informática",
    "id": 2,
    "updated_at": "2023-07-14T01:33:24.657772Z",
    "user": {
      "account_number": "90123456789012345678",
      "birth_date": "1993-04-22T00:00:00Z",
      "document_number": "54621678",
      "email": "alexander.brown@example.com",
      "first_name": "Alexander",
      "last_name": "Brown",
      "phone_number": "+1234567890"
    }
  }
}
```

---

#### GET /contact?alias=
- Descripción: Listar contactos (filtro por alias opcional).
- Response (example):
```json
{
  "message": "Success",
  "errors": [],
  "data": [
    {
      "account_number": "90123456789012345678",
      "alias": "Carlos pana",
      "created_at": "2023-07-14T01:33:24.657772Z",
      "description": "El pana de informática",
      "id": 2,
      "updated_at": "2023-07-14T01:33:24.657772Z"
    },
    {
      "account_number": "34567890123456789012",
      "alias": "Chela",
      "created_at": "2023-07-14T01:15:26.007502Z",
      "description": "Cafetin decanato",
      "id": 1,
      "updated_at": "2023-07-14T01:15:26.007502Z"
    }
  ]
}
```

---

## Notas y próximos pasos
- Los endpoints y cuerpos están organizados para el prototipo visual. 
- Para integrar llamadas reales desde el frontend, establecer `VITE_API_BASE` con la URL base (`http://localhost:3000/v1/client`) y quitar el modo mock en `src/lib/api.ts` si se prefirió.
- Validaciones esperadas (recomendadas):
  - `email`: formato válido.
  - `password`: longitud mínima y complejidad si la API lo requiere.
  - `amount`: número positivo mayor que 0 para transferencias y pagos.
  - `account_number`: string con longitud exacta (por ejemplo 20) o validar con regex.

---

Created by the prototyping script.
