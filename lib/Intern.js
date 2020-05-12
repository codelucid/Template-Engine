// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        // if (!school) {
        //     throw new Error("Please enter a school.");
        // }
        const school = school;

        super(name, id, email)
        this.school = school;
    }
    
    getSchool() {
        for (var school in this) {
            console.log(`${school}: ${this[school]}`);
        } return school;
    }

    getRole() {
        return Intern;
    }
}
module.export = Intern;