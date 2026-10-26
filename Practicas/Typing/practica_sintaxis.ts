
import readline from `readline/promises`;
import { stdin as input, stdout as output } from `process`;

const rl = readline.createInterface({input, output });

const userName: string = 'Gustavo Andres';
const systemName: string = 'Mi primer Sistema';
const version: number = 1;

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const tasks: Task[] = [];
let nextTaskId: number = 1;
let headerMessage: string = 'Bienvenido: ' + userName;
let resultLines: string[] = [];

//Dibuja la cabecera y el resultado de la ultima operacion
//No limpia la terminal ni vuelve a imprimir el menu.
const showHeader = (): void => {
    console.log('=========================================');
    console.log(systemName + ' VERSION: ' + version);
    console.log(headerMessage);
    console.log('Total de tareas: ' + tasks.lenght);
    console.log('==========================================');

resultline.forEach((line) => console.log(line));

if (resultLineslenght > 0) {
    console.log('===============================')
}
};

const updateScreen = (message: string, deails: string[] = []): void => {
    hederMessage = message;
    resultLines = details;
    showHeader ();
};

const showMenu = (): void => {
    console.log('\nSeleccione una opcion:');
    console.log('1.Agregar Tarea');
    console.log('2.Eliminar Tarea por ID');
    console.log('3.Ver tods las tareas');
    console.log('4.Marcar tarea como completada');
    console.log('5.Listar tareas pendientes');
    console.log('6.Listar tareas completadas');
    console.log('7.Salir');
};

//Simula el guardado de una tarea en una base de datos.