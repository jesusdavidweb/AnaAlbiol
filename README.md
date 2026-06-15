<div align="center">
  <img src="public/assets/images/LOGO_AnaAlbiol_Blanco.svg" alt="Ana Albiol" width="180" />
</div>

<br />

# Ana Albiol — Web Oficial

**Diseño y desarrollo web para la marca personal de Ana Albiol**, escritora, formadora y conferenciante bajo el lema *"Vivir antes de morir"*. Un sitio estático de alto rendimiento construido con un enfoque en la identidad visual, la calidad emocional del contenido y la escalabilidad técnica.

> **Nota:** Este repositorio es una **demo pública** servida desde `https://demo.jedav.link/anaalbiol/`. El sitio está configurado para **no indexarse en buscadores** (`noindex` en todas las páginas, `robots.txt` con `Disallow: /`, sin sitemap).

<br />

![Preview del sitio web](docs/website_preview.webp)

<br />

<p align="center">
  <img src="https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white" alt="Astro" />
  <img src="https://img.shields.io/badge/Svelte_5-FF3E00?style=for-the-badge&logo=svelte&logoColor=white" alt="Svelte" />
  <img src="https://img.shields.io/badge/Motion-000000?style=for-the-badge&logo=framer&logoColor=white" alt="Motion" />
  <img src="https://img.shields.io/badge/Vanilla_CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
  <img src="https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white" alt="Bun" />
  <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" alt="Nginx" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
</p>

---

## El Proyecto

Ana Albiol necesitaba una presencia digital que reflejara la profundidad y autenticidad de su marca personal. El resultado es un sitio tranquilo, minimalista y sin distracciones — diseñado para generar confianza y comunicar desde la verdad, no desde el marketing de cursos.

La paleta se limita a dos colores: **Marsala** (`#964F4C`) y **Vainilla** (`#F6F1EB`). Cada decisión de diseño —tipografía, espaciado, animaciones— sirve a esa intención.

---

## Lo que hace especial este proyecto

- **Rendimiento extremo** — Astro genera HTML estático puro. Sin frameworks pesados en producción, sin JavaScript innecesario. Ideal para un Lighthouse score casi perfecto.
- **Island Architecture** — Solo los componentes que necesitan interactividad (Header, Hero, Cookie Banner) se hidratan en el cliente. El resto es HTML estático limpio.
- **SEO de base** — Sitemap automático, meta tags Open Graph, robots.txt y estructura semántica desde el primer día.
- **Cumplimiento GDPR** — Banner de cookies funcional, páginas de aviso legal, política de privacidad y cookies incluidas.
- **Animaciones de intención** — Motion se usa con criterio: preloader, transiciones de entrada, parallax sutil. Nunca distrae, siempre aporta.
- **Despliegue listo para producción** — Multi-stage Dockerfile que compila los estáticos y los sirve con Nginx. Un solo comando para subir a cualquier VPS.
- **Design System propio** — Variables CSS centralizadas, tipografía como protagonista, y una página `/design-system` para validar la identidad visual de la marca.

---

## Páginas del Sitio

- `/` — Home con Hero animado y propuesta de valor
- `/quien-soy` — Historia y misión de Ana
- `/libros` — Catálogo de publicaciones
- `/formaciones` — Programas y talleres
- `/charlas` — Conferencias y eventos
- `/en-privado` — Mentoría individual
- `/contacto` — Formulario de contacto
- `/design-system` — Sistema de diseño interno

---

## Diseño y Desarrollo

<br />

**Jesús David** — Diseñador y Desarrollador Web

Especializado en webs de marca personal con foco en rendimiento, diseño emocional y arquitecturas modernas con Astro y Svelte.

[![Web](https://img.shields.io/badge/jesusdavid.net-964F4C?style=for-the-badge&logo=firefox&logoColor=white)](https://jesusdavid.net/)
[![Instagram](https://img.shields.io/badge/@jesusdavidweb-E1306C?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/jesusdavidweb)
[![LinkedIn](https://img.shields.io/badge/jesusdavid-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jesusdavid)

---

*Todos los derechos sobre el contenido y la marca pertenecen a Ana Albiol.*
