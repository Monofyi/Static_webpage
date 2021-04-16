// point to the card container area and set that as parent
let cardContainer = document.querySelector('.dev-corner');

// now point to the actual card element and print the data from developers.js
let newCard;

for(dev in teamData){
    newCard = document.createElement('div');
    newCard.innerHTML = `
    <div class="wow rollIn card float-left" style="width: 12rem;margin: 0px 10px 30px 10px">
    <img class="card-img" src="${teamData[dev].img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${teamData[dev].name}</h5>
        <p class="card-text">${teamData[dev].role}</p>
        <a href="${teamData[dev].linkedin}" class="card-link btn fa fa-linkedin" style="margin-left:-10px"></a>
        ${teamData[dev].role!='Founder'?`<a href="${teamData[dev].github}" class="card-link btn fa fa-github" style="margin-left:-10px"></a>`:' '}
        </div>
  </div>`;
    cardContainer.appendChild(newCard);

    newCard = document.createElement('div');  

}

// append the card element to parent container dynamically