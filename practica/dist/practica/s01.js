"use strict";
function describirPago(pago) {
    switch (pago.metodo) {
        case "efectivo":
            return `Efectivo: vuelto S/ ${pago.recibido - pago.monto}`;
        case "yape":
            return `Yape op. ${pago.numeroOperacion}`;
        case "tarjeta":
            return `Tarjeta ****${pago.ultimos4} en ${pago.cuotas} cuotas`;
    }
}
const pagos = [
    { metodo: "efectivo", monto: 18, recibido: 20 },
    { metodo: "yape", monto: 12.5, numeroOperacion: "0451" },
];
pagos.forEach((p) => console.log(describirPago(p)));
