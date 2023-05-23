import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Skill.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Java from '../images/java.gif';
import Cs_icon from '../images/c#.png';
import C_icon from '../images/c++.png';
import Html_icon from '../images/html.png';
import JavaScript_icon from '../images/javascript.gif';
import Mongo_icon from '../images/mongoDb.png';
import React_icon from '../images/react_icon.gif';
import Css_icon from '../images/css.png';
import Sql_icon from '../images/sql.png';
import Chip from '@material-ui/core/Chip';
import Rating from '@material-ui/lab/Rating';
export default function SkillTimeline() {
  return (
    <div style={{paddingBottom: '20px'}} className="container skill-main">
      <section id="portfolio" className="portfolio">
        <h1 style={{ color: '#382266' }} className="portfolio__title d-flex justify-content-center">
          Skills<span className="portfolio__title__dot"></span>
        </h1>
        <div className="portfolio__nav__container">
          <button className="portfolio__nav__btn" data-btn-name="websites-btn">
            <img style={{ width: '50px', height: '50px' }} src={Sql_icon} alt="empty" />
          </button>
          <button className="portfolio__nav__btn" data-btn-name="websites-btn">
            <img style={{ width: '50px', height: '50px' }} src={Java} alt="empty" />
          </button>
          <button className="portfolio__nav__btn" data-btn-name="websites-btn">
            <img style={{ width: '50px', height: '50px' }} src={JavaScript_icon} alt="empty" />
          </button>
          <button className="portfolio__nav__btn" data-btn-name="websites-btn">
            <img style={{ width: '50px', height: '50px' }} src={Css_icon} alt="empty" />
          </button>
          <button className="portfolio__nav__btn" data-btn-name="websites-btn">
            <img style={{ width: '50px', height: '50px' }} src={Html_icon} alt="empty" />
          </button>
          <button className="portfolio__nav__btn" data-btn-name="websites-btn">
            <img style={{ width: '50px', height: '50px' }} src={Cs_icon} alt="empty" />
          </button>
          <button className="portfolio__nav__btn" data-btn-name="websites-btn">
            <img style={{ width: '50px', height: '50px' }} src={Mongo_icon} alt="empty" />
          </button>
          <button className="portfolio__nav__btn" data-btn-name="websites-btn">
            <img style={{ width: '50px', height: '50px' }} src={React_icon} alt="empty" />
          </button>
          <button className="portfolio__nav__btn" data-btn-name="websites-btn">
            <img style={{ width: '50px', height: '50px' }} src={C_icon} alt="empty" />
          </button>
        </div>
      </section>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#7078a9', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="MERN STACK"
          iconStyle={{ background: '#7078a9', color: '#fff' }}
          icon={<AddCircleIcon />}
        >
          <div style={{ marginTop: '30px' }} className="col d-flex flex-row justify-content-between">
            <Chip
              style={{ height: '40px' }}
              label="  JAVASCRIPT  "
            />
            <Chip
              style={{ height: '40px' }}
              label="  REACT.JS "
            />
            <Chip
              style={{ height: '40px' }}
              label="  EXPRESS.JS  "
            />
            <Chip
              style={{ height: '40px' }}
              label="  MONGODB  "
            />
          </div>
          <div style={{ marginTop: '20px' }} className="col d-flex flex-row justify-content-between">
            <Chip
              style={{ height: '40px' }}
              label="  HTML  "
            />
            <Chip
              style={{ height: '40px' }}
              label="  CSS "
            />
            <Chip
              style={{ height: '40px' }}
              label="  NODEJS  "
            />
            <Chip
              style={{ height: '40px' }}
              label="  MUI MATERIAL  "
            />
          </div>
          <div style={{ marginTop: '30px' }} className="col d-flex flex-row justify-content-center">
            <Rating style={{ color: 'white' }} name="read-only" value={5} readOnly />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#7078a9', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date=".NET CORE"
          iconStyle={{ background: '#7078a9', color: '#fff' }}
          icon={<AddCircleIcon />}
        >
          <div style={{ marginTop: '30px' }} className="col d-flex flex-row justify-content-between">
            <Chip
              style={{ height: '40px' }}
              label="  C#  "
            />
            <Chip
              style={{ height: '40px' }}
              label="  ASP.NET CORE "
            />
            <Chip
              style={{ height: '40px' }}
              label="  MVC  "
            />
            <Chip
              style={{ height: '40px' }}
              label="  MS SQL  "
            />
          </div>
          <div style={{ marginTop: '20px' }} className="col d-flex flex-row justify-content-between">
            <Chip
              style={{ height: '40px' }}
              label="  SPA(REACT)  "
            />
            <Chip
              style={{ height: '40px' }}
              label="  SIGNALR "
            />
            <Chip
              style={{ height: '40px' }}
              label="  HTML  "
            />
            <Chip
              style={{ height: '40px' }}
              label="  CSS   "
            />
          </div>
          <div style={{ marginTop: '30px' }} className="col d-flex flex-row justify-content-center">
            <Rating style={{ color: 'white' }} name="read-only" value={5} readOnly />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#7078a9', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="DESKTOP APPLICATION"
          iconStyle={{ background: '#7078a9', color: '#fff' }}
          icon={<AddCircleIcon />}
        >
          <div style={{ marginTop: '30px' }} className="col d-flex flex-row justify-content-between">
            <Chip
              style={{ height: '40px' }}
              label="  JAVA  "
            />
            <Chip
              style={{ height: '40px' }}
              label="  NETBEANS "
            />
            <Chip
              style={{ height: '40px' }}
              label="  MS SQL  "
            />
          </div>
          <div style={{ marginTop: '30px' }} className="col d-flex flex-row justify-content-center">
            <Rating style={{ color: 'white' }} name="read-only" value={4} readOnly />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#7078a9', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="ANDROID APPLICATION"
          iconStyle={{ background: '#7078a9', color: '#fff' }}
          icon={<AddCircleIcon />}
        >
          <div style={{ marginTop: '30px' }} className="col d-flex flex-row justify-content-between">
            <Chip
              style={{ height: '40px' }}
              label="  ANDROID STUDIO  "
            />
            <Chip
              style={{ height: '40px' }}
              label="  ANDROID XML "
            />
            <Chip
              style={{ height: '40px' }}
              label="  JAVA  "
            />
          </div>
          <div style={{ marginTop: '20px' }} className="col d-flex flex-row justify-content-around">
            <Chip
              style={{ height: '40px' }}
              label="  FIREBASE  "
            />
            <Chip
              style={{ height: '40px' }}
              label="  SQLITE "
            />
          </div>
          <div style={{ marginTop: '30px' }} className="col d-flex flex-row justify-content-center">
            <Rating style={{ color: 'white' }} name="read-only" value={3} readOnly />
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
