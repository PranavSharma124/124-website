// In MentorSection.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import siddeshImage from './assets/Mentors/siddesh.jpg';
import Manav from './images/Manav.jpeg';
import muskan from './images/Muskan.jpeg';
import rohit from './images/Rohit.jpeg';
import kanchan from './images/Kanchan.jpeg';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const MentorCard = ({ mentor }) => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <div className="profile-pic">
            <div 
              className="profile-img"
              style={{ backgroundImage: `url(${mentor.name.toLowerCase() === 'siddesh' ? siddeshImage : mentor.image})` }}
            ></div>
            <div className="circle"></div>
          </div>
          <div className="profile-info">
            <h2 className="name">{mentor.name}</h2>
            <p className="title">{mentor.title}</p>
          </div>
          <div className="social-links">
            <a 
              href={mentor.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const MentorsSection = ({ mentors }) => {
  return (
    <StyledWrapper>
      <div className="mentors-grid">
        {mentors.map((mentor, index) => (
          <MentorCard key={index} mentor={mentor} />
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
  box-sizing: border-box;

  .mentors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    width: 100%;
    max-width: 1400px;
    padding: 0 1rem;
    box-sizing: border-box;

    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 1.25rem;
      padding: 0 0.5rem;
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      max-width: 100%;
      padding: 0 1rem;
    }
  }

  .card {
    border-color: black;
    border-width: 2px;
    width: 100%;
    background: rgba(255, 246, 163, 0.60);
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: all 0.3s ease;
    animation: ${fadeIn} 0.8s ease-out;
    margin: 0 auto;
    max-width: 320px;
    
    @media (min-width: 768px) {
      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
      }
    }
    
    @media (max-width: 480px) {
      max-width: 100%;
      box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
    }
  }

  .card-content {
    padding: 1.5rem 1rem;
    text-align: center;
    
    @media (min-width: 768px) {
      padding: 2rem 1.5rem;
    }
    
    @media (max-width: 480px) {
      padding: 1.25rem 1rem;
    }
  }

  .profile-pic {
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 auto 1.25rem;
    
    @media (min-width: 768px) {
      width: 120px;
      height: 120px;
      margin-bottom: 1.5rem;
    }
    
    @media (max-width: 480px) {
      width: 90px;
      height: 90px;
      margin-bottom: 1rem;
    }
  }

  .profile-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(45deg, #ef3937, #ff6b6b);
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 2;
    overflow: hidden;
    animation: ${float} 4s ease-in-out infinite;
  }

  .circle {
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(45deg, black , #ff6b6b);
    border-radius: 50%;
    z-index: 1;
    opacity: 0.7;
    filter: blur(10px);
    animation: ${float} 4s ease-in-out infinite 0.5s;
  }

  .profile-info {
    margin-bottom: 1.5rem;
  }

  .name {
    color: white;
    font-size: 1.1rem;
    margin: 0 0 0.4rem;
    font-weight: 700;
    line-height: 1.3;
    
    @media (min-width: 768px) {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.05rem;
    }
  }

  .title {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.85rem;
    margin: 0;
    line-height: 1.4;
    
    @media (min-width: 768px) {
      font-size: 0.9rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }

  .social-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* mobile/tablet default */
  gap: 0.75rem;
  margin-top: 1.25rem;

  /* FORCE HORIZONTAL ROW ONLY ON LAPTOP SCREENS */
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
}


  .social-link {
    display: flex;
    align-items: center;
    padding: 0.4rem 0.9rem;
    border-radius: 18px;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 500;
    transition: all 0.25s ease;
    color: white;
    
    @media (min-width: 768px) {
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
      border-radius: 20px;
    }
    
    @media (max-width: 480px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.75rem;

    svg {
      width: 14px;
      height: 14px;
      margin-right: 4px;
    }
  }

    &.github {
      background: #333;
      
      &:hover {
        background: #24292e;
        transform: translateY(-2px);
      }
    }

    &.linkedin {
      background: #0077b5;
      
      &:hover {
        background: #005f91;
        transform: translateY(-2px);
      }
    }
  }
`;

export default MentorsSection;