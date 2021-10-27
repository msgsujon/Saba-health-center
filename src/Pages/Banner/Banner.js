import React from 'react';

const Banner = () => {
    return (
        <div>
            {/* bannner here */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div style={{height:'500px'}} className="carousel-item active">
                        <img src="https://www.hospitalsafetygrade.org/media/image/leapfrog-anniversary-bg.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div style={{height:'500px'}} className="carousel-item">
                        <img src="https://www.etch.com/app/files/public/b907df10-56ad-468c-8924-358ba8538fa7/scripps_tower_ext_night_8-2018_1198x475.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div style={{height:'500px'}} className="carousel-item">
                        <img src="https://www.starcarehospitals.com/images/starcare-redefining-benchmark-1.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;