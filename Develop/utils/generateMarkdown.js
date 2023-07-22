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
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Test](#test)
- [Contributing](#contributing)
- [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Technologies Used
${answers.technologiesUsed}

## License
${answers.license}

## Test
${answers.test}

## Contributing
${answers.contributors}
${answers.contributingText}

## Questions
${answers.questions}

For any questions or feedback, feel free to reach out to me via:
- Email: ${answers.email}
- GitHub: [${answers.github}](https://github.com/${answers.github})
    `;
  }
}

module.exports = MarkDown;
