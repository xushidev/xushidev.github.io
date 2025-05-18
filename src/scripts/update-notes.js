// import file system
import fs, { read } from "fs";

// get list of repositories
const listRepos = await fetch("https://api.github.com/repos/xushidev/digital-garden/contents/?ref=notes");
const data = await listRepos.json();

let noteList = [];

data.forEach(element => {
    noteList.push(element.name);
})

const noteString = JSON.stringify(noteList);

fs.writeFile('./public/notes/note-index.json', noteString, err => {
    if (err) {
    console.error(err);
    } else {
    console.log("index file written");
    }
});

// create a variable containing the project lists
let variable = [];

// adding only the relevant informations to the list
data.forEach(element => {
    variable.push({
        name: element.name,
        description: "",
        url: element.html_url,
        readme: "",
        _id: element.sha
    });
});

// Fetch README.md content for each repo and set element.readme to the text
for (const element of variable) {
    try {
        const response = await fetch(`https://raw.githubusercontent.com/xushidev/digital-garden/refs/heads/notes/${element.name}`);
        if (response.ok) {
            element.readme = await response.text();
        } else {
            element.readme = "";
        }
    } catch (err) {
        element.readme = "";
    }
}

// writing the array
variable.forEach(element => {
    fs.writeFile(`./public/notes/${element.name}.json`, JSON.stringify(element), err => {
        if (err){
            console.log(err);
        } else{
            console.log(`${element.name} written successfully`);
        }
    })
});