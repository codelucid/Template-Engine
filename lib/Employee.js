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
        console.log(this.name);
        return this.name
         
    }
    
    getId() {
        console.log(this.id);
        return this.id;
    }

    getEmail() {
        console.log(this.email);
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;