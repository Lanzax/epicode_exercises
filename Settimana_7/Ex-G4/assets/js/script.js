const CARDCOVER = "https://api.pexels.com/v1/search?query=landscape";

const getImage = function () {
  fetch(CARDCOVER, {
    method: "GET",
    headers: {
      Authorization: "CAhXsZT3krqlCr35ThTOjUGUAa7BuxPk060AKI30j3Iwqdpdew7kvDmD",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((pluto) => {
      let photos = pluto.photos;

      photos.forEach((photosElement) => {
        console.log(photosElement.src.tiny);
        let card = document.getElementById("row");
        card.innerHTML += `
            <div class="col-md-4">
            <div class="card mb-4 shadow-sm ">
              <img class="d-none" src="${photosElement.src.tiny} alt="">
              <div class="card-body">
                <h5 class="card-title">Lorem Ipsum</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      Edit
                    </button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
            `;
      });
      let load_image = document.getElementById("load_image");
      load_image.addEventListener("click", () => {
        for (let i = 0; i < photos.length; i++) {
          let classImage = document.getElementsByClassName("d-none")[0];
          classImage.classList.remove("d-none");
        }
      });
    });
};
getImage();
