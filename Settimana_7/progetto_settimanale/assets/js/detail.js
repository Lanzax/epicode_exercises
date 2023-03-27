const MY_APY = "https://striveschool-api.herokuapp.com/api/product/";
const MY_AUTH =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MmJhNmY4MWI0MjAwMTM5YjI3ZGIiLCJpYXQiOjE2NzkwNDM0OTQsImV4cCI6MTY4MDI1MzA5NH0.Bet1SID1534hQEFxZqWZrIoozxjScxtcDaA4qupLy80";
let eventId = new URLSearchParams(window.location.search).get("eventId");


console.log(eventId);
const myShop = function () {
  fetch(MY_APY + eventId, {
    method: "GET",
    headers: {
      Authorization: MY_AUTH,
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((events) => {
      console.log(events);

      let details = document.getElementById("subContainer");
      details.innerHTML = `
        <h1>Dettagli prodotto:</h1>
          <p>Name</p>
        <input id='input' type="text" value="${events.name}" disabled>
          <p>Description</p>
          <input id='input' type="text" value="${events.description}" disabled>
          <p>Brand</p>
          <input id='input' type="text" value="${events.brand}" disabled>
          <p>Image Url</p>
          <input id='input' type="text" value="${events.imageUrl}" disabled>
          <p>Price</p>
          <input id='input' type="text" value="${events.price}" disabled>
             <p>ID</p>
            <input id='input' type="text" value="${events._id}" disabled>
            <div>
            <a href="change.html?eventId=${events._id}" class="text-light btn btn-warning">Modifica</a>
            </div>
            
            `;
    });
};
myShop();

let deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", async () => {
  if(confirm('Sei sicuro di volerlo eliminare?')){

  
  let response = await fetch(MY_APY + eventId, {
    method: "DELETE",
    headers: {
      'Authorization': MY_AUTH,
    },
  });
  console.log(response);
  if (response.ok) {
    alert("Eliminato");
    window.location.replace("./homepage.html");
  } else {
    alert("Errore");
  }}
});

