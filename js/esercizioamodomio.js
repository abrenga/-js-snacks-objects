const animals = [

];
let prossimoId = 0;


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
        id: prossimoId++,
        nome: inputName.value,
        famiglia: inputFam.value,
        classe: inputClass.value


    })

}

function aggiungiCard() {
    svuotaCard();
    animals.forEach(animal => {
        createCardHTML(animal.id, animal.nome, animal.famiglia, animal.classe);

    });

}


function createCardHTML(id, nome, famiglia, classe) {
    let colCard = document.getElementById("colCard");
    colCard.innerHTML += `<div class="col" id="card-${id}">
                               <div class="card">
                                <button id="btnClose" type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast"
                                    aria-label="Close"></button>
                                <div class="card-body toast-container position-static">

                                    <h5 class="card-title">${nome}</h5>
                                    <p class="card-text">${famiglia}</p>
                                    <p class="card-text">${classe}</p>
                                </div>
                                </div>`
    legaBottone(id);
};

function legaBottone(idOg) {
    let bthCloseCard = document.getElementById("btnClose");
    bthCloseCard.addEventListener("click", (e) => {
        const id = idOg;
        for (let i = 0; i < animals.length; i++) {
            if (id == animals[i].id) {
                animals.splice(i);
                const card = document.getElementById(`card-${id}`);
                card.remove();
                return;
            }


        }


    })
}




function svuotaCard() {
    let colCard = document.getElementById("colCard");
    colCard.innerHTML = "";
}




