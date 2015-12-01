var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 48.9, lng: 2.3508},
    zoom: 11,
    scrollwheel: false,
    mapTypeControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

var marker = new google.maps.Marker({
    position: {lat: 48.871592, lng: 2.367881},
    map: map,
    title: 'Le Carillon'
  });

  var contentString = '<div class="mapcontent">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h3>Le Carillon &amp; Le Petit Cambodge</h3>'+
        '<div id="bodyContent"><p>Minutes after the attack on the Stade de France, gunmen opened fire on these two resturants, killing at least 14.</p>'+
        '</div>'+
        '</div>';

var infowindow = new google.maps.InfoWindow({
  content: contentString,
  maxWidth: 400
});

marker.addListener('click', function() {
  infowindow.open(map, marker);
});

var markertwo = new google.maps.Marker({
    position: {lat: 48.925432, lng: 2.359915},
    map: map,
    title: 'Stade de France'
  });

  var contentStringTwo = '<div class="mapcontent">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h3>Stade de France</h3>'+
        '<div id="bodyContent"><p>The first attack was outside the stadium around 9:20 PM with three suicide bombers denotating outside the stadium. Four people were killed, including the three bombers.</p>'+
        '</div>'+
        '</div>';

var infowindowtwo = new google.maps.InfoWindow({
  content: contentStringTwo,
  maxWidth: 400
});

markertwo.addListener('click', function() {
  infowindowtwo.open(map, markertwo);
});

var markerthree = new google.maps.Marker({
    position: {lat: 48.862993, lng: 2.370735},
    map: map,
    title: 'The Bataclan'
  });

  var contentStringThree = '<div class="mapcontent">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h3>The Bataclan</h3>'+
        '<div id="bodyContent"><p>Around 9:40, gunmen entered the concert hall and opened fire on the audience of the American band, the Eagles of Death Metal, who was performing at the time. They then held remaining concertgoers hostage until the police raided the scene at 12:20AM. 89 people were killed in this assualt.</p>'+
        '</div>'+
        '</div>';

var infowindowthree = new google.maps.InfoWindow({
  content: contentStringThree,
  maxWidth: 400
});

markerthree.addListener('click', function() {
  infowindowthree.open(map, markerthree);
});

var markerfour = new google.maps.Marker({
    position: {lat: 48.853784, lng: 2.382070},
    map: map,
    title: 'La Belle Equipe'
  });

  var contentStringFour = '<div class="mapcontent">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h3>La Belle Equipe</h3>'+
        '<div id="bodyContent"><p>At 9:36, gunmen fired outside the resturant killing 19 people.</p>'+
        '</div>'+
        '</div>';

var infowindowfour = new google.maps.InfoWindow({
  content: contentStringFour,
  maxWidth: 400
});

markerfour.addListener('click', function() {
  infowindowfour.open(map, markerfour);
});


loadNews(); //will connect to news apis
}
