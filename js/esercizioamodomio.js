const animals = [

];
let prossimoId = 0;


let btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener("click", (e) => {
    const animale = estrapolaDati();
    creaCardHTML(animale);
});


function creaAnimale(nome, famiglia, classe) {
    const id = prossimoId;
    prossimoId++;
    return {
        id: id,
        nome: nome,
        famiglia: famiglia,
        classe: classe
    };
}


function estrapolaDati() {
    const inputName = document.getElementById("inpNome");
    const inputFam = document.getElementById("inpFam");
    const inputClass = document.getElementById("inpClass");

    const animale = creaAnimale(inputName.value, inputFam.value, inputClass.value);

    animals.push(animale);

    return animale;
}

function creaCardHTML(animal) {
    let colCard = document.getElementById("colCard");
    /*colCard.innerHTML += `<div class="col" id="card-${animal.id}">
                               <div class="card">
                                <button id="btnClose-${animal.id}" type="button" class="btn-close me-2 m-auto"
                                    aria-label="Close"></button>
                                <div class="card-body position-static">

                                    <h5 class="card-title">${animal.nome}</h5>
                                    <p class="card-text">${animal.famiglia}</p>
                                    <p class="card-text">${animal.classe}</p>
                                </div>
                                </div>
                                </div>`;*/

    const col = document.createElement('div');
    col.id = `card-${animal.id}`;
    col.classList.add("col");

    const card = document.createElement('div');
    card.classList.add("card");

    const closeButton = document.createElement('button');
    closeButton.id = `btnClose-${animal.id}`;
    closeButton.ariaLabel = "Close";
    closeButton.type = "button";
    //closeButton.classList.add("btn-close");
    //closeButton.classList.add("me-2");
    //closeButton.classList.add("m-auto");
    legaBottone(closeButton, animal);

    const cardBody = document.createElement('div');
    cardBody.classList.add("card-body");
    cardBody.classList.add("position-static");

    const title = document.createElement('h5');
    title.classList.add("card-title");
    title.textContent = animal.nome;

    cardBody.appendChild(title);

    card.appendChild(closeButton);
    card.appendChild(cardBody);

    col.appendChild(card);

    colCard.appendChild(col);
};

function legaBottone(button, animal) {
    console.log(animal);
    const anm= animal;

    button.addEventListener("click", (e) => {
        const a = anm;
        console.log(a);
        for (let i = 0; i < animals.length; i++) {
            if (a.id == animals[i].id) {
                animals.splice(i, 1);
                const card = document.getElementById(`card-${a.id}`);
                card.remove();
                //svuotaCard();
                return;
            }
        }
    });
}

function svuotaCard() {
    let colCard = document.getElementById("colCard");
    colCard.innerHTML = "";
}

function rigeneraHTML() {
    svuotaCard();
    animals.forEach(animal => {
        createCardHTML(animal);
    });
}