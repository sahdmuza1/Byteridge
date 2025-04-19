import React from 'react';
import './SuccessStories.css';

const stories = [
  {
    client: 'Microsoft',
    title: 'Ruuh - AI Chatbot | Mobile, Cloud, AI/ML/Bots',
    image: '/stories/microsoft.png',
    description: 'We helped bring Ruuh – AI based desi chatbot experience to web and mobile. Be it a small talk about cricket or sharing intimate emotions, Ruuh loves it all.',
    link: 'https://byteridge.com/case-study/microsoft-15/',
  },
  {
    client: 'CCMR3',
    title: 'CCMR3 | ReactJS, .NET, Hangfire, Node.js',
    image: '/stories/ccmr3.png',
    description: 'CCMR3 is a prominent financial services company specializing in debt collection and financial management solutions...',
    link: '#',
  },
  {
    client: 'CASHe',
    title: 'Aeries Technologies | iOS, Android',
    image: '/stories/cashe.png',
    description: 'Cashe is a fintech company that provides fast, flexible, unsecured personal loans through a mobile application to young salaried millennials across India.',
    link: '#',
  },
];

const SuccessStories = () => {
  return (
    <section className="stories-section">
      <h2 className="stories-heading">SUCCESS STORIES</h2>
      <div className="stories-cards">
        {stories.map((story, index) => (
          <a href={story.link} className="story-card" key={index} target="_blank" rel="noopener noreferrer">
            <img src={story.image} alt={story.client} />
            <h3 className="story-client">{story.client} <span>→</span></h3>
            <p className="story-title">{story.title}</p>
            <p className="story-description">{story.description}</p>
          </a>
        ))}
      </div>
      <p className="view-more"><a href="#">View all Case Studies →</a></p>
    </section>
  );
};

export default SuccessStories;
