const MY_APY ='https://striveschool-api.herokuapp.com/api/product/';
const MY_AUTH="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MmJhNmY4MWI0MjAwMTM5YjI3ZGIiLCJpYXQiOjE2NzkwNDM0OTQsImV4cCI6MTY4MDI1MzA5NH0.Bet1SID1534hQEFxZqWZrIoozxjScxtcDaA4qupLy80"

const myShop= function(){

    fetch(MY_APY,{
        method:'GET',
        headers: {
            "Authorization": MY_AUTH
            },
    })

    .then((response)=>{
        console.log(response)
        return response.json();
    })
    .then((events)=>{
        console.log(events)
        events.forEach((shopElement) => {
          console.log(shopElement);
          let shop = document.getElementById("shopContainer");
          shop.innerHTML += `
          <div class="card w-25">
          <img src="${shopElement.imageUrl}"  width="100px"  class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="details.html" class="btn btn-primary">details</a>
          </div>
        </div>
              `;
    })
    console.log
 })
}
myShop()


const saveObject = async function (obj) {
  try {
      let response = await fetch(MY_APY, {
        method:'POST',
        body: JSON.stringify(obj),
        headers: {
            "Authorization": MY_AUTH,
          'Content-Type': 'application/json',
        },
      })
      if (response.ok) {
        alert('Oggetto salvato')
      } else {
        alert("Poblema nel salvare l'oggetto")
      }} catch (error) {
        console.log(error)
      }
    } 
  
let buttonRefernce = document.getElementById('button');
buttonRefernce.addEventListener('click', () => {
        let newObject = {
          name: document.getElementById('name').value,
          description: document.getElementById('description').value,
          brand: document.getElementById('brand').value,
          imageUrl:document.getElementById('url').value,
          price: document.getElementById('price').value
        }
        console.log(newObject)
  saveObject(newObject)
    })
    