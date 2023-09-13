import React from "react";

function Links( {bio, links} ) {
    // const gitHubLink = links[0]
    // const linkedInLink = links[1]

    return (
    <div> 
        <h3>Links</h3>
        {links.map((link) => (
          <a href={link}>{link}</a>
        ))}
        {/* <a href={links[0]}>{links[0]}</a>
        <a href={links[1]}>{links[1]}</a> */}
        {/* <a href={gitHubLink}>https://github.com/liza</a>
        <a href={linkedInLink}>https://www.linkedin.com/in/liza/</a> */}
    </div>
  );
}

export default Links;

