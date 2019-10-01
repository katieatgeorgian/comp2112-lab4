const emojibtn = document.querySelector("#emojibtn");
const emojimodalbody = document.querySelector("#emojimodalbody");
const textarea = document.querySelector("#textarea");
const searchEmoji = document.querySelector("#searchEmoji");
const emojiCategories = document.querySelector("#emojiCategories");

emojibtn.addEventListener("click", browseGifs);
emojimodalbody.addEventListener("click", chooseEmoji);
searchEmoji.addEventListener("keyup", searchEmojis);

let emojis = [];
let emojiIcons = [];

async function browseGifs(e) {
  e.preventDefault();

  const response = await fetch(
    `https://unpkg.com/emoji.json@12.1.0/emoji.json`
  );
  const data = await response.json();

  emojis = data;

  emojiIcons = emojis
    .map(
      (emoji, index) =>
        `<div data-index=${index} data-name="${emoji.name}" data-category="${emoji.category}" class="emoji">${emoji.char}</div>`
    )
    .join("");
  emojimodalbody.innerHTML = emojiIcons;
}

//function to select one image from search results
function chooseEmoji(e) {
  e.preventDefault();

  if (e.target.dataset.index) {
    const index = e.target.dataset.index;

    let selectedEmoji = e.target.innerHTML;
    textarea.innerHTML = selectedEmoji;
    //closes modal
    $("#emojimodal").modal("hide");
  }
}

function searchEmojis(e) {
  e.preventDefault();
  const search = searchEmoji.value;
  //the else if and else were done because the instructions said to use the same techniques as the in-class exercise 4b which
  //requires nothing to be displayed if less than 3 characters; however, that didn't make sense to me so I compromised with this
  if (search.length >= 2) {
    let filteredEmojis = emojis
      .filter(emoji => emoji.name.includes(`${search}`))
      .map(
        (emoji, index) =>
          `<div data-index=${index} data-name="${emoji.name}" class="emoji">${emoji.char}</div>`
      )
      .join("");
    emojimodalbody.innerHTML = filteredEmojis;
  } else if (search.length == 0) {
    emojimodalbody.innerHTML = emojiIcons;
  } else {
    emojimodalbody.innerHTML = "";
  }
}

/*** FILTER BASED ON SMILEY FACE ICON ***/
function searchSmiles(e) {
  e.preventDefault();

  const smiles = emojis
    .filter(emoji => emoji.category.includes("Smileys"))
    .map(
      (emoji, index) =>
        `<div data-index=${index} data-name="${emoji.name}" class="emoji">${emoji.char}</div>`
    )
    .join("");
  emojimodalbody.innerHTML = smiles;
  emojimodalbody.scrollTop = 0;
}

const smileys = emojiCategories.querySelector("img:first-child");
smileys.addEventListener("click", searchSmiles);

/*** FILTER BASED ON ANIMALS ***/
function searchAnimals(e) {
  e.preventDefault();

  const animalsArray = emojis
    .filter(emoji => emoji.category.includes("Animal"))
    .map(
      (emoji, index) =>
        `<div data-index=${index} data-name="${emoji.name}" class="emoji">${emoji.char}</div>`
    )
    .join("");
  emojimodalbody.innerHTML = animalsArray;
  emojimodalbody.scrollTop = 0;
}

const animals = emojiCategories.querySelector("img:nth-of-type(2)");
animals.addEventListener("click", searchAnimals);

/*** FILTER BASED ON FOOD ***/
function searchFoods(e) {
  e.preventDefault();

  const foodsArray = emojis
    .filter(emoji => emoji.category.includes("Food"))
    .map(
      (emoji, index) =>
        `<div data-index=${index} data-name="${emoji.name}" class="emoji">${emoji.char}</div>`
    )
    .join("");
  emojimodalbody.innerHTML = foodsArray;
  emojimodalbody.scrollTop = 0;
}

const food = emojiCategories.querySelector("img:nth-of-type(3)");
food.addEventListener("click", searchFoods);

/*** FILTER BASED ON SPORTS ***/
function searchSports(e) {
  e.preventDefault();

  const sportsArray = emojis
    .filter(emoji => emoji.category.includes("sport"))
    .map(
      (emoji, index) =>
        `<div data-index=${index} data-name="${emoji.name}" class="emoji">${emoji.char}</div>`
    )
    .join("");
  emojimodalbody.innerHTML = sportsArray;
  emojimodalbody.scrollTop = 0;
}

const sport = emojiCategories.querySelector("img:nth-of-type(4)");
sport.addEventListener("click", searchSports);

/*** FILTER BASED ON TRAVELS ***/
function searchTravels(e) {
  e.preventDefault();

  const travelsArray = emojis
    .filter(emoji => emoji.category.includes("Travel"))
    .map(
      (emoji, index) =>
        `<div data-index=${index} data-name="${emoji.name}" class="emoji">${emoji.char}</div>`
    )
    .join("");
  emojimodalbody.innerHTML = travelsArray;
  emojimodalbody.scrollTop = 0;
}

const travel = emojiCategories.querySelector("img:nth-of-type(5)");
travel.addEventListener("click", searchTravels);

/*** FILTER BASED ON OBJECTS ***/
function searchObjects(e) {
  e.preventDefault();

  const objectsArray = emojis
    .filter(emoji => emoji.category.includes("Object"))
    .map(
      (emoji, index) =>
        `<div data-index=${index} data-name="${emoji.name}" class="emoji">${emoji.char}</div>`
    )
    .join("");
  emojimodalbody.innerHTML = objectsArray;
  emojimodalbody.scrollTop = 0;
}

const object = emojiCategories.querySelector("img:nth-of-type(6)");
object.addEventListener("click", searchObjects);

/*** FILTER BASED ON SYMBOLS ***/
function searchSymbols(e) {
  e.preventDefault();

  const symbolsArray = emojis
    .filter(emoji => emoji.category.includes("symbol"))
    .map(
      (emoji, index) =>
        `<div data-index=${index} data-name="${emoji.name}" class="emoji">${emoji.char}</div>`
    )
    .join("");
  emojimodalbody.innerHTML = symbolsArray;
  emojimodalbody.scrollTop = 0;
}

const symbol = emojiCategories.querySelector("img:nth-of-type(7)");
symbol.addEventListener("click", searchSymbols);

/*** FILTER BASED ON FLAGS ***/
function searchFlags(e) {
  e.preventDefault();

  const flagsArray = emojis
    .filter(emoji => emoji.category.includes("Flag"))
    .map(
      (emoji, index) =>
        `<div data-index=${index} data-name="${emoji.name}" class="emoji">${emoji.char}</div>`
    )
    .join("");
  emojimodalbody.innerHTML = flagsArray;
  emojimodalbody.scrollTop = 0;
}

const flag = emojiCategories.querySelector("img:last-child");
flag.addEventListener("click", searchFlags);
