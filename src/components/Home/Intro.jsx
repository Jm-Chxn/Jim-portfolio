import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import profilePic from '../../assets/profilepic.jpg';
import './Intro.css';

function Intro() {
  const [text] = useTypewriter({
    words: [' student',' software engineer', ' developer'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  const links = [
    { href: "https://github.com/Jm-Chxn", text: "Github" },
    { href: "https://drive.google.com/file/d/1BnilObgcQuKxi9hhGrBN9ARtE1G6yvXV/view", text: "Resume" },
    { href: "https://www.linkedin.com/in/-jimchen-/", text: "LinkedIn" }
  ];

  return (
    <div className="app">
      <div className="container">
        Hey, I'm Jim
        <img src={profilePic} alt="Profile" className="pfp" />
      </div>
      <div className="animated-typing">
        I am a 
        <span>{text}</span>
        <Cursor />
      </div>
      <div className="buttons-container">
        {links.map(({ href, text }) => (
          <div key={text} className="buttons">
            <a 
              href={href}
              target="_blank" 
              rel="noopener noreferrer" 
              className="link"
            >
              {text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Intro;