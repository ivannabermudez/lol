function displayPetCards() {
  //get the DIV from the html
  const DIV = document.getElementById("pets");
  let card = "";
  //travel the array
  for (let i = 0; i < petSalon.pets.length; i++) {
    let pet = petSalon.pets[i];
    //create the card tmp
    card += `
    <div class="pet">
        <h5>${pet.name}</h5>
        <p>Age:${pet.age}</p>
        <p>Service:${pet.service}</p>
    </div>`;

    console.log(card);
  }
  //add the card into the DIV
  DIV.innerHTML = card;
}

function displayPetTable() {
  //get an element from the DOM (form html)
  const tbody = document.getElementById("tbPets-body");
  let rows = "";
  for (let i = 0; i < petSalon.pets.length; i++) {
    let pet = petSalon.pets[i];
    rows += `<tr> 
        <td>${pet.name}</td>
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.breed}</td>
        <td>${pet.service}</td>
        <td> <button class="btn btn-sm btn-outline-danger" onclick="deletePet('${pet.name}" >Remove</button> </td>
    </tr>`;
  }
  //add the rows to the tbody
  tbody.innerHTML = rows;
  console.log(rows);
}

//dont forget to execute this function in the browser console// displayPetCards()

