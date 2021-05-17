import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderItem, setOrderItem] = useState([])
    console.log(orderItem)

    useEffect(() => {
        
        fetch('http://localhost:4000/ordered')
            .then(response => response.json())
            .then(data => setOrderItem(data))
           
    }, [])
    
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-center mt-4"> Your order list </h2>
            <table class="table mt-4 ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody>
                {
                        orderItem.map((item, index) => (
                            <tr>
                                <td>{index}</td>
                                <td>{item.product?.name}</td>
                                <td>{item.product?.description}</td>
                                <td className="imgStyle"><img style={{height:'100px', width:'200px'}} src={item.product?.imgURL}/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Order;