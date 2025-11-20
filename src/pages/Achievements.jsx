// src/pages/Achievements.jsx
import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: "Hackathon Winners",
      description: "Secured 1st place in the National Level Hackathon 2024",
      date: "March 2024",
      icon: "🏆"
    },
    {
      title: "Research Publication",
      description: "Published paper on 'Advancements in Machine Learning' in IEEE Conference",
      date: "January 2024",
      icon: "📝"
    },
    {
      title: "Open Source Contribution",
      description: "Contributed to major open-source projects with 500+ GitHub stars",
      date: "December 2023",
      icon: "💻"
    },
    {
      title: "Coding Competition",
      description: "Ranked in top 10 in National Coding Challenge 2023",
      date: "November 2023",
      icon: "🏅"
    }
  ];

  return (
    <div className="achievements">
      <div className="achievements-container">
        <h1>Our Achievements</h1>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div className="achievement-card" key={index}>
              <div className="achievement-icon">{achievement.icon}</div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
              <span className="achievement-date">{achievement.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;