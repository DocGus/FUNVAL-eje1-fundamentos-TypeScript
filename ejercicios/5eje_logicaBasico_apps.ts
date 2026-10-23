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
    - La edad se solicita como número y se incorpora al ticket.
    - Se practica la entrada de datos, la creación de una variable y la interpolación
      de texto mediante una plantilla (template literal).
*/

//-------------------------------------RESPUESTAS 1
// SOLUCIÓN INTERACTIVA ÚNICA

if (process.argv[1]?.endsWith("tempCodeRunnerFile.ts")) {
  void (async (): Promise<void> => {
    const { createInterface } = await import("node:readline/promises");

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    interface Usuario {
      nombre: string;
      edad: number;
    }

    async function preguntarTexto(
      pregunta: string
    ): Promise<string> {
      while (true) {
        const respuesta = (await rl.question(pregunta)).trim();

        if (respuesta.length > 0) {
          return respuesta;
        }

        console.log("La respuesta no puede estar vacía.");
      }
    }

    async function preguntarNumero(
      pregunta: string,
      validar: (valor: number) => boolean,
      mensajeError: string
    ): Promise<number> {
      while (true) {
        const respuesta = (await rl.question(pregunta)).trim();

        if (respuesta.length === 0) {
          console.log("La respuesta no puede estar vacía.");
          continue;
        }

        const valor = Number(respuesta);

        if (!Number.isFinite(valor)) {
          console.log("Ingresa un valor numérico válido.");
          continue;
        }

        if (!validar(valor)) {
          console.log(mensajeError);
          continue;
        }

        return valor;
      }
    }

    try {
      const nombreUsuario = await preguntarTexto(
        "¿Cuál es tu nombre? "
      );

      const edadUsuario = await preguntarNumero(
        "¿Cuál es tu edad? ",
        valor => Number.isInteger(valor) && valor >= 0,
        "Ingresa una edad entera igual o mayor que cero."
      );

      const persona: Usuario = {
        nombre: nombreUsuario,
        edad: edadUsuario
      };

      const generarTicket = (usuario: Usuario): string => {
        const ticket = `${usuario.nombre} ${usuario.edad}`;

        return `Hola ${usuario.nombre} tu Ticket es: ${ticket}`;
      };

      console.log(generarTicket(persona));

    } finally {
      rl.close();
      process.stdin.pause();
    }
  })().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}










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
//-------------------------------------SOLUCIÓN INTERACTIVA ÚNICA

if (process.argv[1]?.endsWith("tempCodeRunnerFile.ts")) {
  void (async (): Promise<void> => {
    const { createInterface } = await import("node:readline/promises");

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    interface PedidoBebida {
      nombre: string;
      bebida: string;
    }

    async function preguntarTexto(
      pregunta: string
    ): Promise<string> {
      while (true) {
        const respuesta = (await rl.question(pregunta)).trim();

        if (respuesta.length > 0) {
          return respuesta;
        }

        console.log("La respuesta no puede estar vacía.");
      }
    }

    try {
      const nombreCliente = await preguntarTexto(
        "¿Cuál es tu nombre? "
      );

      const bebidaElegida = await preguntarTexto(
        "¿Qué bebida deseas? "
      );

      const pedido: PedidoBebida = {
        nombre: nombreCliente,
        bebida: bebidaElegida
      };

      const generarMensajeBebida = (
        pedido: PedidoBebida
      ): string => {
        return `Hola ${pedido.nombre} en un momento tenemos tu ${pedido.bebida}`;
      };

      console.log(generarMensajeBebida(pedido));

    } finally {
      rl.close();
      process.stdin.pause();
    }
  })().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}










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
//-------------------------------------SOLUCIÓN INTERACTIVA ÚNICA

if (process.argv[1]?.endsWith("tempCodeRunnerFile.ts")) {
  void (async (): Promise<void> => {
    const { createInterface } = await import("node:readline/promises");

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    interface Cantidades {
      cant1: string;
      cant2: string;
    }

    async function preguntarTexto(
      pregunta: string
    ): Promise<string> {
      while (true) {
        const respuesta = (await rl.question(pregunta)).trim();

        if (respuesta.length > 0) {
          return respuesta;
        }

        console.log("La respuesta no puede estar vacía.");
      }
    }

    try {
      const cant1 = await preguntarTexto(
        "Ingresa la primera cantidad: "
      );

      const cant2 = await preguntarTexto(
        "Ingresa la segunda cantidad: "
      );

      const cantidades: Cantidades = {
        cant1,
        cant2
      };

      const concatenarCantidades = (
        cantidades: Cantidades
      ): string => {
        const resultado: string =
          cantidades.cant1 + cantidades.cant2;

        return `Concatenación: ${resultado}`;
      };

      console.log(concatenarCantidades(cantidades));

    } finally {
      rl.close();
      process.stdin.pause();
    }
  })().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}










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
//-------------------------------------SOLUCIÓN INTERACTIVA ÚNICA

if (process.argv[1]?.endsWith("tempCodeRunnerFile.ts")) {
  void (async (): Promise<void> => {
    const { createInterface } = await import("node:readline/promises");

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    interface DatosSaludo {
      nombre: string;
    }

    async function preguntarTexto(
      pregunta: string
    ): Promise<string> {
      while (true) {
        const respuesta = (await rl.question(pregunta)).trim();

        if (respuesta.length > 0) {
          return respuesta;
        }

        console.log("La respuesta no puede estar vacía.");
      }
    }

    try {
      const nombreSaludo = await preguntarTexto(
        "¿Cuál es tu nombre? "
      );

      const personaSaludo: DatosSaludo = {
        nombre: nombreSaludo
      };

      const generarSaludo = (
        datos: DatosSaludo
      ): string => {
        return `Hola ${datos.nombre} mucho gusto`;
      };

      console.log(generarSaludo(personaSaludo));

    } finally {
      rl.close();
      process.stdin.pause();
    }
  })().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}










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

