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
            name: 'Credits',
            message: 'Who would you like to give credits to in this project?',
        
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'What command do you use to test this app?'
        
        },
        {
            type: 'list',
            name: 'License',
            message: 'Which license is used for your app?',
            choices: ['MIT', 'Apache2.0', 'GPL3.0'],
        
        },
        {
            type: 'input',
            name: 'Repo',
            message: 'Please enter your GitHub username.',
        
        },
        {
            type: 'input',
            name: 'Github',
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
        fs.writeFile('README.md', generateContent, (err) =>
        err? console.log(err) : console.log('Successfully created a README file!')
        );
    }
    );
}
// Function call to initialize app
init();




// What motivated your to build this app? I was motivated to build this app due to the benefits of it. It ma
// kes the process of creating an open source project on GitHub become easier so the project creator can devot
// e more time to working on the project.
// ? How do you install your app? 1. Download the file packages from starter materials: utils, package-lock.js
// on, package.json, node_modules. 2. Run the command-lines: `npm init -y`, `npm install inquirer`.
// ? How will your app be used? The app will be used to quickly create a high-quality README file .
// ? Who would you like to give credits to in this project? 1. I am responsible for this project - THU PHAN. 2
// Tutorial links:https://www.youtube.com/watch?v=HUBNt18RFbo&t=614s
// ? What command do you use to test this app? There's no test for this app yet.
// ? Which license is used for your app? Apache 2.0
// ? Please enter your GitHub username. thutuephan
// ? What is the URL of your Github repo? https://github.com/thutuephan/
// ?


