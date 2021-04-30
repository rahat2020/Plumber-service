import axios from 'axios';
import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import './AddProduct.css';

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        imgURL: ''
    })
    const handleChange = (event) => {
        console.log(event.target.name, event.target.value)
        const newData = { ...product }
        newData[event.target.name] = event.target.value;
        setProduct(newData);
    }

    const handleImgUpload = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '129a17d1ed66395e38996efd754ca5cd');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                const imageData = { ...product }
                imageData.imgURL = response.data.data.display_url
                setProduct(imageData);
                alert('image added to the database successfully')
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const handleAddService = (event) => {
        // event.preventDefault();
        if (product.imgURL !== '') {
            const url = `http://localhost:4000/addProduct`
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
            alert('product added to the database successfully')
        }
    }

    return (
        <div className="container">
            <Dashboard></Dashboard>
            <div className="mt-3">
                <h4 className="text-center"> ADD SERVICES</h4>
                <form className="mt-3 border p-4 shadow-sm" style={{ width: '70%', margin: 'auto' }}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Product Name</label>
                        <input type="email" class="form-control" onBlur={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" name="name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">product price</label>
                        <input type="text" class="form-control" onBlur={handleChange} id="exampleInputPassword1" name="price" />
                    </div>
                    <div class="mb-3 ">
                        <input type="file" class="form-control" onChange={handleImgUpload} name="img" />
                    </div>
                    <button type="submit" onClick={handleAddService} class="btn btn-primary btn-lg">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;