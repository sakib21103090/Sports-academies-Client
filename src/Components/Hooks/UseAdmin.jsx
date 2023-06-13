import UseAuth from './UseAuth';
import UseAxios from './UseAxios';
import { useQuery } from '@tanstack/react-query';

const UseAdmin = () => {
    const {user} = UseAuth();
    const [axiosSecure] = UseAxios();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log('is admin response', res)
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}

export default UseAdmin;