$(document).ready(function() {

    $(function(){
		$('#menu').slicknav();
	});
	$(document).scroll(function () {
        var y = $(this).scrollTop(); 
        if (y <= 25) {
            $('nav, .slicknav_menu').removeClass('fixed');
            // .css({'height':'75px', 'position':'relative'});
            // $('.nav-block').height('0');
        } else {
            $('nav, .slicknav_menu').addClass('fixed');
            // css({'height':'50px','position':'fixed'});
            // $('.nav-block').height('80px');
        }
    });
    
    //  $(".menu").click(function(){
//    $(this).toggleClass("active");
//  }); 
});