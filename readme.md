# 🚀 Laravel + Vite + Docker Development Setup

This project is fully dockerized for local development with:

- Laravel (PHP 8.2)
- Vite (Hot Module Reload for Vue)
- MySQL 8
- TailwindCSS
- Docker Compose

---

## 🛠 Prerequisites

- Docker installed (<https://docs.docker.com/get-docker/>)
- Docker Compose (if using old Docker versions)

---

## ⚙ Setup Instructions

### 1️⃣ Clone the repo

```
git clone https://github.com/nazoadiego/kuroneko
cd kuroneko
```

2️⃣ Create your .env file
Copy the example .env file:

`cp .env.example .env`

✅ Make sure to adjust database credentials if needed.

By default, MySQL credentials:

```
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=mydb
DB_USERNAME=user
DB_PASSWORD=password
```

3️⃣ Build and run containers

```
docker-compose up --build
```

This will start:

Laravel backend (<http://localhost:8000>)

Vite dev server (<http://localhost:5173>)

MySQL database (localhost:3306)

4️⃣ Install Laravel dependencies
Inside the app container:

`docker-compose exec app composer install`

5️⃣ Install Node dependencies
Inside the vite container:

`docker-compose exec vite npm install`

(This step will also happen automatically when you first run the vite service, but you can do it manually if you want control)

6️⃣ Run migrations

`docker-compose exec app php artisan migrate`

🔄 Workflow
Every time you modify PHP code → refresh browser.

Every time you modify Vue / Tailwind → hot reload automatically works via Vite.

🧹 Useful commands
Rebuild everything (if you make Dockerfile changes)

```
docker-compose down
docker-compose up --build
```

Stop all containers

`docker-compose down`

Access Laravel container shell

`docker-compose exec app bash`

Access MySQL

`docker-compose exec db mysql -uuser -ppassword mydb`

🚀 Production
This setup is only for local development with hot reload.

For production:

Build assets: `npm run build`

Serve Laravel normally (without Vite dev server)

Use production-ready PHP-FPM, Nginx, and database containers.

❓ Troubleshooting
If Vite HMR fails to load:

Make sure you have this block inside your vite.config.ts:

```
server: {
host: true,
port: 5173,
strictPort: true,
hmr: {
host: 'localhost',
port: 5173,
}
},
```

Make sure port 5173 is not blocked or used by another process on your host machine.
