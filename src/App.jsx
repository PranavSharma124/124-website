// In App.jsx
import React from 'react'; 
import './App.css';
import {HeroSection} from './HeroSection';
import MentorsSection from './MentorSection';
import Student from "./Student"
import TeamCard from './TeamCard';
import Footer from './Footer';
import NavBar from './NavBar';
import Manav from './images/Manav.jpeg';
import muskan from './images/Muskan.jpeg';
import rohit from './images/Rohit.jpeg';
import kanchan from './images/Kanchan.jpeg';
import junaid from './images/Junaid.jpeg'

const App = () => {
  const mentors = [
    {
      name: 'Siddesh',
      title: 'Technical Mentor- FEWD & DFD',
      image: 'siddesh',
      github: 'https://github.com/siddesh',
      linkedin: 'https://www.linkedin.com/in/siddhesh-gore-3608a320b/'
    },
    {
      name: 'Muskan Srivastava',
      title: 'Non-Tech Mentor- CT',
      image: muskan,
      github: 'https://github.com/janesmith',
      linkedin: 'https://www.linkedin.com/in/srivastavamuskan'
    },
    {
      name: 'Manav Verma',
      title: 'Technical Mentor- PSUP',
      image: Manav,
      github: 'https://github.com/alexjohnson',
      linkedin: 'https://www.linkedin.com/in/manav-verma-414927188/'
    },
    {
      name: 'Rohit Gupta',
      title: 'Technical Mentor- DM',
      image: rohit,
      github: 'https://github.com/sarahwilliams',
      linkedin: 'https://www.linkedin.com/in/rohit-gupta-976093358/'
    },
    {
      name: 'Junaid Khan',
      title: 'Technical Mentor- BOCS',
      image: junaid,
      github: 'https://github.com/michaelbrown',
      linkedin: 'https://www.linkedin.com/in/junaidify-khan/'
    },
    {
      name: 'Kanchan Kumari',
      title: 'Campus Manager',
      image: kanchan,
      github: 'https://github.com/emilydavis',
      linkedin: 'https://www.linkedin.com/in/kanchan-kumari-151404250/'
    }
  ];

  return (
    <div className="app min-h-screen relative">
      {/* Background pattern */}
      <div className="fixed inset-0 opacity-10 -z-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10">
        <NavBar />
        <HeroSection className='mb-[120px] mt-[100px]'/>
        <div id='Mentor'></div>
        <h2 id='amazing-mentors'>Our Amazing Mentors!</h2>
        <div className='underline'></div>
        <MentorsSection mentors={mentors} />
        <div id='Student'></div>
        <Student/>
        <div id='Contact'></div>
        <TeamCard/>
        <Footer />
      </div>
    </div>
  );
};

export default App;