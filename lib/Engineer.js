// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        // if (!gitHubName) {
        //     throw new Error("Please enter your GitHub name.");
        // }
        

        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
        
    }

    getGithub() {
        console.log(this.gitHub);
        return this.gitHub;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;