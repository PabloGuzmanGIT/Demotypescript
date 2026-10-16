import  assertNever from "@/app/lib/utils/assert-never";

type Transporte = 
| { tipo: "bicicleta"; velocidad: number;  } 
| { tipo: "coche"; velocidad: number; pasajeros: number } 
| { tipo: "avion"; velocidad: number; aerolinea: string };

function mensajeTransporte(t: Transporte): string {


    switch (t.tipo) {
        case "bicicleta":
            return `La bicicleta va a ${t.velocidad} km/h`;
        case "coche":
            return `El coche va a ${t.velocidad} km/h y tiene ${t.pasajeros} pasajeros`;
        case "avion":
            return `El avión va a ${t.velocidad} km/h y pertenece a la aerolínea ${t.aerolinea}`;
        default:
            return assertNever(t);
    }
}

// RECETA: modelar estados con unión discriminada
// 1. Listar los casos posibles
// 2. Elegir un campo discriminante literal común (tipo / estado / metodo)
// 3. Cada caso lleva SOLO los datos que le corresponden
// 4. Unirlos con |
// 5. Manejar con switch sobre el discriminante
// 6. Asegurar exhaustividad con never


// 1. definir los tipos de transporte como una unión discriminada y unirlos con | que incliya los datos
// 2. crear la funcion donde agregare los switch cases
// 3. agregar un default case que llame a la funcion assertNever para asegurar exhaustividad
// 4. probar la funcion con diferentes tipos de transporte
// 5. crear la funcion asser neer en un carpeta utils para poder importarla en otros lugares de la aplicacion

// descriminated union type this will providde shared literal field