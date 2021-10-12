$(function() {
	
	var player = 'x';
	
	// cell-x cell-o
	$(".wrap").on("click",'.cell:not(".cell-x,.cell-o")',oneStep);
	
	function oneStep(event) {
		var $cell = $(event.currentTarget);
		
		
		$cell.addClass('cell-' + player + ' offset-' + player);
		
		
		if(player === 'x') {
			player = "o";
		}
		else {
			player = "x";
		}
		
		//console.log($cell);
	}
});

