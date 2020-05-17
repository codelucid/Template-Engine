const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function createTeam() {
    console.log("Please build your team!");
    let manager = new Manager(inquirer.prompt([
    {
        type: "input",
        message: "What is your manager's name?",
        name: "name",
        // validate: function validateName(name) {
        //     return name !== "";
        // }
    },
    {
        type: "input",
        message: "What is your manager's ID?",
        name: "id",
        // validate: answer => {
        //     if (answer !== "number") {
        //         return true;
        //     } else
        //     return "Please enter your ID number.";
        // }
    },
    {
        type: "input",
        message: "What is your manager's email?",
        name: "email",
        // validate: answer => {
        //     if (answer !== "name@domain") {
        //         return true;
        //     } else
        //     return "Please enter your email.";
        // }
    },
    {
        type: "input",
        message: "What is your manager's office number?",
        name: "officeNumber",
        // validate: answer => {
        //     if (answer !== "number") {
        //         return true;
        //     } else
        //     return "Please enter your office number.";
        // }
    },
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "newMember",
        choices: ["Engineer", "Intern", "I don't need anymore team members."],
    },
    ]).then(val => {
        if (val.newMember === "Engineer") {
            return engineerTeam();
        } else if (val.newMember === "Intern") {
            return internTeam();
        } else  
            return quit();
        
    })
    ); 
    
};   


function engineerTeam() {    
    let engineer = new Engineer(inquirer.prompt([
    {
        type: "input",
        message: "What is your engineer's name?",
        name: "name",
        // validate: answer => {
        //     if (answer !== "") {
        //         return true;
        //     } else
        //     return "Please enter your name.";
        // }
    },
    {
        type: "input",
        message: "What is your engineer's ID?",
        name: "id",
        // validate: answer => {
        //     if (answer !== "number") {
        //         return true;
        //     } else
        //     return "Please enter your ID number.";
        // }
    },
    {
        type: "input",
        message: "What is your engineer's email?",
        name: "email",
        // validate: answer => {
        //     if (answer !== "name@domain") {
        //         return true;
        //     } else
        //     return "Please enter your email.";
        // }
    },
    {
        type: "input",
        message: "What is your engineer's GitHub name?",
        name: "gitHub",
        // validate: answer => {
        //     if (answer !== "") {
        //         return true;
        //     } else
        //     return "Please enter your GitHub name.";
        // }
    },
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "newMember",
        choices: ["Engineer", "Intern", "I don't need anymore team members."],
    },
    ]).then(val => {
        if (val.newMember === "Engineer") {
            return engineerTeam();
        } else if (val.newMember === "Intern") {
            return internTeam();
        } else  
            return quit();
        
    })
    );
};


function internTeam() {
    let intern = new Intern(inquirer.prompt([
    {
        type: "input",
        message: "What is your intern's name?",
        name: "name",
        // validate: answer => {
        //     if (answer !== "") {
        //         return true;
        //     } else
        //     return "Please enter your name.";
        // }
    },
    {
        type: "input",
        message: "What is your intern's ID?",
        name: "id",
        // validate: answer => {
        //     if (answer !== "number") {
        //         return true;
        //     } else
        //     return "Please enter your ID number.";
        // }
    },
    {
        type: "input",
        message: "What is your intern's email?",
        name: "email",
        // validate: answer => {
        //     if (answer !== "") {
        //         return true;
        //     } else
        //     return "Please enter your email.";
        // }
    },
    {
        type: "input",
        message: "What is your intern's school?",
        name: "school",
        // validate: answer => {
        //     if (answer !== "") {
        //         return true;
        //     } else
        //     return "Please enter your school's name.";
        // }
    },
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "newMember",
        choices: ["Engineer", "Intern", "I don't need anymore team members."],
    },
    ]).then(val => {
        if (val.newMember === "Engineer") {
            return engineerTeam();
        } else if (val.newMember === "Intern") {
            return internTeam();
        } else  
            return quit();
        
    })
    );
}; 
  


createTeam()
    

    





// function newMember() {
//     return inquirer.prompt([
//         {
//             type: "list",
//             message: "Which type of team member would you like to add?",
//             name: "newMember",
//             choices: ["Engineer", "Intern", "I don't need anymore team members."],
//             validate: answer => {
//                 if (answer == "engineer") {
//                     return engineerTeam;
//                 } else if (answer == "intern") {
//                     return internTeam;
//                 } else {
//                     return ("I don't need anymore team members.")
//                 }
//             }
//         }
//     ]);
// };

function quit(){
    console.log("Team is complete!");
    
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// let array = [manager, engineer, intern];
// render.apply(null, array)
//     fs.writeFileSync("team.html", array, function(err) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log("Successfully wrote to team.html")
//     });




// render(manager, engineer, intern)
//     .then(function(answers) {
//         fs.writeFileAsync("team.html", answers, function(err){

//             if (err) {
//                 return console.log(err);
//             }

//             console.log("Successfully wrote to team.html")
//         });
//     })
//     .then(function() {
       
//     })



        
   
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
