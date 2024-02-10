import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import Error from '../../../Components/Error/Error';
import { CardElement } from '@stripe/react-stripe-js';
import Discount from './Discount';
import Things from '../../../Components/Things/Things';
import { Helmet } from 'react-helmet';




const Home = () => {
    return (
        <div>
            <Helmet>
           <title>Sports-Academies | Home</title>
         </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Discount></Discount>
            <Things></Things>
            
        </div>
    );
};

export default Home;