// Dependencies
const inquirer = require('inquirer');
const fs = require('fs');

// Import classes 
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Page generated
const genereateHTML = require('./src/generateHTML');

// Team array
const teamArray =[];

// Manager prompts
const addManager = () =>{
    return new Promise((res,rej) => {
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
            teamArray.push(manager);
            res();
        })
    })
}

// Employee prompts
const addEmployee = () => {
    return new Promise((resolve, rej) => {
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
                        teamProfile.push(engineer);
                        break;
                    case "Intern":
                        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                        teamProfile.push(intern);
                        break;
                }
                return addEmployee().then(() => resolve());
            } else {
                return resolve();
            }
        })
    })
}


// Generate HTML page
const writeFile = data =>{
    fs.writeFile('./dist/index.html',data,err => {
        if (err){
            console.log(err);
            return;
        } else{
            console.log("Team profile generated!")
        }
    })
};

// Call manager first, then employees - engineer & intern
addManager()
.then(addEmployee)
.then(teamArray => {
    return genereateHTML(teamArray);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err =>{
    console.log(err);
});