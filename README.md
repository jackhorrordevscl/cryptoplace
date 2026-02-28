# 🪙 CryptoPlace

CryptoPlace es una aplicación web de seguimiento de precios de criptomonedas construida con React + Vite. Consume la API de CoinGecko para mostrar precios de criptomonedas en tiempo real e información detallada de cada moneda.

---

## 🛠️ Stack Tecnológico

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

| Tecnología | Descripción |
|---|---|
| React | Librería de UI |
| Vite | Build tool |
| CoinGecko API | Fuente de datos de criptomonedas |
| Nginx | Servidor de archivos estáticos |
| Docker | Contenedorización |

---

## ⚙️ Instalación local

### Requisitos previos
- Node.js 18 o superior
- npm

### Pasos

1. Clona el repositorio:

```bash
git clone https://github.com/jackhorrordevscl/cryptoplace.git
cd cryptoplace
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre el navegador en:

```
http://localhost:5173
```

---

## 🐳 Instalación con Docker

### Requisitos previos
- Docker
- Docker Compose

### Opción 1: Docker Compose

1. Clona el repositorio:

```bash
git clone https://github.com/jackhorrordevscl/cryptoplace.git
cd cryptoplace
```

2. Levanta el contenedor:

```bash
docker-compose up
```

3. Abre el navegador en:

```
http://localhost:8080
```

### Opción 2: Docker Hub

Corre la imagen directamente sin necesidad del código fuente:

```bash
docker run -p 8080:80 jackhorror/cryptoplace
```

---

## 📄 Licencia

MIT © [jackhorrordevscl](https://github.com/jackhorrordevscl)
