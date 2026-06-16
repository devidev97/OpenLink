# OpenLink

Página simple (Next.js) para listar enlaces y mostrarlos en tarjetas. Los enlaces extra se configuran vía `.env` usando una variable de entorno.

Desplegable en [Vercel](https://vercel.com) sin configuración adicional.

## Requisitos

- Node.js >= 22.12.0
- npm

## Instalación y arranque

```sh
npm install
npm run dev
```

Servidor local en `http://localhost:3000`.

## Configuración del `.env`

Este proyecto usa **una variable de entorno**:

- **`PUBLIC_EXTRA_LINKS`**: lista de enlaces extra en formato **JSON**, guardado como **string**.

### Crear tu `.env`

1. Copia el ejemplo:

```sh
cp .env.example .env
```

2. Edita `.env` y ajusta `PUBLIC_EXTRA_LINKS`.

### Formato esperado (`PUBLIC_EXTRA_LINKS`)

- Debe ser un **array JSON**.
- En `.env` debe ir como **string entre comillas**.
- Puede ser **multilínea** siempre que esté entre comillas simples `'...'` o dobles `"..."`.

Ejemplo (multilínea, recomendado para mantenerlo legible):

```env
PUBLIC_EXTRA_LINKS='[
  {
    "title": "Mi enlace",
    "href": "https://example.com",
    "imageSrc": "/logo-link.svg",
    "imageVariant": "large"
  }
]'
```

Campos por item:

- **`title`** (string, requerido): texto a mostrar.
- **`href`** (string, requerido): URL destino.
- **`imageSrc`** (string, opcional): ruta a una imagen dentro de `public/` (por ejemplo `"/mi-logo.png"`). Si no se pone, se usa `"/logo-link.svg"`.
- **`imageVariant`** (string, opcional): variante de render (por ejemplo `"large"`), si tu UI la soporta.

## Build

```sh
npm run build
npm run start
```

## Despliegue en Vercel

1. Importa el repositorio en Vercel.
2. En **Settings → Build & Development Settings**:
   - **Framework Preset:** Next.js
   - **Output Directory:** déjalo vacío (no uses `dist`; eso era de Astro)
3. Añade la variable `PUBLIC_EXTRA_LINKS` en **Settings → Environment Variables**.
4. Redespliega.

## Seguridad

La app incluye cabeceras anti-iframe (`X-Frame-Options: DENY` y `Content-Security-Policy: frame-ancestors 'none'`) configuradas en `next.config.ts`.

## Notas

- `.env` está **ignorado por git**; no se sube al repositorio. Usa `.env.example` para compartir la plantilla.
