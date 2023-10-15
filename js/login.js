const USER = "admin@ecoin.dz"
const PASSWORD = "123456"

$(document).ready(function() {
     $(document).on('click', 'button', function(event) {
        event.preventDefault();
        var u  = $('input[name=email]').val()
        var p  = $('input[name=password]').val()
        console.log(u,p);
        if (u==USER && p == PASSWORD) {
            $(".ok").show(2000).delay(3000).hide(2000)
            var cpt = 5
            setInterval(function () {
                 $("#counter").text(cpt)
                 cpt--
                 if(cpt==-1)
                window.location.href= "https://www.google.com"
            },1000)
            }
        else
            $(".error").show(2000).delay(3000).hide(2000)
        
        
     });

});