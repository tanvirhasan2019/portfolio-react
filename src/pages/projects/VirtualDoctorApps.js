import React from 'react'
import './ProjectSoucre.css'
import Jap from '../../images/jap.jpg';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import ReactPlayer from 'react-player/youtube'
import { useHistory } from 'react-router-dom';


export default function VirtualDoctorApps() {
    const history = useHistory();
    return (
        <div className="source-body"> 
    <div className="project__container">
   
        <header className="project__header">
        <h2 className="project__title project__title--white">Virtual Doctor<span
            className="contact__title__dot title__dot--white"></span></h2>
        
       
        <div className="project__header__img" >
            
        <div className='player-wrapper'>
                <ReactPlayer
                className='react-player'
                url='https://youtu.be/8uaIy1O-zBM'
                width='100%'
                height='100%'
                controls={true}
                />
            </div>
        </div>

        <div className="project__buttons-container">
           
            <a href="https://github.com/tanvirhasan2019/Medic" target="_blank" className="project__header__btn">GitHub</a>
        </div>
        </header>
    
        <main className="project__main-container">

        <div className="row d-flex justify-content-center arrow-sign">
           <ArrowDropDownCircleOutlinedIcon className="arrow-down-icon" />
        </div>
        <div className="project__flex">
            
            <div className="project__flex__item">
            <h2 className="project__flex__title">Project description</h2>
            <p className="project__flex__text">Virtual doctot is a website to check patients primary diseases</p>
            <p className="project__flex__text">In this project we used React.js to make it a SPA, and decision tree to build an efficient model to predict diseases</p>
            </div>
            <div className="project__flex__item">
            <h2 className="project__flex__title">Role</h2>
            <p className="project__flex__text">Design and development of the project by Group work</p>
            <h2 className="project__flex__title">Challenge:</h2>
            <p className="project__flex__text">Connect python class to React.js and data handling</p>
            <h2 className="project__flex__title">Skills</h2>
            <p className="project__flex__text">

                <span className="project__flex__skill">Frontent</span><br/>
                <span className="project__flex__skill project__flex__skill--pink">HTML</span>
                <span className="project__flex__skill project__flex__skill--pink">CSS</span>
                <span className="project__flex__skill project__flex__skill--pink">Bootstrap</span>
                <span className="project__flex__skill project__flex__skill--pink">React.js</span>
                <span className="project__flex__skill project__flex__skill--pink">JavaScript</span>

                <br/><span className="project__flex__skill">Backend</span><br/>
                <span className="project__flex__skill project__flex__skill--pink">C#</span>
                <span className="project__flex__skill project__flex__skill--pink">Python</span>
                <span className="project__flex__skill project__flex__skill--pink">Machine Learning</span>
                <span className="project__flex__skill project__flex__skill--pink">Asp.Net Core</span>
                
                
            </p>
            </div>
        </div>
        <a onClick={()=> history.push('/portfolio-project')} href="" class="project__main__btn project__main__btn--previous"><span
               className="project__main__btn__arrow">&larr;</span>Previous</a>

            <a onClick={()=> history.push('/shopmanagement-project')} href="" className="project__main__btn project__main__btn--next">Next<span
                className="project__main__btn__arrow">&rarr;</span></a>

        </main>
    
    </div>
    </div>
    )
}
