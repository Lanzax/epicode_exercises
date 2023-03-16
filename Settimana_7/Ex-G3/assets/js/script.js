fetch("https://striveschool-api.herokuapp.com/books")
  .then((pippo) => {
    return pippo.json();
  })
  .then((pluto) => {
    console.log(pluto);
    pluto.forEach((imgBook) => {
      document.getElementById("row").innerHTML += `
    <div class="col-4 my-5">
    <div class="card" id="card" style="width: 18rem">
      <img height='400px' src="${imgBook.img}" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">${imgBook.title}</h5>
        <p class="card-text">
        ${imgBook.price}$
        </p>
        <input type='button' value='Scarta' onclick='scarta()' />
      </div>
    </div>
  `;
    });
  });
  function scarta() {
    document.getElementById('card').style.display='none';
    }