#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance=13000;//dollar
let myPin=2341;
let pinAnswer =await inquirer.prompt([
    {
    name:"pin",
    type:"number",
    message:"Enter your 4 digit pin:",
}
]);
console.log(pinAnswer.pin)
if (pinAnswer.pin===myPin){
    console.log("correct pin code !!!")
    let operationAns=await inquirer.prompt([
        {
        name:"operation",
        type:"list",
        message:"Please select any one option:",
        choices:["withdraw","check balance","Fast cash"],
    }
    ]);
  
    if(operationAns.operation==="withdraw"){
        let amountanswer=await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"Enter your amount please::",
                    type:"number",
                 },
                
            ] )
             if(myBalance > amountanswer.amount){
                myBalance -= amountanswer.amount
                console.log(`your current Balance is: ${myBalance}`);
             }
             else{
             console.log("Insufficient balance!!");
             }
        }

         else if(operationAns.operation === "check balance"){
            console.log(`Your current balance is ${myBalance}`)
         } 
         else if(operationAns.operation==="Fast cash"){
            let amounttAnswer=await inquirer.prompt(
                [
                    {
                        name:"Amount",
                        message:"Enter your amount please:",
                        type:"list",
                        choices:["500","1000","2000","3400","6000","10000"],
                     },
                    
                ] ) 
                
                myBalance -= amounttAnswer.Amount
                console.log(`your current Balance is: ${myBalance}`);
            }
        }
    
else{
    console.log("invalid pin number!!!");
}

