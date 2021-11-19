console.log(`Il y a ${document.getElementsByTagName("p").length} balises p dans cette page.`);
console.log("##########################################################")

console.log(`L'élément avec l'id coucou est : ${document.getElementById("coucou").textContent}`);
console.log("##########################################################")

console.log(`L'élément vers laquelle pointe le 3ème élément <a> de la page HTML est : ${document.getElementsByTagName("a")[2].textContent}`);
console.log("##########################################################")

console.log(`Nombre d'éléments portent la classe compte-moi: ${document.getElementsByClassName("compte-moi").length}`)
console.log("##########################################################")

console.log(`Nombre d'éléments <li> portent la classe compte-moi: ${document.querySelectorAll("li.compte-moi").length}`)
console.log("##########################################################")

console.log(`Nombre d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi: ${document.querySelectorAll("ol li.compte-moi").length}`)
console.log("##########################################################")

console.log(`La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu. Affiche-le dans la console.`)
console.log(document.querySelectorAll("div > ul > li:first-child")[1].textContent)