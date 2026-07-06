# SATECHO - Landing Page (AgroSafe)

**SATECHO** es una startup tecnológica fundada por un equipo de ingenieros universitarios con la misión de democratizar la agricultura de precisión. A través de nuestra solución **AgroSafe**, combinamos tecnología IoT (Internet de las Cosas) e Inteligencia Artificial para mitigar la vulnerabilidad de los agricultores frente al cambio climático y optimizar el rendimiento de sus cultivos en tiempo real.

Esta es la Landing Page oficial del proyecto, diseñada para captar el interés de agricultores, agrónomos, socios estratégicos y clientes potenciales, facilitando la redirección hacia nuestra aplicación web de monitoreo inteligente.

---

## 🌟 Características de la Landing Page
- **Diseño Premium e Interactivo:** Interfaz moderna y adaptativa enfocada en la experiencia del usuario (UX).
- **Internacionalización (i18n):** Soporte multi-idioma (Español e Inglés) integrado dinámicamente.
- **Optimización SEO:** Metatags avanzados, estructura semántica HTML5 y excelente rendimiento.
- **Despliegue Continuo (CI/CD):** Configurada con GitHub Actions para desplegar automáticamente a GitHub Pages en cada actualización de la rama `main`.

---

## 🛠️ Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```text
├── .github/
│   └── workflows/
│       └── deploy.yml       # Flujo de trabajo de GitHub Actions para despliegue automatizado
├── public/                  # Archivos públicos de producción
│   ├── index.html           # Página de inicio principal (Landing Page)
│   ├── 404.html             # Página de error 404 personalizada
│   ├── privacy.html         # Políticas de privacidad
│   ├── terms.html           # Términos y condiciones
│   └── src/                 # Recursos de la aplicación (Assets)
│       ├── fonts/           # Fuentes tipográficas
│       ├── images/          # Imágenes y logotipos
│       ├── scripts/         # Lógica de JavaScript (i18n, interactividad)
│       └── styles/          # Hojas de estilo CSS vainilla
├── package.json             # Dependencias de desarrollo, scripts y configuración de linters
└── README.md                # Documentación del proyecto
```

---

## 🚀 Cómo Empezar (Para Desarrolladores)

### Prerrequisitos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 20 o superior recomendado).

### Instalación
1. Clona este repositorio:
   ```bash
   git clone https://github.com/S-A-T-E-C-H-O/Landing_Page-SATECHO.git
   cd Landing_Page-SATECHO
   ```

2. Instala las dependencias de desarrollo (herramientas de calidad de código):
   ```bash
   npm install
   ```

### Calidad de Código y Estilo
Para mantener un código limpio y libre de errores antes de enviar contribuciones, puedes correr las herramientas de linting configuradas:

- **HTMLHint** (Validación de HTML):
  ```bash
  npx htmlhint public/**/*.html
  ```
- **ESLint** (Calidad de JavaScript):
  ```bash
  npx eslint public/src/scripts/**/*.js
  ```
- **Stylelint** (Calidad de CSS):
  ```bash
  npx stylelint public/src/styles/**/*.css
  ```

---

## 🤝 Cómo Colaborar

### 💻 Para Desarrolladores
¡Nos encanta el código abierto! Si quieres colaborar mejorando la Landing Page:
1. Realiza un **Fork** del proyecto.
2. Crea una rama para tu característica o corrección: `git checkout -b feature/nueva-mejora`.
3. Asegúrate de pasar los linters (`ESLint`, `Stylelint`, `HTMLHint`).
4. Haz un commit detallado de tus cambios: `git commit -m "Add: Descripción del cambio"`.
5. Envía un **Pull Request** explicando detalladamente qué aporta tu contribución.

### 🚜 Para Agricultores, Clientes y Socios
¿Quieres probar nuestra tecnología de monitoreo inteligente en tus campos o asociarte con nosotros?
- **Regístrate en la plataforma:** Puedes crear una cuenta y seleccionar tu rol en [AgroSafe App - Registro](https://satecho-web-application.vercel.app/register/select-role).
- **Explora la aplicación:** Accede a tu panel en [AgroSafe App - Login](https://satecho-web-application.vercel.app/login).
- **Contacto Directo:** Escríbenos a través de la sección de contacto en la landing page o mediante los canales oficiales descritos en ella para demostraciones en vivo, alianzas de distribución o soporte técnico.

---

## 📄 Licencia
Este proyecto está bajo la licencia **ISC**. Consulta el archivo [LICENSE](file:///D:/SATECHO/Landing_Page-SATECHO/LICENSE) para más detalles.
