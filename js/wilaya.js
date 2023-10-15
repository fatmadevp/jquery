var com = {
	"16":["Alger Center","bab Eloued","Kouba","Douira"],
	"09":["Blida","Boufarik","Chebli","Soumaa"],
	"31":["Oran","Ain Turk","Arzew","Essania"]
}
//console.log(com[16])

$(document).ready(function() {
	//var w1 = $('#wilaya');
//console.log(w1).val()
	$(document).on('change',"#wilaya",function(){
		console.log($(this).val());
 var w = $('#wilaya').val();
     console.log(w);
		 $('#commune').empty();
		
       $.each(com[w],function(id_com,commune) 
                   {
                    var opt = $('<option>'); 
                      opt.val(id_com);
                      opt.text(commune);


                      $('#commune').append(opt); 
                });
	})
})