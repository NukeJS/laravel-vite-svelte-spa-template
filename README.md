# Laravel 9 + Vite + Svelte + Tailwind CSS

This starter template includes:

-   Laravel 9
-   Vite
-   Svelte
-   Tailwind CSS (w/ `@tailwindcss/forms`)
-   Axios
-   TypeScript

## Information

-   The app is located in [`resources/js/`](/resources/js/).
-   You can use [`resources/css/`](/resources/css/) for styling.

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

Run vite to serve your assets/bundle:

```bash
npm run dev
```

Open a new terminal instance and serve the application:

```bash
php artisan serve
```

## Deployment

Build the app:

```bash
npm run build
```

Now all you have to do is serve the Laravel app in a production environment.
