// RECETA: modelar estados con unión discriminada
// 1. Listar los casos posibles
// 2. Elegir un campo discriminante literal común (tipo / estado / metodo)
// 3. Cada caso lleva SOLO los datos que le corresponden
// 4. Unirlos con |
// 5. Manejar con switch sobre el discriminante
// 6. Asegurar exhaustividad con never
type Pago =
  | { metodo: "efectivo"; monto: number; recibido: number }
  | { metodo: "yape"; monto: number; numeroOperacion: string }
  | { metodo: "tarjeta"; monto: number; ultimos4: string; cuotas: number }
 

function describirPago(pago: Pago): string {
  switch (pago.metodo) {
    case "efectivo":
      return `Efectivo: vuelto S/ ${pago.recibido - pago.monto}`;
    case "yape":
      return `Yape op. ${pago.numeroOperacion}`;
    case "tarjeta":
      return `Tarjeta ****${pago.ultimos4} en ${pago.cuotas} cuotas`;
  }
}

const pagos: Pago[] = [
  { metodo: "efectivo", monto: 18, recibido: 20 },
  { metodo: "yape", monto: 12.5, numeroOperacion: "0451" },
];

pagos.forEach((p) => console.log(describirPago(p)));