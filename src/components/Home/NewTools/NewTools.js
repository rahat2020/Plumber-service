import React from 'react';
import './NewTools.css';
import plumberblog from '../../../img/plumberblog.jpg'
import plumberblog11 from '../../../img/plumberblog11.jpg'
const NewTools = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row ">
                    <div className="col-md-6 imageOne divStyle">
                        <div className="text-sm-start mt-3 styleTwo">
                            <h3 style={{color:'whiteSmoke'}}> Best offer today</h3>
                            <p className="bt btn-warning text-center" style={{width:'160px', borderRadius:'5px', fontWeight:'500'}}> New collections tools</p>
                            <p> <span style={{color:'orange'}}>30%</span> off new trending</p>
                            <button class="btn btn-danger">shop now</button>
                        </div>
                    </div>
                    <div className="col-md-6 imageTwo divStyle">
                        <div className="text-sm-start mt-3 \">
                            <h3 style={{color:'whiteSmoke'}}> Best offer today</h3>
                            <p className="bt btn-warning text-center" style={{width:'160px', borderRadius:'5px', fontWeight:'500'}}>New collections tools</p>
                            <p> <span style={{color:'orange'}}>30%</span> off new trending</p>
                            <button class="btn btn-danger">shop now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewTools;