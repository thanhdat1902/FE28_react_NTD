import React, { Component } from 'react';
import carousel1 from './../../img/bkt-15716459572148.jpg';
import carousel2 from './../../img/joker-15701565726725.png';
import carousel3 from './../../img/willllllllll-15712817015353.jpg';
class Carousel extends Component {
    render() {
        return (
            <div id="carouselHinhAnh" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselHinhAnh" data-slide-to={0} className="active" />
                    <li data-target="#carouselHinhAnh" data-slide-to={1} />
                    <li data-target="#carouselHinhAnh" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carousel1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={carousel2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={carousel3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselHinhAnh" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselHinhAnh" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Carousel;