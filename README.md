# React Meetup App 🚀

Una aplicación moderna de gestión de meetups construida con **React 18**, **TypeScript** y **Vite**. Permite a los usuarios explorar, crear y gestionar meetups de forma intuitiva y responsiva.

## ✨ Características

- **📅 Gestión completa de meetups**: Visualiza, crea y marca como favoritos
- **📱 Diseño responsivo**: Navegación adaptativa con menú móvil
- **⚡ Rendimiento optimizado**: Construido con Vite para desarrollo ultra-rápido
- **🎯 TypeScript**: Tipado estático para mayor robustez del código
- **🧪 Cobertura de testing**: Tests unitarios con Vitest y Testing Library
- **📐 Arquitectura escalable**: Context API, custom hooks y componentes reutilizables
- **🎨 CSS Modules**: Estilos modulares y encapsulados
- **✅ Validación de formularios**: Integración con Formik y Yup

## 🛠️ Stack Tecnológico

| Categoría            | Tecnologías                                    |
| -------------------- | ---------------------------------------------- |
| **Frontend**         | React 18.3.1, TypeScript 4.9                   |
| **Build Tool**       | Vite 7.1.11                                    |
| **Routing**          | React Router DOM 7.9.4                         |
| **State Management** | Context API + useReducer                       |
| **Forms**            | Formik 2.4.6 + Yup 1.7.1                       |
| **Styling**          | CSS Modules, Google Fonts (Open Sans)          |
| **Testing**          | Vitest 3.2.4, Testing Library                  |
| **Development**      | Hot Module Replacement, TypeScript Strict Mode |

## 🚀 Inicio Rápido

### Prerrequisitos

- **Node.js** >= 16.0.0
- **npm** >= 8.0.0

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/AdrianArcoGonzalez/iskra.git
cd react_meetup

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🎯 Funcionalidades Principales

### 📅 Gestión de Meetups

- **Listado completo**: Grid responsivo que se adapta de 1 a 4 columnas
- **Creación de meetups**: Formulario validado con campos requeridos
- **Sistema de favoritos**: Marca/desmarca meetups favoritos con persistencia
- **Imágenes con fallback**: Placeholder automático para imágenes rotas

### 📱 Experiencia Responsiva

- **Navegación adaptativa**: Menú hamburguesa en móviles, barra completa en desktop
- **Detección automática**: useEffect con listener de resize para cambios de pantalla
- **Badge dinámico**: Contador de favoritos visible en navegación

### 🔄 Estado y Datos

- **Context API**: Estado global centralizado para meetups
- **Custom Hooks**: `useMeetups` y `useFetch` para lógica reutilizable
- **Reducers**: Gestión inmutable del estado con acciones tipadas
- **Loading States**: Indicadores de carga durante peticiones
