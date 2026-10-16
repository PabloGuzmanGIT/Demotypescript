function parsearCantidad(x:unknown):Resultado<number>{

    switch (true) {
        case isNaN(Number(x)):
            return { ok: false, error: "No es un número" };
        case Number(x) < 0:
            return { ok: false, error: "La cantidad no puede ser negativa" };
        case !Number.isInteger(Number(x)):
            return { ok: false, error: "Debe ser un número entero" };
        case typeof x !== "number" && typeof x !== "string":
            return { ok: false, error: "Tipo no válido" };
        default:
            return { ok: true, valor: Number(x) };
    }
}

console.log(parsearCantidad(5));      // ok, 5v
console.log(parsearCantidad("12"));   // ok, 12
console.log(parsearCantidad("abc"));  // error: No es un número
console.log(parsearCantidad(2.5));    // error: Debe ser un número entero
console.log(parsearCantidad(-2));     // error: No puede ser negativa
console.log(parsearCantidad(null));   // error: Tipo no válidov
console.log(parsearCantidad(undefined)); /// error: Tipo no válido
console.log(parsearCantidad(""));  /// error: No es un número