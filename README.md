# SPA Provincias de Castilla-La Mancha

> Aplicación Full-Stack desarrollada con React, Node.js, Express y MySQL que permite consultar información de las provincias de Castilla-La Mancha mediante una API REST propia.

---

## 📖 Descripción del proyecto

Este proyecto consiste en una Single Page Application (SPA) desarrollada como práctica de desarrollo Full-Stack, con el objetivo de aplicar una arquitectura moderna basada en la separación entre frontend y backend, así como poner en práctica el consumo de una API REST propia.

El frontend, desarrollado con React y Vite, ofrece una interfaz dinámica e intuitiva que permite navegar entre las distintas provincias de Castilla-La Mancha sin necesidad de recargar la página. La aplicación consume una API REST implementada con Node.js y Express, responsable de gestionar las peticiones y proporcionar la información solicitada por el cliente.

Los datos se almacenan en una base de datos MySQL, utilizando Sequelize como ORM para facilitar el acceso y la gestión de la información de forma estructurada y mantenible.

La aplicación permite consultar información de las cinco provincias de Castilla-La Mancha, mostrando datos como la capital, la población, la superficie, así como mapas y escudos representativos de cada provincia.

Más allá de la funcionalidad implementada, este proyecto me ha servido para consolidar mis conocimientos sobre el desarrollo de aplicaciones Full-Stack, el diseño de APIs REST, la organización modular del código, el uso de React Router para la navegación, la gestión de peticiones HTTP mediante Axios, la realización de pruebas con Postman y la utilización de Git y GitHub como herramientas de control de versiones y documentación del proyecto.

---

## 📸 Vista previa de la aplicación

La página principal muestra las cinco provincias de Castilla-La Mancha mediante tarjetas informativas. Desde cada una de ellas es posible acceder a la vista de detalle, donde se puede consultar información adicional mediante un enlace a la Wikipedia, se presenta el mapa y el escudo heráldico ampliado, representativo de la provincia.

![Página principal de la aplicación](docs/images/home.png)

---

## 🏗️ Arquitectura de la aplicación

La aplicación sigue una arquitectura **Full-Stack** basada en la separación de responsabilidades entre el cliente (frontend), el servidor (backend) y la base de datos.

```text
                 Usuario
                     │
                     ▼
        ┌─────────────────────┐
        │ React + Vite (SPA)  │
        │ Frontend            │
        └─────────────────────┘
                     │
             Peticiones HTTP
                 (Axios)
                     │
                     ▼
        ┌─────────────────────┐
        │ Node.js + Express   │
        │ API REST            │
        └─────────────────────┘
                     │
                Sequelize ORM
                     │
                     ▼
        ┌─────────────────────┐
        │ MySQL               │
        │ Base de datos       │
        └─────────────────────┘
```

### Separación entre frontend y backend

El proyecto se ha diseñado separando claramente el **frontend** del **backend**, una práctica habitual en el desarrollo de aplicaciones modernas.

El frontend es responsable de la interfaz de usuario y de la experiencia de navegación, mientras que el backend centraliza la lógica de negocio, el acceso a los datos y la gestión de las peticiones realizadas por la aplicación.

Esta separación facilita el mantenimiento del código, permite desarrollar ambos módulos de forma independiente y favorece la escalabilidad del proyecto.

### ¿Por qué utilizar una API REST?

En lugar de permitir que el frontend acceda directamente a la base de datos, la comunicación se realiza mediante una **API REST** desarrollada con Express.

Este enfoque aporta varias ventajas:

- Protege la base de datos evitando accesos directos desde el cliente.
- Centraliza la lógica de negocio en un único punto.
- Facilita la validación y el tratamiento de los datos antes de enviarlos al frontend.
- Permite que otros clientes (por ejemplo, una aplicación móvil) puedan reutilizar la misma API en el futuro.

En este proyecto, el frontend consume los endpoints de la API mediante Axios para obtener la lista de provincias y consultar la información detallada de cada una de ellas. De esta forma, la interfaz de usuario permanece desacoplada de la base de datos y toda la comunicación se realiza a través del servidor.

### ¿Por qué Sequelize?

Para el acceso a la base de datos se ha utilizado **Sequelize**, un ORM (*Object-Relational Mapping*) para Node.js.

Sequelize permite trabajar con modelos de JavaScript en lugar de escribir consultas SQL para las operaciones habituales, lo que hace que el código sea más legible, mantenible y portable.

Además, facilita tareas como la definición de modelos, las relaciones entre entidades y la sincronización con la base de datos, reduciendo la posibilidad de errores y mejorando la organización del proyecto.

---

