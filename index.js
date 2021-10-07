// Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateReadmeG = require("./utils/generateMarkdown");

// Create an array of questions for user input

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
        fs.writeFile('sample/README.md', generateContent, (err) =>
        err? console.log(err) : console.log('Successfully created a README file!')
        );
    }
    );
}
// Function call to initialize app
init();




