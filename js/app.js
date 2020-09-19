const newHomes = [
  { address: '27569 Cedarwood Drive', sf: '2,535', bedrooms: 3, baths: 2.5, price: '$496,500' },
  { address: '316 Annandale Drive', sf: '1,326', bedrooms: 4, baths: 2, price: '$275,000' },
  { address: '251 Grandview Road', sf: '3,800', bedrooms: 3, baths: 2, price: '$699,900' },
  { address: '28571 Manitoba', sf: '2,960', bedrooms: 4, baths: 3.5, price: '$775,000' },
];

// Add and remove Class
$('#addHome')
  .removeClass('btn-danger')
  .addClass('btn-primary');

// center jumbotron
$('h1').addClass('text-center');

// hasClass
const isStyled = $('p').hasClass('left-aligned big');

console.log('isStyled', isStyled);

// Create a Link and append to the body
// returns a jQuery set of new DOM elements
const $newLink = $('<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>');
console.log($newLink);

// RENDER TO DOCUMENT
$('body').append($newLink);

// Modifying Attributes
$('#zillowLink').attr('target', '_blank');

// removeAttr() works the same way s attr()
console.log($('#zillowLink').attr('href'));

// Typical Vanilla Event Listener
document.addEventListener('click', function(e) {
  // console.log('vanillaJS', e);
});

// EVENT LISTENERS
$('#addHome').on('click', function(e) {
  console.log(e.target);

  const newHomeToAdd = newHomes[0];
  // grab a random addrr

  newHome = newHome.filter(function(home) {
    return home.address !== newHomeToAdd.address;
  });

  const newHome = $(`<tr>
  <td>${newHomeToAdd.address}</td>
  <td>${newHomeToAdd.sf}</td>
  <td>${newHomeToAdd.bedrooms}</td>
  <td>${newHomeToAdd.baths}</td>
  <td>${newHomeToAdd.price}</td>
  <td><button class="btn btn-xs btn-danger">Remove</button></td>
</tr>`);

  $('#homes tbody').append(newHome);
});

// Listener that delegates only to remove button

$('#homes tbody').on('click', 'button', function() {
  console.log(this);
  // NOT GRACEFUL
  // $(this)
  //   .closest('tr')
  //   .remove();

  // WITH A FADEOUT!
  $(this)
    .closest('tr')
    .fadeOut(1000, function() {
      $(this).remove();
    });
});
