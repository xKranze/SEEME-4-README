// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    //Project Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    //Description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    //Installation
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    //Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use. (Optional) To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:![alt text](assets/images/screenshot.png) ',
    },
    //Credits
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to thier GitHub profiles. Third-party assets that reuqire attributions and or any tutorials you followed, include links to those here aswell.',
    },
    //License and Badge
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to choose?',
        choices: [
            'None',
            'Apache License 2.0',
            'MIT License',
        ]
    },
    //Features
    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, list them here.'
    },
    //How to Contribute
    {
        type: 'input',
        name: 'contributions',
        message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
    },
    //Tests
    {
        type: 'input',
        name: 'test',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
    },
    //Questions (GitHub username and Email address)
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username here.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address here. So others can reach out additional questions',
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README file!')
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) =>
        writeToFile('./README.md', generateMarkdown({ ...response }))
    );
}

// Function call to initialize app
init();
