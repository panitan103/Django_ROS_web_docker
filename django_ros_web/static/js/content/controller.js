cmd_vel_listener = new ROSLIB.Topic({
  ros : ros,
  name : "/cmd_vel",
  messageType : 'geometry_msgs/Twist'
});

move = function (linear, angular) {
var twist = new ROSLIB.Message({
  linear: {
  x: linear,
  y: 0,
  z: 0
  },
  angular: {
  x: 0,
  y: 0,
  z: angular
  }
});
cmd_vel_listener.publish(twist);
}


$(document).ready(function(){
  var LINEAR_MOVE = 0
  var ANGULAR_MOVE = 0

  $('#forward_linear_control').click(function(){
      LINEAR_MOVE=LINEAR_MOVE+0.050;

      move(LINEAR_MOVE,ANGULAR_MOVE);

      let LINEAR_MOVE_ROUND=LINEAR_MOVE.toFixed(2)
      let ANGULAR_MOVE_ROUND=ANGULAR_MOVE.toFixed(2)

      $("#linear_status").html(LINEAR_MOVE_ROUND); 
  });
  $('#backward_linear_control').click(function(){
      LINEAR_MOVE=LINEAR_MOVE-0.0500;

      move(LINEAR_MOVE,ANGULAR_MOVE);

      let LINEAR_MOVE_ROUND=LINEAR_MOVE.toFixed(2)
      let ANGULAR_MOVE_ROUND=ANGULAR_MOVE.toFixed(2)
      
      $("#linear_status").html(LINEAR_MOVE_ROUND); 
  });
  $('#left_angular_control').click(function(){
      ANGULAR_MOVE=ANGULAR_MOVE+0.1000;

      move(LINEAR_MOVE,ANGULAR_MOVE);

      let LINEAR_MOVE_ROUND=LINEAR_MOVE.toFixed(2)
      let ANGULAR_MOVE_ROUND=ANGULAR_MOVE.toFixed(2)
      
      $("#angular_status").html(ANGULAR_MOVE_ROUND); 
  });
  $('#right_angular_control').click(function(){
      ANGULAR_MOVE=ANGULAR_MOVE-0.1000;

      move(LINEAR_MOVE,ANGULAR_MOVE);

      let LINEAR_MOVE_ROUND=LINEAR_MOVE.toFixed(2)
      let ANGULAR_MOVE_ROUND=ANGULAR_MOVE.toFixed(2)

      $("#angular_status").html(ANGULAR_MOVE_ROUND); 
  });
  $('#stop_all_control').click(function(){
      LINEAR_MOVE = 0;
      ANGULAR_MOVE = 0;

      move(LINEAR_MOVE,ANGULAR_MOVE);
      
      $("#linear_status").html('0.00'); 
      $("#angular_status").html('0.00'); 
  });
  
});

$(document).ready(function(){

  $("#save_map").click(function(){
      $.ajax({
          data:{
              save_map: 'save_map',
          },
      });
      console.log($("#save_map").text());
  });
});
