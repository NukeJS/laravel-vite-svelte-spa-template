# Laravel 9 + Vite + Vue 3 + Tailwind CSS

This starter template includes:

- Laravel 9
- Vite
- Vue 3
- Tailwind CSS (w/ `@tailwindcss/forms` and `@tailwindcss/aspect-ratio`)
- Vue Router
- Axios
- Headless UI
- Heroicons
- TypeScript

## Installation

Install the composer dependencies:

```bash
composer install
```

Make a copy of the `.env.example` file named `.env`:

```bash
cp .env.example .env
```

Generate an app key:

```bash
php artisan key:generate
```

Install all `package.json` dependencies:

```bash
npm install
```

Run vite to server your assets/bundle:

```bash
npm run dev
```

Open a new terminal instance and serve the application:

```bash
php artisan serve
```