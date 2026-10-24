import assertNever from "assert-never";

type resultado = 
|{medio:"email" ; destino: string ;asunto: string} 
|{medio:"whatsapp"; telefono: number; mensaje:string}
|{medio:"sms"; telefono: number; texto:string};


function resumen(message : resultado): string {

    switch (message.medio) {
        case "email":
            return `Email enviado a ${message.destino} con asunto ${message.asunto}`;
        case "whatsapp":
            return `Whatsapp enviado a ${message.telefono} con mensaje ${message.mensaje}`;
        case "sms":
            return `SMS enviado a ${message.telefono} con texto ${message.texto}`;
        default:
            return assertNever(message);                                                    
        
    }


}