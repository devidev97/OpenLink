# Enlaces

Menú de accesos con el diseño de Rectificativos. Cada botón muestra su logo y su título. Si un enlace no tiene logo, usa el icono genérico.

## Arranque

```bash
npm install
cp .env.example .env
npm run dev
```

Servidor local en `http://localhost:5173`.

## Variables de entorno

Cada acceso usa el mismo número. `LINK` es la URL, `TITLE` el texto del botón e `IMAGE` el logo, que es opcional:

```bash
LINK1=https://chatgpt.com/
TITLE1=ChatGPT
IMAGE1=/logo-RossBoard.png
```

Si no pones `IMAGE`, el botón usa el icono genérico `/logo-link.svg`. La ruta tiene que ser un archivo de `public/`, por ejemplo `/logo-Portools.png`.

El número ordena el menú. Si falta un número, el resto sigue apareciendo. Solo se aceptan URLs `http` y `https`. Si la URL lleva `#`, ponla entre comillas para que el archivo `.env` no corte el enlace. Si un `LINK` no tiene `TITLE`, el botón muestra el dominio.

En Vercel, las mismas variables se añaden en **Settings → Environment Variables** y hace falta un nuevo despliegue para que entren en el menú.

## Build

```bash
npm run build
npm run preview
```
