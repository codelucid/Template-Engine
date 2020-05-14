// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // if (!school) {
        //     throw new Error("Please enter a school.");
        // }
        

        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
    
    getSchool() {
        console.log(this.school);
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;