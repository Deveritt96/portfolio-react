import React from 'react';

// Define the Project class
class Project {
  constructor(name, projectUrl, deployedUrl, imageUrl) {
    this.name = name;
    this.projectUrl = projectUrl;
    this.deployedUrl = deployedUrl;
    this.imageUrl = imageUrl;
  }
}

const projects = [
  new Project(
    'TempoForecast',
    'https://github.com/ECiarabellini/TempoForecast',
    'https://eciarabellini.github.io/TempoForecast/',
    'https://flowbite.com/docs/images/examples/image-1@2x.jpg'
  ),
  new Project(
    'JavaScript Quiz',
    'https://github.com/Deveritt96/java-quiz',
    'https://deveritt96.github.io/java-quiz/',
    'https://flowbite.com/docs/images/examples/image-1@2x.jpg'
  ),
  // Add more projects here...
];


function ProjectBoxes() {
  return (
    <div className="flex justify-center items-center h-screen">
      {projects.map((project, index) => (
        <div key={index} className="text-white m-2">
          <h2>{project.name}</h2>
          <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">Repo</a>
          <br />
          <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">Deployed</a>
          <img src={project.imageUrl} alt={project.name} />
        </div>
      ))}
    </div>
  );
}

export default ProjectBoxes;
