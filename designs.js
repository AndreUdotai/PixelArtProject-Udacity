const 	canvas = $('#pixelCanvas'),
 	gridHeight = $('#inputHeight'),
 	gridWeight = $('#inputWeight');

// Select color input
let colorInput = function() {
		// Select the value of the picked color
		let pickedColor = $("#colorPicker").val();
		// Change the background color to picked color
		$(this).css('background-color', pickedColor);
	}

// Select size input
let sizeInput = function() {
	// Remove all the children of the table
	canvas.children().remove();
	// Create inputed number of columns for every row
	for (let i = 1; i <= gridHeight.val(); i++) {
		canvas.append('<tr></tr>');
		for (let j = 1; j <= gridWeight.val(); j++) {
			// Only assign columns to the last row
			$('tr:last').append('<td></td>');
		} 
	}
}

// Makes grid and appends color to clicked cell
let makeGrid = function() {  
	sizeInput();
	canvas.find('td').click(colorInput);
}

// When button is clicked, it is stopped from submitting and makeGrid is called
$('#submit').click(function(event) {
  event.preventDefault();
  makeGrid();
});

$('#colorPad').mouseenter(function(){
	$('#first').css('color', 'pink');
	$('#second').css('color', 'rgb(176, 110, 236)');
	$('#third').css('color', 'rgb(26, 236, 164)');
});

$('#colorPad').mouseleave(function(){
	$('#first').css('color', 'black');
	$('#second').css('color', 'black');
	$('#third').css('color', 'black');
});

