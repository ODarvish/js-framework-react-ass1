import React, { useState } from "react";
import './App.css'
import omid from "./assets/omid.jpg"
import itpm from "./assets/itpm.png"
import tasty from "./assets/tasty.jpg"
import fire from "./assets/fire.jpg"


const sideLength = "200px";

const MYARTICLES = [
  {
    id: 0,
    className: "first",
    title: "About Me",
    subtitle: "Hello it is Omid. I'm student at Cm educations",
    picture: omid,
    content: "I studied as computer enginer between 1996-2000, but becouse of some hapening could not continue on the it branches. I did many others as job but my knowledg in IT was a useful things at my working life. Right now I am working as Security Technician with Securitas. and whant to be a IT man again soon."
  },
  {
    id: 1,
    className: "second",
    title: "My future plan",
    subtitle: "I would like to create a team to deliver IT projects in hight quality.",
    picture: itpm,
    content: "I am good at understand systems and how it working. And I am good to plan a project and design a system as well, so I think that will be best rol for me in future."
  },
  {
    id: 2,
    className: "third",
    title: "My tasty favorit",
    subtitle: " It is my favrite fruits marinat mixing that I LOVE IT.",
    picture: tasty,
    content: "It's one of the best taist that I love it. The name of the marinates is Haliketeni at my place. It's mixing of plums, garlic, pepper and local vegetables thet reachable on summer"
  },
  {
    id: 3,
    className: "forth",
    title: "Weekends",
    subtitle: "The one of the best i the living time.",
    picture: fire,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i."
  }
];

function App() {
  const [currentArticle, setCurrentArticle] = useState(0);
  const [displayAll, setDisplayAll] = useState(false);

  function switchArticle() {
    setCurrentArticle((currentArticle + 1) % MYARTICLES.length);
  }

  function toggleShowAll() {
    setDisplayAll(!displayAll);
  }

  return (
    <div>
      {displayAll ? (
        <div>
          {MYARTICLES.map(article => (
            <div key={article.id}>
              <article className={article.className}>
              <h2>{article.title}</h2>
              <p className='subTitle'>{article.subtitle}</p>
              <div className='container'>
                <img src={article.picture} alt="" width={sideLength} />
                <p>{article.content}</p>
              </div>
              </article>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <article className={MYARTICLES[currentArticle].className}>
            <h2>{MYARTICLES[currentArticle].title}</h2>
            <p className='subTitle'>{MYARTICLES[currentArticle].subtitle}</p>
            <div className='container'>
              <img src={MYARTICLES[currentArticle].picture} alt="" width={sideLength} />
              <p>{MYARTICLES[currentArticle].content}</p>
            </div>
          </article>
        </div>
      )}
      <div className={MYARTICLES[currentArticle].className}>
        <button onClick={toggleShowAll}>Toggle All</button>
        <button id="test" onClick={switchArticle}>Next Article</button>
      </div>
    </div>
  );
}

export default App;