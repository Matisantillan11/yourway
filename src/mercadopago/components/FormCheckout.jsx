import React from 'react'; 

import '../../assets/Information.scss'

const FormCheckout= () =>{
    return(
        <>
        <div className="Information Information-form">

            <form action="/process_payment" method="post" id="paymentForm">
                <h3>Detalles del comprador</h3>
                    <div>
                        <div>
                            <label for="email">E-mail</label>
                            <input id="email" name="email" type="text" value="test@test.com"/>
                        </div>
                        <div>
                            <label for="docType">Tipo de documento</label>
                            <select id="docType" name="docType" data-checkout="docType" type="text"></select>
                        </div>
                        <div>
                            <label for="docNumber">Número de documento</label>
                            <input id="docNumber" name="docNumber" data-checkout="docNumber" type="text"/>
                        </div>
                    </div>
                <h3>Detalles de la tarjeta</h3>
                    <div>
                        <div>
                            <label for="cardholderName">Titular de la tarjeta</label>
                            <input id="cardholderName" data-checkout="cardholderName" type="text"/>
                        </div>
                   
                        <div>
                            <label for="">Fecha de vencimiento</label>
                            <div>
                                <input type="text" placeholder="MM" id="cardExpirationMonth" data-checkout="cardExpirationMonth"
                                    onselectstart="return false" onpaste="return false"
                                    oncopy="return false" oncut="return false"
                                    ondrag="return false" ondrop="return false" autocomplete='off' />
                                <span className="date-separator">/</span>
                                <input type="text" placeholder="YY" id="cardExpirationYear" data-checkout="cardExpirationYear"
                                    onselectstart="return false" onpaste="return false"
                                    oncopy="return false" oncut="return false"
                                    ondrag="return false" ondrop="return false" autocomplete='off' />
                            </div>
                         </div>
                    <div>
                        <label for="cardNumber">Número de la tarjeta</label>
                        <input type="text" id="cardNumber" data-checkout="cardNumber"
                        onselectstart="return false" onpaste="return false"
                        oncopy="return false" oncut="return false"
                        ondrag="return false" ondrop="return false" autocomplete='off'/>
                    </div>
                    <div>
                        <label for="securityCode">Código de seguridad</label>
                        <input id="securityCode" data-checkout="securityCode" type="text"
                        onselectstart="return false" onpaste="return false"
                        oncopy="return false" oncut="return false"
                        ondrag="return false" ondrop="return false" autocomplete='off'/>
                    </div>
                    <div id="issuerInput">
                        <label for="issuer">Banco emisor</label>
                        <select id="issuer" name="issuer" data-checkout="issuer"></select>
                    </div>
                    <div>
                        <label for="installments">Cuotas</label>
                        <select type="text" id="installments" name="installments"></select>
                    </div>
                    <div>
                        <input type="hidden" name="transactionAmount" id="transactionAmount" value="100" />
                        <input type="hidden" name="paymentMethodId" id="paymentMethodId" />
                        <input type="hidden" name="description" id="description" />
                        <br/>
                        <button type="submit">Pagar</button>
                        <br/>
                    </div>
                </div>
            </form>
        </div>
            
        </>
    )
}

export default FormCheckout;