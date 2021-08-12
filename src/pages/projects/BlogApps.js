import React from 'react'
import './ProjectSoucre.css'
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import ReactPlayer from 'react-player/youtube'
import { useHistory } from 'react-router-dom';

export default function BlogApps() {
    const history = useHistory();

    return (
        <div className="source-body"> 
        <div className="project__container">
       
            <header className="project__header">
            <h2 className="project__title project__title--white">Blog Application<span
                className="contact__title__dot title__dot--white"></span></h2>
            <h3 className="project__description">A Blog web apps made with MERN stack</h3>
            <div className="project__header__img" >
            <div className='player-wrapper'>
                <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=JUzrktYMf04'
                width='100%'
                height='100%'
                controls={true}
                />
            </div>
            </div>

            <div className="project__buttons-container">
                <a href="https://blog-web-apps-client.herokuapp.com/" target="_blank" className="project__header__btn">Live Demo</a>
                <a href="https://github.com/tanvirhasan2019/BlogApplication" target="_blank" className="project__header__btn">GitHub</a>
            </div>
            </header>
        
            <main className="project__main-container">
    
            <div className="row d-flex justify-content-center arrow-sign">
               <ArrowDropDownCircleOutlinedIcon className="arrow-down-icon" />
            </div>
            <div className="project__flex">
                
                <div className="project__flex__item">
                <h2 className="project__flex__title">Project description</h2>
                <p className="project__flex__text">Blog web apps to read and share your feelings and can comment here.</p>
                <p className="project__flex__text">In this project I used React.js to make it a SPA, Redux to manage state of the
                    website
                    and Express.js to handle server side and MongoDb to store data </p>
                </div>
                <div className="project__flex__item">
                <h2 className="project__flex__title">Role</h2>
                <p className="project__flex__text">Design and development of the project.</p>
                <h2 className="project__flex__title">Challenge:</h2>
                <p className="project__flex__text">Security, faster response, state management and make it fully functional</p>
                <h2 className="project__flex__title">Skills</h2>
                <p className="project__flex__text">
                    <span className="project__flex__skill">Frontend</span>
                    <br/>
                    <span className="project__flex__skill project__flex__skill--pink">HTML</span>
                    <span className="project__flex__skill project__flex__skill--pink">CSS</span>
                    <span className="project__flex__skill project__flex__skill--pink">Bootstrap</span>
                    <span className="project__flex__skill project__flex__skill--pink">JavaScript</span>
                    <span className="project__flex__skill project__flex__skill--pink">React.js</span>
                    <span className="project__flex__skill project__flex__skill--pink">Redux</span>
                    <span className="project__flex__skill project__flex__skill--pink">Material ui</span>
    
                    <br/> <span className="project__flex__skill">Backend</span> <br/>
                    <span className="project__flex__skill project__flex__skill--pink">JavaScript</span>
                    <span className="project__flex__skill project__flex__skill--pink">Express.js</span>
                    <span className="project__flex__skill project__flex__skill--pink">MongoDB</span>
    
                </p>
                </div>
            </div>
            <a onClick={()=> history.push('/ecommerce-project')} href="" className="project__main__btn project__main__btn--next">Next<span
                className="project__main__btn__arrow">&rarr;</span></a>
            </main>
        
        </div>
        </div>
    )
}
