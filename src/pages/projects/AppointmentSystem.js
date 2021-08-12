import React from 'react'
import './ProjectSoucre.css'
import Jap from '../../images/jap.jpg';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import ReactPlayer from 'react-player/youtube'
import { useHistory } from 'react-router-dom';

export default function AppointmentSystem() {
    const history = useHistory();

    return (
        <div className="source-body"> 
    <div className="project__container">
   
        <header className="project__header">
        <h2 className="project__title project__title--white">Hospital Appointment System<span
            className="contact__title__dot title__dot--white"></span></h2>
        
        <div className="project__header__img" >

        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player'
            url='https://youtu.be/14xqiWiEpUo'
            width='100%'
            height='100%'
            controls={true}
            />
        </div>
        </div>
        <div className="project__buttons-container">
            <a href="https://github.com/tanvirhasan2019/All-Android-Apps/tree/master/Hospital01" target="_blank" className="project__header__btn">GitHub</a>
        </div>
        </header>
    
        <main className="project__main-container">

        <div className="row d-flex justify-content-center arrow-sign">
           <ArrowDropDownCircleOutlinedIcon className="arrow-down-icon" />
        </div>
        <div className="project__flex">
            
            <div className="project__flex__item">
            <h2 className="project__flex__title">Project description</h2>
            <p className="project__flex__text">Patients can take appointment and can see location and hosptal important information also can call emergency and ambulance</p>
            <p className="project__flex__text">In this project I used Java and Android Studio</p>
            </div>
            <div className="project__flex__item">
            <h2 className="project__flex__title">Role</h2>
            <p className="project__flex__text">Design and development of the project.</p>
            <h2 className="project__flex__title">Challenge:</h2>
            <p className="project__flex__text">Implementation of the location</p>
            <h2 className="project__flex__title">Skills</h2>
            <p className="project__flex__text">
     
                <span className="project__flex__skill project__flex__skill--pink">Java</span>
                <span className="project__flex__skill project__flex__skill--pink">Android XML</span>
                <span className="project__flex__skill project__flex__skill--pink">android Studio</span>
              
            </p>
            </div>
        </div>
       <a onClick={()=> history.push('/kids-learning-project')} href="" class="project__main__btn project__main__btn--previous"><span
               className="project__main__btn__arrow">&larr;</span>Previous</a>

    
        </main>
    
    </div>
    </div>
    )
}
