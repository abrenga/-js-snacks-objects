const animals = [

];


let btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener("click", (e) => {
    estrapolaDati();
    aggiungiCard();
});





function estrapolaDati() {
    let inputName = document.getElementById("inpNome");
    let inputFam = document.getElementById("inpFam");
    let inputClass = document.getElementById("inpClass");

    animals.push({
        nome: inputName.value,
        famiglia: inputFam.value,
        classe: inputClass.value


    })

}

function aggiungiCard() {
    svuotaCard();
    animals.forEach(animal => {
        createCardHTML(animal.nome, animal.famiglia, animal.classe);

    });

}


function createCardHTML(nome, famiglia, classe) {
    let colCard = document.getElementById("colCard");
    colCard.innerHTML += `<div class="col">
                               <div class="card">
                                <button id="btnClose" type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast"
                                    aria-label="Close"></button>
                                <div class="card-body toast-container position-static">

                                    <h5 class="card-title">${nome}</h5>
                                    <p class="card-text">${famiglia}</p>
                                    <p class="card-text">${classe}</p>
                                </div>
                                </div>`
}

function svuotaCard() {
    let colCard = document.getElementById("colCard");
    colCard.innerHTML = "";
}


