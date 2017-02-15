//Busines logic
var liter = function(gallon) {
	return gallon*(3.785411784);
};




//User interface
$(document).ready(function() {
	$("form#gallonLiter").submit(function() {
		var gallon = parseInt($("input#gallonLiter").val());
	
		var result = liter(gallon);
		$("#outputGallonLiter").text(result);
		event.preventDefault();
	});

});
