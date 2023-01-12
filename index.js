const precioBaños = 80;
const precioHabitaciones = 200;

const tamañoBase = 20;
const tamañoBaño = 4;
const tamañoHabitaciones = 10;

function valorAlquiler() {
  let precio = 0;
  let tamaño = 0;

  alert(
    "Indique el número de habitaciones y baños que desea en su departamento"
  );

  let cantidadHabitaciones = prompt("Numero de habitaciones:");
  let cantidadBaños = prompt("Numero de baños");

  if (cantidadBaños < 1 || cantidadHabitaciones < 1) {
    alert("No cumple la cantidad minima de baños y habitaciones");
  } else {
    precio =
      cantidadBaños * precioBaños + cantidadHabitaciones * precioHabitaciones;
    tamaño =
      cantidadBaños * tamañoBaño +
      cantidadHabitaciones * tamañoHabitaciones +
      tamañoBase;
  }

  alert(
    "Su solicitud corresponde a un departamento de " +
      tamaño +
      " metros cuadrados por el valor de " +
      precio +
      " dolares"
  );
}

let respuesta;
let solicitudes = [];

do {
  valorAlquiler();
  respuesta = prompt("Desea realizar otra solicitud?");
} while (respuesta != "no");

alert("Muchas gracias por su solicitud!");
