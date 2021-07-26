import mp from 'mercadopago';

const Methods = () => {
  mp.configurations.setAccessToken(`${process.env.TOKEN_MP}`);

  const getPaymentMethods = () => {
    const paymentMethods = mp.get('/v1/payment_methods');
    return console.log(paymentMethods);
  };

  return getPaymentMethods;
};

export default Methods;
