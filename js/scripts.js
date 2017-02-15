//Busines logic
var liter = function(gallon) {
	return gallon*(3.785411784);
};

//This function converts celcius to fahrenheit
 var conversion = function(celcius) {
 	return ((celcius *=9) /5) +32;
 	};

//Converts inches to centimeters
var centimeter = function(inch) {
	return inch*(2.54);
}

//User interface
$(document).ready(function() {
	$("form#gallonLiter").submit(function() {
		var gallon = parseInt($("input#gallonLiter").val());
		var result = liter(gallon);
		$("#outputGallonLiter").text(result);
		event.preventDefault();
	});
	$("form#celciusFahrenheit").submit(function(){
		var celcius = parseInt($("input#celciusFahrenheit").val());
		var result = conversion(celcius);
		$("#outputCelciusFahrenheit").text(result);
		event.preventDefault();
	});
	$("form#inchCentimeter").submit(function(){
		var inch = parseInt($("input#inchCentimeter").val());
		var result = centimeter(inch);
		$("#outputInchCentimeter").text(result);
		event.preventDefault();
	});
});
