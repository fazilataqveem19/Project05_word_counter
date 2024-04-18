#! /usr/bin/env node
import inquirer from "inquirer";
const counter = (paragraph) => paragraph.replace(/\s/g, "").length;
async function startWordCount(counter) {
    do {
        let answere = await inquirer.prompt({
            type: "input",
            message: "Write paragraph here...",
            name: "paragraph"
        });
        console.log(counter(answere.paragraph));
    } while (true);
}
startWordCount(counter);
