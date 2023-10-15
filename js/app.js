//$(document).ready(function () {

//document.querySelector('.box')
  // $(".box").hide(5000)
	//$(".box").show(5000)
	//$(".box").toggle(5000)
	// $(".box").fadeOut(5000)
     $(".box").fadeIn(5000)

     // $(".box").fadeToggle(5000)
     //$(".box").slideUp(5000)
   // $(".box").slideDown(5000)
   //  
   //$(".box").slideToggle(5000)
   // 
   //$(".box").toggle(5000).delay(2000).slideToggle(5000).slideToggle(5000)
//})
//$(document).on('click','#start',function () {
	//$(".box").toggle(5000).delay(2000).slideToggle(5000).slideToggle(5000)
//})
/*$(document).on('mousemove','.box',function () {
	$(".box").fadeTo(2000,.2)
})*/
    /* $(document).on('click','#start',function () {
     	$(".box").animate({
     		width:'600px',
     		height:'150px',
     		top:"200px",
     		left:"150px",

     		
     	},5000)
     })
     $(document).on('click','#stop',function () {
     	$(".box").stop()
     })*/
 /*    $(document).on('click','#start',function () {
     	$(".box").animate({
     		marginLeft:'+=50px',
     		marginTop:'+=50px',
     		
     	},1000)
     })*/
     $(document).on('click','#append',function () {
		$("h3").append("<i>Ecoin 2025</i><h5 class='c'>Welcom</h5>")

	})

	$(document).on('click','#appendto',function () {
		$("h3").appendTo("p")

	})


		$(document).on('click','#css2',function () {
		$(".box").css({
			backgroundColor : 'red',
			width : '100px'
		})

	})


