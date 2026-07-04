# <p align="center">

  <img src="screenshots/velocity Logo.png" alt="Velocity Studios" width="88">
</p>

<h1 align="center">Velocity Studios</h1>

<p align="center">
A cinematic movie launch platform built with Next.js and Laravel.
</p>

---

## Preview

### Desktop

| Hero                      |
| ------------------------- |
| ![](screenshots/Hero.png) |

| Movie Grid                        | Movie Modal                |
| --------------------------------- | -------------------------- |
| ![](screenshots/Movie%20grid.png) | ![](screenshots/Modal.png) |

| Newsletter                      |
| ------------------------------- |
| ![](screenshots/Newsletter.png) |

### Mobile

| Hero                               | Grid                               | Modal                               |
| ---------------------------------- | ---------------------------------- | ----------------------------------- |
| ![](screenshots/Mobile%20Hero.png) | ![](screenshots/Mobile%20Grid.png) | ![](screenshots/Mobile%20Modal.png) |

---

## Stack

**Frontend**

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS
* Framer Motion

**Backend**

* Laravel
* PHP
* MySQL

---

## Structure

```text
Movie-Launch/
├── api/
├── frontend/
├── screenshots/
└── README.md
```

---

## Run Locally

### API

```bash
cd api

composer install
cp .env.example .env

php artisan key:generate
php artisan migrate --seed

php artisan serve
```

Runs at:

```text
http://127.0.0.1:8000
```

### Frontend

```bash
cd frontend

npm install
npm run dev
```

Runs at:

```text
http://localhost:3000
```

---

## API

| Method | Endpoint          |
| ------ | ----------------- |
| GET    | `/api/films`      |
| POST   | `/api/newsletter` |

---

## Trade-offs

Prioritized a polished cinematic user experience over dedicated movie detail pages. Film information is presented in an animated modal, reducing navigation while keeping the interface responsive and immersive.

---

## Live Demo

*Not deployed.*

---

## Author

**Brian Mutune**
