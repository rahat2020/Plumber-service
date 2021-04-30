import React, { useEffect, useState } from 'react';
import power_tools from '../../../img/power_tools.png';
import wrench_tools from '../../../img/wrench_tools.png';
import hammer_tools from '../../../img/hammer_tools.png';
import { Row, Card, Button, Col } from 'react-bootstrap';
const ServiceCatagories = () => {
    const [product, setProduct] = useState([])
    console.log(product)
    useEffect(() => {
        const url = `http://localhost:4000/products`
        fetch(url)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <section className="container">
            <h2 className="text-center"> Our services</h2>
            <div >

                <Col className="mt-3 row">
                    {
                        product.map((items) => (
                            <Card style={{ width: '18rem', margin: '40px' }}>
                                <Card.Img className="style" variant="top" src={items.imgURL} style={{width: '250px', height:'150px'}}/>
                                <Card.Body>
                                    <div className="text-center ">
                                        <Card.Title>{items.name}</Card.Title>
                                        <div className=" d-flex justify-content-between button-style mt-3">
                                            <span><strong>${items.price}</strong></span>
                                            <Button className="text-center btn_style" variant="primary">Buy now</Button>
                                            {/* <Link to={`/checkOut/${_id}`}><Button className="text-center btn_style" variant="primary">Buy now</Button></Link> */}
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