//-------------------------------------SOLUCIÓN INTERACTIVA ÚNICA

if (process.argv[1]?.endsWith("tempCodeRunnerFile.ts")) {
  void (async (): Promise<void> => {
    const { createInterface } = await import("node:readline/promises");

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    interface DatosCompra {
      precio: number;
      cantidad: number;
    }

    async function preguntarNumero(
      pregunta: string,
      validar: (valor: number) => boolean,
      mensajeError: string
    ): Promise<number> {
      while (true) {
        const respuesta = (await rl.question(pregunta)).trim();

        if (respuesta.length === 0) {
          console.log("La respuesta no puede estar vacía.");
          continue;
        }

        const valor = Number(respuesta);

        if (!Number.isFinite(valor)) {
          console.log("Ingresa un valor numérico válido.");
          continue;
        }

        if (!validar(valor)) {
          console.log(mensajeError);
          continue;
        }

        return valor;
      }
    }

    try {
      const precioProducto = await preguntarNumero(
        "¿Cuál es el precio de este producto? ",
        valor => valor >= 0,
        "El precio no puede ser negativo."
      );

      const cantidadProductos = await preguntarNumero(
        "¿Cuál es la cantidad de productos que deseas? ",
        valor => Number.isInteger(valor) && valor > 0,
        "Ingresa una cantidad entera mayor que cero."
      );

      const compra: DatosCompra = {
        precio: precioProducto,
        cantidad: cantidadProductos
      };

      const calcularPrecioCompra = (
        compra: DatosCompra
      ): string => {
        const total = compra.precio * compra.cantidad;
        const precioFinal = total * 0.90;

        return `El precio total es: ${total} y el precio con 10% de descuento es: ${precioFinal}`;
      };

      console.log(calcularPrecioCompra(compra));

    } finally {
      rl.close();
      process.stdin.pause();
    }
  })().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}










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

//-------------------------------------SOLUCIÓN INTERACTIVA ÚNICA

if (process.argv[1]?.endsWith("tempCodeRunnerFile.ts")) {
  void (async (): Promise<void> => {
    const { createInterface } = await import("node:readline/promises");

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    interface DatosEstacionamiento {
      tiempo: number;
    }

    async function preguntarNumero(
      pregunta: string,
      validar: (valor: number) => boolean,
      mensajeError: string
    ): Promise<number> {
      while (true) {
        const respuesta = (await rl.question(pregunta)).trim();

        if (respuesta.length === 0) {
          console.log("La respuesta no puede estar vacía.");
          continue;
        }

        const valor = Number(respuesta);

        if (!Number.isFinite(valor)) {
          console.log("Ingresa un valor numérico válido.");
          continue;
        }

        if (!validar(valor)) {
          console.log(mensajeError);
          continue;
        }

        return valor;
      }
    }

    try {
      const tiempoEstacionamiento = await preguntarNumero(
        "¿Cuántas horas te quedarás? ",
        valor => valor > 0,
        "Ingresa un número de horas mayor que cero."
      );

      const datosEstacionamiento: DatosEstacionamiento = {
        tiempo: tiempoEstacionamiento
      };

      const calcularCostoEstacionamiento = (
        datos: DatosEstacionamiento
      ): string => {
        const costo = 20 * datos.tiempo;

        return `El costo que debes pagar es: $${costo.toFixed(2)}`;
      };

      console.log(
        calcularCostoEstacionamiento(datosEstacionamiento)
      );

    } finally {
      rl.close();
      process.stdin.pause();
    }
  })().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}










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

//-------------------------------------SOLUCIÓN INTERACTIVA ÚNICA

if (process.argv[1]?.endsWith("tempCodeRunnerFile.ts")) {
  void (async (): Promise<void> => {
    const { createInterface } = await import("node:readline/promises");

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    interface DatosPizza {
      pizza: number;
      amigos: number;
    }

    async function preguntarNumero(
      pregunta: string,
      validar: (valor: number) => boolean,
      mensajeError: string
    ): Promise<number> {
      while (true) {
        const respuesta = (await rl.question(pregunta)).trim();

        if (respuesta.length === 0) {
          console.log("La respuesta no puede estar vacía.");
          continue;
        }

        const valor = Number(respuesta);

        if (!Number.isFinite(valor)) {
          console.log("Ingresa un valor numérico válido.");
          continue;
        }

        if (!validar(valor)) {
          console.log(mensajeError);
          continue;
        }

        return valor;
      }
    }

    try {
      const rebanadasPizza = await preguntarNumero(
        "¿Cuántas rebanadas tiene la pizza? ",
        valor => Number.isInteger(valor) && valor >= 0,
        "Ingresa una cantidad entera de rebanadas igual o mayor que cero."
      );

      const cantidadAmigos = await preguntarNumero(
        "¿Cuántos amigos son? ",
        valor => Number.isInteger(valor) && valor > 0,
        "Ingresa una cantidad entera de amigos mayor que cero."
      );

      const datosPizza: DatosPizza = {
        pizza: rebanadasPizza,
        amigos: cantidadAmigos
      };

      const repartirPizza = (datos: DatosPizza): string[] => {
        const porAmigo = Math.floor(
          datos.pizza / datos.amigos
        );

        const sobrantes = datos.pizza % datos.amigos;

        return [
          `A cada amigo le tocan ${porAmigo} rebanadas`,
          `Al restaurante le sobran ${sobrantes} rebanadas`
        ];
      };

      repartirPizza(datosPizza).forEach(mensaje => {
        console.log(mensaje);
      });

    } finally {
      rl.close();
      process.stdin.pause();
    }
  })().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}









