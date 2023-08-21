
const fs = require('fs');
const path = require('path'); // Import the path module
const inquirer = require('inquirer')
const MarkDown = require('./utils/generateMarkdown');
const {
  renderLicenseChoice,
  renderLicenseBadge,
  appendContributors,
  appendFurtherContributions,
  appendTechnologiesUsed,
  getDefaultInstallation
} = require('./utils/markdownUtils')

// Readme questions
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the Project Title?',
    validate: function(input) {
      return input.trim() !== ''? true: 'Please enter a valid Project title.';
    },
  },
  {
    type: 'input',
    name: 'description',
    message: `Provide a short description of your project. Consider answering some of these questions to guide you:
      - What motivated you to build this project?
      - Why did you build it?
      - What problem does it solve?
      - What did you learn?`,
  },
  
  {
    type: 'list',
    name: 'installationOption',
    message: 'Choose an installation option:',
    choices: ['Default'],
  },
  {
    type:'confirm',
    name: 'installation',
    message: 'Provide installation instruction:',
    when: (answers) => answers.installationOption === 'Default',
  },
  {
    type: 'editor',
    name: 'customInstallation',
    message: 'Edit the installation instructions as per your project requirements:',
    when: (answers) => answers.installationOption === 'Custom',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the Project Usage?',
  },
  {
    type: 'input',
    name: 'demo',
    message: 'Please provide a link to the video demo (if available):',
    validate: function(input) {
      if (input.trim() === '' ||/^(https?:\/\/\S+)$/.test(input)) {
        return true; 
    }
    return 'Please enter a valid Url!(e.g https://....';
    },
    
  },
  {
    type: 'checkbox',
    name: 'technologies',
    message: 'Select the technologies used in the project:',
    choices: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'GitHub', 'inquirer', 'Jest', 'fs' ],
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
    message: 'List the names or GitHub usernames of contributors (separate with commas if there are multiple):',

  },
  {
    type: 'list',
    name: 'furtherContributions',
    message: 'Do you want to allow further contributions from the developer community to your project?',

    choices: ['Yes', 'No'], 
  },  

  {
    type: 'input',
    name: 'test',
    message: 'Project Tests?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please provide your email address:',
    //validate function ensure email is valid
    validate: function(input) {
      if (/^\S+@\S+\.\S+$/.test(input)) {
        return true;
      }
      return 'Please enter a valid email address.'
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please provide your Github username',
    // You can add a validation function here to ensure the user enters a valid GitHub username
    validate: function (input) {
      // Basic GitHub username validation example (you can use a more sophisticated method)
      if (/^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){0,38}$/.test(input)) {
        return true;
      }
      return 'Please enter a valid GitHub username.';
    },
  },

];

//function to write README file
function writeToFile(fileName, data) {
  const rootDir = process.cwd(); 
  const outputPath = path.join(rootDir, 'dist', fileName);
  

  if (!fs.existsSync(path.join(rootDir, 'dist'))) {
    fs.mkdirSync(path.join(rootDir, 'dist'));
  }

  fs.writeFile(outputPath, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Successfully generated ${fileName} in the 'dist' directory!`);
    }
  });
}



//function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const licenseBadge = renderLicenseBadge(answers.license);
      answers.licenseBadge = licenseBadge;
      const licenseText = renderLicenseChoice(answers.license, answers);
      answers.license = licenseText;
      appendContributors(answers);
      appendFurtherContributions(answers);
      appendTechnologiesUsed(answers);
      
      if (answers.installationOption === 'Default') {
        answers.installation = getDefaultInstallation(answers);
      }
 
      const readmeContent = MarkDown.generateReadme(answers, licenseBadge);
      writeToFile('README.md', readmeContent)
    });  
}



init();

module.exports = {
renderLicenseChoice,
renderLicenseBadge
};