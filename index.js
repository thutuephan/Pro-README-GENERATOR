// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateReadmeG = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];
inquirer.prompt ([
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'Reason',
        message: 'What made you decide to build this app?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please give description for this project.',

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
        message: ' license is used for your app?',
    
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

    fs.writeFile('README.nd', generateContent, (err) =>
    err? console.log(err) : console.log('Successfully created a README file!')
    );
}
);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README






