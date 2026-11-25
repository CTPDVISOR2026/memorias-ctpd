# Memorias del CTPD — sitio de publicación

Sitio estático para publicar la revista **Memorias del Consejo Territorial de Planeación Distrital (CTPD)**.
No necesita servidor, base de datos ni pagos: se aloja gratis en **GitHub Pages**, igual que el Visor Institucional.

Dirección recomendada (permanente):
**https://ctpdvisor2026.github.io/memorias-ctpd/**

Enlaces directos que conviene compartir:

| Para qué | Enlace |
|---|---|
| Página principal (siempre muestra el número más reciente) | `https://ctpdvisor2026.github.io/memorias-ctpd/` |
| Un número específico | `https://ctpdvisor2026.github.io/memorias-ctpd/#numero-1` |
| Archivo de todos los números | `https://ctpdvisor2026.github.io/memorias-ctpd/#archivo` |
| PDF del número 1 | `https://ctpdvisor2026.github.io/memorias-ctpd/numeros/2026-n01/memorias-ctpd-n01.pdf.pdf` |

---

## Estructura

```
index.html                  ← la página (no hay que tocarla para publicar números)
datos/numeros.js            ← CATÁLOGO: aquí se agrega cada número nuevo
assets/logo-ctpd.png        ← logo
assets/compartir.jpg        ← imagen que aparece al compartir el enlace en WhatsApp/redes
numeros/2026-n01/           ← una carpeta por número (PDF + portada)
    memorias-ctpd-n01.pdf
    portada.jpg
.nojekyll                   ← requerido por GitHub Pages (no borrar)
```

---

## Publicar por primera vez (una sola vez, ~10 minutos)

1. Inicie sesión en GitHub con la cuenta **ctpdvisor2026** (la misma del Visor).
2. Botón **New repository** → nombre: `memorias-ctpd` → **Public** → *Create repository*.
3. En el repositorio nuevo: **Add file → Upload files**. Arrastre **todo el contenido** de esta carpeta
   (no la carpeta en sí, sino lo que tiene adentro: `index.html`, `datos`, `assets`, `numeros`, `.nojekyll`, `README.md`).
   Pulse **Commit changes**.
   > Si `.nojekyll` no aparece al arrastrar (es un archivo oculto), créelo con **Add file → Create new file**, nombre `.nojekyll`, contenido vacío.
4. **Settings → Pages** → en *Source* elija **Deploy from a branch** → Branch **main** / carpeta **/(root)** → **Save**.
5. Espere 1–3 minutos y abra `https://ctpdvisor2026.github.io/memorias-ctpd/`.

## Publicar un número nuevo (cada edición)

> ⚠️ **Al renombrar el PDF en Windows**, escriba solo `memorias-ctpd-n02` (sin `.pdf`): Windows oculta la extensión
> y si la escribe queda `memorias-ctpd-n02.pdf.pdf`. Antes de confirmar en GitHub, revise que el nombre que aparece
> en la lista termine en un solo `.pdf`. El valor de `pdf:` en `datos/numeros.js` debe coincidir exactamente con ese nombre.
> (El Número 1 quedó publicado como `memorias-ctpd-n01.pdf.pdf` y el catálogo ya apunta a ese nombre; no lo cambie.)

1. En el repositorio, **Add file → Upload files** y suba la carpeta nueva, por ejemplo
   `numeros/2028-n02/` con `memorias-ctpd-n02.pdf` y `portada.jpg`.
   (Portada: JPG de unos 600 px de ancho. Puede exportar la primera página del PDF como imagen.)
2. Abra `datos/numeros.js` → ícono del lápiz (**Edit**).
3. Copie el bloque completo del número 1 (desde `{` hasta `},`) y péguelo **encima**, justo después de `window.NUMEROS = [`.
   Cambie: `numero`, `anio`, `fecha`, `titulo`, `subtitulo`, `periodo`, `pdf`, `portada`, `paginas`, `peso`,
   `resumen`, `editorial`, `equipo` y la tabla de `contenido` (con la página del PDF donde empieza cada sección).
4. **Commit changes**. En 1–2 minutos (la página siempre carga el catálogo más reciente, sin problemas de caché):
   - la página principal mostrará el número nuevo como **Número actual**;
   - el anterior pasará solo al **Archivo** y conservará su enlace `#numero-1`.

> Consejo: no cambie nunca el nombre de un PDF ya publicado; así los enlaces que la gente ya guardó siguen funcionando.

## Actualizar un PDF ya publicado (correcciones)

Suba el PDF corregido **con exactamente el mismo nombre** en la misma carpeta; GitHub lo reemplaza y el enlace no cambia.
Si cambia el número de páginas o el peso, actualícelos en `datos/numeros.js`.

## Vincular desde la web oficial del CTPD

- Botón o enlace simple en ctpd.gov.co apuntando a `https://ctpdvisor2026.github.io/memorias-ctpd/`.
- En el Visor, puede añadirse un botón en la cabecera junto al enlace a ctpd.gov.co.
- Si más adelante se quiere una dirección propia (p. ej. `memorias.ctpd.gov.co`), en **Settings → Pages → Custom domain**
  se escribe el subdominio y quien administre el dominio crea un registro **CNAME** que apunte a `ctpdvisor2026.github.io`.
  En ese caso, actualice `urlSitio` en `datos/numeros.js` y las etiquetas `og:` de `index.html`.

## Límites útiles

- GitHub acepta archivos de hasta 100 MB (avisa desde 50 MB). El PDF del número 1 pesa 16,9 MB.
- La carga por navegador (*Upload files*) admite archivos de hasta 25 MB. Si un PDF futuro pesa más, comprímalo
  (p. ej. exportándolo con imágenes a 150 ppp) o súbalo con GitHub Desktop.
