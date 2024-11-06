import React from "react";
import user from "../data/user";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{user.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <a href={user.links} target="_blank" >GitHub</a>
      <a href={user.links} target="_blank" >LinkedIn</a>
  
    </div>
  );
}

export default About;
