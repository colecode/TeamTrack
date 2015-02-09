
$(function(){

$('.nav-main li a').hover(

	function() {
	$(this).css('color', 'white'); },

	function() {
	$(this).css('color', 'grey'); }
);

$("#myTable tr").click(function() {
    $(this).toggleClass("highlight-row");
});


});


