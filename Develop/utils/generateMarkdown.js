// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

class MarkDown {
  static generateReadme(answers) {
    return `
# ${answers.title}

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Test](#Test)
- [Questions](#Questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}


## Contributing
${answers.DevelopersText}
// TODO: This project has been solely developed by
${answers.contributingText}
TODO: i want to append the following text in here. We welcome contributions from the community! If you would like to contribute to this project, please follow these guidelines:
- Fork the repository and create your branch from the main branch.
- Make your changes and ensure that the code follows the project's coding style and conventions.
- Test your changes to ensure they work as expected.
- Submit a pull request with a detailed description of your changes and their purpose.
- After reviewing your pull request, we'll merge it if everything looks good!
Thank you for contributing to our project!;

## Test
${answers.test}

## Questions
${answers.questions}

For any questions or feedback, feel free to reach out to me via:
- Email: ${answers.email}
- GitHub: [${answers.github}](https://github.com/${answers.github})
    `;
  }
}

module.exports = MarkDown;
