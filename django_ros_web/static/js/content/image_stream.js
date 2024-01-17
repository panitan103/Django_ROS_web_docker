var CANVAS_WIDTH = (window.innerWidth)*0.55;
var CANVAS_HEIGHT = window.innerHeight - (window.innerHeight)*0.25;

$(document).ready(function(){
  $("#link_topic").attr("href", location.protocol+'//'+location.hostname+':8080/');
  $('#update_topic').click(function(){
    $("#stream").empty();
    var image_topic = document.getElementById("image_topic").value;
    var img = document.createElement("img");
    img.src = location.protocol+'//'+location.hostname+':8080/stream?topic='+image_topic;
    var src = document.getElementById("stream");
    src.appendChild(img);
    $("#stream").css({"width":String(CANVAS_WIDTH)});
    
  });

}); 



