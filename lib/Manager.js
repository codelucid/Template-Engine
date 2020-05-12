// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
        if (!officeNumber) {
            throw new Error("Please enter a number.");
        }
        const officeNumber = officeNumber;
    
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        for (var officeNumber in this) {
            console.log(`${officeNumber}: ${this[officeNumber]}`);
        } return officeNumber;
    }
    getRole() {
        return Manager;
    }
}
module.export = Manager;