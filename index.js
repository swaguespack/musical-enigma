// Dependencies
const inquirer = require('inquirer');
const path = require("path");
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Import classes 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Page generated
const render = require('./src/generateHTML');

// Team array
const teamArray =[];

function startApp(){
    addManager();
}

// Function to create manager from prompts
const addManager = () =>{

    inquirer.prompt([
        {
            type: "input",
            message: "What is the manager's name?",
            name:"name"
        },
        {
            type: "input",
            message: "What is the manager's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "officeNumber",
        },
    ]).then(answers =>{
        const manager = new Manager(answers.name, answers.id,answers.email,answers.officeNumber);
        //.table(manager);
        teamArray.push(manager);
        addEmployee();
        
    })

}


// Function to create employees from prompts
const addEmployee = () => {

        inquirer.prompt([
            {
                type: "list",
                message: "Select type of employee:",
                name: "employeeType",
                choices: [
                    "Engineer",
                    "Intern",
                    {
                        name: "No more employees to add",
                        value: false
                    }
                ]
            },
            {
                message: "What is the engineer's name?",
                name: "name",
                when: ({ employeeType }) => employeeType === "Engineer"
            },
            {
                message: "What is the intern's name?",
                name: "name",
                when: ({ employeeType }) => employeeType === "Intern"
            },
            {
                message: "What is the engineer's ID?",
                name: "id",
                when: ({ employeeType }) => employeeType === "Engineer"
            },
            {
                message: "What is the intern's ID?",
                name: "id",
                when: ({ employeeType }) => employeeType === "Intern"
            },
            {
                message: "What is the engineer's email address?",
                name: "email",
                when: ({ employeeType }) => employeeType === "Engineer"
            },
            {
                message: "What is the intern's email address?",
                name: "email",
                when: ({ employeeType }) => employeeType === "Intern"
            },
            {
                message: "what is the engineer's GitHub username?",
                name: "github",
                when: ({ employeeType }) => employeeType === "Engineer"
            },
            {
                message: "Which school is the intern from?",
                name: "school",
                when: ({ employeeType }) => employeeType === "Intern"
            }
        ]).then(answers => {
            if (answers.employeeType) {
                switch (answers.employeeType) {
                    case "Engineer":
                        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                        teamArray.push(engineer);
                        break;
                    case "Intern":
                        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                        teamArray.push(intern);
                        break;
                }
                return addEmployee()
            } else {
                createFile() 
                
            }
            
         
        })
       
    }


// Generate team page
function createFile() {
    if (!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR);
    } else {
        fs.writeFileSync(outputPath, render(teamArray), "UTF-8")
        console.log("Team Created! Check team.html!")
    }
}

startApp();