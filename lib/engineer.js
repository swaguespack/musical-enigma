// Import employee constructor
const Employee = require("./Employee");

// Engineer constructor
class Engineer extends Employee{
    constructor (name, id, email, github){

        super (name, id, email)
        this.github = github;

    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }

}
 
module.exports = Engineer;
