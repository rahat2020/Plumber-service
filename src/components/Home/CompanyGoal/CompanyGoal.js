import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools, faSignal, faUtensils } from '@fortawesome/free-solid-svg-icons'
const CompanyGoal = () => {
    return (
        <section className="company-goal">
            <div className="container mt-5 p-5">
                <div className="row d-flex justify-content-between text-center shadow p-5" >
                    <div className="col-md-3" style={{borderRight:'1px solid #b3ffff'}}>
                        <FontAwesomeIcon style={{width:'200px', height:'50px', color:'goldenrod'}}icon={faTools} />
                        <h3 className="mt-2 p-2" style={{borderBottom: '1px solid #99ffdd'}}>Our mission</h3>
                        <p className="text-sm-start text-secondary mt-2 p-2" style={{fontFamily:'arial'}}>Ut enim ad minima veniam, quis um exercitationem corporate loorem commosequatur? Quis autem</p>
                        <a href="home" className="btn btn-primary btn-lg col-9 p-1 " alt="text" style={{textDecoration:'none',fontSize:'15px'}}> Read  more</a>
                    </div>
                    <div className="col-md-3"  style={{borderRight:'1px solid #b3ffff'}}>
                        <FontAwesomeIcon style={{width:'200px', height:'50px', color:'blue'}}icon={faTools} />
                        <h3 className="mt-2 p-2" style={{borderBottom: '1px solid #99ffdd'}}>Our vission</h3>
                        <p className="text-sm-start text-secondary mt-2 p-2"  style={{fontFamily:'arial'}}>Ut enim ad minima veniam, quis um exercitationem corporate loorem commosequatur? Quis autem</p>
                        <a href="home"className="btn btn-primary btn-lg col-9 p-1 " alt="text" style={{textDecoration:'none',fontSize:'15px'}}> Read more</a>
                    </div>
                    <div className="col-md-3" style={{borderRight:'1px solid #b3ffff'}}>
                        <FontAwesomeIcon style={{width:'200px', height:'50px', color:'yellowgreen'}}icon={faUtensils} />
                        <h3 className="mt-2 p-2" style={{borderBottom: '1px solid #99ffdd'}}>Our goal</h3>
                        <p className="text-sm-start text-secondary mt-2 p-2"  style={{fontFamily:'arial'}}>Ut enim ad minima veniam, quis um exercitationem corporate loorem commosequatur? Quis autem</p>
                        <a href="home" className="btn btn-primary  btn-lg col-9 p-1 "alt="text" style={{textDecoration:'none', fontSize:'15px'}} > Read more</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyGoal;