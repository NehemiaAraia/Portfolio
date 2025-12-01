import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Terraform",
    "CloudFormation",
    "AWS",
    "Azure",
    "GCP",
    "EKS/ECS",
    "Bedrock",
    "IAM",
    "Linux"
    
];

const labelsSecond = [
    "Kubernetes",
    "Docker",
    "Jenkins",
    "Github Actions",
    "Trivy",
    "Docker Scout",
    "SonarQube",
    "Semgrep",
    "Prometheus",
    "Grafana",
    
];

const labelsThird = [
    "PyTorch",
    "TensorFlow",
    "LangChain",
    "Hugging Face",
    "LoRA",
    "FAISS",
    "Fast API",
    
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Cloud Infrastructure & Design</h3>
                    <p>Designed secure cloud systems with IaC to automate deployments and keep environments consistent and reliable. Centered my work on secure cloud workloads that use orchestration and automation that maintain consistent performance.
</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevSecOps & Automation</h3>
                    <p>Built secure pipelines that automate scanning, hardening, and deployments across cloud and containerized workloads. I aim to shift security left by using early scanning and validation to strengthen builds before they reach production.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Agentic AI & Security</h3>
                    <p>Engineered LLM-powered systems that automate vulnerability detection, event summarization, and cloud threat analysis. I focus on agentic workflows and model tuning that improve detection accuracy and simplify security operations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;