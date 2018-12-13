//	$('.music').click(function(){
//          $(this).toggleClass('suspend');
//	        if ($('audio')[0].paused) {
//	            $('audio')[0].play();
//	        } else {
//	            $('audio')[0].pause();
//	        }
//		})
localStorage.clear();
function state() {
	var state = localStorage.getItem('state');
	if(state == null) {
	} else {
		if(state == '0') {
			a.pause();
			$('.music').toggleClass('suspend');
		} else {
			a.play();
//			$('.music').toggleClass('suspend');
		}
	}
}
var a = document.getElementById("music");
state();
$('.music').click(function() {
    $(this).toggleClass('suspend');
	var state = localStorage.getItem('state');
	if(state == '0') {
		var list = localStorage.setItem('state', '1');
		a.play();
	} else {
		var list = localStorage.setItem('state', '0');
		a.pause();
	}
})