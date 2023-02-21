//Badges
function licenseLogo(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license === 'GPL 3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (license === 'Eclipse') {
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  }
  else if (license === 'Bsd-2-Clause') {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of contents
 1. [Description](#Description)
 2. [Installation](#Installation)
 3. [Usage](#Usage)
 4. [License](#License)
 5. [Contributing](#Contributing)
 6. [Testing](#Testing)
 7. [Questions](#Questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Testing
  ${data.testing}

  ## Questions
  Visit my [Github](https://github.com/${data.username}) page for more information.
  Alternatively, you can contact me on (${data.username})

`;
}

module.exports = generateMarkdown;
