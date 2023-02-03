const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]
let articleContent = [];

const ressurs = () => {
    let navItems = "";
    resources.map((res, index) =>{
        navItems += `<button onclick="toggle(${index})" aria-role="navigation" id="nav-${index}" class="btn">${res.category}</button>`
        articleContent.push(
            `<article id="card=${index}" class="content-card">
                <h3>${res.category}</h3>
                <p>${res.text}</p>
                <ul class="resLinks">
                ${res.sources.map((source) => `<li><a href="${source.url}">${source.title}></a></li>`)}
                </ul>
            </article>
            `
        )
    })
    document.querySelector("#navigation").innerHTML = navItems;
    document.querySelector("#page-content").innerHTML = articleContent[0];
    // document.querySelectorAll("#nav-"+[0]).classList.add("actice");
}

function toggle(id){
    let buttons = document.querySelectorAll("btn")
    //querySelectorAll for å få tak i alle med "btn"
    //querySelector for å få tak i den første med "btn"
    document.querySelector("#page-content").innerHTML = articleContent[id]


}

ressurs();


// function addHTML() {
// listHTML = `<h2>${resources[0].category}</h2>`
// listHTML += `<p>${resources[0].text}</p><ul>`
// resources[0].sources.map(prod => listHTML += `<li><a href ="${prod.url}">${prod.title}</a></li>
// `)
// listHTML += '</ul>'
// document.querySelector("#bodyview").innerHTML = listHTML;
// }
// function addCss() {
// listHTML = `<h2>${resources[1].category}</h2>`
// listHTML += `<p>${resources[1].text}</p><ul>`
// resources[1].sources.map(prod => listHTML += `<li><a href ="${prod.url}">${prod.title}</a></li>
// `)
// listHTML += '</ul>'
// document.querySelector("#bodyview").innerHTML = listHTML;
// }
// function addJava() {
// listHTML = `<h2>${resources[2].category}</h2>`
// listHTML += `<p>${resources[2].text}</p><ul>`
// resources[2].sources.map(prod => listHTML += `<li><a href ="${prod.url}">${prod.title}</a></li>
// `)
// listHTML += '</ul>'
// document.querySelector("#bodyview").innerHTML = listHTML;
// }
// function addReact() {
// listHTML = `<h2>${resources[3].category}</h2>`
// listHTML += `<p>${resources[3].text}</p><ul>`
// resources[3].sources.map(prod => listHTML += `<li><a href ="${prod.url}">${prod.title}</a></li>
// `)
// listHTML += '</ul>'
// document.querySelector("#bodyview").innerHTML = listHTML;
// }
// function addSnH() {
// listHTML = `<h2>${resources[4].category}</h2>`
// listHTML += `<p>${resources[4].text}</p><ul>`
// resources[4].sources.map(prod => listHTML += `<li><a href ="${prod.url}">${prod.title}</a></li>
// `)
// listHTML += '</ul>'
// document.querySelector("#bodyview").innerHTML = listHTML;
// }


// function addToBody(category, text, sources) {
//     resources.push({category, text, sources,})
//     console.log(resources)
// }