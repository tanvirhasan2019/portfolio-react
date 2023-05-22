import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import EcommerceProject from './pages/projects/EcommerceProject';
import BlogApps from './pages/projects/BlogApps';
import PortfolioApps from './pages/projects/PortfolioApps';
import VirtualDoctorApps from './pages/projects/VirtualDoctorApps';
import Shopmangement from './pages/projects/Shopmangement';
import Microfinance from './pages/projects/Microfinance';
import AppointmentSystem from './pages/projects/AppointmentSystem';
import Kidslearning from './pages/projects/Kidslearning';
import Skill from './components/SkillTimeline';
import Education from './components/EducationTimeline';
import WorkExperience from './pages/projects/ProjectSource';
import MercedesBenz from './pages/projects/MercedesBenz';
import Header from './components/header/Header';
function App() {
  return (
    <BrowserRouter>
             <Header/>
            <Route path="/" exact component={Home} />
            <Route path="/mercedes-benz-project" exact component={MercedesBenz} />
            <Route path="/ecommerce-project" exact component={EcommerceProject} />
            <Route path="/blog-project" exact component={BlogApps} />
            <Route path="/portfolio-project" exact component={PortfolioApps} />
            <Route path="/virtual-doctor-project" exact component={VirtualDoctorApps} />
            <Route path="/shopmanagement-project" exact component={Shopmangement} />
            <Route path="/microfinance-project" exact component={Microfinance} />
            <Route path="/appointment-system-project" exact component={AppointmentSystem} />
            <Route path="/kids-learning-project" exact component={Kidslearning} />

            <Route path="/my-skills" exact component={Skill} />
            <Route path="/my-projects" exact component={WorkExperience} />
            <Route path="/my-education" exact component={Education} />

    </BrowserRouter>
  );
}

export default App;
