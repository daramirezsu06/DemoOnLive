let tempData = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },
  {
    id: 3,
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  },
  {
    id: 4,
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  },
  {
    id: 5,
    name: "Jerry Smith",
    status: "Alive",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
  },
  {
    id: 6,
    name: "Abadango Cluster Princess",
    status: "Alive",
    species: "Alien",
    image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
  },
  {
    id: 7,
    name: "Abradolf Lincler",
    status: "unknown",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
  },
  {
    id: 8,
    name: "Adjudicator Rick",
    status: "Dead",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
  },
  {
    id: 9,
    name: "Agency Director",
    status: "Dead",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
  },
  {
    id: 10,
    name: "Alan Rails",
    status: "Dead",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
  },
  {
    id: 11,
    name: "Albert Einstein",
    status: "Dead",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
  },
  {
    id: 12,
    name: "Alexander",
    status: "Dead",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
  },
];

const root = document.getElementById("root");

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

createCart(tempData);
