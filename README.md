# OpenLink

Página simple (Astro) para listar enlaces y mostrarlos en tarjetas. Los enlaces extra se configuran vía `.env` usando una variable pública.

## Requisitos

- Node.js + npm

## Instalación y arranque

```sh
npm install
npm run dev
```

Servidor local en `http://localhost:4321`.

## Configuración del `.env`

Este proyecto usa **una variable de entorno pública**:

- **`PUBLIC_EXTRA_LINKS`**: lista de enlaces extra en formato **JSON**, pero guardado como **string**.

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
npm run preview
```

## Notas

- `.env` está **ignorado por git**; no se sube al repositorio. Usa `.env.example` para compartir la plantilla.
