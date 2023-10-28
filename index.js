// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Type the name of the project.",
    },
    {
        type: "input",
        name: "description",
        message: "Type a breif description of the project.",
    },
    {
        type: "input",
        name: "table of contents",
        message: "Provide a table of contents for the project.",
    },
    {
        type: "input",
        name: "Installation",
        message: "Type installation instructions for application.",
    },
    {
        type: "input",
        name: "Usage",
        message: "Type the use case scenarios for this application.",
    },
    {
        type: "checkbox",
        name: "license",
        description: "Choose a license for the project.",
        choices: [
                "Apache License 2.0",
                "GNU General Public License v3.0",
                "MIT License",
                "BSD 2-Clause \"Simplified\" License",
                "BSD 3-Clause \"New\" or \"Revised\" License",
                "Boost Software License 1.0",
                "Creative Commons Zero v1.0 Universal",
                "Eclipse Public License 2.0",
         ]
    },
    {
        type: "input",
        name: "Contributors",
        message: "Type any contributors to this project.",
    },
    {
        type: "input",
        name: "Tests",
        message: "Type any test instructions for the application.",
    }
    {
        type: "input",
        name: "Questions",
        message: "Type any questions about the project."
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Create a README.md File...");
        writeToFile("./Readme/README.md", generateMarkdown({ ...reponses }));
    });
}

// Function call to initialize app
init();
