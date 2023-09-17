var catalog = document.querySelector("#catalog");

var goodsTitles = [
  "cap",
  "dress",
  "gloves",
  "hat",
  "jacket",
  "mittens",
  "panama",
  "shirt",
  "shorts",
  "skirt",
  "tshirt",
  "undershirt"
];

function renderGood(i) {
  return `<div class="col mb-3">
    <div class="card">
        <img src="images/goods/${
          goodsTitles[i]
        }.jpg" class="card-img-top p-3" alt="${goodsTitles[i]}">
        <div class="card-body">
          <h5 class="card-title">${goodsTitles[i].toUpperCase()}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <p class="card-price">Price: ${Math.floor(
            Math.random() * (100 - 10) + 10
          )}$</p>
          <a href="#" class="btn btn-primary">Add to basket</a>
        </div>
      </div>
</div>`;
}

for (let i = 0; i < goodsTitles.length; i++) {
  catalog.innerHTML += renderGood(i);
}
