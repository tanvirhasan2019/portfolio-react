import React from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import Paper from '@material-ui/core/Paper';
import './Skill.css';
import AustLogo from '../images/education/Aust.png';
import Victoria from '../images/education/Victoria.png';
import Modern from '../images/education/Modern.png';


export default function EducationTimeline() {
    return (
        <div style={{marginTop:'20px', backgroundColor:'white', padding:'0px'}} className="container">
                <section id="portfolio" className="portfolio">
                    <h1 style={{color:'#382266'}} className="portfolio__title d-flex justify-content-center">
                        Educational Background<span className="portfolio__title__dot"></span>
                    </h1>
                    
                    <div className="portfolio__nav__container">
                        
                        <button className="portfolio__nav__btn" data-btn-name="websites-btn">University</button>
                        <button className="portfolio__nav__btn" data-btn-name="illustrations-btn">College</button>
                        <button className="portfolio__nav__btn" data-btn-name="apps-btn">School</button>
                    </div>
            
                </section>
                
                <Timeline lineColor={'#3f51b5'}>
                
                <TimelineItem
                    key="001"
                    dateText="2017 - 2021"
                    style={{ color: '#3f9c63' }}
                >
                    <Paper className="education-varsity"  elevation={3}>

                    <h3 className="varsity-name">Ahsanullah University Of Science And Technology</h3>
                     <div className="row d-flex justify-content-center"><img src = {AustLogo} alt="empty" className="varsity-logo" /> </div>
                    <h4 className="varsity-degree">Bachelor of Science in Computer Science And Engineering</h4>
                    <h4 className="varsity-degree">March 2017 to Dec 2021</h4>
                    <p className="varsity-location">
                      141 & 142, Love Road, Tejgaon Industrial Area, Dhaka-1208 , Bangladesh.
                    </p>
                  
                    </Paper>
                </TimelineItem>
                
                <TimelineItem
                    key="002"
                    className="timeline-item-dateinner-college-main"
                    dateComponent={(
                        <div
                         className="timeline-item-dateinner-college"
                         style={{marginTop:'-12px', width:'90%'}}
                        >
                            2014 – 2016
                        </div>
                        )}
                    style={{ color: '#e86971'}}
                    
                >
                   <Paper className="education-varsity"  elevation={3}>

                        <h3 className="college-name">Comilla Victoria Government College</h3>
                        <div className="row d-flex justify-content-center"><img src = {Victoria} alt="empty" className="college-logo" /> </div>
                        <h4 className="college-degree">Higher Secondary Certificate</h4>
                        <h4 className="college-degree">Jan 2014  to Jan 2016</h4>
                        <p className="college-location">
                         Ranir Dighi, Kandirpar, Cumilla 3500 , Bangladesh.
                        </p>

                    </Paper>

                </TimelineItem>
                <TimelineItem
                    key="003"
                    className="timeline-item-dateinner-school-main"
                    dateComponent={(
                        <div
                         className="timeline-item-dateinner-school"
                         style={{marginTop:'-12px', width:'90%'}}
                        >
                            2009 – 2014
                        </div>
                        )}
                    style={{ color: '#3f51b'}}
                    
                >
                   <Paper className="education-varsity"  elevation={3}>

                        <h3 className="school-name">Comilla Modern High School</h3>
                        <div className="row d-flex justify-content-center"><img src = {Modern} alt="empty" className="school-logo" /> </div>
                        <h4 className="school-degree">Secondary School Certificate</h4>
                        <h4 className="school-degree">Jan 2009  to jan 2014</h4>
                        <p className="school-location">
                          Nazrul avenue road Cumilla Adarsha Sadar, Cumilla 3500 , Bangladesh
                        </p>

                    </Paper>

                </TimelineItem>
                
                </Timeline>
        </div>
    )
}
