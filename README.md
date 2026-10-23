# FUNVAL - Ejercicios de lógica en TypeScript

Colección de ejercicios de lógica de programación desarrollados en TypeScript. El proyecto reúne soluciones con datos definidos directamente en el código y ejercicios interactivos que solicitan información al usuario desde la terminal.

## Contenido

- [`ejercicios/ejercicios_basicos_logica.ts`](./ejercicios/ejercicios_basicos_logica.ts): ejercicios básicos de lógica con ejemplos de entrada, procesamiento y salida; incluye soluciones con datos predefinidos y conceptos de TypeScript.
- [`ejercicios/ejercicios_vs_apps.ts`](./ejercicios/ejercicios_vs_apps.ts): versiones interactivas de ejercicios que solicitan datos al usuario y muestran resultados en la terminal.

Los ejercicios practican, entre otros temas, variables y tipos, operadores, concatenación y plantillas de texto, funciones, validación de datos y estructuras de control.

## Tecnologías

- TypeScript
- Node.js
- `readline/promises` para la entrada interactiva en terminal
- `ts-node` y Code Runner para ejecutar selecciones desde Visual Studio Code

## Requisitos

- Node.js y npm
- Visual Studio Code y la extensión Code Runner para ejecutar selecciones interactivas como se describe abajo

## Instalación y compilación

Instala las dependencias del proyecto:

```bash
npm install
```

Compila los archivos TypeScript incluidos en `ejercicios/`:

```bash
npm run build
```

La salida compilada se genera en `dist/`.

## Cómo ejecutar los ejercicios

### Ejecutar un archivo compilado

Después de compilar, puedes ejecutar el archivo de ejercicios básicos con Node.js:

```bash
node dist/ejercicios/ejercicios_basicos_logica.js
```

### Ejecutar una selección interactiva en Visual Studio Code

1. Abre `ejercicios/ejercicios_vs_apps.ts`.
2. Selecciona el bloque completo del ejercicio que quieras ejecutar.
3. Usa **Run Code** de Code Runner y responde a las preguntas en la terminal.

La configuración del proyecto usa `ts-node` para ejecutar TypeScript con Code Runner. Ejecutar el bloque completo permite que las entradas interactivas mediante `readline/promises` funcionen en la terminal.

## Estructura del proyecto

```text
FUNVAL-eje1-typescript/
├── .vscode/
├── ejercicios/
│   ├── ejercicios_basicos_logica.ts
│   └── ejercicios_vs_apps.ts
├── dist/                   # Salida generada al compilar
├── node_modules/            # Dependencias instaladas
├── package.json
├── package-lock.json
└── tsconfig.json
```

## Propósito

Este proyecto sirve como práctica y portafolio de fundamentos de programación y TypeScript. Los ejemplos permiten comparar soluciones con valores definidos en el código y flujos interactivos que reciben y validan respuestas del usuario.
