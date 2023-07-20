// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
const fs = require('fs');
const inquirer = require('inquirer');
const MarkDown = require('./utils/generateMarkdown');

//Readme questions
const questions = [
  {
    type:'input',
    name: 'title',
    message: 'What is the Project-Title?',
  },
  {
    type:'input',
    name: 'description',
    message: 'What is the Project Description?',
  },
  {
    type:'input',
    name: 'installation',
    message: 'write about the Project installation process or requirement?',
  },
  {
    type:'input',
    name: 'usage',
    message: 'What is the Project Usage?',
  },
  {
    type:'input',
    name: 'title',
    message: 'What is the Project-Title?',
  },
  {
    type:'input',
    name: 'license',
    message: 'What is the Project license?',
  },
  {
    type:'input',
    name: 'contributing',
    message: 'who are the contributors or contributing?',
  },
  {
    type:'input',
    name: 'test',
    message: 'Project Tests?',
  },
  {
    type:'input',
    name: 'questions',
    message: 'questions about the project',
  },
  
];


