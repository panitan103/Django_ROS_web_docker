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

$(document).ready(function(){
  
  $('#update_topic').click(function(){
    
    var point_topic = document.getElementById("point_topic").value;
    var frame_topic = document.getElementById("frame_topic").value;

    var tfClient = new ROSLIB.TFClient({
      ros : ros,
      angularThres : 0.01,
      transThres : 0.01,
      rate : 10.0,
      fixedFame : frame_topic,
    });
    
    var cloudClient = new ROS3D.PointCloud2({
      ros: ros,
      tfClient: tfClient,
      rootObject: viewer.scene,
      topic: point_topic,
      material: { size: 0.01,},
      max_pts: 1000000,
      colorsrc: 'rgb',
    });
    colormap= function(x) {
      that._floatColor[0] = x;
      that._intColor = new Int32Array(that._floatColor.buffer);
      const colorInt = that._intColor[0];

      let r = that._rgb_lut[(colorInt >> 16) & 0xff];
      let g = that._rgb_lut[(colorInt >> 8) & 0xff];
      let b = that._rgb_lut[(colorInt) & 0xff];

      return {r: r, g: g, b: b, a: 1.0};
    }
    
  });

  
  
}); 