/*
---------------------------------------------EJERCICIO 8: TOTAL Y CAMBIO

Objetivo
    Calcular el total de una compra de arroz y cuánto cambio debe recibir
    el cliente.

Elementos del ejercicio

    1. Entradas (Input)
       Se solicitan dos datos al usuario:
       - kilos: respuesta a «¿Cuántos kilos de arroz desea?»
       - pago: respuesta a «¿Con cuánto dinero paga el cliente?»

    2. Proceso
       Cada kilo de arroz cuesta $20. Primero se calcula el total:
       total = kilos * 20
       Después se calcula el cambio:
       cambio = pago - total

    3. Salida (Output)
       Se muestran el total de la compra y el cambio:
       «El total a pagar es: $[total]»
       «El cambio es: $[cambio]»

Flujo del programa
    Input (kilos) → Input (pago) → Proceso (calcular total y cambio) → Output (mostrar resultados)

Lógica y conceptos
    - No hay condiciones ni decisiones; el flujo sigue los mismos pasos.
    - Se practican la asignación de variables, la multiplicación y la resta.
    - El precio por kilo es fijo: $20.
    - Ejemplo: 3 kilos cuestan $60; si el cliente paga $100, recibe $40 de cambio.

Estructura lógica
    Inicio
      ↓
    Ingresar kilos de arroz y pago
      ↓
    Calcular total = kilos × 20
      ↓
    Calcular cambio = pago - total
      ↓
    Mostrar total y cambio
      ↓
    Fin
*/

//-------------------------------------RESPUESTAS 8

//-------------------------------------SOLUCIÓN INTERACTIVA ÚNICA

if (process.argv[1]?.endsWith("tempCodeRunnerFile.ts")) {
  void (async (): Promise<void> => {
    const { createInterface } = await import("node:readline/promises");

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    interface DatosCompraArroz {
      kilos: number;
      pago: number;
    }

    async function preguntarNumero(
      pregunta: string,
      validar: (valor: number) => boolean,
      mensajeError: string
    ): Promise<number> {
      while (true) {
        const respuesta = (await rl.question(pregunta)).trim();

        if (respuesta.length === 0) {
          console.log("La respuesta no puede estar vacía.");
          continue;
        }

        const valor = Number(respuesta);

        if (!Number.isFinite(valor)) {
          console.log("Ingresa un valor numérico válido.");
          continue;
        }

        if (!validar(valor)) {
          console.log(mensajeError);
          continue;
        }

        return valor;
      }
    }

    try {
      const kilosArroz = await preguntarNumero(
        "¿Cuántos kilos de arroz desea? ",
        valor => valor > 0,
        "Ingresa una cantidad de kilos mayor que cero."
      );

      const totalCompra = kilosArroz * 20;

      const dineroEntregado = await preguntarNumero(
        "¿Con cuánto dinero paga el cliente? ",
        valor => valor >= totalCompra,
        `El pago debe ser igual o mayor al total de $${totalCompra.toFixed(2)}.`
      );

      const compraArroz: DatosCompraArroz = {
        kilos: kilosArroz,
        pago: dineroEntregado
      };

      const calcularTotalYCambio = (
        compra: DatosCompraArroz
      ): string[] => {
        const total = compra.kilos * 20;
        const cambio = compra.pago - total;

        return [
          `El total a pagar es: $${total.toFixed(2)}`,
          `El cambio es: $${cambio.toFixed(2)}`
        ];
      };

      calcularTotalYCambio(compraArroz).forEach(mensaje => {
        console.log(mensaje);
      });

    } finally {
      rl.close();
      process.stdin.pause();
    }
  })().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}










/*
---------------------------------------------EJERCICIO 9: DESCUENTO

Objetivo
    Solicitar el total de la cuenta y determinar si corresponde aplicar
    un descuento del 20%.

Elementos del ejercicio

    1. Entrada (Input)
       Se solicita un dato al usuario:
       - total: respuesta a «¿Cuál es el total de tu cuenta?»

    2. Proceso
       Se evalúa si el total de la cuenta es de $100 o más:
       total >= 100

       Si la condición es verdadera, se calcula el descuento y el precio final:
       descuento = total * 0.20
       totalConDescuento = total * 0.80

       Si la condición es falsa, no se aplica descuento:
       descuento = 0
       totalConDescuento = total

    3. Salida (Output)
       Se muestra el precio final y el descuento aplicado:
       «El precio final es: $[totalConDescuento] y el descuento que se le realizó fue de: $[descuento]»

Flujo del programa
    Input (total) → Condición (total >= 100) → Proceso (calcular descuento o conservar total) → Output

Lógica y conceptos
    - Se practica una condición if/else, una comparación y operaciones de multiplicación.
    - Cuando el total es menor de $100, se conserva el total original y el descuento es $0.
    - La asignación original indicaba descuento = total cuando no aplicaba descuento;
      se corrigió a 0 para que coincida con el significado de «descuento realizado».

Estructura lógica
    Ingresar total de la cuenta
              ↓
         total >= 100?
          /         \
        Sí           No
        ↓             ↓
 Calcular 20%     Descuento = 0
 de descuento     Total final = total
 y total final        \   /
          \             /
       Mostrar total final y descuento
*/

//-------------------------------------RESPUESTAS 9

//-------------------------------------SOLUCIÓN INTERACTIVA ÚNICA

