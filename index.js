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
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of the team?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the manager's name.");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the manager's ID.")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please enter the manager's email.")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the manager's office number.")
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ]).then(managerInput => {
        const{ name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);


    })
};

// Employee prompts
const addEmployee = () => {
    console.log('=== ADDING EMPLOYEE TO TEAM ===');

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose employee's role",
            choices: ['Engineer','Intern']
        },
        {
            type: 'input',
            name: 'name',
            message:"What's the employee's name?",
            validate: nameInput =>{
                if(nameInput) {
                    return true;
                } else {
                    console.log("Enter the name of the employee");
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'email',
            message:"Please enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Enter the employee's github username.")
                }
            }

        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Enter the intern's school.")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }

    ]).then(employeeData =>{
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;

        if( role === "Engineer"){
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        
        } else if (role === "Intern") {
            employee = new Intern (name, id,email,school);
            console.log(employee);
        }
        teamArray.push(employee);

        if(confirmAddEmployee){
            return addEmployee(teamArray);

        } else {
            return teamArray;
        }
    })

};

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