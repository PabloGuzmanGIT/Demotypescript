type Resultado<T> =
  | { ok: true; valor: T }
  | { ok: false; error: string };


// function parsearCantidad (x:unknown): Resultado<number> {

//     switch(typeof x) {
//         case "number":
//             return {ok:true, valor:x};
//         case "string":
//             const n = Number(x);
//             if(isNaN(n)) {
//                 return {ok:false, error:"No es un número"};
//             }
//             return {ok:true, valor:n};
//         default:
//             return {ok:false, error:"No es un número"};
//     }

// }



function parsearCantidad2(x: unknown): Resultado<number> {
  let n: number;

  // Subobjetivos 1-3: averiguar el tipo y llenar n
  switch (typeof x) {
    case "number":
      n = x;
      break;
    case "string":
      if (x.trim() === "") {
        return { ok: false, error: "El texto está vacío" };
      }
      n = Number(x);
      if (Number.isNaN(n)) {
        return { ok: false, error: "No es un número" };
      }
      break;
    default:
      return { ok: false, error: "Tipo no válido" };
  }

  // Subobjetivo 4: reglas, para cualquier número que haya llegado aquí
  if (!Number.isInteger(n)) {
    return { ok: false, error: "Debe ser un número entero" };
  }
  if (n < 0) {
    return { ok: false, error: "No puede ser negativa" };
  }

  // Subobjetivo 5: éxito
  return { ok: true, valor: n };
}

console.log(parsearCantidad(5)); // {ok:true, valor:5}
console.log(parsearCantidad("10")); // {ok:true, valor:10}
console.log(parsearCantidad("abc")); // {ok:false, error:"No es un número"} 
console.log(parsearCantidad(2.5));        // error: Debe ser un número entero
console.log(parsearCantidad(-2));         // error: No puede ser negativa
console.log(parsearCantidad(null));       // error: Tipo no válido
console.log(parsearCantidad(undefined));  // error: Tipo no válido
console.log(parsearCantidad(""));