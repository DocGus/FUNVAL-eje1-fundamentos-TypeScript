/*
---------------------------------------------EJERCICIO 1: NOMBRE Y EDAD

Objetivo
    Pedir el nombre y la edad del usuario, crear un ticket con esos datos
    y mostrar un saludo junto con el ticket.

Elementos del ejercicio

    1. Entradas (Input)
       Se solicitan dos datos al usuario:
       - nombre: respuesta a «¿Cuál es tu nombre?»
       - edad: respuesta a «¿Cuál es tu edad?»

    2. Proceso
       Se crea la variable ticket combinando el nombre, un espacio y la edad:
       ticket = nombre + " " + edad
       En el código, esta combinación se escribe con una plantilla de texto:
       `${nombre} ${edad}`.

    3. Salida (Output)
       Se muestra un mensaje que incluye el nombre y el ticket:
       «Hola [nombre] tu Ticket es: [ticket]»

Flujo del programa
    Input (nombre y edad) → Proceso (crear ticket) → Output (mostrar saludo y ticket)

Lógica y conceptos
    - No hay condiciones ni decisiones; el flujo siempre sigue los mismos pasos.
    - La edad se recibe como texto y se incorpora al ticket tal como se escribió.
    - Se practica la entrada de datos, la creación de una variable y la interpolación
      de texto mediante una plantilla (template literal).
*/

//-------------------------------------RESPUESTAS 1

        //VERSION CLASICA/TRADICIONAL
        //Utiliza variables primitivas (string, number), concatenación tradicional y un flujo lineal básico.
        // Declaración de variables con tipos explícitos

let nombreUsuario: string = "Carlos";
let edadUsuario: number = 25;
let ticket: string = nombreUsuario + " " + edadUsuario; // Construcción de la variable ticket usando concatenación tradicional
console.log("Hola " + nombreUsuario + " tu Ticket es: " + ticket); // Salida en consola


        //VERSION MODERNA (Tipos Avanzados y Funciones Flecha)
        //Utiliza una interface para estructurar los datos, tipado estricto, funciones flecha y template literals (``).
        //Definición de un contrato con interface

interface Usuario {
  nombre: string;
  edad: number;
}
const generarTicket = (usuario: Usuario): string => { // Función flecha moderna para generar el ticket y saludo
  const ticket: string = `${usuario.nombre} ${usuario.edad}`;
  return `Hola ${usuario.nombre} tu Ticket es: ${ticket}`;
};
const persona: Usuario = { nombre: "Carlos", edad: 25 }; // Ejecución
console.log(generarTicket(persona));










/*
---------------------------------------------EJERCICIO 2: BEBIDA

Objetivo
    Pedir el nombre del cliente y su bebida favorita, y mostrar un mensaje
    indicando que pronto tendrá la bebida que eligió.

Elementos del ejercicio

    1. Entradas (Input)
       Se solicitan dos datos al cliente:
       - nombre: respuesta a «¿Cuál es tu nombre?»
       - bebida: respuesta a «¿Qué bebida deseas?»

    2. Proceso
       Se construye un mensaje concatenando textos fijos con el nombre y la bebida:
       mensaje = "Hola " + nombre + " en un momento tenemos tu " + bebida
       Se utiliza el operador + para unir los textos y las variables.

    3. Salida (Output)
       Se muestra el mensaje con el nombre del cliente y la bebida que eligió:
       «Hola [nombre] en un momento tenemos tu [bebida]»

Flujo del programa
    Input (nombre) → Input (bebida) → Proceso (concatenar los datos) → Output (mostrar mensaje)

Lógica y conceptos
    - No hay condiciones ni decisiones; el flujo siempre sigue los mismos pasos.
    - Se practica la entrada de datos y la concatenación de texto mediante el operador +.
    - El nombre y la bebida se incorporan al mensaje tal como fueron ingresados.
*/

//-------------------------------------RESPUESTAS 2

        //VERSION CLASICA/TRADICIONAL
        //Utiliza variables primitivas, concatenación tradicional y un flujo lineal básico.
        //Declaración de variables con tipos explícitos

let nombreCliente: string = "Ana";
let bebidaElegida: string = "café"; 
let mensajeBebida: string = "Hola " + nombreCliente + " en un momento tenemos tu " + bebidaElegida; // Construcción del mensaje usando concatenación tradicional
console.log(mensajeBebida); // Salida en consola


        //VERSION MODERNA (Tipos Avanzados y Funciones Flecha)
        //Utiliza una interface para estructurar los datos, tipado estricto, funciones flecha y template literals (``).
        // Definición de un contrato con interface

