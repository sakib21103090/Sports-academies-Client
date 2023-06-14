import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import UseAxios from '../../../Components/Hooks/UseAxios';
import UseAuth from '../../../Components/Hooks/UseAuth';
import { useEffect } from 'react';

const CheckOut = ({price}) => {
    // console.log(price)
    // const stripe = useStripe();
    // const elements = useElements();
    // const { user } = UseAuth();
    // const [axiosSecure] = UseAxios()
    // const [cardError, setCardError] = useState('');
    // const [clientSecret, setClientSecret] = useState('');
    // const [processing, setProcessing] = useState(false);
    // const [transactionId, setTransactionId] = useState('');

    // useEffect(() => {
    //     if (price > 0) {
    //         axiosSecure.post('/create-payment-intent', { price })
    //             .then(res => {
    //                 console.log(res.data.clientSecret)
    //                 setClientSecret(res.data.clientSecret);
    //             })
    //     }
    // }, [axiosSecure])
     
    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     if (!stripe || !elements) {
    //         return
    //     }

    //     const card = elements.getElement(CardElement);
    //     if (card === null) {
    //         return
    //     }

    //     const { error } = await stripe.createPaymentMethod({
    //         type: 'card',
    //         card
    //     })

    //     if (error) {
    //         console.log('error', error)
    //         setCardError(error.message);
    //     }
    //     else {
    //         setCardError('');
    //         // console.log('payment method', paymentMethod)
    //     }
    //     setProcessing(true)

    //     const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
    //         clientSecret,
    //         {
    //             payment_method: {
    //                 card: card,
    //                 billing_details: {
    //                     email: user?.email || 'unknown',
    //                     name: user?.displayName || 'anonymous'
    //                 },
    //             },
    //         },
    //     );
    //     if (confirmError) {
    //         console.log(confirmError);
    //     }
    // };
    return (
        <>
            <form className="w-[400px] m-8" >
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#000',
                                '::placeholder': {
                                    color: '#000',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
               <button className="btn btn-primary btn-sm mt-4" type="submit" >
                    Pay
                </button>
            </form>
            {/* {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>} */}
        </>
       
    );
};

export default CheckOut;