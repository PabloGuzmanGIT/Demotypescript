export type Resultado<T> = { ok: true; valor: T } | { ok: false; error: string };

function parsearPrecio(texto: string): Resultado<number> {
  /* tú */
  switch (true) {
    case isNaN(Number(texto)):
      return { ok: false, error: "No es un número" };
    case Number(texto) < 0:
      return { ok: false, error: "El precio no puede ser negativo" };
    default:
      return { ok: true, valor: Number(texto) };
  }
}

function mostrar(r: Resultado<number>) {
  /* tú */
  if (r.ok) {
    return `Precio: S/ ${r.valor.toFixed(2)}`;
  } else {
    return `Error: ${r.error}`;
  }
}

console.log(mostrar(parsearPrecio("12.5")));  // Precio: S/ 12.50
console.log(mostrar(parsearPrecio("abc")));   // Error: No es un número
console.log(mostrar(parsearPrecio("-3")));    // Error: El precio no puede ser negativo