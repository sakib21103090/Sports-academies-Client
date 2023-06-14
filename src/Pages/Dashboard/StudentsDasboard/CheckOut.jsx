import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();
    // const handleSubmit = async (event) => {}
    return (
        <>
        
        <form className="w-[500px] p-32 " >
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
                                color: '#000',
                            },
                        },
                    }}
                />
                <button className="btn bg-sky-500 text-black btn-sm mt-4 " type="submit">
                    Pay
                </button>
               
            </form>
            </>
    );
};

export default CheckOut;