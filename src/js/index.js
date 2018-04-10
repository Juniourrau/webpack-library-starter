import '../scss/index.scss';

let templateCard = function (data) {
  return [
    `<div style="width: 50%">
    <div class="cardView layout" >
    <img class="card-img-top" src="../src/img/card-bg.jpg" alt="Card Image">
    <div class="card-body center">
    <img src="../src/img/profile.svg" alt="profile photo" class="rounded-circle profile">
    <p class="card-text name">${data.name}</p>
    <p class="card-text ">${data.gender},${data.age}</p>
    <a data-toggle="collapse" href="#seeMore" role="button"
    aria-expanded="false" aria-controls="seeMore" >
    <img class="dropDown " src="../src/img/view-more.svg">
    </a> 
    <div class="collapse" id="seeMore">
    <p class="h5 ">Relationship</p>
    <p class="card-text " style="">${data.friends[0].relationship}</p>
    <p class="h5 ">Biography</p>
    <p class="card-text ">${data.biography}</p>
    </div>
    </div>
    </div>
    </div>`].join('');
};

let templateList = function (data) {
  return [
    `<ul class="list-group list-group-flush" style="width: 100%">
    <li class="list-group-item" style="padding : 15px 0px;">
    <div class="d-flex" >
    <img src="../src/img/profile.svg" alt="profile photo" class="p-2 listProfile">
    <p class="p-2 listName">${data.name}</p>
    <p class="p-2 listAge">${data.gender},${data.age}</p>
    <img class="listDrop p-2 " src="../src/img/view-more.svg">
    <div class="collapse" id="seeMore">
    <p class="h5 ">Relationship</p>
    <p class="card-text " style="">${data.friends[0].relationship}</p>
    <p class="h5 ">Biography</p>
    <p class="card-text ">${data.biography}</p>
    </div>
    </div>
    </li>
    </ul>`].join('');
};

function Profile(data) {
  let containerHtml = '';

  for (let i = 0; i < data.friends.length; i++) {
    containerHtml += templateCard(data.friends[i]);
  }
  document.getElementById('peopleList').innerHTML = containerHtml;
}

fetch('http://www.json-generator.com/api/json/get/cqHzMtkErS?indent=2')
  .then(function (response) {
    return response.json();
  }).then(function (res) {
    Profile(res.data);
  });

