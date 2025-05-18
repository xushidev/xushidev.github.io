// importing file system
import fs, { read } from "fs";

const listRepos = await fetch("https://api.github.com/users/xushidev/repos");
const data = await listRepos.json();

let projectList = [];

data.forEach(element => {
    projectList.push(element.name);
})

const things = JSON.stringify(projectList);

fs.writeFile('../../public/projects/projects-index.json', things, err => {
    if (err) {
    console.error(err);
    } else {
    console.log("index file written");
    }
});

let variable = [];

data.forEach(element => {
    variable.push({
        name: element.name,
        description: element.description,
        url: element.html_url,
        readme: "",
        _id: element.id
    });
});

// Fetch README.md content for each repo and set element.readme to the text
for (const element of variable) {
    try {
        const response = await fetch(`https://raw.githubusercontent.com/xushidev/${element.name}/main/README.md`);
        if (response.ok) {
            element.readme = await response.text();
        } else {
            element.readme = "";
        }
    } catch (err) {
        element.readme = "";
    }
}

variable.forEach(element => {
    fs.writeFile(`../../public/projects/${element.name}.json`, JSON.stringify(element), err => {
        if (err){
            console.log(err);
        } else{
            console.log(`${element.name} written successfully`);
        }
    })
});