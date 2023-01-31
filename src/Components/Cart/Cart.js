import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { Loader } from '../../Loading/Loading';
import { AuthContext } from '../../UserContext/UseContext';

const Cart = () => {
    const {user}=useContext(AuthContext)
    const {data:bookingData=[], isLoading}=useQuery({
        queryKey:['bookingData', user?.email],
        queryFn: async()=>{
            const res=await fetch(`http://localhost:5000/bookingData?email=${user?.email}`)
            const data= await res.json()
            return data;
        }
    })

    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div>
           <h1 className="text-4xl text-red-600">{bookingData.length}</h1>
        </div>
    );
};

export default Cart;