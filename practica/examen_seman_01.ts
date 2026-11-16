function describe(x: unknown): Resultado<string> {
    if (typeof x !== "string") {
        return {ok:false, error:"Tipo no válido"};
    }

    const s = x.trim();
    if (s === "") {
        return {ok:false, error:"vacio"};
    }
    if (s.length !== 9) {
        return {ok:false, error:"debe tener 9 digitos"};
    }
    if (!/^\d+$/.test(s)) {
        return {ok:false, error:"solo dígitos"};
    }
    if (s[0] !== "9") {
        return {ok:false, error:"debe empezar con 9"};
    }

    return {ok:true, valor:s};
}   


console.log(describe("987654321"));    // ok, "987654321"
console.log(describe(" 987654321 "));  // ok, "987654321"
console.log(describe(987654321));      // error: Tipo no válido
console.log(describe(""));             // error: vacío
console.log(describe("12345"));        // error: debe tener 9 dígitos
console.log(describe("887654321"));    // error: debe empezar con 9
console.log(describe("98765abcd"));    // error: solo dígitos