$(document).ready(function(){

    $('#grid-sidebar-toggle').click(function(){
        $("#grid-sidebar-detail-script").show(300);
        $("#grid-sidebar-script").css('align-items', 'center');
        $("#grid-container-script").css('height', '100vh');
        $("#grid-sidebar-toggle").hide();
        $("#grid-sidebar-toggle-left").show();
    });
    $('#grid-sidebar-toggle-left').click(function(){
        $("#grid-sidebar-detail-script").hide(300);
        $("#grid-sidebar-toggle").show();
        $("#grid-sidebar-toggle-left").hide();
    });
  

});