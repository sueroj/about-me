import React from 'react';
import './App.css';
import Me from './assets/me.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        About Me
      </header>
      <img className="bio-pic" src={Me} alt="that's me!" />

      <div className="bio">
        <h2> What's this? </h2>
        <p> Hello, I'm Joel. This is my bio. </p>
        <h2> Who are you? </h2>
        <p> I'm a former military manager experienced in Python scripting, I am now eager to transition from
        defense to pursue software development in information technology. I recently has taken steps
        to gain proficiency in modern technologies, like making this page! I am passionate about programming;
            I like to learn and continously improve my skills.</p>

        <h2> Okay. What are you looking for? </h2>
        <p> I'm looking for opportunities in software development or web. Preferably with a great tech stack and a
        team of Agile professionals focused on delivering high quality products that that won't mind my billion questions.
        </p>

        <h2> But, you're prior military. What do you know about software development? </h2>
        <p> Well, I created and hosted this page using the following technologies: React, Docker, Jenkins, Git/GitHub,
        and Azure.
        </p>
        <h2> That's overkill for just one page... </h2>
        <p> Yup... there was a lot to learn.</p>

        <p>Anyways, here is my <a href="/">CV</a>. Thanks for visiting.</p>
      </div>


    </div>
  );
}

export default App;
