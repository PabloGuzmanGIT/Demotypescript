// Sesión 1 – Bloque 3 (Nivel 1): estados de un pedido en la cafetería

type EstadoPedido =
  | { estado: "pendiente"; creadoEn: Date }
  | { estado: "preparando"; barista: string }
  | { estado: "listo"; listoEn: Date }
  | { estado: "cancelado"; motivo: string }
  | { estado: "entregado"; entregoAlas : Date }

function assertNever(x: never): never {
  throw new Error(`Caso no manejado: ${JSON.stringify(x)}`);
}

function mensajeCliente(p: EstadoPedido): string {
  switch (p.estado) {
    case "pendiente":
      return "Recibimos tu pedido";
    case "preparando":
      return `${p.barista} está preparando tu frappé`;
    case "listo":
      return `Listo desde las ${p.listoEn.toLocaleTimeString()}`;
    case "cancelado":
      return `Cancelado: ${p.motivo}`;
    case "entregado":
        return `Entregado a las ${p.entregoAlas.toLocaleTimeString()}`;
    default:
      return assertNever(p);
  }
}

const pedidos: EstadoPedido[] = [
  { estado: "preparando", barista: "Lucía" },
  { estado: "listo", listoEn: new Date() },
  { estado: "cancelado", motivo: "Sin leche de almendras" },
];

pedidos.forEach((p) => console.log(mensajeCliente(p)));