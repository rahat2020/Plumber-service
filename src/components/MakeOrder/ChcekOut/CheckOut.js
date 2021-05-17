import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';
const CheckOut = () => {
    const [checkout, setCheckout] = useState([])
    console.log(checkout)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const {_id} = useParams()
    console.log(_id)

    const handleSubmit = () => {
        const items = { ...loggedInUser, product: checkOutDetails, date: new Date() }
        const url = `http://localhost:4000/itemOrder`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(items)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
        alert('item added to order curt successfully')
    }
    const checkOutDetails = checkout.find(pd => pd?._id === _id)
    console.log(checkOutDetails)
    useEffect(() => {
        const url = `http://localhost:4000/checkOutItem`
        fetch(url)
        .then(response => response.json())
        .then(data => setCheckout(data))
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div className="me-5 p-5">
                <div style={{ margin: 'auto', textAlign: 'center' }}>
                    <h3> Confirm your Booking!!!</h3>
                    {/* <strong>you have checkouted: {checkout.length} items</strong> */}
                </div>
                <div className="">
                    <table class="table checkout table-light " style={{ width: '90%', margin: 'auto' }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>images</th>
                                <th>checkout</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>{checkOutDetails?.name}</td>
                                <td>{checkOutDetails?.price}</td>
                                <td className="imgStyle"><img style={{ width: '90px' }} alt="" src={checkOutDetails?.imgURL} rounded /></td>
                                <td> <Link to={`/order/${_id}`}><button className="height:30px btn btn-primary" onClick={handleSubmit} >order now </button></Link></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;