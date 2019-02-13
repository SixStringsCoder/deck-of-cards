const cardTable = document.querySelector('#card-table');
const backCard = document.querySelectorAll('.back-of-card');
const backWording = document.querySelectorAll('.card-wording');

const suits = ["&hearts;", "&diams;", "&spades;", "&clubs;"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const deck = [];

// Loop 'suits' with a nested loop of 'values' to generate deck of cards


const makeDeck = (numbOfDecks) => {
  for ( let s = 0; s < suits.length; s += 1) {
     for ( let v = 0; v < values.length; v += 1) {
       // add suit-value combos to 'deck' array
       deck.push(`${values[v]} ${suits[s]}`);
       // Card color
       let cardColor = s < 2 ? "red" : "black";
       // Card template
       cardTable.innerHTML += `
          <section class="card">
            <div id="card-left-side" class="${cardColor}">
              <span class="value">${values[v]}</span>
              <span class="suit">${suits[s]}</span>
            </div>
            <div id="card-center" class="${cardColor}">
              <span class="suit">${suits[s]}</span>
            </div>
            <div id="card-right-side" class="${cardColor}">
              <span class="value">${values[v]}</span>
              <span class="suit">${suits[s]}</span>
            </div>
          </section>
          `;
      }
    console.log(deck);
   }
}


const makeBackDesign = (lines) => {
  const stripe = `<div class="stripe"></div>`;
  for (let i = 0; i < lines; i += 1) {
    backCard.forEach(cardBack => {
      cardBack.innerHTML += stripe;
    })
  }
}

makeDeck();

// makeBackDesign(50);
