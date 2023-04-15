const inquirer = require("inquirer");

const fs = require("fs");

const questions = [
  {
    type: "list",
    message: "Position of employee.",
    choices: ["Manager","Engineer",""],
    name: "position"
  },
]

const createHtml = data => {
  const template = ({ id, name, email, github }) => 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Team of employees</title>
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