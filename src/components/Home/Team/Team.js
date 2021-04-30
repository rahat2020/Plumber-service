import React from 'react';
import memberOne from '../../../img/memberOne.jpg';
import memberTwo from '../../../img/memberTwo.jpg';
import memberThree from '../../../img/memberThree.jpg';
import './Team.css';
const Team = () => {
    return (
        <section className="team-container">
            <div className="container mt-5 p-5">
                <h2 className="text-center title"> Meet our team</h2>
                <p className="text-center" style={{ fontFamily: 'arial' }}>  A plumber is responsible for the system of pipes within a building. <br />This system transports water to faucets and appliances and also.</p>
                <div className="row shadow-sm p-5">
                    <div className="col-md-4 PlumberStyle">
                        <div className="team-img">
                            <img className="img-fluid" style={{ width: '300px', height: '250px' }} src={memberOne} alt="" />
                        </div>
                        <div className="text-center mt-2 p-2">
                            <h4>Jhon snow</h4>
                            <p className="text-secondary">Civil Plumber</p>
                        </div>
                    </div>
                    <div className="col-md-4 PlumberStyle">
                        <div className="team-img">
                            <img className="img-fluid" style={{ width: '300px', height: '250px' }} src={memberTwo} alt="" />
                        </div>
                        <div className="text-center mt-2 p-2">
                            <h4>Jhon snow</h4>
                            <p className="text-secondary">Civil Plumber</p>
                        </div>
                    </div>
                    <div className="col-md-4 PlumberStyle">
                        <div className="team-img">
                            <img className="img-fluid" style={{ width: '300px', height: '250px' }} src={memberThree} alt="" />
                        </div>
                        <div className="text-center mt-2 p-2">
                            <h4>Jhon snow</h4>
                            <p className="text-secondary">Civil Plumber</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;