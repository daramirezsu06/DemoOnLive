let tempData = [];

$.get("https://rickandmortyapi.com/api/character", (data, status) => {
  tempData = data.results;
  console.log(tempData);
});

const root = document.getElementById("root");
const getCharacters = document.getElementById("get-characters");

const deleteCharacter = (event) => {
  event.preventDefault();
  let deleteId = Number(event.target.id);
  tempData = tempData.filter((character) => character.id !== deleteId);
  console.log(tempData);
  root.innerHTML = "";

  createCart(tempData);
};

const createCart = (arrayCharacters = []) => {
  const arrayCardCharacter = arrayCharacters.map((character) => {
    const cardCharacter = document.createElement("div");
    const nameCharacter = document.createElement("h2");
    const statusCharacter = document.createElement("p");
    const speciesCharacter = document.createElement("p");
    const imageCharacter = document.createElement("img");
    const buttonDelete = document.createElement("button");

    buttonDelete.innerText = "eliminar";
    buttonDelete.id = character.id;
    nameCharacter.innerText = character.name;
    statusCharacter.innerText = character.status;
    speciesCharacter.innerText = character.species;
    imageCharacter.src = character.image;
    cardCharacter.classList.add("card-character");

    buttonDelete.addEventListener("click", deleteCharacter);

    cardCharacter.append(
      buttonDelete,
      nameCharacter,
      statusCharacter,
      speciesCharacter,
      imageCharacter
    );

    root.append(cardCharacter);
  });
};

getCharacters.addEventListener("click", () => {
  createCart(tempData);
});
