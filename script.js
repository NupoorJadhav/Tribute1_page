// https://github.com/imakewebthings/waypoints
var HasAnimated = false;
var waypoint = new Waypoint({
  element: document.getElementById('pick-three'),
  handler: function(direction) {    
    if (direction === 'down' && HasAnimated === false) {
      
      HasAnimated = true;
      
//counter animation
          $('.count').each(function () {
              $(this).prop('Counter',0).animate({
                  Counter: $(this).text()
              }, {
                  duration: 3000,
                  easing: 'swing',
                  step: function (now) {
                      $(this).text(Math.ceil(now));
                  }
              });
          });
      
      
    }
  },
  offset: '30%'
})




