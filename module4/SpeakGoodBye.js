(function(window) {

  var speakWord ="Good bye"
  var byeSpeaker= function (name) {
  console.log(speakWord + " " + name);

}
 window.byeSpeaker=byeSpeaker;

})(window);

