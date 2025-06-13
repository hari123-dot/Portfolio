import React, { useEffect, useState } from "react";
import "./Project.css";

function Projects() {
  const [repos, setRepos] = useState([]);
  const githubUsername = "hari123-dot"; // Replace with your GitHub username

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUsername}/repos`)
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);

  return (
    <div className="projects-section">
      <h1>My GitHub Projects</h1>
      <h2>BMW</h2>
      <p>Bayerische Motoren Werke AG, trading as BMW Group (commonly abbreviated to BMW (German pronunciation: sometimes anglicised as Bavarian Motor Works), is a German multinational manufacturer of vehicles and motorcycles headquartered in Munich, Bavaria, Germany. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 to 1918 and again from 1933 to 1945, creating engines for aircraft that were used in the Second World War.</p>
      <p>BMW is headquartered in Munich and produces motor vehicles in Germany, the United Kingdom, the United States, Brazil, Mexico, South Africa, India, China, and previously also in the Netherlands (ceased in 2023). The Quandt family [de] is a long-term shareholder of the company, following investments by the brothers Herbert and Harald Quandt in 1959, saved BMW from bankruptcy, with remaining shares owned by the public.</p>
      <h1>History</h1>
      <p>the Otto Flugmaschinenfabrik was founded in 1910 by Gustav Otto in the Kingdom of Bavaria, which was a state of the German Empire. The firm was reorganized on 7 March 1916 into Bayerische Flugzeugwerke AG.</p>
      <p>This company was then renamed to Bayerische Motoren Werke (BMW) in 1922. However, the name BMW dates back to 1913, when a company using that name was founded by Karl Rapp initially as Rapp Motorenwerke.</p>
      <p>BMW became an automobile manufacturer in 1928 when it purchased Fahrzeugfabrik Eisenach, which, at the time, built the Austin 7 under licence from Automobilwerk Eisenach, badged as the Dixi.</p>
      <p>The 1962 introduction of the BMW New Class compact sedans was the beginning of BMW's reputation as a leading manufacturer of sport-oriented cars. Throughout the 1960s, BMW expanded its range by adding coupé and luxury sedan models. The BMW 5 Series mid-size sedan range was introduced in 1972, followed by the BMW 3 Series compact sedans in 1975, the BMW 6 Series luxury coupés in 1976 and the BMW 7 Series large luxury sedans in 1978.</p>
      <h2>21st century</h2>
      <p>In January 2021, BMW announced that its sales in 2020 fell by 8.4 percent due to the impact of COVID-19 pandemic restrictions. However, in the fourth quarter of 2020, BMW witnessed a rise of 3.2% in its customers' demands.This recovery was supported by the company's adoption of widely accepted technologies and integration of third-party services such as Apple Pay and on-demand music as well as key partnerships such as its collaboration with Daimler on autonomous driving.</p>
      <p>On 18 January 2022 BMW announced a BMW 7 Series (G11) special edition simply called "The Final V12", the last BMW series production vehicle to be fitted with a V-12 engine.</p>
      <p>On 5 October 2023 it was announced that BMW UK CEO Chris Brownridge would succeed Torsten Müller-Ötvös as the CEO of Rolls-Royce starting 1 December 2023, as a result of Müller-Ötvös retiring.</p>
     <h2>Company name</h2>
     <p>BMW is an abbreviation for Bayerische Motoren Werke. This name is grammatically incorrect (in German, compound words must not contain spaces), which is why the grammatically correct form of the name, Bayerische Motorenwerke (German pronunciation: [ˈbaɪʁɪʃə moˈtoːʁənˌvɛʁkə] ) has been used in several publications and advertisements in the past. Bayerische Motorenwerke translates into English as Bavarian Motor Works.The suffix AG, short for Aktiengesellschaft, signifies an incorporated entity owned by shareholders, thus akin to "Inc." (US) or PLC, "Public Limited Company" (UK).</p>
     <h2>Logo</h2>
     <p>The circular blue and white BMW logo or roundel evolved from the circular Rapp Motorenwerke company logo, which featured a black ring bearing the company name surrounding the company logo, an image of a horse head on a plinth. BMW retained Rapp's black ring inscribed with the company name, but the interior of the ring is quartered blue and white, reminiscent of the coat of arms and flag of Bavaria (which in turn are based on the arms of the historic House of Wittelsbach, which ruled Bavaria for many centuries).</p>
     <p>A persistent myth claims that the logo is based on the image of an airplane propeller spinning in a blue sky. This myth likely stems from a 1929 BMW advertisement that depicted the logo superimposed on a rotating propeller. However, the logo predates that advertisement by 12 years.</p>  
      <div className="projects-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="project-card">
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description provided."}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );    
}

export default Projects;