## ✨ Funcionalidades

La aplicación permite consultar de forma sencilla la información de las provincias de Castilla-La Mancha mediante una interfaz moderna desarrollada como Single Page Application (SPA).

Entre sus principales funcionalidades destacan:

- **Visualización del listado de provincias**, presentado mediante tarjetas con información resumida.
- **Consulta del detalle de cada provincia**, mostrando datos como la capital, la población, la superficie, el mapa geográfico, el escudo heráldico representativo y enlace para ampliar información en Wikipedia.
- **Navegación fluida entre vistas** mediante React Router, evitando recargas completas de la página.
- **Obtención dinámica de los datos** a través de una API REST desarrollada con Node.js y Express.
- **Presentación responsive**, adaptando la interfaz a diferentes tamaños de pantalla para mejorar la experiencia de usuario.

---

## 🛠️ Tecnologías utilizadas

Las tecnologías empleadas en este proyecto se presentan agrupadas según la capa de la aplicación en la que intervienen. Esta organización permite comprender de forma rápida la arquitectura del proyecto y el papel que desempeña cada herramienta dentro del desarrollo.

### Frontend

| Tecnología | Descripción |
|------------|-------------|
| **JavaScript (ES6+)** | Lenguaje de programación utilizado para desarrollar la lógica de la aplicación en el frontend y el backend. |
| **HTML5** | Lenguaje de marcado empleado para estructurar las páginas de la aplicación. |
| **CSS3** | Lenguaje de estilos utilizado para el diseño y la presentación visual de la interfaz. |
| **React** | Biblioteca JavaScript utilizada para construir la interfaz de usuario mediante componentes reutilizables. |
| **Vite** | Herramienta de desarrollo y empaquetado que proporciona un entorno rápido y optimizado para aplicaciones React. |
| **React Router** | Biblioteca utilizada para gestionar la navegación entre las distintas vistas de la SPA sin recargar la página. |
| **Axios** | Cliente HTTP utilizado para consumir la API REST desde el frontend. |
| **CSS Modules** | Sistema de estilos modulares que evita conflictos entre clases CSS y mejora el mantenimiento del código. |

### Backend

| Tecnología | Descripción |
|------------|-------------|
| **Node.js** | Entorno de ejecución que permite desarrollar el servidor utilizando JavaScript. |
| **Express** | Framework utilizado para crear la API REST y gestionar las peticiones HTTP. |
| **Sequelize** | ORM (*Object-Relational Mapping*) que facilita el acceso a la base de datos mediante modelos de JavaScript. |
| **MySQL** | Sistema gestor de bases de datos relacional donde se almacena la información de las provincias. |

### Herramientas

| Herramienta | Descripción |
|-------------|-------------|
| **Git** | Sistema de control de versiones utilizado para gestionar el historial del proyecto. |
| **GitHub** | Plataforma empleada para alojar el repositorio y facilitar la colaboración y el seguimiento del desarrollo. |
| **Visual Studio Code** | Editor de código utilizado durante el desarrollo de la aplicación. |
| **Postman** | Herramienta utilizada para probar y verificar los endpoints de la API REST. |
| **pnpm** | Gestor de paquetes empleado para instalar y administrar las dependencias del proyecto. |
| **XAMPP** | Entorno local utilizado para ejecutar el servidor MySQL durante el desarrollo. |

---

### 📋 Resumen del stack tecnológico

| Capa | Tecnologías |
|------|-------------|
| **Frontend** | JavaScript (ES6+) · HTML5 · CSS3 · React · Vite · React Router · Axios · CSS Modules |
| **Backend** | Node.js · Express · Sequelize · MySQL |
| **Herramientas** | Git · GitHub · Visual Studio Code · Postman · pnpm · XAMPP |

<p align="center">
  <img src="https://skillicons.dev/icons?i=js,html,css,react,vite,nodejs,express,mysql,git,github,vscode,postman" />
</p>

## 📁 Estructura del proyecto

> Pendiente de completar.

---

## ⚙️ Instalación

> Pendiente de completar.

---

## 🔧 Configuración

> Pendiente de completar.

---

## ▶️ Ejecución del proyecto

> Pendiente de completar.

---

## 🌐 API REST

> Pendiente de completar.

---

## 📷 Capturas de pantalla

> Próximamente.

---

## 📚 Lo que he aprendido

> Pendiente de completar.

---

## 🚀 Mejoras futuras

> Pendiente de completar.

---

## 👨‍💻 Autor

**Ismael Muñoz**

Proyecto desarrollado como práctica de desarrollo Full-Stack utilizando React, Node.js, Express y MySQL.