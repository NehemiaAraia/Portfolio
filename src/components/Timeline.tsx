import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Nov 2025 - present"
            iconStyle={{ background: '#ffffff', color: 'rgb(39, 40, 34)' }}
            icon={
<div
  style={{
    width: '98%',
    height: '98%',
    borderRadius: '50%',
    border: '1px solid white',
    overflow: 'hidden',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <img
    src="https://media.licdn.com/dms/image/v2/C560BAQGXdn7iltWDFg/company-logo_200_200/company-logo_200_200/0/1661792335570/team_handshake_logo?e=1766016000&v=beta&t=JiqVpMyhydIQPGEmzoMPUhluTgp8_nXFogGizC_CIkU"
    alt="Handshake Logo"
    style={{
      width: '105%',
      height: '105%',
      objectFit: 'contain',
      border: 'none',
      marginLeft: '4px'
    }}
  />
</div>

}

          >
            <h3 className="vertical-timeline-element-title">Handshake AI Fellow</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
              Model Evaluation, Prompt Engineering, Saftey Assesment, Applied AI Research
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2025 - Present"
            iconStyle={{ background: '#ffffff', color: 'rgb(39, 40, 34)' }}
            icon={
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    }}
  >
    <img
      src="https://www.odu.edu/sites/default/files/logos/univ/png-72dpi/odu-secondary-noidea-fullcolor.png"
      alt="AWS Logo"
      style={{
        width: '75%',
        height: '75%',
        borderRadius: '20%',
        objectFit: 'contain',
      }}
    />
  </div>
}
          >
            <h3 className="vertical-timeline-element-title">Security Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Norfolk, VA</h4>
            <p>
              Incident Response, Threat Analysis, Alert Triage, SOC Operations
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2025 - Aug 2025"
            iconStyle={{ background: '#ffffff', color: 'rgb(39, 40, 34)' }}
            icon={
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    }}
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png"
      alt="AWS Logo"
      style={{
        width: '90%',
        height: '90%',
        borderRadius: '20%',
        objectFit: 'contain',
        transform: 'translateY(4px)',
      }}
    />
  </div>
}
          >
            <h3 className="vertical-timeline-element-title">Cloud Support Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Dallas, TX</h4>
            <p>
              Cloud Architecture, IaC Automation, Container Orchestration, Infrastructure Hardening
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2024 - Aug 2024"
            iconStyle={{ background: '#ffffff', color: 'rgb(39, 40, 34)' }}
            icon={
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    }}
  >
    <img
      src="https://www.nwfcu.org/wp-content/uploads/2024/08/NWFCU_allblueNW_square-01.jpg"
      alt="AWS Logo"
      style={{
        width: '90%',
        height: '90%',
        borderRadius: '20%',
        objectFit: 'contain',
      }}
    />
  </div>
}
          >
            <h3 className="vertical-timeline-element-title">IT Security Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Herndon, VA</h4>
            <p>
              System Administration, Incident Response, Malware Prevention & Detection, Patch Management
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;