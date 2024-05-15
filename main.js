import inquirer from "inquirer";
let myBalance = 10000; // DOLLARS
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin nmuber",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is: " + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your balance is:" + myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}
