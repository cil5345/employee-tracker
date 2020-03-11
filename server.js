const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "118136aaaA",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
    askQuestion();
});

const question = [];

let listQuestions = false
function askQuestion() {
    if (listQuestions === false) {
        inquirer
            .prompt([
                {
                    message: "What would you like to do",
                    name: "userChoice",
                    type: "list",
                    choices: ["View All Employees", "View All Departments", "View All Roles", "Add Employees", "Add Departments", "Add Roles", "Update Employee Roles", "EXIT"]
                }
            ]).then(function (userAnswer) {
                if (userAnswer.userChoice === "View All Employees") {
                    viewEmployees();
                } else if (userAnswer.userChoice === "View All Departments") {
                    viewDepartments();
                } else if (userAnswer.userChoice === "View All Roles") {
                    viewRoles();
                } else if(userAnswer.userChoice === "Add Employees") {
                    addEmployees();
                } else if(userAnswer.userChoice === "Add Departments") {
                    addDepartments();
                } else if(userAnswer.userChoice === "Add Roles") {
                    addRoles();
                } else if(userAnswer.userChoice === "Update Employee Roles") {
                    updateRoles();
                } 
                

            });



    }


}