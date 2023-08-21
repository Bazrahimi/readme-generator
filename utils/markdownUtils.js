
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
å
    case 'Apache-2.0':
      answers.license = ` Apache-2.0 <br>
      <ul>
        <li>
           This package is licensed under the Apache-2.0 license, which means that anyone who uses it within your organization will be bound by the terms of the Apache-2.0 license.
        </li>
      </ul>
      <br>
      For more information about the Apache-2.0 License, [click here](https://www.apache.org/licenses/LICENSE-2.0).`;
      break;

    case 'GNU-GPLv3':
      answers.license = ` GNU-GPLv3 <br>
      <ul>
        <li>
          This package is licensed under the GNU-GPLv3 license, which means that anyone who uses it within your organization will be bound by the terms of the GNU-GPLv3 license.
        </li>
      </ul>
      <br>
      For more information about the GNU-GPLv3 License, [click here](https://www.gnu.org/licenses/gpl-3.0).
      `;
      break;

      case 'ISC':
        answers.license = ` ISC <br>
        <ul>
          <li>
             This package is licensed under the ISC license, which means that anyone who uses it within your organization will be bound by the terms of the ISC license.
          </li>
        </ul>
        <br>
        For more information about the ISC License, [click here](https://opensource.org/licenses/ISC).
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
};

//define for link the license Badge
function renderLicenseBadge(license) {
  const licenseBadges = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.png',
    'Apache-2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.png',
    'GNU-GPLv3': 'https://img.shields.io/badge/License-GPLv3-blue.png',
    'ISC': 'https://img.shields.io/badge/License-ISC-blue.png',
    'None': ''
  };
  return license in licenseBadges ? `![License](${licenseBadges[license]})` : '';
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
  //check if there any technologies selected
  const technologiesUsed = answers.technologies.length > 0
    ? answers.technologies.map(tech => `- ${tech}`).join('\n')
    : 'None';

  answers.technologiesUsed = `\n\n${technologiesUsed}\n`;
}

//function to get the default installation instruction
function getDefaultInstallation(answers) {
  if (answers.installationOption === 'Default') {
  return `
  # Installation Guide

  Follow the steps to install:

  1.  clone the repository:
      git clone https://github.com/Bazrahimi/readme-generator.git

  2.  navigate to directory:
      - cd readme-generator.
      - you need Node.js (version 12.0.0 or above) installed on your system.
      
  3.  Install dependencies:
      install inquirer version 8.2.4 or above

  4.  Run the application using command:
      npm start

  5.  the application will prompt you with a series of questions to gather details about your project.
  
  6.  Provide the required information, such as the project title, description, usage, technologies used, license, contributors, and more.

  7. after answering all the questions, the app will generate a professional README.md file based on your input.

  8. the generated README.md file will be saved in the root directory.

  The <b>readme-generator</b> will streamline the process of creating detailed and professional README.md file for your projects.
  
  `; 
  }
  return '';
}


// Export the functions for use in other files
module.exports = {
  renderLicenseChoice,
  renderLicenseBadge,
  appendContributors,
  appendFurtherContributions,
  appendTechnologiesUsed,
  getDefaultInstallation
};