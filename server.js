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
                    choices: ["View All Employees", "View All Employees by Department", "View all Employees by Manager", "Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager", "view All Roles"]
                }
            ]).then(function (userAnswer) {
                if (userAnswer.userChoice === "View All Employees") {
                viewEmployee();
                }
            })


    }


}