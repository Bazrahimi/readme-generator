

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

const fs = require('fs');
const path = require('path'); // Import the path module
console.log(path);
console.log('index.js: Imported fs module')

const inquirer = require('inquirer')
console.log('index.js: imported inquirer package');
const MarkDown = require('./utils/generateMarkdown');
console.log('index.js: imported MarkDown clas from generateMakdown.js');


// Readme questions
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the Project Title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the Project Description?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Write about the Project installation process or requirements?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the Project Usage?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache-2.0', 'GNU-GPLv3', 'ISC', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who are the contributors or contributing?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Project Tests?',
  },
  {
    type: 'input',
    name: 'feedback',
    message: 'Any other questions or feedback regarding the project?',
  },
];

//function to write README file
function writeToFile(fileName, data) {
  const rootDir = process.cwd();
  const outputPath = path.resolve(rootDir,'..', fileName);
  fs.writeFile(outputPath, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Successfully generated ${fileName} in the root directory!`);
    }
  });
}


//function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const licenseText = renderLicenseChoice(answers.license, answers);
      answers.license = licenseText;


      const readmeContent = MarkDown.generateReadme(answers);
      writeToFile('README.md', readmeContent)
    });  
}

//Render License Choice 

function renderLicenseChoice(license, answers) {
 
  switch (answers.license) {
    case 'MIT':
      return `
      answers.license = '-MIT\n\nThis package is licensed under the MIT license, which means that anyone who uses it within your organization will be bound by the terms of the MIT license.';
       -Permission: The MIT License grants permission to anyone to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software. Users are not required to ask for permission or pay any royalties.
       -Liability: The license comes with no warranty or liability. The software is provided "as is," and the copyright holder or contributors cannot be held liable for any damages or issues arising from its use. 
       -Attribution: The license requires that the original copyright notice and the license text must be included in all copies or substantial portions of the software. 
       -Compatibility: The MIT License is a permissive license, meaning it is compatible with other licenses. Developers can include MIT-licensed code in projects with different licenses without any conflict.

      licenseLink = - [MIT License](https://opensource.org/licenses/MIT): The MIT License is a permissive open-source software license that allows you to use, modify, and distribute the software while providing credit to the original authors.
      `;
      break;


    case 'None':
      answers.license = ' -None\n\nThis project does not have a specific license and is provided as-is with no warranty or support.';
      break;

    default:
      break;
  }
  return licenseText
}

//call init function to start the application
init();