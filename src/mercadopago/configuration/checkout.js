import mercadopago from "mercadopago";
import { createPreference } from "./createPreference";
export const checkout = () =>{
    createPreference();
    
    const mp = new mercadopago(process.env.PUBLIC_KEY_MP, {
        locale: 'es-AR'
    })
    
    mp.checkout({
        preference: {
            id: global.id
        },
        render: {
            container: '.Information-next',
            label: 'Pagar'
        }
    })
}