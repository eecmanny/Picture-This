// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const MarkDown = require('./utils/generateLogo');
const imgSVG = require('./utils/generateLogo');

// TODO: Create an array of questions for user input
const logoGenerator = () =>

`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${name}</h1>
      <p class="lead">I am from ${location}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My favorite hobby is ${hobby}</li>
        <li class="list-group-item">My favorite food is ${food}</li>
        <li class="list-group-item">My GitHub username is ${github}</li>
        <li class="list-group-item">LinkedIn: ${linkedin}</li>
      </ul>
    </div>
  </header>
</body>
</html>`;




    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: "What is your project's title?",
            },
            {
                type: 'input',
                name: 'credit',
                message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
            },
        ])
        .then((answers) => {
            const pREADMEPageContent = imgSVG(answers);


            // TODO: Create a function to write README file
            // function writeToFile(fileName, data) { }
            

            fs.writeFile('Logo.svg', pREADMEPageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created Logo.svg!')
            );
        });


// TODO: Create a function to initialize app
function init() {
    logoGenerator();
};

// Function call to initialize app
init();
