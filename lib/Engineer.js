// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(gitHubName) {
        // if (!gitHubName) {
        //     throw new Error("Please enter your GitHub name.");
        // }
        const gitHubName = gitHubName;

        super(name, id, email);
        this.gitHubName = gitHubName;
    }

    getGithub() {
        for (var gitHubName in this) {
            console.log(`${gitHubName}: ${this[gitHubName]}`);
        } return gitHubName;
    }

    getRole() {
        return Engineer;
    }
}
module.export = Engineer;