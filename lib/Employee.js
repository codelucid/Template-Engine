// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name, id, email) {
        // if (!name) {
        //     throw new Error("Please enter your name.");
        // }
        // if (!id) {
        //     throw new Error("Please enter correct ID.");
        // }
        // if (!email) {
        //     throw new Error("Please enter your email.");
        // }    
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        for (var name in this) {
            console.log(`${name}: ${this[name]}`);
        } return name;
    }

    getId() {
        for (var id in this) {
            console.log(`${id}: ${this[id]}`);
        } return id;
    }

    getEmail() {
        for (var email in this) {
            console.log(`${email}: ${this[email]}`);
        } return email;
    }

    getRole() {
        return Employee;
    }
}
module.export = Employee;