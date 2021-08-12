import React from 'react'
import './ProjectSoucre.css'
import Jap from '../../images/jap.jpg';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import ReactPlayer from 'react-player/youtube'
import { useHistory } from 'react-router-dom';

export default function Shopmangement() {
    const history = useHistory();

    return (
        <div className="source-body"> 
        <div className="project__container">
       
            <header className="project__header">
            <h2 className="project__title project__title--white">Shop Management System<span
                className="contact__title__dot title__dot--white"></span></h2>
            
            <div className="project__header__img" >
           
            <div className='player-wrapper'>
                <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=kUrcNFrYjNI'
                width='100%'
                height='100%'
                controls={true}
                />
            
            </div>
            </div>

            <div className="project__buttons-container">
                <a href="https://github.com/tanvirhasan2019/ShopManagement-Desktop-Application-" target="_blank" className="project__header__btn">GitHub</a>
            </div>
            </header>
        
            <main className="project__main-container">
    
            <div className="row d-flex justify-content-center arrow-sign">
               <ArrowDropDownCircleOutlinedIcon className="arrow-down-icon" />
            </div>
            <div className="project__flex">
                
                <div className="project__flex__item">
                <h2 className="project__flex__title">Project description</h2>
                <p className="project__flex__text">Shop management is a desktop application to store and manage sells, customer information and employees</p>
                <p className="project__flex__text">In this project I used Java, Netbeans. To store data i used MS SQL</p>
                </div>
                <div className="project__flex__item">
                <h2 className="project__flex__title">Role</h2>
                <p className="project__flex__text">Design and development of the project.</p>
                <h2 className="project__flex__title">Challenge:</h2>
                <p className="project__flex__text">Connect all  parts of the store like product page, customer payement due
                 and make it fully functional.</p>
                <h2 className="project__flex__title">Skills</h2>
                <p className="project__flex__text">
                    <span className="project__flex__skill">Java</span>
                    <span className="project__flex__skill">Netbeans</span>
                    <span className="project__flex__skill">MS SQL</span>
                   
                </p>
                </div>
            </div>
            <a onClick={()=> history.push('/virtual-doctor-project')} href="" class="project__main__btn project__main__btn--previous"><span
               className="project__main__btn__arrow">&larr;</span>Previous</a>

            <a onClick={()=> history.push('/microfinance-project')} href="" className="project__main__btn project__main__btn--next">Next<span
                className="project__main__btn__arrow">&rarr;</span></a>
            </main>
        
        </div>
        </div>
    )
}
