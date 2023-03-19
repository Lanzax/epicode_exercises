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
        let spinner = document.getElementById('spinner');
  spinner.classList.add('d-none')
  console.log(spinner)
        events.forEach((shopElement) => {
          console.log(shopElement);
          let shop = document.getElementById("row");
          shop.innerHTML += `
          <div class="col-12 col-xl-6 my-3">
              <div id="shopContainer" class="shopContainer" >
                <a href="found.html?eventId=${shopElement._id}">
                  <div id="imgContain">
                    <img src="${shopElement.imageUrl}" alt="">
                  </div>
                </a>
                <div id="textContain">
                  <div id="subText">
                    <h2>${shopElement.name}</h2>
                    <p>${shopElement.description}</p>
                  </div>
       
                <div>
                  <p>Da <span>€ ${shopElement.price}</span></p>
                </div>
                <div id="buttonContain">
                <a href="details.html?eventId=${shopElement._id}" class=" my-2 btn btn-secondary">Dettagli</a>
                  <a href="found.html?eventId=${shopElement._id}" class="btn btn-success">Scopri di piu'</a>

                </div>
                </div>
              </div>
            </div>
              `;
    })
 })
}
myShop()

