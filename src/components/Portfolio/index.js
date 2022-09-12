import React, { useState } from "react";
import Projects from "../../pages/Projects";

export default function Portfolio() {
  const [proj] = useState([
    {
      name: "Project 1",
      description: "This is a project",
      link: "https://www.github.com",
      repo: "https://www.github.com",
    },
    {
      name: "Project 2",
      description: "This is a project",
      link: "https://www.github.com",
      repo: "https://www.github.com",
    },
  ]);

  return (
    <div>
      <div className="flex">
        {proj.map((project, idx) => (
          <Projects project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}
