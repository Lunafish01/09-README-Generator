# 09-README-Generator

## Description
As a developer I wanted a quick and easy way to put out a professional README file. I decided to put together a README generator that would take in all of the user input using Na command-line application and output a well read README file. This would allow a project creator to devote more time to working on a project. I also included the option for license selection which allows the user to select a speicifc license for example "MIT license" and the corresponding badge and link to that license would be output to the README file. 

## Installation 

No special installation instructions 

## Acceptance Criteria
- GIVEN a command-line application that accepts user input
- WHEN I am prompted for information about my application repository
- THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
- WHEN I enter my project title
- THEN this is displayed as the title of the README
- WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
- THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
- WHEN I choose a license for my application from a list of options
- THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
- WHEN I enter my GitHub username
- THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
- WHEN I enter my email address
- THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
- WHEN I click on the links in the Table of Contents
- THEN I am taken to the corresponding section of the README

## License

No license used

## Contributors

No other contributors 

## Sources 

- [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4#objects)
- [Markdown license badges](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)
- https://shields.io/

## Demo

[Demo Link](https://drive.google.com/file/d/1NYpSxErfo71bBzLwpqU46joDiCOKu7pi/view?usp=sharing)

## Areas of opportunity
 
 - I feel like I shold have use a switch statement for the renderLicense functions, or maybe there was an easier way to represent those functions. 

 - I could not understand what the "renderLicenseSection" function was asking me to do, since I already have a license section in my README file. 
