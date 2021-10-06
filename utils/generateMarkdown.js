// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Can I do switch instead of if-else?// switch(asnwers.license)...?
function renderLicenseBadge(license) {
  if (license){
  `![License Badge](https://img.shields.io/badge/license-${license}-yellow.svg)`
} else ('');

};
return renderLicenseBadge(license);



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache 2.0') {
  `http://www.apache.org/licenses/LICENSE-2.0`
  }
  else if (license === 'MIT') {
    `https://mit-license.org`
  } 
  else if ()
  



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //This project is licensed under the ${license} license.
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ## Description
  ${answers.description}
  <br>
  ${answers.motivation}
  <br>

  ## Table of Contents
  - [Description](#)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## License
  ${answers.license}

  ## Questions
  For any additional information, find me at:
  GitHub: [@${answers.Repo}](https://github.com/${answers.Repo})
  <br>
  Email: [${answers.Email}](mailto:${answers.Email})



`;
}

module.exports = generateMarkdown;
