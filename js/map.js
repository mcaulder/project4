function initialize() {

       var mapOptions = {
         center: { lat:  48.8567, lng: 2.3508},
         zoom: 11,
         mapTypeId: google.maps.MapTypeId.HYBRID
       };
       var map = new google.maps.Map(document.getElementById('map-canvas'),
           mapOptions);


           var marker = new google.maps.Marker({
               position: {lat: 48.871592, lng: 2.367881},
               map: map,
               title: 'Le Carillon'
             });

             var contentString = '<div class="mapstuff">'+
                   '<div id="one">'+
                   '</div>'+
                   '<h4>Le Carillon and Le Cambodge Restaurants </h4>'+
                   '<div id="bodystuff"><p>As people began to report the sound of explosions in the Stade de France, attackers shot diners outside Le Carillon, a restaurant and bar. Then, they walked into Le Petit Cambodge, a four-year-old family-owned Cambodian restaurant and killed 11 people, injuring a dozen others</p>'+
                   '</div>'+
                   '</div>';

           var infowindow = new google.maps.InfoWindow({
             content: contentString,
             maxWidth: 200
           });

           marker.addListener('click', function() {
             infowindow.open(map, marker);
           });

           var markertwo = new google.maps.Marker({
               position: {lat: 48.925432, lng: 2.359915},
               map: map,
               title: 'Stade de France'
             });

             var contentString2 = '<div class="mapstuff">'+
                   '<div id="one">'+
                   '</div>'+
                   '<h4>Stade de France</h4>'+
                   '<div id="bodystuff"><p>The first of three explosions occurred outside the Stade de France stadium on the northern fringe of Paris where France were playing Germany in an international football friendly.</p>'+
                   '</div>'+
                   '</div>';

           var infowindowtwo = new google.maps.InfoWindow({
             content: contentString2,
             maxWidth: 200
           });

           markertwo.addListener('click', function() {
             infowindowtwo.open(map, markertwo);
           });

           var markerthree = new google.maps.Marker({
               position: {lat: 48.862993, lng: 2.370735},
               map: map,
               title: 'The Bataclan'
             });

             var contentString3 = '<div class="mapstuff">'+
                   '<div id="one">'+
                   '</div>'+
                   '<h4>The Bataclan</h4>'+
                   '<div id="bodystuff"><p>At midnight, police said “several hundred” concertgoers inside the Bataclan were being held hostage by an unknown number of gunmen.</p>'+
                   '</div>'+
                   '</div>';

           var infowindowthree = new google.maps.InfoWindow({
             content: contentString3,
             maxWidth: 200
           });

           markerthree.addListener('click', function() {
             infowindowthree.open(map, markerthree);
           });

           var markerfour = new google.maps.Marker({
               position: {lat: 48.853784, lng: 2.382070},
               map: map,
               title: 'La Belle Equipe'
             });

             var contentString4 = '<div class="mapcontent">'+
                   '<div id="siteNotice">'+
                   '</div>'+
                   '<h4>La Belle Equipe</h4>'+
                   '<div id="bodyContent"><p>La Belle Equipe was one of the targets of the horrific Paris terror attacks on Friday. More than 140 people were killed in Paris at multiple locations, with 12 to 19 of those victims being from La Belle Equipe, Rue de Charonne, a popular bistro in Paris.</p>'+
                   '</div>'+
                   '</div>';

           var infowindowfour = new google.maps.InfoWindow({
             content: contentString4,
             maxWidth: 200
           });

           markerfour.addListener('click', function() {
             infowindowfour.open(map, markerfour);
           });



 layer.setMap(map);

}

     google.maps.event.addDomListener(window, 'load', initialize);

     console.log("Yes");