if (process.argv[1]?.endsWith("tempCodeRunnerFile.ts")) {
  void (async (): Promise<void> => {
    const { createInterface } = await import("node:readline/promises");

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    interface ResultadoDescuento {
      totalConDescuento: number;
      descuento: number;
    }

    async function preguntarNumero(
      pregunta: string,
      validar: (valor: number) => boolean,
      mensajeError: string
    ): Promise<number> {
      while (true) {
        const respuesta = (await rl.question(pregunta)).trim();

        if (respuesta.length === 0) {
          console.log("La respuesta no puede estar vacía.");
          continue;
        }

        const valor = Number(respuesta);

        if (!Number.isFinite(valor)) {
          console.log("Ingresa un valor numérico válido.");
          continue;
        }

        if (!validar(valor)) {
          console.log(mensajeError);
          continue;
        }

        return valor;
      }
    }

    try {
      const totalCuenta = await preguntarNumero(
        "¿Cuál es el total de tu cuenta? ",
        valor => valor >= 0,
        "Ingresa un total igual o mayor que cero."
      );

      const calcularDescuento = (
        total: number
      ): ResultadoDescuento => {
        if (total >= 100) {
          return {
            totalConDescuento: total * 0.80,
            descuento: total * 0.20
          };
        }

        return {
          totalConDescuento: total,
          descuento: 0
        };
      };

      const resultado = calcularDescuento(totalCuenta);

      console.log(
        `El precio final es: $${resultado.totalConDescuento.toFixed(2)} y el descuento que se le realizó fue de: $${resultado.descuento.toFixed(2)}`
      );

    } finally {
      rl.close();
      process.stdin.pause();
    }
  })().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}











/*
---------------------------------------------EJERCICIO 10: INGRESO AL ESTABLECIMIENTO

Objetivo
    Determinar si un cliente puede ingresar al establecimiento según
    el dinero que tiene en su cuenta.

Elementos del ejercicio

    1. Entrada (Input)
       Se solicita un dato al usuario:
       - total: respuesta a «¿Cuánto efectivo tiene en su cuenta?»

    2. Proceso
       Se comprueba si el total es mayor que $200:
       total > 200
       - Si la condición es verdadera, el cliente puede entrar.
       - Si es falsa, no puede entrar.

    3. Salida (Output)
       Se muestra uno de los siguientes mensajes:
       - «Sí entra»
       - «No entra»

Flujo del programa
    Input (total) → Condición (total > 200) → Output (mostrar si entra)

Lógica y conceptos
    - Se practica la condición if/else y el operador de comparación >.
    - La condición exige tener más de $200; tener exactamente $200 no es suficiente.

Estructura lógica
    Ingresar dinero en la cuenta
              ↓
          total > 200?
          /         \
        Sí           No
        ↓             ↓
    Sí entra       No entra
*/

//-------------------------------------RESPUESTAS 10

//-------------------------------------SOLUCIÓN INTERACTIVA ÚNICA

if (process.argv[1]?.endsWith("tempCodeRunnerFile.ts")) {
  void (async (): Promise<void> => {
    const { createInterface } = await import("node:readline/promises");

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    interface DatosCliente {
      total: number;
    }

    async function preguntarNumero(
      pregunta: string,
      validar: (valor: number) => boolean,
      mensajeError: string
    ): Promise<number> {
      while (true) {
        const respuesta = (await rl.question(pregunta)).trim();

        if (respuesta.length === 0) {
          console.log("La respuesta no puede estar vacía.");
          continue;
        }

        const valor = Number(respuesta);

        if (!Number.isFinite(valor)) {
          console.log("Ingresa un valor numérico válido.");
          continue;
        }

        if (!validar(valor)) {
          console.log(mensajeError);
          continue;
        }

        return valor;
      }
    }

    try {
      const totalCuenta = await preguntarNumero(
        "¿Cuánto efectivo tiene en su cuenta? ",
        valor => valor >= 0,
        "Ingresa una cantidad numérica igual o mayor que cero."
      );

      const cliente: DatosCliente = {
        total: totalCuenta
      };

      const puedeIngresar = (cliente: DatosCliente): boolean =>
        cliente.total > 200;

      const resultado = puedeIngresar(cliente)
        ? "Sí entra"
        : "No entra";

      console.log(resultado);

    } finally {
      rl.close();
      process.stdin.pause();
    }
  })().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}










/*
---------------------------------------------EJERCICIO 11: DESCUENTOS POR MONTO

Objetivo
    Solicitar el total de la cuenta y calcular el precio final y el descuento
    según el monto.

Elementos del ejercicio

    1. Entrada (Input)
       Se solicita un dato al usuario:
       - total: respuesta a «¿Cuál es el total de la cuenta?»

    2. Proceso
       Se evalúan los montos con condiciones anidadas:
       - Si total >= 1000, se aplica un descuento del 25%:
         totalConDescuento = total * 0.75
         descuento = total * 0.25
       - Si total >= 100 y total < 1000, se aplica un descuento del 20%:
         totalConDescuento = total * 0.80
         descuento = total * 0.20
       - Si total < 100, no se aplica descuento:
         totalConDescuento = total
         descuento = 0

    3. Salida (Output)
       Se muestra el precio final y el descuento aplicado:
       «El precio final es: $[totalConDescuento] y el descuento que se le realizó fue de: $[descuento]»

Flujo del programa
    Input (total) → Condición (total >= 100) → Condición anidada (total >= 1000)
    → Cálculo del descuento correspondiente → Output

Lógica y conceptos
    - Se practican condiciones anidadas, comparaciones, multiplicaciones y asignaciones.
    - Los porcentajes se calculan con los factores 0.75 (paga 75%) y 0.25 (descuento del 25%),
      o 0.80 (paga 80%) y 0.20 (descuento del 20%).
    - Si el total es menor de $100, el precio final conserva el total original
      y el descuento es $0.
    - La descripción original no especificaba el comportamiento de totalConDescuento
      para cuentas menores de $100; se definió como el total original, igual que en
      el ejercicio 9. También se cambió descuento = total por 0 para representar
      correctamente que no se aplicó descuento.

Estructura lógica
    Ingresar total de la cuenta
              ↓
         total >= 100?
          /         \
        No           Sí
        ↓             ↓
 Descuento = 0   ¿total >= 1000?
 Total final =       /      \
     total          Sí        No
                    ↓          ↓
             Descuento 25%  Descuento 20%
             Total final   Total final
               = 75%         = 80%
                    \          /
              Mostrar total final
                 y descuento
*/

