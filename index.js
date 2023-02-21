const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user
const questions = [

    //Title
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    //Description
    {
        type: 'input',
        name: 'description',
        message: 'Project description'
    },
    //Installation guide
    {
        type: 'input',
        name: 'installation',
        message: 'installation instructions'
    },
    //Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Usage Information'
    },
    //License
    {
        type: 'list',
        choices: ['MIT', 'GPL 3.0', 'Eclipse', 'Bsd-2-Clause'],
        name: 'license',
        message: 'What is your project license type?'
    },
    //Contributing
    {
        type: 'input',
        name: 'contributing',
        message: 'Contribution Information'
    },
    //Tests
    {
        type: 'input',
        name: 'test',
        message: 'Test Instructions'
    },

    //Github Username
    {
        type: 'input',
        name: 'user',
        message: 'Type in your Github username'
    },

    {
        type: 'input',
        name: 'email',
        message: 'Insert email'
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Success!');
        }
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeText = generateMarkdown(answers)
        console.log(readmeText);

        writeToFile('README.md', readmeText);

    });
}

// function call to initialize program
init();
