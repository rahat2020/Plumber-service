import axios from 'axios';
import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';

const AddReview = () => {
    const [review,setReview] = useState({
        name: '',
        description: '',
        working: '',
        imgURL:''
    })
    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        const newData = {...review}
        newData[e.target.name] = e.target.value
        setReview(newData)
    }
    const handleImgUpload = (event) =>{
        console.log(event.target.files[0])
        const imageData = new FormData()
        imageData.set('key', '129a17d1ed66395e38996efd754ca5cd')
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                const imageData = { ...review }
                imageData.imgURL = response.data.data.display_url
                setReview(imageData);
                alert('image added to the database successfully')
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleAddService = (e) => {
        if(review.imgURL !== ''){
            const url = `http://localhost:4000/addReview`
            fetch(url, {
               method: 'POST',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify(review)
            })
            .then(response => response.json())
            .then(data => {console.log(data)})
            alert('user review uploaded to the database successfully')
        }
    }
    return (
        <section className="section-container">
             <div className="mt-3">
                 <Dashboard></Dashboard>
                <h4 className="text-center"> ADD REVIEW</h4>
                <form className="mt-3 border p-4 shadow-sm" style={{ width: '60%', margin: 'auto' }}>
                    <div class="mb-3">
                        <input type="email" class="form-control" onBlur={handleChange} id="exampleInputEmail1" placeholder="your name" aria-describedby="emailHelp" name="name" />
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" onBlur={handleChange} id="exampleInputPassword1"  placeholder="your job" name="working" />
                    </div>
                    <div class="mb-3 ">
                        <textarea type="text" class="form-control" onBlur={handleChange}  placeholder="your comment"  name="description" />
                    </div>
                    <div class="mb-3 ">
                        <input type="file" class="form-control" onChange={handleImgUpload} />
                    </div>
                    <button type="submit" onClick={handleAddService} class="btn btn-primary btn-lg">Submit</button>
                </form>
            </div>
            
        </section>
    );
};

export default AddReview;