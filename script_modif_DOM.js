function changeTitles(){
    document.querySelector("body > main > section > div > h1").textContent = "Ce que j'ai appris à THP";
    document.querySelector("body > main > section > div > p.lead.text-muted").textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}
changeTitles()

function functionCallToAction(){
    document.querySelector("body > main > section > div > p:nth-child(3) > a.btn.btn-primary.my-2").textContent =  "OK je veux tester !"
    document.querySelector("body > main > section > div > p:nth-child(3) > a.btn.btn-primary.my-2").href =   "http://www.thehackingproject.org"
    document.querySelector("body > main > section > div > p:nth-child(3) > a.btn.btn-secondary.my-2").textContent = "Non Merci"
    document.querySelector("body > main > section > div > p:nth-child(3) > a.btn.btn-secondary.my-2").href =  "https://www.pole-emploi.fr/accueil/"
    
}
functionCallToAction()

function changeLogoName(){
    document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > a > strong").textContent = "The THP Experience";
    document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > a > strong").style.fontSize = "2em";
}
changeLogoName()

let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

function populateImages(){
    let cards = document.querySelectorAll(".card-img-top")
    let i = 0;
    cards.forEach(card => {
        card.src = imagesArray[i]
        i ++;
    })
}
populateImages()