interface PedidoBebida {
  nombre: string;
  bebida: string;
}
const generarMensajeBebida = (pedido: PedidoBebida): string => { // Función flecha moderna para generar el mensaje
return `Hola ${pedido.nombre} en un momento tenemos tu ${pedido.bebida}`;
};
const pedido: PedidoBebida = { nombre: "Ana", bebida: "café" }; // Ejecución
console.log(generarMensajeBebida(pedido));










/*
---------------------------------------------EJERCICIO 3: CONCATENAR CANTIDADES

Objetivo
    Solicitar dos cantidades al usuario y mostrar ambas unidas como texto.

Elementos del ejercicio

    1. Entradas (Input)
       Se solicitan dos datos al usuario:
       - cant1: respuesta a «Ingresa la primera cantidad.»
       - cant2: respuesta a «Ingresa la segunda cantidad.»

    2. Proceso
       Se concatenan los dos datos utilizando el operador +:
       resultado = cant1 + cant2
       Como las cantidades se manejan como texto, el operador + las une
       en lugar de realizar una suma matemática.

    3. Salida (Output)
       Se muestra la palabra «Concatenación: » seguida de los dos datos unidos:
       «Concatenación: [cant1][cant2]»

Flujo del programa
    Input (cant1) → Input (cant2) → Proceso (concatenar los textos) → Output (mostrar resultado)

Lógica y conceptos
    - No hay condiciones ni decisiones; el flujo siempre sigue los mismos pasos.
    - Se practica la entrada de datos y la concatenación mediante el operador +.
    - Los datos se ingresan como texto; por eso no se calcula una suma matemática.
*/

//-------------------------------------RESPUESTAS 3

        //VERSION CLASICA/TRADICIONAL
        //Utiliza variables de tipo string, concatenación tradicional y un flujo lineal básico.
        //Declaración de variables con tipos explícitos

let cant1: string = "2";
let cant2: string = "2";
let resultadoConcatenacion: string = cant1 + cant2; // Concatenación de las dos cantidades como texto
console.log("Concatenación: " + resultadoConcatenacion); // Salida en consola


        //VERSION MODERNA (Tipos Avanzados y Funciones Flecha)
        //Utiliza una interface para estructurar los datos, tipado estricto, funciones flecha y template literals (``).
        //Definición de un contrato con interface

interface Cantidades {
  cant1: string;
  cant2: string;
}
const concatenarCantidades = (cantidades: Cantidades): string => { // Función flecha moderna para concatenar las cantidades
  const resultado: string = cantidades.cant1 + cantidades.cant2;
  return `Concatenación: ${resultado}`;
};
const cantidades: Cantidades = { cant1: "2", cant2: "2" }; // Ejecución
console.log(concatenarCantidades(cantidades));










/*
---------------------------------------------EJERCICIO 4: SALUDO Y NOMBRE

Objetivo
    Solicitar el nombre del usuario, construir un mensaje de saludo
    y mostrarlo.

Elementos del ejercicio

    1. Entrada (Input)
       Se solicita un dato al usuario:
       - nombre: respuesta a «¿Cuál es tu nombre?»

    2. Proceso
       Se construye la variable mensaje concatenando un saludo con el nombre:
       mensaje = "Hola " + nombre + " mucho gusto"
       Se utiliza el operador + para unir los textos y la variable.

    3. Salida (Output)
       Se muestra el contenido de la variable mensaje:
       PUT mensaje

Flujo del programa
    Input (nombre) → Proceso (construir el mensaje) → Output (mostrar el saludo)

Lógica y conceptos
    - No hay condiciones ni decisiones; el flujo siempre sigue los mismos pasos.
    - Se practica la entrada de datos, la concatenación con el operador +,
      la asignación a una variable y la salida del resultado.
*/

//-------------------------------------RESPUESTAS 4

        //VERSION CLASICA/TRADICIONAL
        //Utiliza una variable de tipo string, concatenación tradicional y un flujo lineal básico.
        //Declaración de la variable con tipo explícito

let nombreSaludo: string = "Luis";
let mensajeSaludo: string = "Hola " + nombreSaludo + " mucho gusto"; // Construcción del mensaje usando concatenación tradicional
console.log(mensajeSaludo); // Salida en consola


        //VERSION MODERNA (Tipos Avanzados y Funciones Flecha)
        //Utiliza una interface para estructurar los datos, tipado estricto, una función flecha y un template literal.
        //Definición de un contrato con interface

