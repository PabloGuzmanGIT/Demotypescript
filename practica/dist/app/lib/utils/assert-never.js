export default function assertNever(x) {
    throw new Error(`Caso no manejado: ${JSON.stringify(x)}`);
}
