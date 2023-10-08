document.addEventListener('DOMContentLoaded', function() {
  var videoElem = document.getElementById('videoBackground');
  function tryPlay() {
    videoElem.play().then(function() {
    }).catch(function(error) {
      videoElem.muted = true;
      videoElem.play();
    });
  }
  tryPlay();
  document.body.addEventListener('click', function() {
    videoElem.muted = false;
  });
});
