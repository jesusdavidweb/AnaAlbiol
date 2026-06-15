# AGENTS.md - Contexto del Proyecto

Este archivo proporciona el contexto técnico y operativo para trabajar en el repositorio de **Ana Albiol - Web Oficial (Demo)**.

## 🌟 Resumen del Proyecto

Este proyecto es una demostración tecnológica de la web oficial de Ana Albiol, diseñada con un enfoque en el rendimiento extremo, SEO optimizado y una experiencia de usuario emocional y fluida. Funciona como **demo pública** desplegada bajo el subpath del portafolio del autor.

- **Tipo de Proyecto:** Sitio Estático Generado (SSG)
- **Framework Principal:** [Astro 6.0.8](https://astro.build/)
- **Componentes de UI:** [Svelte 5.55.0](https://svelte.dev/)
- **Arquitectura:** Static Output. Archivos HTML, CSS y JS pre-generados en `/dist`, desplegados via Nginx en Docker.
- **URL Demo:** `https://demo.jedav.link/anaalbiol/` (subdominio demo del autor; el sitio NO se publica en `anaalbiol.com`)
- **Base Path:** `/anaalbiol` — todos los assets y enlaces internos usan este prefijo.
- **Indexación:** **DESACTIVADA por completo.** Esta es una demo y no debe aparecer en Google ni en ningún buscador. Se aplica triple barrera:
  1. `robots.txt` con `Disallow: /` (sin línea Sitemap).
  2. `<meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex, nocache">` en todas las páginas (vía `Layout.astro`).
  3. Meta tags específicos para `googlebot` y `bingbot` con la misma directiva.
  4. Integración `@astrojs/sitemap` deshabilitada (no se genera `sitemap-index.xml` ni `sitemap-0.xml`).

## 🛠️ Stack Tecnológico

- **Runtime & Package Manager:** [Bun](https://bun.sh/) (Recomendado para desarrollo local)
- **Framework:** [Astro 6.0.8](https://astro.build/) con output estático
- **Componentes UI:** [Svelte 5.55.0](https://svelte.dev/) con modo island architecture
- **Animaciones & Motion:** [Motion 10.18.0](https://motion.dev/)
- **SEO & Sitemaps:** [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- **Tipografía:** Fuentes por @fontsource (Inter, Poppins, Playfair Display)
- **Estilos:** Vanilla CSS con Variables CSS (Custom Properties)
- **Contenerización:** Docker & Docker Compose
- **Despliegue:** Dockerizada para VPS Linux con Dokploy

## 🚀 Comandos Clave

### Desarrollo Local

```bash
bun install           # Instalar dependencias (o npm install)
bun run dev           # Iniciar servidor de desarrollo (http://localhost:4321)
bun run start         # Alias para bun run dev
```

### Compilación y Producción

```bash
bun run build         # Generar archivos estáticos optimizados en /dist
bun run preview       # Previsualizar el build localmente antes de desplegar
bun run astro        # Ejecutar comandos CLI de Astro directamente
```

### Docker

```bash
docker-compose up --build -d    # Levantar entorno productivo (revisión local de Docker)
docker-compose logs -f          # Ver logs en tiempo real
docker-compose down             # Detener contenedores
```

## 📐 Convenciones de Desarrollo

### Idioma y Documentación

- **Código:** Toda la lógica (variables, funciones, clases, comentarios técnicos) deben estar en **Inglés**.
- **Documentación:** Archivos de documentación (README, CHANGELOG, AGENTS.md, guías de contribución) deben estar en **Español**.
- **Contenido de la Web:** Textos visibles en la interfaz pueden estar en Español según corresponda al contexto de Ana Albiol.

### Estándares de Código

- **Simplicidad:** Priorizar soluciones limpas y optimizadas sobre arquitecturas complejas (KISS principle).
- **Modularidad:** Seguir principios DRY. Los componentes deben ser reutilizables y estar ubicados en `src/components/`.
- **Estilos:** Utilizar exclusivamente las variables definidas en `src/styles/global.css`. Preferir Vanilla CSS sobre frameworks de estilos.
- **Componentes:** 
  - Componentes `.astro` para estructura y lógica de servidor
  - Componentes `.svelte` para interactividad e island architecture
  - No añadir librerías sin verificar su uso previo en el proyecto
- **Tipografía en Código:** Usar quotes simples `'` en JavaScript/TypeScript, no comillas dobles.

## 🎨 Identidad de Marca y Tono

Para mantener la coherencia con la visión de Ana Albiol, cualquier cambio en la UI/UX debe seguir estas pautas **estrictamente**:

### Colores Primarios
- **Marsala:** `#964F4C` (tono cálido, elegante, introspectivo)
- **Vainilla/Beige:** `#F6F1EB` (fondo limpio, respirable, minimalista)

### Pautas de Diseño
- **Tipografía:** Protagonista, minimalista, con mucho "aire" y espaciado generoso
- **Paleta:** Limitada a Marsala y Vainilla. Evitar **cualquier** color estridente o saturado
- **Layout:** Mucho espacio en blanco, respeto por el vacío como elemento de diseño
- **Tono Visual:** Marca personal, calma, profundidad emocional y verdad

### Mensajería Principal
- **Lema de la Marca:** "Vivir antes de morir"
- **Vibe:** NO parecer web de "marketing de cursos". Ser auténtica, reflexiva, y profunda.

### Restricciones Importantes
- **Emojis:** **NO** usar emojis en NINGUNA parte del contenido visible de la web (incluyendo iconografía decorativa)
- **Animaciones:** Usar Motion de forma sutil, nunca distrayente. Enfoque en transiciones suaves.

### Estructura de Directorios

- `src/components/`: Componentes atómicos (Astro y Svelte).
- `src/layouts/`: Plantillas base de la aplicación.
- `src/pages/`: Rutas de la aplicación (sistema de enrutado basado en archivos de Astro).
- `src/styles/`: Estilos globales y configuraciones CSS.
- `public/`: Activos estáticos (imágenes, fuentes, etc.).

## 🔧 Configuración de Astro

El proyecto está configurado con:

- **site:** `https://demo.jedav.link` (URL base para Open Graph y canonical; el sitio NO se indexa)
- **base:** `/anaalbiol` (subpath donde se sirve la demo; aplicado a todos los assets/enlaces)
- **output:** `static` (genera HTML estático optimizado)
- **Integraciones activas:**
  - `@astrojs/svelte` para componentes interactivos
  - **Sin sitemap** — el sitio no debe indexarse, por lo que se eliminó `@astrojs/sitemap` de las integraciones.
- **Fuentes via Fontsource:**
  - **Inter** (Body, weights: 400, 600) - `--font-body`
  - **Poppins** (Subtitles, weights: 400, 600) - `--font-subtitle`
  - **Playfair Display** (Headings, weights: 400, 600) - `--font-heading`

## 💡 Checklist para Contribuciones

Antes de hacer commit/push, asegurate de:

- [ ] El código en componentes `.svelte` respeta la reactividad de Svelte 5
- [ ] Las variables CSS definidas en `src/styles/global.css` se utilizan (no inline styles)
- [ ] Los componentes `.astro` no tienen lógica interactiva innecesaria (usar `.svelte` para eso)
- [ ] Todos los comentarios técnicos están en inglés
- [ ] El diseño respeta la paleta Marsala/Vainilla
- [ ] Se ha testeado en dispositivos móviles (no solo desktop)
- [ ] El build local completa sin errores: `bun run build`
- [ ] Se ejecutó prettier: `bun run astro` (si está configurado en `astro.config.mjs`)

## 📋 Entregables Mandatorios (Contexto Global)

- Configuración Docker completa (`Dockerfile`, `docker-compose.yml`).
- Gestión de dependencias con Bun.
- Documentación en español.
- Preparado para despliegue en VPS (Dokploy).

---

_Este archivo es una guía dinámica y debe actualizarse si cambian las tecnologías o procesos del proyecto._
