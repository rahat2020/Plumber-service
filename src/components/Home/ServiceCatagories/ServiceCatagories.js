import React, { useEffect, useState } from 'react';
import {  Card, Button, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
const ServiceCatagories = () => {
    const [product, setProduct] = useState([])
    console.log(product)
    useEffect(() => {
        const url = `http://localhost:4000/products`
        fetch(url)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [])
    // const {_id} = useParams()
    // console.log(_id)
    return (
        <section className="container">
            <h2 className="text-center"> Our services</h2>
            <div >

                <Col className="mt-3 row">
                    {
                        product.map((items) => (
                            <Card className="shadow p-3 mb-5 bg-body rounded border-bottom"style={{ width: '18rem', margin: '40px' }}>
                                <Card.Img className="style " variant="top" src={items.imgURL} style={{width: '250px', height:'150px'}}/>
                                <Card.Body>
                                    <div className="text-center ">
                                        <Card.Title>{items.name}</Card.Title>
                                        <div className=" d-flex justify-content-between button-style mt-3">
                                            <span><strong>${items.price}</strong></span>
                                            {/* <Button className="text-center btn_style" variant="primary">Buy now</Button> */}
                                            <Link to={`/checkOut/${items._id}`}><Button className="text-center btn_style" variant="primary">Buy now</Button></Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </Col>


            </div>
        </section>
    );
};

export default ServiceCatagories;