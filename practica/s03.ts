// receta:
//1. Listar los tipos a usar y cada uno con sus datos a validar
//2. separa cada tipo usando | y un campo discriminante literal común
//3. crear la funcion switch y asegurar el campo discriminante literal en cada case y retornar un string con el mensaje al cliente
//4. agregar el default 
//5. crear la funcion asertnever en una carpeta util para poder importarla en toda la app 


type Resultado<T> =
  | { ok: true; valor: T }
  | { ok: false; error: string };

function dividir(a: number, b: number): Resultado<number> {
  if (b === 0) return { ok: false, error: "División entre cero" };
  return { ok: true, valor: a / b };
}

const r1 = dividir(10, 2);
const r2 = dividir(5, 0);

if (r1.ok) {
  console.log(r1.valor * 2);
} else {
  console.log(r1.error);
}

console.log(r2.ok ? r2.valor : r2.error);