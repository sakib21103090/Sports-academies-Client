import React, { useContext } from 'react';
import UseAxios from './UseAxios';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Providers/AuthProviders';

const UseCart = () => {
    const { user, loading }=useContext(AuthContext);
    console.log(user)
    
    const [axiosSecure] = UseAxios();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
      
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [cart, refetch]

}
export default UseCart;