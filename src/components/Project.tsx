import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/NehemiaAraia/Security-AI-Agent-for-Vulnerability-Assessment" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/NehemiaAraia/Security-AI-Agent-for-Vulnerability-Assessment" target="_blank" rel="noreferrer"><h2>SecureScan Agent</h2></a>
                <p>Built an AI security agent by fine-tunning a compact LLM with LoRA and a RAG workflow to detect code and IaC vulnerabilities, map them to CWE and CVSS, and validate fixes with Semgrep, Tfsec, and Checkov which improved detection accuracy and accelerated secure reviews.</p>
            </div>
            <div className="project">
                <a href="https://github.com/NehemiaAraia/Netflix-Clone-Deployment-on-Kubernetes-with-DevSecOps-Integration" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/NehemiaAraia/Netflix-Clone-Deployment-on-Kubernetes-with-DevSecOps-Integration" target="_blank" rel="noreferrer"><h2>Secure Netflix Deployment</h2></a>
                <p>Deployed a secure Netflix clone on Kubernetes using Jenkins, Docker, SonarQube, Trivy, Helm, ArgoCD, Prometheus, and Grafana to deliver a fully automated DevSecOps workflow.</p>
            </div>
            <div className="project">
                <a href="https://github.com/NehemiaAraia/Highly-Available-Scalable-Containerized-Application-Deployment" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/NehemiaAraia/Highly-Available-Scalable-Containerized-Application-Deployment" target="_blank" rel="noreferrer"><h2>Scalable Pacman App</h2></a>
                <p>Built a highly available, scalable Pacman application on Amazon ECS using Terraform by deploying containerized workloads with load balancing, auto scaling, and security best practices to handle real traffic efficiently.</p>
            </div>
            <div className="project">
                <a href="https://github.com/NehemiaAraia/Deepfake-Detection-with-Python" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/NehemiaAraia/Deepfake-Detection-with-Python" target="_blank" rel="noreferrer"><h2>Deepfake Detection</h2></a>
                <p>Built a deepfake detection system in Python that uses OpenCV, NumPy, and scikit image to extract video frames and analyze them with MSE and SSIM metrics to highlight manipulated segments and verify authenticity.
</p>
            </div>
            <div className="project">
                <a href="https://github.com/NehemiaAraia/Interactive-ML-Chat-Assistant" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/NehemiaAraia/Interactive-ML-Chat-Assistant" target="_blank" rel="noreferrer"><h2>SmartChat</h2></a>
                <p>Developed a machine learning powered chatbot by training a neural network with TensorFlow, NLTK, custom intent datasets, tokenization, and embeddings to classify user intent and generate context-aware responses through a streamlined Python and Flask interface.</p>
            </div>
            <div className="project">
                <a href="https://github.com/NehemiaAraia/AI-Driven-Cloud-Threat-Analysis-and-Compliance-Mapping" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/NehemiaAraia/AI-Driven-Cloud-Threat-Analysis-and-Compliance-Mapping" target="_blank" rel="noreferrer"><h2>ThreatMap AI</h2></a>
                <p>Engineered an automated threat analysis system with CloudFormation that uses Bedrock to summarize GuardDuty findings, map alerts to NIST and CIS controls, correlate CloudTrail logs, store structured incidents in DynamoDB, and sends an email alert with an AI generated summary to help teams quickly understand and respond to security risks.</p>
            </div>
            <div className="project">
                <a href="https://github.com/NehemiaAraia/AI-Powered-Meeting-Summarizer" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/NehemiaAraia/AI-Powered-Meeting-Summarizer" target="_blank" rel="noreferrer"><h2>AI Meeting Summarizer</h2></a>
                <p>Built an AI powered meeting summarizer using Bedrock, Transcribe, Lambda, S3, and IAM to automatically convert uploaded audio into transcripts and concise summaries that highlight key decisions, action items, and next steps, helping teams quickly catch up on missed meetings.</p>
            </div>
            <div className="project">
                <a href="https://github.com/NehemiaAraia/Secure-DevSecOps-Pipeline" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/NehemiaAraia/Secure-DevSecOps-Pipeline" target="_blank" rel="noreferrer"><h2>Secure CI/CD Pipeline</h2></a>
                <p>Built a secure CI/CD pipeline using Docker, automated SAST/SCA scanning, SBOM generation, and distroless images to enforce DevSecOps controls, reduce vulnerabilities, and strengthen the software delivery process.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;