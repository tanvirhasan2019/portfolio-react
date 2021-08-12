import React from 'react'


export default function MyGallery() {
    return (
        <div style={{marginTop:'30px', padding:'0px'}} className="container">
        <section id="portfolio" className="portfolio">
            <h1 style={{color:'#382266'}} className="portfolio__title d-flex justify-content-center">
                Personal interest<span className="portfolio__title__dot"></span>
            </h1>
            
            <div className="portfolio__nav__container">
                <button className="portfolio__nav__btn" data-btn-name="all-btn">Football</button>
                <button className="portfolio__nav__btn" data-btn-name="websites-btn">Cricket</button>
                <button className="portfolio__nav__btn" data-btn-name="illustrations-btn">Badminton</button>
                <button className="portfolio__nav__btn" data-btn-name="apps-btn">Movie</button>
                <button className="portfolio__nav__btn" data-btn-name="apps-btn">Music</button>
            </div>
        
        </section>

      
   
    </div>
    )
}


/*

<div className="row">
           <div className="col">
             
             <Gallery photos={photos} />
           </div>
        </div>

        */