//-------------------------------------RESPUESTAS 11

//-------------------------------------SOLUCIÓN INTERACTIVA ÚNICA

if (process.argv[1]?.endsWith("tempCodeRunnerFile.ts")) {
  void (async (): Promise<void> => {
    const { createInterface } = await import("node:readline/promises");

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    interface ResultadoPorcentaje {
      totalConDescuento: number;
      descuento: number;
    }

    async function preguntarNumero(
      pregunta: string,
      validar: (valor: number) => boolean,
      mensajeError: string
    ): Promise<number> {
      while (true) {
        const respuesta = (await rl.question(pregunta)).trim();

        if (respuesta.length === 0) {
          console.log("La respuesta no puede estar vacía.");
          continue;
        }

        const valor = Number(respuesta);

        if (!Number.isFinite(valor)) {
          console.log("Ingresa un valor numérico válido.");
          continue;
        }

        if (!validar(valor)) {
          console.log(mensajeError);
          continue;
        }

        return valor;
      }
    }

    try {
      const totalCuenta = await preguntarNumero(
        "¿Cuál es el total de la cuenta? ",
        valor => valor >= 0,
        "Ingresa un total numérico igual o mayor que cero."
      );

      const calcularPorcentaje = (
        total: number
      ): ResultadoPorcentaje => {
        if (total >= 100) {
          if (total >= 1000) {
            return {
              totalConDescuento: total * 0.75,
              descuento: total * 0.25
            };
          }

          return {
            totalConDescuento: total * 0.80,
            descuento: total * 0.20
          };
        }

        return {
          totalConDescuento: total,
          descuento: 0
        };
      };

      const resultado = calcularPorcentaje(totalCuenta);

      console.log(
        `El precio final es: $${resultado.totalConDescuento.toFixed(2)} y el descuento que se le realizó fue de: $${resultado.descuento.toFixed(2)}`
      );

    } finally {
      rl.close();
      process.stdin.pause();
    }
  })().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}











/*
---------------------------------------------EJERCICIO 12: CLASIFICACIÓN POR EDAD

Objetivo
    Asignar una clase a una persona según su edad.

Elementos del ejercicio

    1. Entrada (Input)
       Se solicita un dato al usuario:
       - edad: respuesta a «¿Cuál es su edad?»

    2. Proceso
       Se evalúan las condiciones en orden, de menor a mayor:
       - Si edad < 12, corresponde «Primaria».
       - Si no, pero edad < 18, corresponde «MMJJ y HMMJ».
       - Si no, pero edad <= 35, corresponde «JAS».
       - Si ninguna condición anterior se cumple, corresponde «Escuela Dominical».

    3. Salida (Output)
       Se muestra la clase correspondiente a la edad ingresada.

Flujo del programa
    Input (edad) → Condición (edad < 12) → Condición anidada (edad < 18)
    → Condición anidada (edad <= 35) → Output (mostrar clase)

Lógica y conceptos
    - Se practican las condiciones anidadas y la clasificación por rangos.
    - Se solicita una edad entera igual o mayor que cero.
    - Se conservan las categorías y abreviaturas tal como aparecen en el ejercicio;
      «MMJJ y HMMJ» no se reinterpreta.

Estructura lógica
    Ingresar edad
       ↓
    ¿edad < 12?
     /      \
   Sí        No
   ↓          ↓
Primaria   ¿edad < 18?
             /      \
           Sí        No
           ↓          ↓
   MMJJ y HMMJ    ¿edad <= 35?
                   /       \
                 Sí         No
                 ↓           ↓
                JAS   Escuela Dominical
*/

//-------------------------------------RESPUESTAS 12

//-------------------------------------SOLUCIÓN INTERACTIVA ÚNICA

if (process.argv[1]?.endsWith("tempCodeRunnerFile.ts")) {
  void (async (): Promise<void> => {
    const { createInterface } = await import("node:readline/promises");

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    interface DatosEdad {
      edad: number;
    }

    async function preguntarNumero(
      pregunta: string,
      validar: (valor: number) => boolean,
      mensajeError: string
    ): Promise<number> {
      while (true) {
        const respuesta = (await rl.question(pregunta)).trim();

        if (respuesta.length === 0) {
          console.log("La respuesta no puede estar vacía.");
          continue;
        }

        const valor = Number(respuesta);

        if (!Number.isFinite(valor)) {
          console.log("Ingresa un valor numérico válido.");
          continue;
        }

        if (!validar(valor)) {
          console.log(mensajeError);
          continue;
        }

        return valor;
      }
    }

    try {
      const edad = await preguntarNumero(
        "¿Cuál es su edad? ",
        valor => Number.isInteger(valor) && valor >= 0,
        "Ingresa una edad entera igual o mayor que cero."
      );

      const persona: DatosEdad = {
        edad
      };

      const asignarClase = (datos: DatosEdad): string => {
        if (datos.edad < 12) {
          return "Primaria";
        } else if (datos.edad < 18) {
          return "MMJJ y HMMJ";
        } else if (datos.edad <= 35) {
          return "JAS";
        }

        return "Escuela Dominical";
      };

      console.log(
        "La clase correspondiente es: " + asignarClase(persona)
      );

    } finally {
      rl.close();
      process.stdin.pause();
    }
  })().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}










