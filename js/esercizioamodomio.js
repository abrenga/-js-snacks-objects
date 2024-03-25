const animals = [

];
let prossimoId = 0;


let btnAdd = document.getElementById("btnAdd");

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

function creaCardHTML(animal) {
    const divPadre = document.getElementById("colCard");
    divPadre.innerHTML += `<div  class="col">
    <div class="card">
        <button ${animal.id} type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast"
            aria-label="Close"></button>
        <div class="card-body toast-container position-static">

            <h5 class="card-title">${animal.nome}</h5>
            <p class="card-text">${animal.famiglia}</p>
            <p class="card-text">${animal.classe}</p>
        </div>`

};




function ePresente(animale) {
    for (let i = 0; i < animals.length; i++) {
        let animaleCorrente = animals[i];
        if (animale.nome == animaleCorrente.nome) {
            return true;
        }
    }
}


/*Devo solo implementare il bottone che chiude le card lo farè nelle prossime ore mi sta dando parecchia difficoltà se non riesco aprirè un task */