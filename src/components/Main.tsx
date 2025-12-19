import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://portfolio-profile-picture.s3.us-east-1.amazonaws.com/1739429651966.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA3FOZM6YLGCHR6I3B%2F20251219%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251219T173518Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCtrdHEPLQZwZQDmHAKzmHAOnG2sGffeIw3pE2AFFBvFAIgXxcqt%2Bg%2FmsRupSkuAWPHWeinIEX8RJKYvkfMaKL6FvAq3wIIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw3Njc2NDQ0NjQ2NjIiDFVUDUSOmsS1aRyUKSqzArz%2FI2kiRdxvlCsZX63v7TYnNa2l7kYj6qjfEYJxz7UyP3wjn38fHy2XeHE%2FC3%2B%2BZ7YIOavzuDv0TDcBZKn2biP0L11JH4hd7xPFRt5nRlYFl8BouUEU5KQaRYNIWoOBFg%2BXZkcjzORnsyWjoHQcUv3RAnDsQvOUr2n%2Bfj%2FE2%2B2o0Y1s3QZY%2FVvedizcLa7sf%2FkGAyhTTrJX6rB1NuTEbAmHWTBqu1JWG50qreWVnjs9xpmGARoG12No2B9XFHqbR7OH6qcr%2BhArKZrqPCV%2BBPKJM459aCVp7eEC77Gd7a574RDw9Hl7Wch1pQkIB5w3lLSZPlbxW3WU76axaMt7shOWcn%2BzFIsheBfUcYZOu2AUKKM7wfBuSK8j%2BqQaqDgd4qKdbuxo3A9be7bmm%2B5TIPilJpIwtZeWygY6rQLCw84I93dH%2FY6JGKX%2BXHpvZQtV4d%2F59QiNB58lpjJ9ob8X%2BYHj5iUkt%2FjN1GVQPTbC4DiUiLq0gV6f9BgawTlBvz8JuvKgGOZOXTBk%2B7oWQVVHj0UCkLFComBRuqporNoA5BzKjn3X0lebYdMttEr6xn46LUbqlkWKQajfKDc6G3X9P7PfPBqlBIokLNsRxM%2FpZo60OncNsKQSWAQ%2FrpaFU%2B2S6sEB5rtb0WJBTEvgrC2O1FaOo4aSGzGtij8QRtX4dtwH%2FG4nqKX04jGoXfUhN%2BDq96fwrCqlYfHzliy1tH3KUGr3xFI7pndnXuQAjkJZCN9Zim1rOH%2Fb%2FHXQWqPd14ZSFPu4rqWWYro5SGc7gymxcUWXycz3fjH5sSf9ueIkA0HKqng9wgQjVBUV&X-Amz-Signature=edb100bdcaf3235c3e35ec5d6aac23a177f75a930dc47c0cbe32b86d8e67c808&X-Amz-SignedHeaders=host&response-content-disposition=inline" alt="Avatar" />
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