interface DatosSaludo {
  nombre: string;
}
const generarSaludo = (datos: DatosSaludo): string => { // Función flecha moderna para generar el saludo
  return `Hola ${datos.nombre} mucho gusto`;
};
const personaSaludo: DatosSaludo = { nombre: "Luis" }; // Ejecución
console.log(generarSaludo(personaSaludo));










/*
---------------------------------------------EJERCICIO 5: DESCUENTO

Objetivo
    Solicitar el precio de un producto y la cantidad que se desea comprar,
    calcular el precio total y aplicar un descuento del 10%.

Elementos del ejercicio

    1. Entradas (Input)
       Se solicitan dos datos al usuario:
       - precio: respuesta a «¿Cuál es el precio de este producto?»
       - cantidad: respuesta a «¿Cuál es la cantidad de productos que deseas?»

    2. Proceso
       Primero se calcula el precio total:
       total = precio * cantidad
       Después se calcula el precio con el descuento del 10%:
       precioConDescuento = total * 0.90
       El factor 0.90 representa el 90% del total que se paga después del descuento.

    3. Salida (Output)
       Se muestran el precio total y el precio después del descuento:
       «El precio total es: [total] y el precio con 10% de descuento es: [precioConDescuento]»

Flujo del programa
    Input (precio) → Input (cantidad) → Proceso (calcular total y descuento) → Output (mostrar precios)

Lógica y conceptos
    - No hay condiciones ni decisiones; el flujo siempre sigue los mismos pasos.
    - Se practican la entrada de datos, la asignación de variables y la multiplicación.
    - El descuento se calcula obteniendo el 90% del precio total.
*/

//-------------------------------------RESPUESTAS 5

        //VERSION CLASICA/TRADICIONAL
        //Utiliza variables numéricas, operaciones aritméticas y un flujo lineal básico.
        //Declaración de variables con tipos explícitos

let precioProducto: number = 100;
let cantidadProductos: number = 2;
let totalProductos: number = precioProducto * cantidadProductos; // Cálculo del precio total
let precioConDescuento: number = totalProductos * 0.90; // Aplicación del descuento del 10%
console.log("El precio total es: " + totalProductos + " y el precio con 10% de descuento es: " + precioConDescuento); // Salida en consola


        //VERSION MODERNA (Tipos Avanzados y Funciones Flecha)
        //Utiliza una interface para estructurar los datos, tipado estricto, una función flecha y template literals (``).
        //Definición de un contrato con interface

interface DatosCompra {
  precio: number;
  cantidad: number;
}
const calcularPrecioCompra = (compra: DatosCompra): string => { // Función flecha moderna para calcular el total y el descuento
  const total: number = compra.precio * compra.cantidad;
  const precioFinal: number = total * 0.90;
  return `El precio total es: ${total} y el precio con 10% de descuento es: ${precioFinal}`;
};
const compra: DatosCompra = { precio: 100, cantidad: 2 }; // Ejecución
console.log(calcularPrecioCompra(compra));










/*
---------------------------------------------EJERCICIO 6: COSTO DEL ESTACIONAMIENTO

Objetivo
    Calcular cuánto debe pagar un cliente por estacionar su automóvil,
    considerando el número de horas que permanecerá en el estacionamiento.

Elementos del ejercicio

    1. Entrada (Input)
       Se solicita un dato al usuario:
       - tiempo: respuesta a «¿Cuántas horas te quedarás?»

    2. Proceso
       El estacionamiento cobra $20 por cada hora. Se multiplica la tarifa
       por el tiempo de permanencia:
       costo = 20 * tiempo

    3. Salida (Output)
       Se muestra el costo que debe pagar el cliente:
       «El costo que debes pagar es: [costo]»

Flujo del programa
    Input (tiempo) → Proceso (multiplicar tarifa por horas) → Output (mostrar costo)

Lógica y conceptos
    - No hay condiciones ni decisiones; el flujo siempre sigue los mismos pasos.
    - Se practica la entrada de datos, la asignación de una variable
      y la multiplicación.
    - La tarifa fija es de $20 por hora.
*/

//-------------------------------------RESPUESTAS 6

        //VERSION CLASICA/TRADICIONAL
        //Utiliza variables numéricas, multiplicación y un flujo lineal básico.
        //Declaración de variables con tipos explícitos

