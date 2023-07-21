
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
    type: 'checkbox',
    name: 'technologies',
    message: 'Select the technologies used in the project:',
    choices: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'GitHub', 'jQuery', 'Bootstrap', 'React', 'Vue.js', 'Express', 'MongoDB', 'MySQL', 'PostgreSQL', 'Python', 'Django' ],
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache-2.0', 'GNU-GPLv3', 'ISC', 'None'],
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'List the names or GitHub usernames of contributors (comma-separated if multiple):',
  },
  {
    type: 'list',
    name: 'furtherContributions',
    message: 'Do you wish to welcome further contributions from the developer community?',
    choices: ['Yes', 'No'], 
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
      appendContributors(answers);
      appendFurtherContributions(answers);
      appendTechnologiesUsed(answers);


      const readmeContent = MarkDown.generateReadme(answers);
      writeToFile('README.md', readmeContent)
    });  
}

//Render License Choice 
function renderLicenseChoice(license, answers) {
 
  switch (answers.license) {
    case 'MIT':
      
      answers.license = ` MIT <br> This package is licensed under the MIT license, which means that anyone who uses it within your organization will be bound by the terms of the MIT license.<br> 
      <ul>
        <li>
          <i>Permission:</i> The MIT License grants permission to anyone to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software. Users are not required to ask for permission or pay any royalties.
        </li>
        <li>
          <i>Liability:</i> The license comes with no warranty or liability. The software is provided "as is," and the copyright holder or contributors cannot be held liable for any damages or issues arising from its use.
        </li>
        <li>
          <i>Attribution:</i> The license requires that the original copyright notice and the license text must be included in all copies or substantial portions of the software.
        </li>
        <li>
          <i>Compatibility:</i> The MIT License is a permissive license, meaning it is compatible with other licenses. Developers can include MIT-licensed code in projects with different licenses without any conflict.
        </li>
      </ul> 
      <br> 
      For more information about the MIT License, [click here](https://opensource.org/licenses/MIT).`;
      break;

    case 'Apache-2.0':
      answers.license = ` Apache-2.0 <br>
      <ul>
        <li>
           This package is licensed under the Apache-2.0 license, which means that anyone who uses it within your organization will be bound by the terms of the Apache-2.0 license.
        </li>
      </ul>
      `;
      break;

    case 'GNU-GPLv3':
      answers.license = ` GNU-GPLv3 <br>
      <ul>
        <li>
          This package is licensed under the GNU-GPLv3 license, which means that anyone who uses it within your organization will be bound by the terms of the GNU-GPLv3 license.
        </li>
      </ul>
      `;
      break;

      case 'ISC':
        answers.license = ` ISC <br>
        <ul>
          <li>
             This package is licensed under the ISC license, which means that anyone who uses it within your organization will be bound by the terms of the ISC license.
          </li>
        </ul>
        `;
        break;

    case 'None':
      answers.license = ` None <br>
      <ul>
        <li>
              This project does not have a specific license and is provided as-is with no warranty or support.
        </li>
      </ul>
      `;
      break;
  
    default:
      break;
  }
  return answers.license
}

//Render contributors 
function appendContributors(answers) {
  const contributorsList = answers.contributors.split(', ').map((contributor) => contributor.trim());
  const contributorsText = contributorsList.join(', ');
  answers.contributors = `This project has been developed by ${contributorsText}.`;
};

//Render furtherContributions
function appendFurtherContributions(answers) {
  if (answers.furtherContributions === 'Yes') {
    answers.contributingText = `
**We welcome contributions from the community!** If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository and create your branch from the main branch.
2. Make your changes and ensure that the code follows the project's coding style and conventions.
3. Test your changes to ensure they work as expected.
4. Submit a pull request with a detailed description of your changes and their purpose.
5. After reviewing your pull request, we'll merge it if everything looks good!

Thank you for contributing to our project!
    `;
  } else {
    answers.contributingText = `
As this project is a one-time assignment, we are not currently open to accepting any additional contributions or continuing to work on it. Thank you for your understanding.
    `;
  };
}

//append list of Technologies used
function appendTechnologiesUsed(answers) {
  const technologiesUsed = answers.technologies.length > 0 ? answers.technologies.map(tech => `- ${tech}`).join('\n') : 'None';
  answers.technologiesUsed = `Technologies Used in this Project: \n- ${technologiesUsed}\n\n`;
  
}

//call init function to start the application
init();