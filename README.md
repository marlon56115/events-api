# 📅 Event Manager API

API REST para la gestión de eventos y asistentes, desarrollada con **Node.js**, **Express**, **Sequelize** y **PostgreSQL**. La API permite crear eventos en diferentes zonas horarias, registrar asistentes y consultar la relación entre ambos.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- PostgreSQL
- Sequelize ORM
- moment-timezone
- dotenv

---

---

## ⚙️ Requisitos

- Node.js >= 18
- PostgreSQL instalado y corriendo

---

## 🛠️ Configuración inicial

### 1. Clonar el repositorio

```bash
git clone https://github.com/marlon56115/events-api.git
cd events-api
npm install
cp .env.example .env

```
Y completá con tus datos:

DB_HOST=localhost
DB_PORT=5432
DB_NAME=eventos_db
DB_USER=tu_usuario
DB_PASS=tu_contraseña
PORT=3000

```bash
#Este script creará la base si no existe. Asegurate de tener permisos y que el usuario tenga acceso.
npm run db:create

npm run dev

```