/*
---------------------------------------------EJERCICIO 13: INGRESO A LA DISCOTECA

Objetivo
    Determinar si una persona puede ingresar a la discoteca según su nombre
    y su edad.

Elementos del ejercicio

    1. Entradas (Input)
       Se solicitan dos datos al usuario:
       - nombre: respuesta a «¿Cuál es tu nombre?»
       - edad: respuesta a «¿Cuál es tu edad?»

    2. Proceso
       Se comprueba que ambas condiciones sean verdaderas al mismo tiempo:
       nombre = "Homero" AND edad >= 18
       En TypeScript se utiliza el operador && para representar AND.

    3. Salida (Output)
       - Si el nombre es «Homero» y la edad es 18 o más: «Puede ingresar».
       - En cualquier otro caso: «No puede ingresar».

Flujo del programa
    Input (nombre y edad) → Condición (nombre coincide AND edad >= 18) → Output

Lógica y conceptos
    - Se practica AND (&&), comparación de texto y comparación numérica.
    - El nombre se compara sin distinguir mayúsculas y minúsculas.
    - La edad debe ser un entero igual o mayor que 18.
    - La expresión incompleta «juan != AND edad >= 18» de la imagen no coincide
      con la descripción aclarada, por lo que no se usa como regla lógica.

Estructura lógica
    Ingresar nombre y edad
              ↓
    ¿nombre = "Homero" AND edad >= 18?
              /                 \
            Sí                   No
            ↓                     ↓
      Puede ingresar       No puede ingresar
*/

//-------------------------------------RESPUESTAS 13

//-------------------------------------SOLUCIÓN INTERACTIVA ÚNICA

if (process.argv[1]?.endsWith("tempCodeRunnerFile.ts")) {
  void (async (): Promise<void> => {
    const { createInterface } = await import("node:readline/promises");

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    interface DatosIngreso {
      nombre: string;
      edad: number;
    }

    async function preguntarTexto(
      pregunta: string
    ): Promise<string> {
      while (true) {
        const respuesta = (await rl.question(pregunta)).trim();

        if (respuesta.length > 0) {
          return respuesta;
        }

        console.log("La respuesta no puede estar vacía.");
      }
    }

    async function preguntarEdad(): Promise<number> {
      while (true) {
        const respuesta = (
          await rl.question("¿Cuál es tu edad? ")
        ).trim();

        if (respuesta.length === 0) {
          console.log("La respuesta no puede estar vacía.");
          continue;
        }

        const edad = Number(respuesta);

        if (!Number.isFinite(edad) || !Number.isInteger(edad) || edad < 0) {
          console.log(
            "Ingresa una edad entera igual o mayor que cero."
          );
          continue;
        }

        return edad;
      }
    }

    try {
      const nombre = await preguntarTexto(
        "¿Cuál es tu nombre? "
      );

      const edad = await preguntarEdad();

      const persona: DatosIngreso = {
        nombre,
        edad
      };

      const puedeIngresar = (
        persona: DatosIngreso
      ): boolean =>
        persona.nombre.trim().toLowerCase() === "homero" &&
        persona.edad >= 18;

      const resultado = puedeIngresar(persona)
        ? "Puede ingresar"
        : "No puede ingresar";

      console.log(resultado);

    } finally {
      rl.close();
      process.stdin.pause();
    }
  })().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}











/*
---------------------------------------------EJERCICIO 14: DESCUENTO EN EL CINE

Objetivo
    Determinar si un cliente recibe un descuento del 50% en el cine
    por asistir el miércoles o tener 65 años o más.

Elementos del ejercicio

    1. Entradas (Input)
       Se solicitan dos datos al usuario:
       - dia: día de la semana en que va al cine
       - edad: edad del cliente, como número entero

    2. Proceso
       Se comprueba si se cumple al menos una de estas condiciones:
       dia = "miércoles" OR edad >= 65
       En TypeScript, el operador || representa OR.
       Si alguna condición es verdadera, se otorga un descuento del 50%;
       si ambas son falsas, se paga la tarifa completa.

    3. Salida (Output)
       - Si recibe descuento: «Felicidades, tienes un descuento del 50%».
       - Si no recibe descuento: «Lo siento, pero deberás pagar la tarifa completa».

Flujo del programa
    Input (día y edad) → Condición (miércoles OR edad >= 65) → Output (mostrar resultado)

Lógica y conceptos
    - Se practica el operador lógico OR (||), comparaciones de texto y números.
    - El día se compara sin distinguir mayúsculas ni acentos.
    - Se conserva la numeración «Eje14» indicada en el material original.

Estructura lógica
    Ingresar día y edad
          ↓
    ¿día = miércoles OR edad >= 65?
          /                   \
        Sí                     No
        ↓                       ↓
Mostrar descuento       Pagar tarifa completa
     del 50%
*/

//-------------------------------------RESPUESTAS 14

//-------------------------------------SOLUCIÓN INTERACTIVA ÚNICA

if (process.argv[1]?.endsWith("tempCodeRunnerFile.ts")) {
  void (async (): Promise<void> => {
    const { createInterface } = await import("node:readline/promises");

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    interface DatosCine {
      dia: string;
      edad: number;
    }

    async function preguntarTexto(
      pregunta: string
    ): Promise<string> {
      while (true) {
        const respuesta = (await rl.question(pregunta)).trim();

        if (respuesta.length > 0) {
          return respuesta;
        }

        console.log("La respuesta no puede estar vacía.");
      }
    }

    async function preguntarEdad(): Promise<number> {
      while (true) {
        const respuesta = (
          await rl.question("Ingresa su edad: ")
        ).trim();

        if (respuesta.length === 0) {
          console.log("La respuesta no puede estar vacía.");
          continue;
        }

        const edad = Number(respuesta);

        if (!Number.isFinite(edad) ||
            !Number.isInteger(edad) ||
            edad < 0) {
          console.log(
            "Ingresa una edad entera igual o mayor que cero."
          );
          continue;
        }

        return edad;
      }
    }

    try {
      const dia = await preguntarTexto(
        "Ingresa el día de la semana: "
      );

      const edad = await preguntarEdad();

      const cliente: DatosCine = {
        dia,
        edad
      };

      const tieneDescuento = (
        cliente: DatosCine
      ): boolean => {
        const diaNormalizado = cliente.dia
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();

        return diaNormalizado === "miercoles" ||
          cliente.edad >= 65;
      };

      const resultado = tieneDescuento(cliente)
        ? "Felicidades, tienes un descuento del 50%"
        : "Lo siento, pero deberás pagar la tarifa completa";

      console.log(resultado);

    } finally {
      rl.close();
      process.stdin.pause();
    }
  })().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}










