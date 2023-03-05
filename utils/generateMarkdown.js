// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "Apache License 2.0"){
    return `![License](https://img.shields.io/badge/license-Apache-blue)`;
  }else if(license === "MIT License"){
    return `![License](https://img.shields.io/badge/license-MIT-green)`;
  }else{
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "Apache License 2.0"){
    return "https://www.apache.org/licenses/LICENSE-2.0.txt";
  }else if(license === "MIT License"){
    return "https://mit-license.org/";
  }else{
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "Apache License 2.0"){
    return `This project is licensed under the Apache 2.0 license.`;
  }else if(license === "MIT License"){
    return `This project is licensed under the MIT license.`;
  }else{
    return "This project is not licensed in any way.";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description 
  
${data.description}
  
## Table of Contents 
  
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)
  
## Installation
  
${data.installation}
  
## Usage 
  
${data.usage}
  
## Credits
  
${data.credits}
  
## License

${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

## Features

${data.features}

## Contributions

${data.contributions}

## Tests
  
${data.test}
  
## Questions

If you have any questions or concerns please contact me here: 

- Github: https://github.com/${data.github}
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;