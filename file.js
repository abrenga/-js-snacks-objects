/*Jsnack 2 esercizio base */

const arrayStringhe = ["pippo", "PLUTO", "Paperino"];
const arrayNuovo = [];
for (let i = 0; i < arrayStringhe.length; i++) {
    let arraySingolaStringa = arrayStringhe[i].toLocaleLowerCase();
    let letteraPrima = arraySingolaStringa.charAt(0).toUpperCase() + arraySingolaStringa.slice(1)
    
    console.log(letteraPrima);
}



/*Jsnack 3 esercizio base */
let animali = [
    {
        nome: "leone",
        famiglia: "felini",
        classe: "mammifero"
    },
    {
        nome: "gatto",
        famiglia: "felini",
        classe: "mammifero"
    },
    {
        nome: "geco",
        famiglia: "Fillodattilidi",
        classe: "rettile"
    },
    {
        nome: "cavallo",
        famiglia: "Equidae",
        classe: "mammifero"
    },
    {
        nome: "falco",
        famiglia: "Falconidi",
        classe: "Oviparo"
    },
    {
        nome: "cane",
        famiglia: "canidi",
        classe: "mammifero"
    },

]



const arrayStr = [];
for (let i = 0; i < animali.length; i++) {
    if (animali[i].classe == "mammifero") {
        arrayStr.push(animali[i]);
    }


}

console.log(arrayStr);




/*Jsnack 4 esercizio base */

let persona = [
    {
        nome: "Antonietta",
        cognome: "Brenga",
        eta: 33
    },
    {
        nome: "Maria",
        cognome: "Marini",
        eta: 18
    },
    {
        nome: "Fabiola",
        cognome: "Fabbiano",
        eta: 5
    },
    {
        nome: "Mario",
        cognome: "Rossi",
        eta: 15
    }

]


let arrayPersona = [];

for (let i = 0; i < persona.length; i++) {
    if (persona[i].eta < 18) {
        arrayPersona.push("il sig/ra" + " " + persona[i].nome + " " + persona[i].cognome + " non può guidare");
    } else {
        arrayPersona.push("il sig/ra" + " " + persona[i].nome + " " + persona[i].cognome + " può guidare");;
    }
}


console.log(arrayPersona)






