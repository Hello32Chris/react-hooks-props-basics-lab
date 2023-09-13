import React from "react";

function Links( {bio, links} ) {
    const gitHubLink = links[0]
    const linkedInLink = links[1]

    return (
    <div> 
        <h3>Links</h3>
        <a href={gitHubLink}>https://github.com/liza</a>
        <a href={linkedInLink}>https://www.linkedin.com/in/liza/</a>
    </div>
  );
}

export default Links;

