const animals = [

];
let prossimoId = 0;


let btnAdd = document.getElementById("btnAdd");
let btnClose;


btnAdd.addEventListener("click", (e) => {
    const animale = estrapolaDati();
    creaCardHTML(animale);
});

/*qui mi sono creata l'oggetto */
function creaAnimale(nome, famiglia, classe) {
    const id = prossimoId;
    prossimoId++;
    let animale = {
        id: id,
        nome: nome,
        famiglia: famiglia,
        classe: classe
    };
    /*la condizione se vine e verificata ci da l'allert */
    const animalepresente = ePresente(animale)
    if (animalepresente) {
        alert("hai gia inserito quest'animale");
    } else {
        return animale;

    }
}

/*prende i dati dall'input e li associa all'oggetto creato nella funzione precedente */
function estrapolaDati() {
    const inputName = document.getElementById("inpNome");
    const inputFam = document.getElementById("inpFam");
    const inputClass = document.getElementById("inpClass");

    const animale = creaAnimale(inputName.value, inputFam.value, inputClass.value);
    animals.push(animale);
    return animale;


}

let test = [];

/*Crea L'HTML */
function creaCardHTML(animal) {
    const divPadre = document.getElementById("colCard");
    /* divPadre.innerHTML += `<div id="cardId-${animal.id}"  class="col">
     <div class="card">
         <button id="card-${animal.id}" type="button" class="btn-close me-2 m-auto" 
             aria-label="Close"></button>
         <div class="card-body toast-container position-static">
             <h5 class="card-title">${animal.nome}</h5>
             <p class="card-text">${animal.famiglia}</p>
             <p class="card-text">${animal.classe}</p>
         </div>` */

    /*Qui dobbiamo creare ogni singolo elemento altrimenti non p possibile usare un id dinamico */
    const col = document.createElement('div');
    col.id = `card-${animal.id}`;
    col.classList.add("col");

    const card = document.createElement('div');
    card.classList.add("card");

    const closeButton = document.createElement('button');
    closeButton.id = `btnClose-${animal.id}`;
    closeButton.ariaLabel = "Close";
    closeButton.type = "button";
    closeButton.classList.add("btn-close");
    closeButton.classList.add("me-2");
    closeButton.classList.add("m-auto");
    legaBottone(closeButton, animal);

    const cardBody = document.createElement('div');
    cardBody.classList.add("card-body");
    cardBody.classList.add("position-static");

    const title = document.createElement('h5');
    title.classList.add("card-title");
    title.textContent = animal.nome;


    const fam = document.createElement('p');
    fam.classList.add("card-text");
    fam.textContent = animal.famiglia;

    const classE = document.createElement('p');
    classE.classList.add("card-text");
    classE.textContent = animal.classe;

    cardBody.appendChild(title);
    cardBody.appendChild(fam);
    cardBody.appendChild(classE);

    card.appendChild(closeButton);
    card.appendChild(cardBody);

    col.appendChild(card);

    colCard.appendChild(col);
};



/*La funzione lega il bottone alla relativa card tramite l'ID */
function legaBottone(button, animal) {

    button.addEventListener("click", (e) => {
        const a = animal;

        for (let i = 0; i < animals.length; i++) {
            if (a.id == animals[i].id) {
                animals.splice(i, 1);
                const card = document.getElementById(`card-${a.id}`);
                card.remove();
                return;
            }
        }
    });
}



/*questa funzione verifica solo se nel array è gia presente un nome di animale uguale a quello inserito */
function ePresente(animale) {
    for (let i = 0; i < animals.length; i++) {
        let animaleCorrente = animals[i];
        if (animale.nome == animaleCorrente.nome) {
            return true;
        }
    }
}









