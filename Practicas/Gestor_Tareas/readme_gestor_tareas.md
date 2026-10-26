# Gestor de Tareas — TypeScript

## Descripción
Proyecto de aprendizaje para practicar TypeScript, programación y control de versiones con Git y GitHub. Consiste en construir una aplicación interactiva de terminal para administrar tareas a través de cinco fases progresivas.

## Objetivos
- Practicar variables, tipos, condicionales y ciclos.
- Organizar el código con objetos, interfaces y funciones.
- Manipular colecciones mediante métodos funcionales.
- Implementar operaciones asíncronas y manejo de errores.
- Aprender a trabajar con ramas, commits y Pull Requests.

## Tecnologías
- TypeScript y Node.js
- `ts-node` y `readline/promises`
- Git y GitHub
- Visual Studio Code

## Plan de trabajo

| Fase | Objetivos de aprendizaje y aplicación práctica | Funcionalidades desarrolladas |
|---|---|---|
| **1. Fundamentos** | Practicar variables, tipos de datos, operadores y configuración inicial del proyecto. | Configuración inicial y banner de bienvenida personalizado. |
| **2. Control de flujo** | Aprender a utilizar condicionales, ciclos y arreglos. Construir un menú interactivo. | Agregar tareas, eliminar la última tarea y listar tareas. |
| **3. Objetos y funciones** | Organizar el código mediante interfaces, objetos, identificadores y funciones reutilizables. | Representar cada tarea con un ID único, título y estado; organizar las operaciones en funciones. |
| **4. Métodos funcionales** | Manipular colecciones con `map()`, `filter()`, `find()` y `forEach()`. | Marcar tareas como completadas y filtrar las tareas pendientes y completadas. |
| **5. Asincronismo** | Comprender las promesas, `async/await` y el manejo de errores con `try/catch`. | Simular el guardado asíncrono, validar títulos vacíos y gestionar errores sin interrumpir la aplicación. |

**Durante todo el proyecto — Git y GitHub:** practicar ramas, commits, repositorios remotos y Pull Requests para gestionar los cambios de cada fase.

**Tiempo estimado:** 10 horas, aproximadamente 2 horas por fase.


## Estrategia de Git y GitHub

El proyecto se desarrollará dentro del repositorio principal `FUNVAL-eje1-fundamentos-TypeScript`, en la carpeta `Practicas/Gestor_Tareas/`. Se utilizará una rama por fase y commits para registrar los avances importantes.

- **`main`:** conservará la versión estable e integrada del repositorio.
- **Ramas de fase:** permitirán desarrollar cada etapa de la práctica de manera independiente.
- **Commits:** guardarán puntos concretos del progreso con mensajes descriptivos.
- **Pull Requests:** permitirán revisar e integrar los cambios de cada fase en `main`.

### Ramas planificadas

1. `main`
2. `fase-1-fundamentos`
3. `fase-2-control-flujo`
4. `fase-3-objetos-funciones`
5. `fase-4-metodos-funcionales`
6. `fase-5-asincronismo`

### Flujo de trabajo por fase

1. Crear la rama de la fase desde `main` actualizado.
2. Implementar y probar los requisitos dentro de `Practicas/Gestor_Tareas/`.
3. Guardar los avances mediante uno o varios commits.
4. Publicar la rama en GitHub.
5. Abrir un Pull Request, revisar los cambios y fusionarlos en `main`.
6. Sincronizar `main` antes de comenzar la siguiente fase.

Los commits seguirán la convención **Conventional Commits**, utilizando prefijos como `feat:`, `fix:` y `chore:`.

## Propósito educativo
Repetir el proyecto desde cero para comprender cada concepto, desarrollar autonomía al programar y aprender a gestionar ordenadamente la evolución de una aplicación.

**Principio de trabajo:** programar, ejecutar, comprobar, guardar los cambios y avanzar a la siguiente fase.