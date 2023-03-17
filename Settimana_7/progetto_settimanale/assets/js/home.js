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
          <div id='card'>
          <div>
          <img src="${shopElement.imageUrl}" class="card-img-top" alt="">
          </div>
          <div>
            <h5>${shopElement.name}</h5>
            <p>${shopElement.description}</p>
            <p>${shopElement.price}€</p>
            <a href="details.html?eventId=${shopElement._id}" class="btn btn-primary">details</a>
          </div>
        </div>
              `;
    })
 })
}
myShop()
