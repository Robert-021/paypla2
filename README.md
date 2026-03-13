# PayPlay

PayPlay es una plataforma moderna diseñada para ofrecer soluciones avanzadas en servicios de gestión y cumplimiento. Este proyecto está construido con un stack tecnológico de vanguardia para garantizar el mejor rendimiento y experiencia de usuario.

---

## 🚀 Características Principales

PayPlay integra diversos módulos especializados para cubrir necesidades críticas de negocio:

*   **KYC (Know Your Customer):** Procesos de verificación de identidad robustos y automatizados.
*   **MDM (Mobile Device Management):** Gestión centralizada y segura de dispositivos móviles.
*   **Plataformas:** Ecosistema integrado para la gestión de servicios.
*   **Gestión de Riesgo:** Herramientas analíticas para la prevención y mitigación de riesgos.
*   **Sección Nosotros:** Información detallada sobre nuestra misión, visión y equipo.

---

## 🛠️ Stack Tecnológico

El proyecto utiliza las últimas versiones de las tecnologías más populares del ecosistema React:

*   **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
*   **Librería UI:** [React 19](https://react.dev/)
*   **Estilos:** [Tailwind CSS 4](https://tailwindcss.com/)
*   **Animaciones:** [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)

---

## ⚙️ Configuración y Desarrollo

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

### Requisitos Previos

Asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión recomendada v20 o superior)
- npm (incluido con Node.js)

### Instalación

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/payplay.git
    ```
2.  Navega al directorio del proyecto:
    ```bash
    cd payplay
    ```
3.  Instala las dependencias:
    ```bash
    npm install
    ```

### Comandos Disponibles

*   `npm run dev`: Inicia el servidor de desarrollo en [http://localhost:3000](http://localhost:3000).
*   `npm run build`: Crea la versión de producción optimizada.
*   `npm run start`: Inicia el servidor de producción.
*   `npm run lint`: Ejecuta el análisis de código para encontrar errores.

---

## 📁 Estructura del Proyecto

```text
payplay/
├── app/                # Rutas y componentes de la aplicación (Next.js App Router)
│   ├── components/     # Componentes de UI reutilizables (Navbar, Footer, etc.)
│   ├── nosotros/       # Página de "Nosotros"
│   ├── servicios/      # Páginas de servicios (KYC, MDM, Riesgo, Plataformas)
│   └── globals.css     # Estilos globales y configuración de Tailwind
├── public/             # Archivos estáticos (imágenes, iconos)
├── package.json        # Dependencias y scripts
└── tsconfig.json       # Configuración de TypeScript
```

---

## 🌐 Despliegue (Deploy)

Cuando lanzas este proyecto "a la red" (producción), el proceso es diferente al desarrollo local:

1.  **Build:** Se ejecuta `npm run build`. Esto compila todo el código, optimiza las imágenes y genera los estilos finales en una carpeta llamada `.next`.
2.  **Servidor:** El servidor de despliegue (como Vercel, Netlify o un VPS) utiliza esa carpeta optimizada para servir la web.
3.  **Usuarios Finales:** Los usuarios que visitan tu URL **no necesitan instalar nada** (ni Node, ni npm). Ellos reciben la versión ya procesada y optimizada con todos los diseños y animaciones funcionando perfectamente.

**Recomendación:** La forma más sencilla de desplegar este proyecto es conectando tu repositorio de GitHub a [Vercel](https://vercel.com). Vercel detectará que es un proyecto de Next.js y hará todo el proceso de instalación y build automáticamente por ti.

---

## 📄 Licencia

Este proyecto es privado. Todos los derechos reservados.

