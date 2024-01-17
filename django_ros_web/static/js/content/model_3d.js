
/** 
function loadIframe(url) {

  $("iframe").attr("src", 'http://192.168.1.105:8085/model_web/model.html');

  $("iframe").attr("width",CANVAS_WIDTH);
  return false

}
*/
var CANVAS_WIDTH = (window.innerWidth)*0.55;
var CANVAS_HEIGHT = window.innerHeight - (window.innerHeight)*0.25;


var viewer = new ROS3D.Viewer({
  divID : 'urdf',
  //width : CANVAS_WIDTH,
  //height : CANVAS_HEIGHT,
  antialias : true,
  background : '#cccccc',
});

viewer.addObject(new ROS3D.Grid({
  color:'#111111',
}));

// Setup a client to listen to TFs.
var tfClient = new ROSLIB.TFClient({
  ros : ros,
  angularThres : 0.01,
  transThres : 0.01,
  rate : 10.0
});

// Setup the URDF client.
var urdfClient = new ROS3D.UrdfClient({
  ros : ros,
  tfClient : tfClient,
  path : location.protocol+'//'+location.hostname+':8085/',
  //path : "http://localhost:8085/",
  rootObject : viewer.scene,
  loader : ROS3D.COLLADA_LOADER_2,
  param : 'robot_description',
});



