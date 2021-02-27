// point to the card container area and set that as parent
let cardContainer = document.querySelector('.dev-corner');

// now point to the actual card element and print the data from developers.js
let newCard;

for(dev in developersData){
    newCard = document.createElement('div');
    newCard.innerHTML = `
    <div class="wow rollIn card float-left" style="width: 14rem;margin: 0px 10px 30px 10px">
    <img class="card-img" src="${developersData[dev].img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${developersData[dev].name}</h5>
        <p class="card-text">${developersData[dev].role}</p>
        <a href=${developersData[dev].github} class="card-link btn fa fa-github" style="margin:-10px"></a>
        <a href=${developersData[dev].linkedin} class="card-link btn fa fa-linkedin"></a>
      </div>
  </div>`;
    cardContainer.appendChild(newCard);

    newCard = document.createElement('div');  

}

// append the card element to parent container dynamically