import React from 'react'
import { useHistory } from 'react-router-dom';
import Ecommerce from '../projects/ProjectImages/ecommerce.png';
import virtual_medic from '../projects/ProjectImages/virtual_medic.png';
import shop_management from '../projects/ProjectImages/shop_management.png';
import microfinance from '../projects/ProjectImages/microfinance.png';
import Kids_learning from '../projects/ProjectImages/Kids_learning.png';
import hospital from '../projects/ProjectImages/hospital.png';
import blogCoverPic from '../projects/ProjectImages/blogCoverPic.png';
import Portfolio from '../projects/ProjectImages/portfolio.png';
import MercedesBenz from '../projects/ProjectImages/mercedesBenz.png';

import './projects.css';


export default function ProjectSource() {
    const history = useHistory();
    
    return (
       
       <div style={{padding:'0px'}} className="container">
            <section id="portfolio" className="portfolio">
                <h1 style={{color:'#382266'}} className="portfolio__title d-flex justify-content-center">
                    Personal Projects<span className="portfolio__title__dot"></span>
                </h1>
                <h3 className="portfolio__description">
                    Examples of my projects build with HTML, CSS, Bootstrap, JavaScript, React.js, Express.js, Java, MS SQL, MongoDB, c#, Asp.Net Core.My portfolio includes
                    Web Applications, Desktop Applications, Android Application an insight into my recent accomplishments.
                </h3>
                <div className="portfolio__nav__container">
                    <button className="portfolio__nav__btn" data-btn-name="all-btn">All</button>
                    <button className="portfolio__nav__btn" data-btn-name="websites-btn">Web Apps</button>
                    <button className="portfolio__nav__btn" data-btn-name="illustrations-btn">Desktop Apps</button>
                    <button className="portfolio__nav__btn" data-btn-name="apps-btn">Android Apps</button>
                </div>
                <div style={{paddingBottom:'5px'}} className="portfolio__items-container">

                   <div onClick={()=>history.push('/mercedes-benz-project')} className="portfolio__item" >
                        
                        <img src={MercedesBenz} className="portfolio__item__thumbnail" alt="image hover effects"/>
                        <h2 className="portfolio__item__info">Mercedes Benz</h2>
                        <div className="portfolio__item__hover">
                        {/* <h2 className="portfolio__item__hover__title">Mercedes Benz Application<span
                            className="portfolio__title__dot title__dot--white"></span>
                        </h2> */}
                        <p className="portfolio__item__hover__description">Technology used React.js, Node.js, Express.js, MongoDB</p>
                        </div>
                
                    </div>

                    <div onClick={()=>history.push('/blog-project')} className="portfolio__item" >
                        
                        <img src={blogCoverPic} className="portfolio__item__thumbnail" alt="image hover effects"/>
                        <h2 className="portfolio__item__info">Blog</h2>
                        <div className="portfolio__item__hover">
                        <h2 className="portfolio__item__hover__title">Blog Application<span
                            className="portfolio__title__dot title__dot--white"></span>
                        </h2>
                        <p className="portfolio__item__hover__description">Blog Apps made with MERN stack</p>
                        </div>
                
                    </div>

                    <div onClick={()=>history.push('/ecommerce-project')} className="portfolio__item" >
                    
                        <img src={Ecommerce} className="portfolio__item__thumbnail" alt="image hover effects"/>
                        <h2 className="portfolio__item__info">Ecommerce Application</h2>
                        <div className="portfolio__item__hover">
                        <h2 className="portfolio__item__hover__title">Ecommerce Application<span
                            className="portfolio__title__dot title__dot--white"></span>
                        </h2>
                        <p className="portfolio__item__hover__description">Online store made with React.js and .Net core</p>
                        </div>
                   
                    </div>
                    
                    <div onClick={()=>history.push('/portfolio-project')} className="portfolio__item" data-name="website">
                    
                        <img src={Portfolio} className="portfolio__item__thumbnail" alt="image hover effects"/>
                        <h2 className="portfolio__item__info">Portfolio</h2>
                        <div className="portfolio__item__hover">
                        <h2 className="portfolio__item__hover__title">Personal Site<span
                            className="portfolio__title__dot title__dot--white"></span></h2>
                        <p className="portfolio__item__hover__description">Personal site made with React.js </p>
                        </div>
                   
                    </div>

                    <div onClick={()=>history.push('/virtual-doctor-project')} className="portfolio__item">
                    
                        <img src={virtual_medic} className="portfolio__item__thumbnail" alt="image hover effects"/>
                        <h2 className="portfolio__item__info">Virtual Doctor</h2>
                        <div className="portfolio__item__hover">
                        <h2 className="portfolio__item__hover__title">Virtual Doctor<span
                            className="portfolio__title__dot title__dot--white"></span></h2>
                        <p className="portfolio__item__hover__description">Virtual doctor made with React.js , .Net core , Machine learning</p>
                        </div>
                   
                    </div>


                    <div onClick={()=>history.push('/shopmanagement-project')} className="portfolio__item">
                    
                        <img src={shop_management} className="portfolio__item__thumbnail" alt="image hover effects"/>
                        <h2 className="portfolio__item__info">Shop Management</h2>
                        <div className="portfolio__item__hover">
                            <h2 className="portfolio__item__hover__title">Shop Management<span
                                className="portfolio__title__dot title__dot--white"></span></h2>
                            <p className="portfolio__item__hover__description">Shop Management made with Java and MS SQL</p>
                        </div>
                
                     </div>


                     <div onClick={()=>history.push('/microfinance-project')} className="portfolio__item">
                    
                    <img src={microfinance} className="portfolio__item__thumbnail" alt="image hover effects"/>
                    <h2 className="portfolio__item__info">Microfinance Management</h2>
                    <div className="portfolio__item__hover">
                        <h2 className="portfolio__item__hover__title">Microfinance Management<span
                            className="portfolio__title__dot title__dot--white"></span></h2>
                        <p className="portfolio__item__hover__description">Microfinance Management made with Java and MS SQL</p>
                    </div>
            
                 </div>



                 <div onClick={()=>history.push('/kids-learning-project')} className="portfolio__item">
                    
                    <img src={Kids_learning} className="portfolio__item__thumbnail" alt="image hover effects"/>
                    <h2 className="portfolio__item__info">kids Learning</h2>
                    <div className="portfolio__item__hover">
                        <h2 className="portfolio__item__hover__title">Kids Learning<span
                            className="portfolio__title__dot title__dot--white"></span></h2>
                        <p className="portfolio__item__hover__description">Kids Learning App made with Java , SQLite and Android Studio</p>
                    </div>
            
                 </div>


                 <div onClick={()=>history.push('/appointment-system-project')} className="portfolio__item">
                    
                    <img  src={hospital} className="portfolio__item__thumbnail" alt="image hover effects"/>
                    <h2 className="portfolio__item__info">Doctor Appoinment</h2>
                    <div className="portfolio__item__hover">
                        <h2 className="portfolio__item__hover__title">Doctor Appoinment<span
                            className="portfolio__title__dot title__dot--white"></span></h2>
                        <p className="portfolio__item__hover__description">Doctor Appoinment App made with Java , SQLite and Android Studio</p>
                    </div>
            
                 </div>
       
            </div>
            </section>
       </div>   
    )
}
