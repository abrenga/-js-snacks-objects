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

/*Crea L'HTML */
function creaCardHTML(animal) {
    const divPadre = document.getElementById("colCard");
    divPadre.innerHTML += `<div  class="col">
    <div class="card">
        <button id="card-${animal.id}" type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast"
            aria-label="Close"></button>
        <div class="card-body toast-container position-static">
            <h5 class="card-title">${animal.nome}</h5>
            <p class="card-text">${animal.famiglia}</p>
            <p class="card-text">${animal.classe}</p>
        </div>`

         btnClose= document.getElementById(`card-${animal.id}`)
         btnClose.addEventListener("click", (e)=>{
            alert("forse va")
        })
        
};



/*questa funzione verifica solo se nel array è gia presente un nome di animale uguale a quello inserito */
function ePresente(animale) {
    for (let i = 0; i < animals.length; i++) {
        let animaleCorrente = animals[i];
        if (animale.nome == animaleCorrente.nome) {
            return true;
        }
    }
}


/*Prendendo il bottone che sarà vario per ciascuna card devo cliccare sopra e chiudere la card
quindi dovrò conrollare che:
il bottone che ho cliccato chiuda esattamente il bottone associato alla card in questione */

//come posso prendere in modo dinamico l'id?






