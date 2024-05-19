#! /usr/bin/env node
import inquirer from "inquirer";
let user_ans = await inquirer.prompt([
    {
        type: "input",
        name: "words",
        message: "please enter your sentence"
    }
]);
//trims() remove extra space before or after the sentence
let word_count = user_ans.words.trim().split(" ").length;
console.log(`your sentence have ${word_count} words.`);
