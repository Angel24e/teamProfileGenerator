const inquirer = require("inquirer");

const fs = require("fs");

const questions = [
  {
    type: "input",
    message: "What is the name of your manager? ('firstName lastInitial')",
    name: "managerName"
  },
  {
    type: "number",
    message: "What is your manager's id? (5 digit)",
    name: "managerId"
  },
  {
    type: "input",
    message: "What is your manager's email?",
    name: "managerEmail"
  },
  {
    type: "input",
    message: "What is your manager's github?",
    name: "managerGithub"
  },
  {
    type: "input",
    message: "What is your first engineer's name? ('firstName lastInitial')",
    name: "engineerName1"
  },
  {
    type: "number",
    message: "What is your first engineer's id? (5 digit)",
    name: "engineerId1"
  },
  {
    type: "input",
    message: "What is your first engineer's email?",
    name: "engineerEmail1"
  },
  {
    type: "input",
    message: "What is your first engineer's github?",
    name: "engineerGithub1"
  },
  {
    type: "input",
    message: "What is your second engineer's name? ('firstName lastInitial')",
    name: "engineerName2"
  },
  {
    type: "number",
    message: "What is your second engineer's id? (5 digit)",
    name: "engineerId2"
  },
  {
    type: "input",
    message: "What is your second engineer's email?",
    name: "engineerEmail2"
  },
  {
    type: "input",
    message: "What is your second engineer's github?",
    name: "engineerGithub2"
  },
  {
    type: "input",
    message: "What is your intern's name? ('firstName lastInitial')",
    name: "internName"
  },
  {
    type: "number",
    message: "What is your intern's Id? (5 digit)",
    name: "internId"
  },
  {
    type: "input",
    message: "What is your intern's email?",
    name: "internEmail"
  },
  {
    type: "input",
    message: "What is your intern's github?",
    name: "internGithub"
  },
]

const createHtml = data => {
  const template = 
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        />
        <title>Team of employees</title>
        <style>
          .big-font {
            font-size: 150px;
          }
          .card-dimensions {
            max-width: 18rem;
            min-width: 18rem;
            max-height: 18rem;
            min-height: 15rem;
          }
        </style>
      </head>
      <body>
        <div class="container-fluid text-center bg-primary big-font">
          <div class="row">
            <header class="col-12">The team!</header>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row justify-content-center p-3">
            <div class="col-3">
              <div class="card">
                <div class="card-header text-center">Manager ${data.managerName}</div>
                <div class="card-body text-primary text-center">
                  <div>Id:${data.managerId}</div>
                  <div>Email:${data.managerEmail}</div>
                  <div>Github:${data.managerGithub}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center p-5">
            <div class="col-3">
              <div class="card">
                <div class="card-header text-center">Engineer ${data.engineerName1}</div>
                <div class="card-body text-primary text-center">
                  <div>Id:${data.engineerId1}</div>
                  <div>Email:${data.engineerEmail1}</div>
                  <div>Github:${data.engineerGithub1}</div>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="card">
                <div class="card-header text-center">Engineer ${data.engineerName2}</div>
                <div class="card-body text-primary text-center">
                  <div>Id:${data.engineerId2}</div>
                  <div>Email:${data.engineerEmail2}</div>
                  <div>Github:${data.engineerGithub2}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center p-3">
            <div class="col-3">
              <div class="card">
                <div class="card-header text-center">Intern ${data.internName}</div>
                <div class="card-body text-primary text-center">
                  <div>Id:${data.internId}</div>
                  <div>Email:${data.internEmail}</div>
                  <div>Github:${data.internGithub}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `

  fs.writeFile(`index.html`, template, (err) => {
    err ? console.log(err) : console.log("index.html successfully created")
  });
}

inquirer
  .prompt(questions)
  .then(answers => {
    createHtml(answers);
  })