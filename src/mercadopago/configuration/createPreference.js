// SDK de Mercado Pago
import mercadopago from 'mercadopago';
// Agrega credenciales

export const createPreference = () => {

  mercadopago.configure({
    access_token: `${process.env.TOKEN_MP}`,
  });
  
  let preference = {
    items: [
      { 
        title: "Test",
        quantity: 1,
        currency_id: "ARS",
        unit_price: 105
      }
    ]
  }
  
  mercadopago.preferences.create(preference).then((response)=>{
    global.id = response.body.id
  }).catch(err =>{
    console.log(err)
  })
}