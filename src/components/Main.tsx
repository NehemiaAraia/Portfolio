import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQEct9TpmDUz-A/profile-displayphoto-shrink_800_800/B4EZT.FiSaGwAY-/0/1739429651966?e=1766016000&v=beta&t=A2kF_G4ij5dmA6RUPD_6Mt2bzHNYUl9FhSWMygfzcxI" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/NehemiaAraia" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/nehemia-araia/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Nehemia Araia</h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
  <p style={{ margin: 0 }}>Aspiring Cloud Professional</p>

 <a
  href={`${process.env.PUBLIC_URL}/Resume.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  className="resume-button"
>
  View Resume
</a>

</div>

          <div className="mobile_social_icons">
            <a href="https://github.com/NehemiaAraia" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/nehemia-araia/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;