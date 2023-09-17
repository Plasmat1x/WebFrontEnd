var catalog = document.querySelector("#goodsTable");
var tBody = document.createElement("tbody");

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
  "undershirt",
];

function renderGoodsTable() {
    var table = document.createElement("table");
    table.classList.add("table");
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");

    var thImage = document.createElement("th");
    thImage.textContent = "Image";
    var thTitle = document.createElement("th");
    thTitle.textContent = "Title";
    var thDesc = document.createElement("th");
    thDesc.textContent = "Description";
    var thPrice = document.createElement("th");
    thPrice.textContent = "Price";
    var thEditBtn = document.createElement("th");
    var thDelBtn = document.createElement("th");


    tr.append(thImage, thTitle, thDesc, thPrice, thEditBtn, thDelBtn);
    thead.appendChild(tr);
    table.append(thead, tBody);

    return table.innerHTML;
}

function renderGood(i) {
  return `<tr>
            <td><img src="images/goods/${goodsTitles[i]}" alt="${goodsTitles[i]}" class="img-fluid"></td>
            <td>${goodsTitles[i].toUpperCase()}</td>
            <td>Some quick example text to build on the card title and make up the bulk of the card's content.</td>
            <td>${Math.floor(
                Math.random() * (100 - 10) + 10
              )} $</td>
            <td><button type="button" class="editGoodButton btn btn-info">Edit</button>
            </td>
            <td><button type="button" class="deleteGoodButton btn btn-waring">Delete</button></td>
        </tr>`;
}

function renderAllGoods() {
    for(let i = 0; i < goodsTitles.length; i ++) {
        tBody.innerHTML += renderGood(i);
    }
}

if(goodsTitles.length > 0) {
    catalog.innerHTML = renderGoodsTable();
}
