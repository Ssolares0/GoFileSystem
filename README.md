# GoFileSystem - Marco Sebastian Solares España
# Introducción al Proyecto: Sistema de Archivos basado en Unix con Golang y React.js en AWS

Este proyecto tiene como objetivo desarrollar un sistema de archivos inspirado en la estructura y operaciones básicas de Unix, implementado en el lenguaje de programación **Golang**. El sistema será desplegado como un backend en una instancia **EC2** de Amazon Web Services (**AWS**) para garantizar un entorno escalable y confiable. Como complemento, se diseñará un **frontend** interactivo utilizando **React.js**, que permitirá a los usuarios enviar y recibir comandos de forma intuitiva. Este frontend será hospedado en un **bucket S3** de AWS configurado para servir contenido estático, garantizando una experiencia de usuario fluida y accesible desde cualquier dispositivo con conexión a Internet.

## Objetivos Específicos

1. **Desarrollo del Sistema de Archivos:**
   - Diseñar y construir un sistema de archivos que permita operaciones esenciales como:
     - Creación, lectura, actualización y eliminación (CRUD) de directorios y archivos.
     - Simulación de permisos y propiedades básicas de un sistema Unix.
     - Gestión eficiente de almacenamiento y operaciones concurrentes.

2. **Implementación del Backend en Golang:**
   - Implementar un servidor HTTP RESTful en Golang que actúe como intermediario entre el frontend y el sistema de archivos.
   - Asegurar que las operaciones sean seguras y escalables, aprovechando las capacidades de manejo de concurrencia de Golang.

3. **Despliegue en AWS EC2:**
   - Configurar una instancia EC2 para alojar el backend del sistema.
   - Asegurar la conexión segura utilizando HTTPS y configurando permisos adecuados en la instancia.

4. **Diseño del Frontend con React.js:**
   - Crear una interfaz gráfica que permita a los usuarios:
     - Enviar comandos como si estuvieran interactuando con una terminal Unix.
     - Visualizar el resultado de las operaciones de manera amigable y en tiempo real.
   - Garantizar la compatibilidad con dispositivos modernos mediante un diseño responsivo.

5. **Hospedaje del Frontend en AWS S3:**
   - Configurar un bucket S3 para almacenar y servir la aplicación de React.js como un sitio estático.
   - Asegurar el acceso global mediante la integración con **Amazon CloudFront** para mejorar el rendimiento y la distribución.

## Alcance y Beneficios

Este proyecto integra tecnologías modernas como **Golang** y **React.js** con los servicios robustos de **AWS** para ofrecer una solución que no solo es funcional, sino también escalable y de alto rendimiento. Proveerá a los usuarios una herramienta para experimentar la interacción con un sistema de archivos Unix desde cualquier ubicación, con un enfoque educativo y práctico en la computación distribuida y en la arquitectura basada en la nube.

## Tecnologías Clave

- **Backend:** Golang
- **Frontend:** React.js
- **Infraestructura:** AWS (EC2, S3, CloudFront)



