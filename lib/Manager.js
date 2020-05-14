// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // if (!officeNumber) {
        //     throw new Error("Please enter a number.");
        // }
       
    
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        
    }
    getOfficeNumber() {
        console.log(this.officeNumber);
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;