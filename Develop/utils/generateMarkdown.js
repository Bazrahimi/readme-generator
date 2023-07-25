function generateReadme(answers, licenseBadge) {
  return `
# ${answers.title}

${licenseBadge}

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
For any questions or feedback, feel free to reach out to me via:
- Email: ${answers.email}
- GitHub: ${answers.github}
`;
}

module.exports = {
  generateReadme,
};
