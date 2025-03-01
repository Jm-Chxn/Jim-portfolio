import React, { useEffect } from 'react';
import './Project.css';
import emergency from '../../assets/emergency.png';
import quizzify from '../../assets/quizzify.png';

const Project = () => {
  return (
    <div className="project">
      <div className="autoShow">
        <h1>Projects</h1>
      </div>
      <div className="content-container">
        <div className="projectline">
          <h2>01. Emergency Dashboard</h2>
          <p>A website that allows users to report emergencies which let responders know where the emergency is located and what kind of emergency it is.</p>
          <p style={{fontSize:"25px"}}>Technologies: React, JavaScript, TypeScript</p>
          <a 
            style={{fontSize:"25px", fontWeight: "50"}} 
            href="https://cmpt272.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="link"
          >
            Live Website
          </a>
        </div>
        <img src={emergency} alt="Profile" className="picture" />
      </div>
      <div className="content-container">
        <div className="projectline">
          <h2>02. Quizzify</h2>
          <p>An interactive quiz platform that allows users to create, share, and participate in customized quizzes on various topics.</p>
          <p style={{fontSize:"25px"}}>Technologies: React.js, JavaScript, Python, Django</p>
          <a 
            style={{fontSize:"25px", fontWeight: "50"}} 
            href="https://github.com/AmarKoonar/Hackathon-quiz-app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="link"
          >
            Github
          </a>
        </div>
        <img src={quizzify} alt="Profile" className="picture" />
      </div>
    </div>
  );
};

export default Project;