// SDK de Mercado Pago
import mercadopago from 'mercadopago';
// Agrega credenciales
mercadopago.configure({
  access_token: `${process.env.TOKEN_MP}`,
});
