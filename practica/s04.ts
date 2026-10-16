
// 1. creamos un type que contenga objetos con 3 medios de transporte y alguna caracteristica, el transporte sera el valor discirimante
// 2. luego crearemos una funcion switch que muestre un mensaje especifico a cada transporte
// 3. agregamos un default case que llame a la funcion assertNever para asegurar exhaustividad
// 4. la funcion assertNever se encutre en la carpeta utils y se importa en el archivo s02.ts
// 5. esto hara que el mensaje error sea detectado en desarrollo y no en tiempo de ejecucion, 
//     lo que nos ayudara a detectar errores de manera temprana
import assertNever from "@/app/lib/utils/assert-never";

// type tipoTransporte =
//   | { tipo: "bicicleta"; velocidad: number }
//   | { tipo: "coche"; velocidad: number; pasajeros: number }
//   | { tipo: "avion"; velocidad: number; aerolinea: string };

// function mensajeTransporte(t: tipoTransporte): string {

//     switch (t.tipo) {
//         case "bicicleta":
//             return `La bicicleta va a ${t.velocidad} km/h`;
//         case "coche":
//             return `El coche va a ${t.velocidad} km/h y tiene ${t.pasajeros} pasajeros`;
//         case "avion":
//             return `El avion va a ${t.velocidad} km/h y pertenece a la aerolinea ${t.aerolinea}`;
//         default:
//             return assertNever(t);
//     }

// }


// console.log(mensajeTransporte({tipo:"bicicleta", velocidad:20}) )

function describir(x: unknown): string {


  if (typeof x === "number") return `Número: ${x.toFixed(1)}`;
  if (typeof x === "string") return `Texto de ${x.length} letras`;
  if (Array.isArray(x)) return `Lista de ${x.length} elementos`;
  return "Otro tipo";
}

console.log(describir(3.14159));
console.log(describir("cacao"));
console.log(describir([1, 2, 3]));
console.log(describir(null));