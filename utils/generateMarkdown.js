// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "none") {
    return "![Github license](https://img.shields.io/badge/license-${license}-blue.svg)"
  } else if(license == "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if(license == "GNU General Public License v3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if(license == "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if(license == "BSD 2-Clause \"Simplified\" License") {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  } else if(license == "BSD 3-Clause \"New\" or \"Revised\" License") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else if(license == "Boost Software License 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  } else if(license == "Creative Commons Zero v1.0 Universal") {
    return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
  } else if(license == "Eclipse Public License 2.0") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "none") {
    return ""
  } else if(license == "Apache License 2.0") {
    return "[Apache 2.0 link](https://opensource.org/license/apache-2-0/)"
  } else if(license == "GNU General Public License v3.0") {
    return "[GPL v3 link](https://opensource.org/license/gpl-3-0/)"
  } else if(license == "MIT License") {
    return "[MIT link](https://opensource.org/license/mit/)"
  } else if(license == "BSD 2-Clause \"Simplified\" License") {
    return "[BSD-2 link](https://opensource.org/license/bsd-2-clause/)"
  } else if(license == "BSD 3-Clause \"New\" or \"Revised\" License") {
    return "[BSD-3 link](https://opensource.org/license/bsd-3-clause/)"
  } else if(license == "Boost Software License 1.0") {
    return "[BSL 1.0 link](https://opensource.org/license/bsl-1-0/)"
  } else if(license == "Creative Commons Zero v1.0 Universal") {
    return "[CC0-1.0 link](http://creativecommons.org/publicdomain/zero/1.0/)"
  } else if(license == "Eclipse Public License 2.0") {
    return "[Eclipse 2.0 link](https://opensource.org/license/epl-2-0/)"
  } 
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Title
${data.title}
## Description
${data.description}
## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#Liscense)
- [Contributors](#Contributors)
- [Test]($Test)
- [Questions](#Questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${renderLicenseBadge(data.license)}

${renderLicenseLink(data.license)}
## Contributors
${data.contributors}
## Test
${data.test}
## Questions
${data.qestions}
`;
}

module.exports = generateMarkdown;
