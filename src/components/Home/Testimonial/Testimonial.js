import React, { useEffect, useState } from 'react';
import './Testimonial.css';
const Testimonial = () => {
    const [review, setReview] = useState([])
    console.log(review)
    useEffect(() => {
        const url = `http://localhost:4000/reviews`
        fetch(url)
            .then(response => response.json())
            .then(data => setReview(data))
    }, [])
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-info text-uppercase">Testimonial</h5>
                    <h1>What Our Customer <br /> Says </h1>
                </div>
                <div className="card-deck mt-5 row">
                    {
                        review.map((comment) => (
                        <div className="card shadow col">
                            <div className="card-body">
                                <p className="card-text text-start text-secondary description">"{comment.description}"</p>
                            </div>
                            <div className="card-footer d-flex  align-items-center">
                                <img className="mx-2 image" src={comment.imgURL} alt="" width="60" />
                                <div>
                                    <h6 className="text-primary">{comment.name}</h6>
                                    <p className="m-0 text-muted">{comment.working}</p>
                                </div>
                            </div>
                        </div>))
                    }
                </div>
            </div>


        </section>

    );
};

export default Testimonial;