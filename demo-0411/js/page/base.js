
$(document).ready(function(){
//nav
	var $navBtn = $('.nav_item');
	    $navBtn.hover(function(){
	    	$(this).addClass('hover');
	    	if (!$(this).find('div').length == 0) {
	    		$(this).find('div').show();
	    	}
	    },function(){
	    	$(this).removeClass('hover');
	    	if (!$(this).find('div').length == 0) {
	    		$(this).find('div').hide();
	    	}		    	
	})	
})	
//tab	
function tab(tabtit,tabinner){
	var $tabBtn = $(tabtit);
	var $tabInner = $(tabinner);
	$tabBtn.click(function(){
		var index = $(this).index(tabtit);
		$tabBtn.removeClass('cur');
		$(this).addClass('cur');
		$tabInner.removeClass('show');
		$tabInner.eq(index).addClass('show');
	})	
}		
	    