const MY_APY = "https://striveschool-api.herokuapp.com/api/product/";
const MY_AUTH =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MmJhNmY4MWI0MjAwMTM5YjI3ZGIiLCJpYXQiOjE2NzkwNDM0OTQsImV4cCI6MTY4MDI1MzA5NH0.Bet1SID1534hQEFxZqWZrIoozxjScxtcDaA4qupLy80";
let eventId = new URLSearchParams(window.location.search).get("eventId");
console.log(eventId)
const myFoundFunction= function(){
    fetch(MY_APY+eventId,{
        method:'GET',
        headers:{
            authorization:MY_AUTH,
        },
    })
    .then((response)=>{
        console.log(response)
       return response.json()
    })
    .then((ev)=>{
        console.log(ev)
        let spinner = document.getElementById('spinner');
  spinner.classList.add('d-none')
  console.log(spinner)
        let foundDetails = document.getElementById('col')
        foundDetails.innerHTML=`
        <div id="classContainer">
        <div class="imgContainer">
            <img src="${ev.imageUrl}" alt="">
        </div>
        <div class="descriptionContainer">
            <b><span>${ev.name}</span> <span>€${ev.price}</span></b>
            <p>${ev.description}</p>
            <a href="" class="btn btn-success">Aggiungi al carrello</a>
        </div>
        `
    })
}
myFoundFunction()
