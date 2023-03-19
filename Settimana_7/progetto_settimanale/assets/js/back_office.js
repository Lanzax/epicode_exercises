const MY_APY ='https://striveschool-api.herokuapp.com/api/product/';
const MY_AUTH="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MmJhNmY4MWI0MjAwMTM5YjI3ZGIiLCJpYXQiOjE2NzkwNDM0OTQsImV4cCI6MTY4MDI1MzA5NH0.Bet1SID1534hQEFxZqWZrIoozxjScxtcDaA4qupLy80"


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
          window.location.replace("./homepage.html");
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


let buttonProva=document.getElementById('buttonProva')
buttonProva.addEventListener('click',()=>{
    let pCard = document.getElementById("pContain");
            pCard.innerHTML += `
            <div id='pShopContainer'>
                <div id="shopContainer" class="shopContainer" >
                    <div id="imgContain">
                      <img src="${document.getElementById('url').value}" alt="">
                    </div>
                  </a>
                  <div id="textContain">
                    <div id="subText">
                      <h2>${document.getElementById('name').value}</h2>
                      <p>${document.getElementById('description').value}</p>
                    </div>
         
                  <div>
                    <p>Da <span>€ ${document.getElementById('price').value}</span></p>
                  </div>
                  <div class=" my-2 btn btn-secondary">Dettagli</div>
                  <div class="btn btn-success">Scopri di piu'</div>
                  </div>
                </div>
                </div>
                `;
                buttonProva.classList.add('d-none')
})



