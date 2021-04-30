import React from 'react';
import About_plumber from '../../../img/About_plumber.jpg';

const AboutPlumbers = () => {
    return (
        <section className="plumber-container">
            <div className="container plumber">
                <h3 className="text-center mt-5 p-3"> About Plumbers</h3>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <img className="img-fluid shadow" style={{height:'400px', width:'800px'}}src={About_plumber} alt=""/>
                    </div>
                    <div className="col-md-6">
                    <h2>Exceptional Plumbing services, on your Term</h2>
                        <p className="text-secondary my-5" style={{fontFamily:'arial'}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default AboutPlumbers;