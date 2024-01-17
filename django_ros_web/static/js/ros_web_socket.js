//var ip = location.hostname;
var ip = '192.168.1.191';
var ros = new ROSLIB.Ros({
url : 'ws://'+ip+':9090'
});

ros.on('connection', function() {
document.getElementById("status").innerHTML = " On";
});

ros.on('error', function(error) {
document.getElementById("status").innerHTML = " Error";
});

ros.on('close', function() {
document.getElementById("status").innerHTML = " Off";
});


