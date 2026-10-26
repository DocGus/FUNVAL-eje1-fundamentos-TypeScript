# Practice Project: Task Manager — TypeScript

## Description

A learning project within the `FUNVAL-eje1-fundamentos-TypeScript` repository, located in `Practicas/Gestor_Tareas/`.

The goal is to progressively build an interactive terminal application for managing tasks, practice TypeScript, and learn collaborative development workflows using Git and GitHub.

## Technologies

- TypeScript and Node.js
- `ts-node` and `readline/promises`
- Git and GitHub
- Visual Studio Code

## Work Plan

| Phase | Learning Objectives and Practical Application | Features Developed |
|---|---|---|
| **1. Fundamentals** | Practice variables, data types, operators, and initial project setup. | Initial configuration and a personalized welcome banner. |
| **2. Control Flow** | Learn to use conditionals, loops, and arrays to manage interactive options. | Add tasks, remove the last task, and list tasks. |
| **3. Objects and Functions** | Organize code using interfaces, objects, identifiers, and reusable functions. | Represent each task with a unique ID, title, and status. |
| **4. Functional Methods** | Manipulate collections using `map()`, `filter()`, `find()`, and `forEach()`. | Mark tasks as completed and view pending and completed tasks. |
| **5. Asynchronous Programming** | Understand promises, `async/await`, and error handling with `try/catch`. | Simulate asynchronous saving, validate empty titles, and handle errors. |

**Estimated time:** 10 hours, approximately 2 hours per phase.

## Final Features

- Add and list tasks with unique identifiers.
- Mark tasks as completed.
- Filter pending and completed tasks.
- Simulate asynchronous saving.
- Validate input and handle errors.
- Delete tasks by ID as an extra challenge.

## Extra Challenge

Modify the delete function to select and remove a task by its ID, regardless of its position in the array.

## Git and GitHub Strategy

The project will be developed within the main `FUNVAL-eje1-fundamentos-TypeScript` repository. Each phase will have its own branch, and commits will record significant progress.

- **`main`:** will contain the stable, integrated version of the repository.
- **Phase branches:** will allow each stage to be developed independently.
- **Commits:** will record specific progress using descriptive messages.
- **`main-seguridad`:** will serve as an intermediate branch to review, test, and approve changes before integrating them into `main`.
- **Pull Requests:** will be used to review changes and practice collaboration between two GitHub accounts.

### Planned Branches

1. `main`
2. `main-seguridad`
3. `pro-gestor-fase-1-fundamentos`
4. `pro-gestor-fase-2-control-flujo`
5. `pro-gestor-fase-3-objetos-funciones`
6. `pro-gestor-fase-4-metodos-funcionales`
7. `pro-gestor-fase-5-asincronismo`

### Workflow for Each Phase

1. Create the phase branch from the updated `main` branch.
2. Implement and test the requirements inside `Practicas/Gestor_Tareas/`.
3. Save progress through one or more commits.
4. Push the phase branch to GitHub.
5. From the secondary account, open a Pull Request targeting `main-seguridad`.
6. From the primary account, review the changes, run tests, and approve the Pull Request.
7. Merge the phase branch into `main-seguridad`.
8. Open a second Pull Request from `main-seguridad` to `main`.
9. Review and merge the approved changes into `main`.
10. Synchronize the branches before starting the next phase.

The `main-seguridad` branch will act as a checkpoint before final integration. To make this workflow mandatory, the appropriate GitHub branch protection rules must be configured.

### Commit Convention

The project will follow **Conventional Commits** to maintain a clear and consistent history:

- `feat:` new features.
- `fix:` bug fixes.
- `chore:` maintenance tasks.

Before each commit and Pull Request, review the modified files to avoid including changes unrelated to this practice project.

## Learning Purpose

Rebuild the project from scratch to understand each concept, develop programming independence, and practice both developer and reviewer roles using two GitHub accounts.

**Working method:** implement, run, verify, record changes, review, and move on to the next phase.