const MY_APY = "https://striveschool-api.herokuapp.com/api/product/";
const MY_AUTH =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MmJhNmY4MWI0MjAwMTM5YjI3ZGIiLCJpYXQiOjE2NzkwNDM0OTQsImV4cCI6MTY4MDI1MzA5NH0.Bet1SID1534hQEFxZqWZrIoozxjScxtcDaA4qupLy80";
let eventId = new URLSearchParams(window.location.search).get("eventId");
console.log(eventId);
const myShopItem = function () {
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
            document.getElementById('name').value=events.name
            document.getElementById('description').value=events.description
            document.getElementById('brand').value=events.brand
            document.getElementById('url').value=events.imageUrl
           document.getElementById('price').value=events.price
      });
  };
  myShopItem();

  
let changeButton = document.getElementById('changeButton')
changeButton.addEventListener('click',()=>{
  if(confirm('Sei sicuro di volerlo modificare?')){
    const changeObject = async function (obj) {
        try {
            let response = await fetch(MY_APY+eventId, {
              method:'PUT',
              body: JSON.stringify(obj),
              headers: {
                  "Authorization": MY_AUTH,
                'Content-Type': 'application/json',
              },
            })
            if (response.ok) {
              alert('Oggetto modificato')
              window.location.replace("./homepage.html");
            } else {
              alert("Poblema nel modificare l'oggetto")
            }} catch (error) {
              console.log(error)
            }
          } 
              let newObject = {
                name: document.getElementById('name').value,
                description: document.getElementById('description').value,
                brand: document.getElementById('brand').value,
                imageUrl:document.getElementById('url').value,
                price: document.getElementById('price').value
              }
              console.log(newObject)
        changeObject(newObject)
            }
})
  