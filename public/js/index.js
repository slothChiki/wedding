function leftOpen() {
    $('#timelinbx').css("width", $(window).width() - 280);
}
function leftClose() {
    $('#timelinbx').css("width", "100%");
}
 
$(window).resize(function() {        
    $('.timelinbx').css('width', $(window).width() - 50 );        
    $('.timelinbx').css('height', $(window).height() - 50 );   
});
