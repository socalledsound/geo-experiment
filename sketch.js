var locationButton

function setup() {
  //create a frame/space to put your drawing in
  // createCanvas(600,600);
  //
  // background(0);

  noCanvas();

  locationButton = createButton('get location');
  locationButton.mousePressed(getLocation);




}



var getLocation = function() {
    background(255);
     console.log(navigator);
    if(!navigator.geolocation) {
      return alert('incompatible browser');
    }
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(`${position.coords.latitude}, ${position.coords.longitude}`)
          createA(`https://www.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}`,'show location');

    }, function () {

          alert('unable to fetch location');
        });
      };





  // locationButton.attr('disabled', 'disabled').text('Sending location...');
