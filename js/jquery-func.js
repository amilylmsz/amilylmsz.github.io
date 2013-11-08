			$(document).ready(function(){
				//To switch directions up/down and left/right just place a "-" in front of the top/left attribute
				//Vertical Sliding
				$('.boxgrid.slidedown').hover(function(){
					$(".cover", this).stop().animate({top:'-260px'},{queue:false,duration:300});
				}, function() {
					$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:300});
				});
				//Horizontal Sliding
				$('.boxgrid.slideright').hover(function(){
					$(".cover", this).stop().animate({left:'365px'},{queue:false,duration:300});
				}, function() {
					$(".cover", this).stop().animate({left:'0px'},{queue:false,duration:300});
				});
				//Diagnal Sliding
				$('.boxgrid.thecombo').hover(function(){
					$(".cover", this).stop().animate({top:'260px', left:'325px'},{queue:false,duration:300});
				}, function() {
					$(".cover", this).stop().animate({top:'0px', left:'0px'},{queue:false,duration:300});
				});
				//Partial Sliding (Only show some of background)
				$('.boxgrid.peek').hover(function(){
					$(".cover", this).stop().animate({top:'220px'},{queue:false,duration:300});
				}, function() {
					$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:300});
				});
				//Full Caption Sliding (Hidden to Visible)
				$('.boxgrid.captionfull').hover(function(){
					$(".cover", this).stop().animate({top:'80px'},{queue:false,duration:160});
				}, function() {
					$(".cover", this).stop().animate({top:'220px'},{queue:false,duration:160});
				});
				//Caption Sliding (Partially Hidden to Visible)
				$('.boxgrid.caption').hover(function(){
					$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:300});
				}, function() {
					$(".cover", this).stop().animate({top:'190px'},{queue:false,duration:160});
				});
			});

			$( document ).ready( function(){
	
	var IS_IE_6 = $.browser.msie && $.browser.version < 7;
	
	$('.buttons a').hover(
		function(){
			$(this).find('span')
				.css({'display' : 'block', 'opacity':0, 'left': '-10px' })
				.animate({ 'left':0, 'opacity': 1 }, 250)
		},
		function(){
			$(this).find('span').fadeOut('fast');
		}
	);
	
	$('.buttons a').click(function(){
		var to = $(this).attr('href');
		
		$.scrollTo(to, 1200);
		
		return false;
	});
	
	
	
	/** Animation **/
	for( var i in items) {
		$(items[i]).hide();
	}
	//_animate(0, 700);
	
	
	$('.island').fadeIn( 'slow', function(){ 
		$('.ships').fadeIn( function(){
			$('.about-link, .portfolio-link, .contact-link').fadeIn();
			
			if(IS_IE_6) {
				$('.dir').show();
			}else {
				$('.dir')
					.css({'display' : 'block', 'opacity':0, 'left': '800px' })
					.animate({ 'left':540, 'opacity': 1 }, 800, function(){
						$('.dir').show();
					});	
			}
		});
	});
	
	
	$('.projects').jcarousel({ scroll: 1, wrap: 'both' });
	
});

var items = ['.island', '.ships', '.dir', '.about-link', '.portfolio-link', '.contact-link'];

