// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "type name for project.",
    },
    {
        type: "input",
        name: "description",
        message: "Tell us what your project does.",
    },
    {
        type: "input",
        name: "link",
        message: "Provide a URL to your deployed application.",
    },
    {
        type: "input",
        name: "screenshot",
        message: "Provide a screenshot of your deployed application.",
    },
    {
        type: "input",
        name: "features",
        message: "List any important and unique features of your new application.",
    },
    {
        type: "checkbox",
        name: "license",
        description: "Choose a license for your project.",
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
        name: "email",
        message: "incluse your email address.",
    },
    {
        type: "input",
        name: "link",
        message: "include a link to GItHub Repository.",
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
