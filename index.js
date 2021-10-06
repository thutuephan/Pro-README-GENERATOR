// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateReadmeG = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];
function init() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'Title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Please give description for this project.',

        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What motivated your to build this app?',

        },
        {
            type: 'input',
            name: 'Installation',
            message: 'How do you install your app?',
        
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'How will your app be used?',
        
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Please add contribution guidlines',
        
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'What command do you use to test this app?'
        
        },
        {
            type: 'input',
            name: 'License',
            message: 'Which license is used for your app?',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3'],
        
        },
        {
            type: 'input',
            name: 'Repo',
            message: 'Please enter your GitHub username.',
        
        },
        {
            type: 'input',
            name: 'Github URL',
            message: 'What is the URL of your Github repo?',
        },

        {
            type: 'input',
            name: 'Email',
            message: 'What is your email adress?',
        
        },
        
    ]
    )
    .then ((answers) => {
        const generateContent = generateReadmeG(answers);
    // create a function to write README file
        fs.writeFile('README.nd', generateContent, (err) =>
        err? console.log(err) : console.log('Successfully created a README file!')
        );
    }
    );
}
// Function call to initialize app
init();




//https://img.shields.io/badge/license-${license}-yellow.svg


