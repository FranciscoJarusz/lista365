# 🏥 Lista 365

Sitio web para el Centro de Estudiantes de la Licenciatura en Enfermería (Lista 365) del Centro Regional Chivilcoy - Universidad Nacional de Luján.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.6-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.13-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

## 🎯 Descripción

Este proyecto es una Single Page Application (SPA) moderna y responsive diseñada para el Centro de Estudiantes de Enfermería. Ofrece información institucional, calendario de eventos, recursos para estudiantes y un sistema de preguntas frecuentes, todo en una interfaz amigable y accesible.

## 🛠️ Tecnologías

### Core
- **React 19.1.1** - Biblioteca principal para la UI
- **Vite 7.1.6** - Build tool y dev server de última generación
- **Tailwind CSS 4.1.13** - Framework de CSS utilitario

### Dependencias Principales
- **@fullcalendar/react 6.1.19** - Calendario interactivo para eventos
- **@fullcalendar/daygrid** - Vista de calendario mensual
- **@fullcalendar/rrule** - Eventos recurrentes
- **react-icons 5.5.0** - Biblioteca de iconos

## 📂 Estructura de Carpetas

```
template-centros/
│
├── public/                  # Archivos públicos estáticos
│   └── vite.svg
│
├── src/                     # Código fuente
│   ├── assets/             # Recursos estáticos
│   │   ├── ambulance.svg
│   │   ├── hamburguesa.svg
│   │   ├── instagram.svg
│   │   ├── linkedin.svg
│   │   ├── logo365.png
│   │   └── whatsapp.svg
│   │
│   ├── components/         # Componentes React
│   │   ├── Calendario.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Integrantes.jsx
│   │   ├── Preguntas-frecuentes.jsx
│   │   ├── Quienes-somos.jsx
│   │   ├── Recursos.jsx
│   │   └── Voluntariado.jsx
│   │
│   ├── hooks/              # Custom Hooks
│   │   └── useScrollEffects.js
│   │
│   ├── pages/              # Páginas
│   │   └── HomePage.jsx
│   │
│   ├── App.jsx            # Componente raíz
│   ├── main.jsx           # Entry point
│   ├── index.css          # Estilos globales
│   └── Calendar.css       # Estilos del calendario
│
├── eslint.config.js       # Configuración ESLint
├── postcss.config.js      # Configuración PostCSS
├── vite.config.js         # Configuración Vite
├── vercel.json           # Configuración Vercel
├── index.html            # HTML principal
└── package.json          # Dependencias y scripts
```

## 🧩 Componentes

### 1. **Header** (`Header.jsx`)
Barra de navegación principal con características avanzadas:

- **Funcionalidades**:
  - Logo institucional clicable
  - Menú hamburguesa responsive
  - Barra de progreso de scroll animada
  - Ícono de ambulancia que se mueve con el scroll
  - Menú lateral deslizante con overlay
  - Navegación smooth scroll a secciones

- **Props**:
  - `showNav` (boolean): Controla la visibilidad de la navegación

- **Tecnologías Utilizadas**:
  - Custom hook `useEfectosScroll` para detectar posición del scroll
  - Estado local para control del menú
  - Animaciones CSS con Tailwind
  - Gradientes personalizados

### 2. **QuienesSomos** (`Quienes-somos.jsx`)
Sección informativa sobre el Centro de Estudiantes:

- Presenta la misión y visión
- Diseño centrado y responsive
- Tipografía destacada con colores de marca

### 3. **Calendario** (`Calendario.jsx`)
Componente de calendario interactivo:

- **Funcionalidades**:
  - Vista mensual
  - Navegación entre meses
  - Callback `onMonthChange` para detectar cambios de mes
  - Localizado en español
  - Responsive y adaptable

- **Props**:
  - `onMonthChange`: Función callback opcional para detectar cambios de mes

### 4. **Integrantes** (`Integrantes.jsx`)
Muestra el equipo del Centro de Estudiantes

### 5. **Recursos** (`Recursos.jsx`)
Recursos y materiales para estudiantes

### 6. **Voluntariado** (`Voluntariado.jsx`)
Información sobre información del voluntariado

### 7. **PreguntasFrecuentes** (`Preguntas-frecuentes.jsx`)
Sistema de FAQ (Preguntas Frecuentes)

### 8. **Footer** (`Footer.jsx`)
Pie de página con información de contacto y redes sociales

### 9. **HomePage** (`HomePage.jsx`)
Componente contenedor principal que organiza todas las secciones de la página.

## 📦 Instalación

### Prerrequisitos
- Node.js 16+
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd template-centros
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

## 🚀 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run lint     # Ejecutar linter
npm run preview  # Preview del build
```

## 🌐 Despliegue

El proyecto está configurado para despliegue en **Vercel** (ver `vercel.json`).

---