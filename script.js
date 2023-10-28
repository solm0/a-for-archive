window.addEventListener('DOMContentLoaded', function() {
  var thumbnails = document.querySelectorAll('.thumbnail');

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('dragstart', function(event) {
      event.preventDefault();
    });
  });
});






window.addEventListener("DOMContentLoaded", function() {
    var elements = Array.from(document.getElementsByClassName("delay-animation"));

    elements.forEach(function(element) {
      var randomDelay = Math.random() * 500;
      setTimeout(function() {
        element.style.transitionDelay = "0.5s";
        element.style.opacity = 1;
      }, randomDelay);
    });
  });





  var thumbnails = document.querySelectorAll('.thumbnail');
    var container = document.getElementById('thumbnails-container');

    for (var i = 0; i < thumbnails.length; i++) {
      var thumbnail = thumbnails[i];
      var randomAngle = Math.floor(Math.random() * 360); // 0부터 359 사이의 랜덤한 각도
      var randomX = Math.floor(Math.random() * (container.offsetWidth - thumbnail.offsetWidth)); // container 내에서의 랜덤한 X 좌표
      var randomY = Math.floor(Math.random() * (container.offsetHeight - thumbnail.offsetHeight) * 2/3 ); // container 내에서의 랜덤한 Y 좌표

      thumbnail.style.transform = 'rotateZ(' + randomAngle + 'deg)';
      thumbnail.style.left = randomX + 'px';
      thumbnail.style.top = randomY + 'px';
    }









    