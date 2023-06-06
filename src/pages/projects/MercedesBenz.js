import React from 'react'
import './ProjectSoucre.css'
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import ReactPlayer from 'react-player/youtube'
import { useHistory } from 'react-router-dom';
export default function MercedesBenz() {
    const history = useHistory();
    return (
        <div className="source-body">
            <div className="project__container">
                <header className="project__header">
                    <h2 className="project__title project__title--white">Mercedes Benz<span
                        className="contact__title__dot title__dot--white"></span></h2>
                    <div className="project__header__img" >
                        <div className='player-wrapper'>
                            <ReactPlayer
                                className='react-player'
                                url='https://youtu.be/p88T1HZc08o'
                                width='100%'
                                height='100%'
                                controls={true}
                            />
                        </div>


                    </div>
                    <div className="project__buttons-container">
                        <a href="https://mercedes-benz-dhaka.netlify.app/" target="_blank" className="project__header__btn">Live Demo</a>
                        <a href="https://github.com/tanvirhasan2019/marcedes-benz" target="_blank" className="project__header__btn">GitHub</a>
                    </div>
                </header>

                <main className="project__main-container">

                    <div className="row d-flex justify-content-center arrow-sign">
                        <ArrowDropDownCircleOutlinedIcon className="arrow-down-icon" />
                    </div>
                    <div className="project__flex">

                        <div className="project__flex__item">
                            <h2 className="project__flex__title">Project description</h2>
                            <p className="project__flex__text">
                                The Mercedes Benz Experience project is a comprehensive platform that allows users to search and view details of various Mercedes Benz car models.
                                It offers a wide range of features, including access to videos showcasing the brand's cars in action,
                                updates on sports events, milestones, and a virtual museum. Additionally, users can conveniently book
                                tickets for exclusive Mercedes Benz events through the platform. It provides an immersive and engaging
                                experience for car enthusiasts and fans of the luxury automobile brand.
                            </p>
                        </div>
                        <div className="project__flex__item">
                            <h2 className="project__flex__title">Role</h2>
                            <p className="project__flex__text">Design and development of the project.</p>
                            {/* <h2 className="project__flex__title">Challenge:</h2>
                            <p className="project__flex__text"></p> */}
                            <h2 className="project__flex__title">Skills</h2>
                            <p className="project__flex__text">
                                <span className="project__flex__skill">Frontend</span><br />
                                <span className="project__flex__skill project__flex__skill--pink">Html</span>
                                <span className="project__flex__skill project__flex__skill--pink">Css</span>
                                <span className="project__flex__skill project__flex__skill--pink">JavaScript</span>
                                <span className="project__flex__skill project__flex__skill--pink">React.js</span>
                                <span className="project__flex__skill project__flex__skill--pink">Mui Material</span>
                                <span className="project__flex__skill project__flex__skill--pink">Typescript</span>
                                <br /><span className="project__flex__skill">Backend</span><br />
                                <span className="project__flex__skill project__flex__skill--pink">JavaScript</span>
                                <span className="project__flex__skill project__flex__skill--pink">Node.js</span>
                                <span className="project__flex__skill project__flex__skill--pink">Express.js</span>
                                <span className="project__flex__skill project__flex__skill--pink">MongoDb</span>
                            </p>
                        </div>
                    </div>

                    {/* <a onClick={() => history.push('/blog-project')} href="" class="project__main__btn project__main__btn--previous"><span
                        className="project__main__btn__arrow">&larr;</span>Previous</a> */}

                    <a onClick={() => history.push('/blog-project')} href="" className="project__main__btn project__main__btn--next">Next<span
                        className="project__main__btn__arrow">&rarr;</span></a>
                </main>
            </div>
        </div>
    )
}
