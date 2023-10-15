$(document).ready(function() {
	$("body").on("click","#add",function () {
		$("ul li")
		.last()
		.after('<li>jQuery<button type="button" class="del">Del</button></li>')
	})

	$("body").on("click","#clone",function () {
		 $("ul li")
		.first().next().clone(true).appendTo('ul')
	})

    $("body").on("click",".del",function () {
     	$(this).parent().remove()
	})










});