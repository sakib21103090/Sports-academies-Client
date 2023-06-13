import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxios from "./UseAxios";

const UseInstructor = () => {
    const {user} = UseAuth();
    const [axiosSecure] = UseAxios();
    const {data: isInstructor, isLoading: isLoadInstructor} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            console.log('is instructor response', res)
            return res.data.instructor;
        }
    })
    return [isInstructor, isLoadInstructor]
}


export default UseInstructor;