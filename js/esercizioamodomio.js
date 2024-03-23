const animals = [

];


let btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener("click", (e) => {
    estrapolaDati()
});


function aggiungiCard() {
    array.forEach(element => {
        
    });

}


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


