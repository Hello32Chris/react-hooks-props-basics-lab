import React from "react";
import Links from "./Links";

function About({links, bio}) {
  
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>Put the bio in here</p>}   
      {/* ^^^^^^    The && logical operator in JavaScript is used for logical conjunction, and it evaluates expressions from left to right. In the context of JSX and conditional rendering, you can use && to conditionally render content based on a condition. */}
      {/* {bio ? <p>Put the bio in here</p>: null}   <<<<<---- this is the ternary operator way of writing this out*/}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links links={links} bio={bio}/>
    </div>
  );
}

export default About;
