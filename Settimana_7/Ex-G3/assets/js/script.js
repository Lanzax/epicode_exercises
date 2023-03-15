
fetch("https://striveschool-api.herokuapp.com/books")
  .then((pippo) => {
    return pippo.json();
  })
  .then((pluto) => {
    console.log(pluto);
    pluto.forEach((imgBook) => {
    document.getElementById('row').innerHTML+=`
    <div class="col-4">
    <div class="card" id="card" style="width: 18rem">
      <img height='400px' src="${imgBook.img}" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">${imgBook.title}</h5>
        <p class="card-text">
        ${imgBook.price}$
        </p>
        <button onclick="scartaCard()">Scarta</button>
      </div>
    </div>
  `;   
    });
  });
  function scartaCard(){
    document.getElementsByTagName('button').classList.add('d-none')
}

