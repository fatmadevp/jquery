jQuery(document).ready(function($) {
	$(".add").click(function() {
		$(".remove").removeAttr('disabled')//$("ul li:last-child").after('<li>jQuery</li>')
		$("ul li").last().after('<li>jQuery</li>')
	});

	$(".remove").click(function() {
		var i = $("ul li").length
		if (i<4) {
			$(this).attr({
				disabled: 'disabled'
			});
		}else{
			$("ul li").last().remove()
			//$(this).removeAttr('disabled')
		}



	})
})

