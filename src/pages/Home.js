import React from 'react'
import './Home.css';
import Mypic from '../images/mypic.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Avatar from '@material-ui/core/Avatar';
import EducationTimeline from '../components/EducationTimeline';
import SkillTimeline from '../components/SkillTimeline';
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import GetAppIcon from '@material-ui/icons/GetApp';
import ProjectSource from './projects/ProjectSource';
import { Button as PrimeButton } from 'primereact/button';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Footer from '../pages/footer/Footer';
import FutureWork from './Futureplan/FutureWork';
import MyGallery from '../components/MyGallery';
import WorkExperienceTimeline from '../components/WorkExperienceTimeline';
export default function Home() {
   return (
      <div>
         <div className="container-fluid">
            <div style={{ margin: '15px 15px' }} className="row">
               <div className="col-md-6 d-flex flex-column justify-content-center">
                  <div className="row">
                     <div className="col">
                        <p className="myname-title"> Hi all, I'm Tanvir Hasan Tanshen 👋 </p>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col">
                        <p className="motivate">Full Stack Web Developer 💻 / Specialize in Node.js, React.js, Express.js, MongoDB, and PostgreSQL 🚀 / Constantly seeking new challenges to push my skills to the next level 🔥</p>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col d-flex justify-content-between">
                        <div className="button-demo">
                           <div className="template">
                              <div style={{ marginTop: '20px' }} className="row d-flex justify-content-between">
                                 <div className="col-xm-12 col-sm-4 col-md-3">
                                    <Paper elevation={3}>
                                       <a href="https://www.instagram.com/tanvirhasantanshen/" >
                                          <PrimeButton style={{ height: '40px' }} className="youtube p-p-0">
                                             <span style={{ backgroundColor: 'var(--pink-700)', height: '100%', width: '32px' }}>
                                                <InstagramIcon fontSize="small" style={{ marginTop: '10px' }} />
                                             </span>
                                             <span className="p-px-3">Instagram</span>
                                          </PrimeButton>
                                       </a>
                                    </Paper>
                                 </div>

                                 <div className="col-xm-12 col-sm-4 col-md-3">
                                    <Paper elevation={3}>
                                       <a href="https://www.facebook.com/tanvirhasan.tanshen.7/" >
                                          <PrimeButton style={{ height: '40px' }} className="facebook p-p-0">
                                             <i className="pi pi-facebook p-px-2"></i>
                                             <span className="p-px-3">Facebook</span>
                                          </PrimeButton>
                                       </a>
                                    </Paper>
                                 </div>

                                 <div className="col-xm-12 col-sm-4 col-md-3">
                                    <a href="https://www.linkedin.com/in/tanvir-tanshen-501042159?fbclid=IwAR1fbGLMssgAQc01d3hz6qJ2xP0GeHBgjb3Yz6hFsrNEF8WLTlTexqo4rDw" >
                                       <PrimeButton style={{ height: '40px' }} className="twitter p-p-0">
                                          <span style={{ backgroundColor: '#2196f3', height: '100%', width: '32px' }}>
                                             <LinkedInIcon fontSize="small" style={{ marginTop: '10px' }} />
                                          </span>
                                          <span className="p-px-3">LinkedIn</span>
                                       </PrimeButton>
                                    </a>
                                 </div>

                                 <div className="col-xm-12 col-sm-4 col-md-3">
                                    <a href="https://github.com/tanvirhasan2019" >
                                       <PrimeButton style={{ height: '40px' }} className="discord p-p-0">

                                          <i className="pi pi-github p-px-2"></i>

                                          <span className="p-px-3">Github</span>
                                       </PrimeButton>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div style={{ marginTop: '40px' }} className="row">
                     <div className="col-md-6">
                        <a href="https://drive.google.com/drive/folders/1VdjZIWfJXOluRKdVzozr8e8WzWN_Nm4z?usp=sharing">
                           <Button
                              style={{ width: '95%' }}
                              variant="contained"
                              color="primary"
                              endIcon={<GetAppIcon />}
                           >
                              Download CV
                           </Button>
                        </a>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <Avatar alt="tanshen" src={Mypic} style={{ width: '50%', height: '70%' }} className="my-avatar" />
               </div>
            </div>
            <div style={{ margin: '30px' }} className="row">
               <WorkExperienceTimeline />
            </div>
            <div style={{ margin: '30px' }} className="row">
               <SkillTimeline />
            </div>
            <div style={{ margin: '30px' }} className="row">
               <ProjectSource />
            </div>
            <div style={{ margin: '30px' }} className="row">
               <FutureWork />
            </div>

            <div style={{ margin: '30px' }} className="row">
               <EducationTimeline />
            </div>
            <div style={{ margin: '30px' }} className="row">
               <MyGallery />
            </div>
            <div className="row">
               <Footer />
            </div>
         </div>
      </div>
   )
}