let tiempoEstacionamiento: number = 3;
let costoEstacionamiento: number = 20 * tiempoEstacionamiento; // Cálculo del costo según las horas
console.log("El costo que debes pagar es: " + costoEstacionamiento); // Salida en consola


        //VERSION MODERNA (Tipos Avanzados y Funciones Flecha)
        //Utiliza una interface para estructurar los datos, tipado estricto, una función flecha y un template literal.
        //Definición de un contrato con interface

interface DatosEstacionamiento {
  tiempo: number;
}
const calcularCostoEstacionamiento = (datos: DatosEstacionamiento): string => { // Función flecha moderna para calcular el costo
  const costo: number = 20 * datos.tiempo;
  return `El costo que debes pagar es: ${costo}`;
};
const datosEstacionamiento: DatosEstacionamiento = { tiempo: 3 }; // Ejecución
console.log(calcularCostoEstacionamiento(datosEstacionamiento));










/*
---------------------------------------------EJERCICIO 7: REPARTO DE PIZZA

Objetivo
    Repartir las rebanadas de pizza equitativamente entre un grupo de amigos
    y calcular cuántas rebanadas sobran para el restaurante, sin utilizar
    condicionales.

Elementos del ejercicio

    1. Entradas (Input)
       Se solicitan dos datos al usuario:
       - pizza: respuesta a «¿Cuántas rebanadas tiene la pizza?»
       - amigos: respuesta a «¿Cuántos amigos son?»

    2. Proceso
       Se calcula cuántas rebanadas enteras recibe cada amigo usando floor():
       rebanadasPorAmigo = floor(pizza / amigos)
       En TypeScript, se utiliza Math.floor() para redondear hacia abajo.

       Se calcula cuántas rebanadas sobran usando mod:
       sobrantes = pizza mod amigos
       En TypeScript, el operador % obtiene el residuo de la división.

    3. Salida (Output)
       Se muestran las rebanadas que recibe cada amigo y las que sobran:
       «A cada amigo le tocan [rebanadasPorAmigo] rebanadas»
       «Al restaurante le sobran [sobrantes] rebanadas»

Flujo del programa
    Input (pizza) → Input (amigos) → Proceso (división entera y residuo) → Output (mostrar resultados)

Lógica y conceptos
    - No se utilizan condiciones; el cálculo se resuelve con operaciones matemáticas.
    - Se practican la división, Math.floor() para obtener una cantidad entera
      y el operador % para calcular el residuo.
    - Ejemplos:
      - 10 rebanadas entre 3 amigos: 3 para cada amigo y 1 sobrante.
      - 15 rebanadas entre 5 amigos: 3 para cada amigo y 0 sobrantes.
      - 5 rebanadas entre 6 amigos: 0 para cada amigo y 5 sobrantes.
*/

//-------------------------------------RESPUESTAS 7

        //VERSION CLASICA/TRADICIONAL
        //Utiliza variables numéricas, Math.floor(), el operador de residuo % y un flujo lineal.
        //Declaración de variables con tipos explícitos

let rebanadasPizza: number = 10;
let cantidadAmigos: number = 3;
let rebanadasPorAmigo: number = Math.floor(rebanadasPizza / cantidadAmigos); // División entera de las rebanadas
let rebanadasSobrantes: number = rebanadasPizza % cantidadAmigos; // Residuo que sobra
console.log("A cada amigo le tocan " + rebanadasPorAmigo + " rebanadas");
console.log("Al restaurante le sobran " + rebanadasSobrantes + " rebanadas");


        //VERSION MODERNA (Tipos Avanzados y Funciones Flecha)
        //Utiliza una interface, tipado estricto, una función flecha y template literals (``).
        //Definición de un contrato con interface

interface DatosPizza {
  pizza: number;
  amigos: number;
}
const repartirPizza = (datos: DatosPizza): string[] => { // Función flecha moderna para calcular el reparto
  const porAmigo: number = Math.floor(datos.pizza / datos.amigos);
  const sobrantes: number = datos.pizza % datos.amigos;
  return [
    `A cada amigo le tocan ${porAmigo} rebanadas`,
    `Al restaurante le sobran ${sobrantes} rebanadas`
  ];
};
const datosPizza: DatosPizza = { pizza: 10, amigos: 3 }; // Ejecución
repartirPizza(datosPizza).forEach((mensaje) => console.log(mensaje));