/*
---------------------------------------------EJERCICIO 15: PASE AL CONCIERTO

Objetivo
    Determinar si una persona puede ingresar al concierto según tenga
    pase VIP y su documento de identidad.

Elementos del ejercicio

    1. Entradas (Input)
       Se solicitan dos respuestas al usuario:
       - pase: respuesta a «¿Tienes pase VIP?»
       - documento: respuesta a «¿Tienes tu documento de identidad?»
       Para ambas preguntas se espera «sí» o «no».

    2. Proceso
       Se comprueba que ambas respuestas sean afirmativas:
       pase = "sí" AND documento = "sí"
       En TypeScript, el operador && representa AND.

    3. Salida (Output)
       - Si tiene pase VIP y documento: «Puedes ver a Justin».
       - Si no cumple ambas condiciones: «Vete a casa muchacho».

Flujo del programa
    Input (pase) → Input (documento) → Condición (pase AND documento) → Output

Lógica y conceptos
    - Se practica una condición compuesta con AND (&&).
    - Las respuestas se comparan sin distinguir mayúsculas ni acentos.
    - No se agregó una situación adicional, porque la imagen original no la describe.

Estructura lógica
    Ingresar respuesta sobre pase VIP
                  ↓
        ¿Tiene pase VIP?
          /           \
        Sí             No
        ↓               ↓
Ingresar documento   Vete a casa
        ↓             muchacho
¿Tiene documento?
    /       \
  Sí         No
  ↓           ↓
Puedes ver   Vete a casa
a Justin     muchacho
*/

//-------------------------------------RESPUESTAS 15

//-------------------------------------SOLUCIÓN INTERACTIVA ÚNICA

if (process.argv[1]?.endsWith("tempCodeRunnerFile.ts")) {
  void (async (): Promise<void> => {
    const { createInterface } = await import("node:readline/promises");

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    interface RequisitosConcierto {
      pase: boolean;
      documento: boolean;
    }

    async function preguntarSiNo(
      pregunta: string
    ): Promise<boolean> {
      while (true) {
        const respuesta = (await rl.question(pregunta))
          .trim()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();

        if (respuesta === "si") {
          return true;
        }

        if (respuesta === "no") {
          return false;
        }

        console.log("Responde «sí» o «no».");
      }
    }

    try {
      const pase = await preguntarSiNo(
        "¿Tienes pase VIP? "
      );

      const documento = await preguntarSiNo(
        "¿Tienes tu documento de identidad? "
      );

      const requisitos: RequisitosConcierto = {
        pase,
        documento
      };

      const puedeIngresar = (
        requisitos: RequisitosConcierto
      ): boolean => {
        return requisitos.pase && requisitos.documento;
      };

      const resultado = puedeIngresar(requisitos)
        ? "Puedes ver a Justin"
        : "Vete a casa muchacho";

      console.log(resultado);

    } finally {
      rl.close();
      process.stdin.pause();
    }
  })().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}










/*
---------------------------------------------EJERCICIO 16: AGENCIA DE VIAJES

Objetivo
    Determinar si una persona puede viajar con la agencia según tenga pase VIP
    o cumpla los requisitos de cuenta y documento de identidad.

Elementos del ejercicio

    1. Entradas (Input)
       Se solicitan tres datos al usuario:
       - pase: respuesta a «¿Tienes pase VIP?»
       - cuenta: respuesta a «¿Cuánto dinero tienes en tu cuenta?»
       - documento: respuesta a «¿Tienes tu documento de identidad?»
       Para pase y documento se espera «sí» o «no».

    2. Proceso
       Hay dos formas de poder viajar:
       - Tener pase VIP.
       - Tener $1500 o más en la cuenta y presentar el documento.

       La condición compuesta es:
       pase = "sí" OR (cuenta >= 1500 AND documento = "sí")
       En TypeScript, OR se representa con || y AND con &&.

       La imagen contiene una versión completa con decisiones anidadas y otra
       reducida con una sola condición compuesta.

    3. Salida (Output)
       - Si cumple alguna de las dos vías: «Puedes viajar con nosotros».
       - En caso contrario: «NO puedes viajar con nosotros».

Flujo del programa
    Input (pase, cuenta y documento) → Condición (pase OR (cuenta AND documento))
    → Output (mostrar si puede viajar)

Lógica y conceptos
    - Se practican OR (||), AND (&&), comparaciones y paréntesis.
    - El límite es $1500 o más (>= 1500); exactamente $1500 cumple el requisito.
    - La solución clásica representa las decisiones anidadas; la moderna expresa
      la misma regla como una condición compuesta.

      Estructura lógica
                   pase = "si"
                   /           \
                Sí               No
                ↓                 ↓
        Puedes viajar      cuenta >= 1500
                              /       \
                           Sí           No
                           ↓             ↓
                    documento = "si"   No puede viajar
                       /      \
                    Sí          No
                    ↓            ↓
              Puede viajar    No puede viajar

*/

//-------------------------------------RESPUESTAS 16

//-------------------------------------SOLUCIÓN INTERACTIVA ÚNICA

