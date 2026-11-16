type Producto = { id: string; nombre: string; precio: number };

function esProducto(x: unknown): x is Producto {
  return (
    typeof x === "object" &&
    x !== null &&
    "id" in x && typeof x.id === "string" && 
    "nombre" in x && typeof x.nombre === "string" &&
    "precio" in x && typeof x.precio === "number"
  );
}

const datos: unknown = JSON.parse('{"id":"p1","nombre":"Cacao 70%","precio":25}');

if (esProducto(datos)) {
  console.log(datos.nombre.toUpperCase());
} else {
  console.log("Dato inválido");
}