import React from 'react';
import sliderOne from '../../../img/sliderOne.jpg'
import sliderTwo from '../../../img/sliderTwo.jpg'
import slideraThree from '../../../img/slideraThree.jpg'

const HeaderSlider = () => {
    return (
        <section>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="carousel-inner">
                            <div class="carousel-item-active">
                                <div className="row d-flex align-items-center p-5">
                                    <div className="col-md-6">
                                        <h1>PLUMBING MATERIALS</h1> <h1 class="text-success">FULLPACK</h1>
                                        <p>Here is the best plumbing materials that you've never used before </p>
                                        <h3 class="text-success">$1200</h3>
                                        <a href="#" class="btn btn-warning color"> <i class="fas fa-shopping-cart"></i> Book now </a>
                                    </div>
                                    <div className="col-md-6">
                                        <img src={sliderOne} class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div class="carousel-inner">
                            <div class="carousel-item-active">
                                <div className="row d-flex align-items-center p-5">
                                    <div className="col-md-6">
                                        <h1>BASIN WITH TAP PLUMBING</h1> <h1 class="text-success">FULLPACK</h1>
                                        <p>this is the worlds best tv that i've ever made to watch fifa world cup</p>
                                        <h3 class="text-success">$1200</h3>
                                        <a href="#" class="btn btn-warning color"> <i class="fas fa-shopping-cart"></i> Book now </a>
                                    </div>
                                    <div className="col-md-6">
                                        <img src={sliderTwo} class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div class="carousel-inner">
                            <div class="carousel-item-active">
                                <div className="row d-flex align-items-center p-5">
                                    <div className="col-md-6">
                                        <h1>KITCHEN PLUMBING</h1> <h1 class="text-success">FULLPACK</h1>
                                        <p>Here is the best kitchen plumbing services that you'll get at well rate</p>
                                        <h3 class="text-success">$1200</h3>
                                        <a href="google.com" class="btn btn-warning color"> <i class="fas fa-shopping-cart"></i> Book now </a>
                                    </div>
                                    <div className="col-md-6">
                                        <img src={slideraThree} class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default HeaderSlider;