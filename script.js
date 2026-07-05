/* ==========================================================
   Flipper Zero Downloads
   script.js
   ========================================================== */

const REPO_OWNER = "SYOP200";
const REPO_NAME = "Flipper-Zero-Downloads";
const DEFAULT_DOC = "overview.md";

const RAW_BASE =
`https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/main/Documentation/`;

const API_BASE =
`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`;

const viewer =
document.getElementById("viewer");

const docButtons =
document.querySelectorAll(".doc-card");

const cache = {};

/* ==========================================================
    Load Markdown
========================================================== */

async function loadDoc(file){

    if(!viewer) return;

    docButtons.forEach(button=>{

        button.classList.remove("active");

        if(button.dataset.file===file){

            button.classList.add("active");

        }

    });

    viewer.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Loading ${file}...</p>
        </div>
    `;

    try{

        if(cache[file]){

            viewer.innerHTML =
            marked.parse(cache[file]);

            return;

        }

        const response =
        await fetch(RAW_BASE + file);

        if(!response.ok){

            throw new Error();

        }

        const markdown =
        await response.text();

        cache[file] = markdown;

        viewer.innerHTML =
        marked.parse(markdown);

        viewer.scrollTop = 0;

    }

    catch{

        viewer.innerHTML = `

        <h2>

        Unable to load documentation.

        </h2>

        <p>

        Expected file:

        </p>

        <code>

        ${RAW_BASE}${file}

        </code>

        `;

    }

}

/* ==========================================================
    Button Events
========================================================== */

docButtons.forEach(button=>{

    button.onclick=()=>{

        loadDoc(button.dataset.file);

    }

});

/* ==========================================================
    Auto Load
========================================================== */

window.addEventListener("load",()=>{

    if(viewer){

        loadDoc(DEFAULT_DOC);

    }

});

/* ==========================================================
    Smooth Navigation
========================================================== */

document.querySelectorAll("a[href^='#']")
.forEach(link=>{

    link.onclick=(event)=>{

        event.preventDefault();

        document
        .querySelector(
            link.getAttribute("href")
        )
        .scrollIntoView({

            behavior:"smooth"

        });

    }

});

/* ==========================================================
    Active Navigation
========================================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top =
        section.offsetTop-150;

        if(scrollY>=top){

            current=
            section.id;

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(

            link.getAttribute("href")
            ==="#"+current

        ){

            link.classList.add("active");

        }

    });

});

/* ==========================================================
    Documentation Search
========================================================== */

const search =
document.getElementById("docSearch");

if(search){

search.addEventListener("input",()=>{

const value=
search.value.toLowerCase();

docButtons.forEach(card=>{

const text=
card.innerText.toLowerCase();

card.style.display=

text.includes(value)

?

"block"

:

"none";

});

});

}

/* ==========================================================
    GitHub Repository Stats
========================================================== */

async function loadRepository(){

const stars=
document.getElementById("repoStars");

const forks=
document.getElementById("repoForks");

const issues=
document.getElementById("repoIssues");

const updated=
document.getElementById("repoUpdated");

if(!stars) return;

try{

const response=
await fetch(API_BASE);

const repo=
await response.json();

stars.textContent=
repo.stargazers_count;

forks.textContent=
repo.forks_count;

issues.textContent=
repo.open_issues_count;

updated.textContent=
new Date(

repo.updated_at

).toLocaleDateString();

}

catch{

console.log(

"Unable to load GitHub stats."

);

}

}

loadRepository();

/* ==========================================================
    Keyboard Shortcuts
========================================================== */

window.addEventListener("keydown",(event)=>{

if(event.key==="/"){

const search=
document.getElementById("docSearch");

if(search){

event.preventDefault();

search.focus();

}

}

});

/* ==========================================================
    Fade In
========================================================== */

document.body.classList.add("loaded");
