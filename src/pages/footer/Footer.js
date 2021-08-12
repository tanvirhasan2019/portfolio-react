import React from 'react'
import './Footer.css';
import { Button as PrimeButton } from 'primereact/button';
import Paper from '@material-ui/core/Paper';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import Avatar from '@material-ui/core/Avatar';
import Mypic from '../../images/mypic.jpg';


export default function Footer() {
    return (
        <div style={{backgroundColor:'black', padding:'40px'}} className="container-fluid container-footer-main pb-0 mb-0 justify-content-center text-light ">
        <footer style={{backgroundColor:'black', margin:'0px'}}>
            <div className="row my-5 justify-content-center py-5">
                <div className="col-11">
                    <div className="row ">
                        <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                            <h3 className="text-muted mb-md-0 mb-5 bold-text footer-address">Md Tanvir Hasan Tanshen</h3>
                            <p className="text-muted mb-md-0 mb-5 bold-text footer-address">
                                A passionate Full Stack Software Developer.<br/>Designing and building Web  
                                applications with JavaScript <br/> Reactjs / Nodejs / .Net and some other cool libraries
                                and frameworks.</p>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                            
                            <ul className="list-unstyled">
                                <li className="footer-social-icon">
                                  <a style={{color:'white'}} href="https://www.instagram.com/tanvirhasantanshen/"><InstagramIcon fontSize="large" /> </a>        
                                </li>
                                <li className="footer-social-icon">
                                  <a style={{color:'white'}} href="https://github.com/tanvirhasan2019"> <GitHubIcon fontSize="large" /> </a>
                                </li>
                                <li className="footer-social-icon">
                                 <a style={{color:'white'}} href="https://www.linkedin.com/in/tanvir-tanshen-501042159?fbclid=IwAR1fbGLMssgAQc01d3hz6qJ2xP0GeHBgjb3Yz6hFsrNEF8WLTlTexqo4rDw"> <LinkedInIcon fontSize="large" /> </a>
                                </li>
                                <li className="footer-social-icon">
                                 <a style={{color:'white'}} href="https://www.facebook.com/tanvirhasan.tanshen.7/"> <FacebookIcon fontSize="large" /> </a>
                                </li>

                            </ul>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-4 col-12 footer-address">
                            <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5 footer-address">
                                ADDRESS
                            </h6>
                            <p className="mb-1">357/7, Modhubag, Moghbazar, Dhaka, Bangladesh</p>
                            
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                            <p className="social text-muted mb-0 pb-0 bold-text"> <span className="mx-2"><i className="fa fa-facebook" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-linkedin-square" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-twitter" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-instagram" aria-hidden="true"></i></span> </p><small className="rights footer-address"><span>&#174;</span>All Rights Reserved by Tanshen</small>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                          <Avatar alt="tanshen" src={Mypic} style={{width:'40px', height:'40px', margin:'10px'}} />
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                            <h6 className="text-muted bold-text footer-address">
                                <b>MD Tanvir Hasan Tanshen</b>
                                </h6><small className="footer-address"><span><i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>tanvirhasan.tanshen2019@gmail.com
                                </small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    )
}
