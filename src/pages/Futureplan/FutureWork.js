import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import './FuturePlan.css';

export default function FutureWork() {

    const [selection, setSelection] = useState([]);

    const data1 = [
            {
                label: 'Software Development',
                className: 'department-cto',
                expanded: true,
                children: [{
                    label: 'Web Application',
                    className: 'department-cto',
                    expanded: true,
                    children: [{
                        label: 'MERN STACK',
                        className: 'department-cto'
                    },
                    {
                        label: '.NET',
                        className: 'department-cto'
                    },
                    {
                        label: 'SERVER LESS (AWS)',
                        className: 'department-cto'
                    }]
                },
                {
                    label: 'Mobile Application',
                    className: 'department-cto',
                    expanded: true,
                    children: [{
                        label: 'React Native',
                        className: 'department-cto'
                    }]
                    
                },
                {
                    label: 'Desktop Application',
                    className: 'department-cto',
                    expanded: true,
                    children: [{
                        label: 'Electron.js',
                        className: 'department-cto'
                    }]
                }]
            }
    ]

    

    const nodeTemplate = (node) => {
        if (node.type === "person") {
            return (
                <div>
                    <div className="node-header">{node.label}</div>
                    <div className="node-content">
                        <img alt={node.data.avatar} src={`showcase/demo/images/organization/${node.data.avatar}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} style={{ width: '32px' }} />
                        <div>{node.data.name}</div>
                    </div>
                </div>
            );
        }

        if (node.type === "department") {
            return node.label;
        }
    }


    return (
       
        <div style={{padding:'0px'}} className="container">
            <section id="portfolio" className="portfolio">
                <h1 style={{color:'#382266'}} className="portfolio__title d-flex justify-content-center">
                    LEARNING<span className="portfolio__title__dot"></span>
                </h1>
              
                <div className="portfolio__nav__container">
                    
                    <button className="portfolio__nav__btn" data-btn-name="websites-btn">Web Apps</button>
                    <button className="portfolio__nav__btn" data-btn-name="illustrations-btn">Desktop Apps</button>
                    <button className="portfolio__nav__btn" data-btn-name="apps-btn">Mobile Apps</button>

                </div>
            
            </section>

            <div className="row">
               <div className="col">
               <div className="organizationchart-demo">
                    <div style={{border:'none'}} className="card">
                        
                        <OrganizationChart value={data1} nodeTemplate={nodeTemplate} selection={selection} selectionMode="multiple"
                            onSelectionChange={event => setSelection(event.data)} className="company"></OrganizationChart>

                        </div>
                    </div>
               </div>
            </div>
       
        </div>
    )
}
