import React, { Component } from 'react';
import '../src/scss/homePage.scss'

class Home extends Component {

    render() { 
        return (
            <>
                <section>
                    <div className="infoSide">
                        <h1>Make Remote Work</h1>
                        <p className=''>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                        <button className='btn btn-dark btn-lg rounded-4'>Learn more</button>
                        <picture className=''>
                            <img src="images/client-databiz.svg" />
                            <img src="images/client-audiophile.svg" />
                            <img src="images/client-meet.svg" />
                            <img src="images/client-maker.svg" />
                        </picture>
                    </div>
                    <div className="imgBlock">
                        <img src="images/image-hero-mobile.png" className='hero-mimg' alt="hero desktop image" />
                        <img src="images/image-hero-desktop.png" className='hero-dimg' alt="hero desktop image" />
                    </div>
                </section>
            </>
        );
    }
}
 
export default Home;