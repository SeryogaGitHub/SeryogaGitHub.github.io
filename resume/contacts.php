<?php
  $title_page = "Контакти";
  $name_page = "contacts";
  include('header.php');
?>

<main>
  <div class="center">

    <h1 class="text-center title-page">
      Контакти
    </h1>
    
    <div class="pane wow flipInX ">
      <h4>
        <span class="gold-text">Місто проживання:</span>
        Житомир
      </h4>

      <h4>
        <span class="gold-text">Skype:</span>
        serg_uk_zt
      </h4>

      <h4>
        <span class="gold-text">Телефон:</span>
        +380 98 96 96 952
      </h4>

      <h4>
        <span class="gold-text">Email:</span>
        main.email.seryoga@gmail.com
      </h4>

      <h4>
        <span class="gold-text">Робочі години:</span>
        Пн-Пт: 10:00 - 19:00 <br>
        <span class="gold-text">Для пропозицій від яких не зможу відмовитися, на зв`язку цілодобово :)</span>
      </h4>
    </div>
    
    <hr>

    <div id="map" class="wow bounceInUp"></div>
    <script>
      var map;

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 50.254556, lng: 28.658730},
          zoom: 12,
          styles: [{
            "stylers": [
              {
                "hue": "#ff1a00"
              },
              {
                "invert_lightness": true
              },
              {
                "saturation": -100
              },
              {
                "lightness": 33
              },
              {
                "gamma": 0.5
              }
            ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [{
                "color": "#2D333C"
              }]
          }]
        });
      }
    </script>

    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyASPycZswOJ1QcCtU3au0M0jJh1HdlzVQI&callback=initMap"
    async defer></script>
  
  </div><!-- center -->
</main>

<?php include('footer.php')?>
