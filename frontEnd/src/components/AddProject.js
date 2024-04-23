import React, { useState } from 'react';
import { toast } from "react-toastify";
const { io } = require("socket.io-client");

const AddProject = ({user}) => {
  const [projectName, setProjectName] = useState('');
  const [githubLink, setGithubLink] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/deploy',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         email : user ,   
        project_name: projectName,
        github_link: githubLink,
        }),
      })
      toast.info('Deploying ', {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
        });
  };

  return (
    <div className="min-h-screen flex justify-center items-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/high-angle-vertical-closeup-shot-green-leaves-growing-middle-garden_181624-7803.jpg')", backgroundSize: 'cover' }}>
      <div className="bg-gray-800 p-8 rounded-md shadow-md w-5/6 opacity-80 ">
        <h2 className="text-2xl font-bold mb-4 text-white">Add Project</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="projectName" className="block text-white mb-2">Project Name:</label>
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 rounded-md text-white focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter project name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="githubLink" className="block text-white mb-2">GitHub Link:</label>
            <input
              type="url"
              id="githubLink"
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 rounded-md text-white focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter GitHub link"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Deploy</button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
