import { HiFolderOpen } from "react-icons/hi";

export default function Projects({ project }) {
  const { name, description, link, repo } = project;
  return (
    <div className="project" key={name}>
      <div className="flex">
        <HiFolderOpen />
        {name} <a href={link}>link</a>
        <div className="border">Public</div>
      </div>
      <div className="flex">{description}</div>
    </div>
  );
}
