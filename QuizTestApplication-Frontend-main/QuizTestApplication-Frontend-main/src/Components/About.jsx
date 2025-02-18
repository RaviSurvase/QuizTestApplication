import React from 'react';
import '../Styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        Welcome to the Quiz Test Application! Our mission is to provide an interactive and engaging platform for students to test their knowledge and track their progress. We believe in the power of quizzes to enhance learning and make education fun.
      </p>

      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-info">
        <div className="contact-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png" alt="LinkedIn Logo" />
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ravi-surwase" target="_blank" rel="noopener noreferrer">Ravi Survase</a>
        </div>
        <div className="contact-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" alt="WhatsApp Logo" />
          <strong>WhatsApp:</strong> <a href="https://wa.me/7248961892" target="_blank" rel="noopener noreferrer">+91 7248961892</a>
        </div>
        <div className="contact-item">
          <img src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="Email Logo" />
          <strong>Email:</strong> <a href="mailto:ravitsurvase@gmail.com">ravitsurvase@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default About;
