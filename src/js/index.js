import '../scss/index.scss';
import jQuery from 'jquery';

let templateCard = function (data, i) {
  return `<div style="width: 50%">
    <div class="card-view" >
    <img class="card-img-top" src="../src/img/card-bg.jpg" alt="Card Image">
    <div class="card-body center">
    <img src="../src/img/profile.svg" alt="profile photo" class="rounded-circle profile">
    <p class="card-text name">${data.name}</p>
    <p class="card-text ">${data.gender},${data.age}</p>
    <img class="drop-down" id="seeMore-${i}" src="../src/img/view-more.svg"></a>
    </div>
    <section class="hide">
      <p class="h5 ">Relationship</p>
      <p class="card-text">${data.friends[0].relationship}</p>
      <p class="h5 ">Biography</p>
      <p class="card-text ">${data.biography}</p>
    </section>
    </div>
    </div>`;
};

let templateList = function (data, i) {
  return `<ul class="list-group list-group-flush">
    <div class="list-group-item">
    <div class="d-flex" >
      <img src="../src/img/profile.svg" alt="profile photo" class="p-2 list-profile">
      <p class="list-name">${data.name}</p>
      <p class="list-age">${data.gender},${data.age}</p>
      <img class="drop-down list-drop" id="seeMore-${i}" src="../src/img/view-more.svg">
    </div>
    <section class="list-more">
        <p class="h5">Relationship</p>
        <p class="card-text " style="">${data.friends[0].relationship}</p>
        <p class="h5">Biography</p>
        <p class="card-text ">${data.biography}</p>
      </section>
    </div> 
    </ul>`;
};

function Profile(data) {
  let containerHtmlCard = '';
  let containerHtmlList = '';

  for (let i = 0; i < data.friends.length; i++) {
    containerHtmlCard += templateCard(data.friends[i], i);
    containerHtmlList += templateList(data.friends[i], i);
  }
  jQuery('#switch').on('change', (e) => {
    if (e.target.checked === true) {
      document.getElementById('peopleList').innerHTML = containerHtmlCard;
    } else {
      document.getElementById('peopleList').innerHTML = containerHtmlList;

    }
  });

}

fetch('http://www.json-generator.com/api/json/get/cqHzMtkErS?indent=2')
  .then(function (response) {
    return response.json();
  }).then(function (res) {
    Profile(res.data);
  });

jQuery('#peopleList').on('click', '.drop-down', (e) => {
  console.log(e);
  let section = jQuery(jQuery(e.target).parents('div').children('section')[0]);

  if (section.hasClass('hide')) {
    return (section).removeClass('hide').addClass('show');
  }

  return (section).removeClass('show').addClass('hide');

});

// must use in SCSS
// jQuery('#switch').on('change', (e) => {
//   if (e.target.checked === true) {
//   } else {
//
//   }
//   // container class += list-card - list-table
//   // container class += list-table - list-card
// });
