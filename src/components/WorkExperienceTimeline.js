import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Skill.css';
import BusinessIcon from '@material-ui/icons/Business';
export default function WorkExperienceTimeline() {
  return (
    <div style={{ paddingBottom: '20px' }} className="container skill-main">
      <section id="portfolio" className="portfolio">
        <div className="portfolio__nav__container">
          <button className="portfolio__nav__btn" data-btn-name="websites-btn">
            <p>Work Experience</p>
          </button>
        </div>
      </section>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#7078a9', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date={<div>
            <div>Roots edu</div>
            <p style={{ fontSize: '.8rem', marginTop: '-10px' }}>Software Engineer (Full Stack)</p>
            <p style={{ fontSize: '.8rem', marginTop: '-4px', color: 'red' }}>November 2021 - March 2023</p>
            <p style={{ fontSize: '.8rem', marginTop: '-4px' }}>🌍 Banani, Dhaka, Bangladesh</p>
          </div>}
          iconStyle={{ background: '#7078a9', color: '#fff' }}
          icon={<BusinessIcon />}
        >
          <div style={{ marginTop: '30px' }} className="col d-flex flex-row justify-content-between">
            <ul className="work-exp-ul">
              <li>Directly communicate with the CTO to discuss potential changes to the applications and to drive continuous improvement and
                security.</li>
              <li>Quickly learned new skills and applied them to daily tasks, improving efficiency and productivity</li>
              <li>Effectively managed, developed, and ensured on time delivery of all assigned projects.</li>
              <li>Troubleshooting and fixing code problems, resulting in site speeds.</li>
            </ul>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
