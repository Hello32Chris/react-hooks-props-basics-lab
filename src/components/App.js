import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";


function App() {

  const links = user.links
  const linksArr = Object.values(links)
  console.log(linksArr)

  return (
    <div>
      <NavBar />
      <Home name={user.name} color={user.color} city={user.city} />
      <About bio={user.bio} links={linksArr} />
    </div>
  );
}

export default App;
