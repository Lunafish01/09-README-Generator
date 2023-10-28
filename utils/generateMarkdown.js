// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return "";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "none") {
    rerturn `\n [License](#License)\n`;
  }
  return "";
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "none") {
    return `## license
    ${license} license.`;
  }
  return "";
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
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
## Contributors
${data.contributors}
## Test
${data.test}
## Questions
${data.qestions}
`;
}

module.exports = generateMarkdown;
