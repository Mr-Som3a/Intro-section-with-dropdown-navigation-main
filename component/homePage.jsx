import React, { Component } from 'react';
import '../src/scss/homePage.scss'

class Home extends Component {

    render() { 
        return (
            <>
                <div className="row mx-5 px-5 mt-3">
                    <div className="col-7 px-5 d-flex flex-column justify-content-center">
                        <div className='header'>
                            <h1>Make</h1>
                            <h1>Remote Work</h1>
                        </div>
                        <div className='content w-75'>
                            <p className='fs-5 my-5'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                            <button className='btn btn-dark btn-lg rounded-4'>Learn more</button>
                        </div>
                        <picture className='d-flex mt-5'>
                            <img className='me-5 h-75' src="../images/client-databiz.svg" alt="" />
                            <img className='me-5 h-75' src="../images/client-audiophile.svg" alt="" />
                            <img className='me-5 h-75' src="../images/client-meet.svg" alt="" />
                            <img className='me-5 h-75' src="../images/client-maker.svg" alt="" />
                        </picture>
                    </div>
                    <div className="col-5">
                        <img src="/images/image-hero-desktop.png" className='img w-100' alt="hero desktop image" />
                    </div>
                </div>
            </>
        );
    }
}
 
export default Home;