if (process.argv[1]?.endsWith("tempCodeRunnerFile.ts")) {
  void (async (): Promise<void> => {
    const { createInterface } = await import("node:readline/promises");

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    interface DatosViaje {
      pase: boolean;
      cuenta: number;
      documento: boolean;
    }

    async function preguntarSiNo(
      pregunta: string
    ): Promise<boolean> {
      while (true) {
        const respuesta = (await rl.question(pregunta))
          .trim()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();

        if (respuesta === "si") {
          return true;
        }

        if (respuesta === "no") {
          return false;
        }

        console.log("Responde «sí» o «no».");
      }
    }

    async function preguntarNumero(
      pregunta: string
    ): Promise<number> {
      while (true) {
        const respuesta = (await rl.question(pregunta)).trim();

        if (respuesta.length === 0) {
          console.log("La respuesta no puede estar vacía.");
          continue;
        }

        const valor = Number(respuesta);

        if (!Number.isFinite(valor) || valor < 0) {
          console.log(
            "Ingresa una cantidad numérica igual o mayor que cero."
          );
          continue;
        }

        return valor;
      }
    }

    try {
      const pase = await preguntarSiNo(
        "¿Tienes pase VIP? "
      );

      const cuenta = await preguntarNumero(
        "¿Cuánto dinero tienes en tu cuenta? "
      );

      const documento = await preguntarSiNo(
        "¿Tienes tu documento de identidad? "
      );

      const datosViaje: DatosViaje = {
        pase,
        cuenta,
        documento
      };

      const puedeViajar = (datos: DatosViaje): boolean =>
        datos.pase ||
        (datos.cuenta >= 1500 && datos.documento);

      const resultado = puedeViajar(datosViaje)
        ? "Puedes viajar con nosotros"
        : "NO puedes viajar con nosotros";

      console.log(resultado);

    } finally {
      rl.close();
      process.stdin.pause();
    }
  })().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}










/*
---------------------------------------------EJERCICIO 17: CONTRATACIÓN DE PERSONAL

Objetivo
    Determinar si una persona puede ser contratada según sus requisitos
    o si es familiar de la dueña.

Elementos del ejercicio

    1. Entradas (Input)
       Se solicitan cinco datos:
       - experiencia: años de experiencia
       - licenciado: si tiene licenciatura en Administración de Empresas
       - saludable: si está saludable
       - portafolio: si tiene portafolio
       - familiar: si es familiar de la dueña
       Para las cuatro respuestas de sí/no, se espera «sí» o «no».

    2. Proceso
       La persona puede ser contratada si cumple todos los requisitos laborales
       o si es familiar de la dueña:
       (experiencia >= 2 AND licenciado = "sí" AND saludable = "sí"
        AND portafolio = "sí") OR familiar = "sí"
       En TypeScript, AND se representa con && y OR con ||.

    3. Salida (Output)
       - Si cumple la regla: «Puede ser contratada».
       - Si no la cumple: «No cumple los requisitos».

Flujo del programa
    Input (requisitos y familiar) → Condición (AND agrupados OR familiar)
    → Output (mostrar el resultado)

Lógica y conceptos
    - Se practica la combinación de AND (&&), OR (||) y paréntesis.
    - Se requieren al menos 2 años de experiencia.
    - Los mensajes de salida fueron definidos para completar el ejercicio.

Estructura lógica
    Ingresar experiencia, licenciatura, salud,
    portafolio y parentesco
                  ↓
    ¿experiencia >= 2 AND licenciado
       AND saludable AND portafolio?
          /                  \
        Sí                    No
        ↓                      ↓
Puede ser contratada     ¿Es familiar?
                           /       \
                         Sí         No
                         ↓           ↓
                 Puede ser      No cumple los
                 contratada       requisitos
*/

//-------------------------------------RESPUESTAS 17

//-------------------------------------SOLUCIÓN INTERACTIVA ÚNICA

if (process.argv[1]?.endsWith("tempCodeRunnerFile.ts")) {
  void (async (): Promise<void> => {
    const { createInterface } = await import("node:readline/promises");

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    interface DatosCandidata {
      experiencia: number;
      licenciado: boolean;
      saludable: boolean;
      portafolio: boolean;
      familiar: boolean;
    }

    async function preguntarNumero(
      pregunta: string,
      validar: (valor: number) => boolean,
      mensajeError: string
    ): Promise<number> {
      while (true) {
        const respuesta = (await rl.question(pregunta)).trim();

        if (respuesta.length === 0) {
          console.log("La respuesta no puede estar vacía.");
          continue;
        }

        const valor = Number(respuesta);

        if (!Number.isFinite(valor)) {
          console.log("Ingresa un valor numérico válido.");
          continue;
        }

        if (!validar(valor)) {
          console.log(mensajeError);
          continue;
        }

        return valor;
      }
    }

    async function preguntarSiNo(
      pregunta: string
    ): Promise<boolean> {
      while (true) {
        const respuesta = (await rl.question(pregunta))
          .trim()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();

        if (respuesta === "si") {
          return true;
        }

        if (respuesta === "no") {
          return false;
        }

        console.log("Responde «sí» o «no».");
      }
    }

    try {
      const experiencia = await preguntarNumero(
        "¿Cuántos años de experiencia tiene? ",
        valor => valor >= 0,
        "Ingresa un número de años igual o mayor que cero."
      );

      const licenciado = await preguntarSiNo(
        "¿Es licenciado en Administración de Empresas? (sí/no) "
      );

      const saludable = await preguntarSiNo(
        "¿Está saludable? (sí/no) "
      );

      const portafolio = await preguntarSiNo(
        "¿Tiene portafolio? (sí/no) "
      );

      const familiar = await preguntarSiNo(
        "¿Es familiar de la dueña? (sí/no) "
      );

      const candidata: DatosCandidata = {
        experiencia,
        licenciado,
        saludable,
        portafolio,
        familiar
      };

      const puedeSerContratada = (
        candidata: DatosCandidata
      ): boolean => {
        return (
          (
            candidata.experiencia >= 2 &&
            candidata.licenciado &&
            candidata.saludable &&
            candidata.portafolio
          ) ||
          candidata.familiar
        );
      };

      const resultado = puedeSerContratada(candidata)
        ? "Puede ser contratada"
        : "No cumple los requisitos";

      console.log(resultado);

    } finally {
      rl.close();
      process.stdin.pause();
    }
  })().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}