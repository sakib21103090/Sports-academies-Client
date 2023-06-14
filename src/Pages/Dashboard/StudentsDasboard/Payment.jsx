import React from 'react';
import UseCart from '../../../Components/Hooks/UseCart';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckOut from './CheckOut';
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_APIKEY);
console.log(import.meta.env.VITE_PAYMENT_APIKEY)
const Payment = () => {
    const [cart] = UseCart();
    // const {id}=useParams();
    // const product=cart.find(p=>p._id===id)
    // console.log(product)
    // // console.log(cart)
    // const total = product.price;
    // // console.log(total)
    const total = cart.price;
    const price = parseFloat(total)
    return (
        <div className='card bg-sky-300 w-[600px] h-[300px]'>
            <Elements stripe={stripePromise}>
                <CheckOut cart={cart} price={price}></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;