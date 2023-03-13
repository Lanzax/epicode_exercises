function pet(petName, ownerName, species, breed) {
  this.petName = petName;
  this.ownerName = ownerName;
  this.species = species;
  this.breed = breed;
}

function addToTable() {
  // Crea un oggetto con i dati del form
  let pet = new pet(
    document.getElementById("petName").value,
    document.getElementById("ownerName").value,
    document.getElementById("species").valuem,
    document.getElementById("breed").value
  );

}
console.log(pet())