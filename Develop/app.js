const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile)


const outputPath = path.join("index.html");

const render = require("./lib/htmlRenderer");
const prompts = require('./lib/prompts')

const Employees = [];

// Write code to use inquirer to gather information about the development team members,
async function init() {
    try {
        const { name, id, email, office } = await inquirer.prompt(prompts.manager);
        Employees.push(new Manager(name, id, email, office))
        chooseType();
    }
    catch (err) {
        console.log(err);
    }
}
init();

async function createIntern() {
    try {
        const { name, id, email, school } = await inquirer.prompt(prompts.intern);
        Employees.push(new Intern(name, id, email, school))
        chooseType();
    } catch (error) {
        console.log(error);
    }
}

async function addEngineer() {
    try {
        const { name, id, email, gitHub } = await inquirer.prompt(prompts.engineer);
        Employees.push(new Engineer(name, id, email, gitHub))
        chooseType();
    } catch (error) {
        console.log(error);
    }
}

async function chooseType() {
    try {
        const { select } = await inquirer.prompt(prompts.select)
        switch (select) {
            case 'Intern':
                return createIntern();
            case 'Engineer':
                return addEngineer();
            default:
                const html = render(Employees);
                writeFile(outputPath, html)
                return // call render function
        }
    } catch (error) {

    }
}

