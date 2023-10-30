// Il tuo compito è creare un sito e-commerce per Smartphones.
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto.
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

console.log();
console.log("-------ESERCIZIO 7-------");
console.log();

const changeTitolo = function (newTitle) {
  const titleHeader = document.querySelector("#titleHeader");
  titleHeader.textContent = newTitle;
  console.log(titleHeader);
};
changeTitolo("Coco's Music Store");

console.log();
console.log("-------ESERCIZIO 8-------");
console.log();

const changeBackgroundColor = function () {
  const body = document.querySelector("body");
  body.style.backgroundColor = "grey";
};
changeBackgroundColor();

console.log();
console.log("-------ESERCIZIO 9-------");
console.log();

const changeAddress = function (newAddress) {
  const footerAddress = document.querySelector(".address");
  footerAddress.textContent = newAddress;
};
changeAddress("Ci trovi in Italia da qualche parte, ma non sappiamo dove");

console.log();
console.log("-------ESERCIZIO 10-------");
console.log();

const addClassToLink = function (newClass) {
  const linkAmazon = document.querySelectorAll(".link");
  for (let i = 0; i < linkAmazon.length; i++) {
    linkAmazon[i].classList.add(newClass);
  }
};
addClassToLink("Amazon");

console.log();
console.log("-------ESERCIZIO 11-------");
console.log();

const toggleVisibility = function () {
  const cardImg = document.querySelectorAll(".card");
  for (let i = 0; i < cardImg.length; i++) {
    cardImg[i].querySelector("img").classList.toggle("hide");
  }
};
toggleVisibility();
toggleVisibility();

// const toggleVisibility = () => {
//    document.querySelectorAll(".card img").forEach((img)=>{
//     img.classList.toggle("hide")
//    })
//   };
// toggleVisibility();
// setInterval(function () {
//   toggleVisibility();
// }, 5000);

console.log();
console.log("-------ESERCIZIO 12-------");
console.log();

const randomPriceColor = function () {
  const cardPrice = document.querySelectorAll(".card > .price");
  for (let i = 0; i < cardPrice.length; i++) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    cardPrice[i].style.color = `rgb(${r}, ${g}, ${b})`;
  }
};
randomPriceColor();
