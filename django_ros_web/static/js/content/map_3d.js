var CANVAS_WIDTH = (window.innerWidth)*0.55;
var CANVAS_HEIGHT = window.innerHeight - (window.innerHeight)*0.25;

var viewer = new ROS3D.Viewer({
  divID : 'viewer',
  width : CANVAS_WIDTH,
  height : CANVAS_HEIGHT,
  antialias : true,
  background : '#cccccc',
});
viewer.addObject(new ROS3D.Grid({
  color:'#111111',
}));

var gridClient = new ROS3D.OccupancyGridClient({
  ros : ros,
  tfClient: tfClient,
  rootObject : viewer.scene,
  continuous: true,
});

// Setup a client to listen to TFs.
var tfClient = new ROSLIB.TFClient({
  ros : ros,
  angularThres : 0.01,
  transThres : 0.01,
  rate : 10.0,
  fixedFame : '/map',

});

var tf_laser= new ROSLIB.TFClient({
  ros : ros,
  angularThres : 0.01,
  transThres : 0.01,
  rate : 10.0,
  fixedFame : 'map',

});
var scanclient = new ROS3D.LaserScan({
  ros: ros,
  tfClient: tf_laser,
  topic: '/scan',
  rootObject: viewer.scene,
  material: { size: 0.05, color: 0xff00ff }

});
