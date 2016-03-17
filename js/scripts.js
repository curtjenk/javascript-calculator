
$(document).ready(function() {
	document.onkeyup = keyCheck;
});

function keyCheck() {
	var keyID = event.keyCode;
	var curVal = $('.screen').val();
	var entered = keyID - 48;
	console.log('keyID=' + keyID);

	if (entered >= 0 && entered < 10) {
			$('.screen').val(curVal + entered );
				console.log('entered=' + entered);
	}
	// console.log(entered);
	// console.log(keyID);
	// switch(keyID) {
	// 	case 49:{
	// 		$('.screen').val(newVal + '1' );
	// 		break;
	// 	}
	// }

}

function btnClick(value) {
	var curVal = $('.screen').val();
	$('.screen').val(curVal + value );
}

function doit() {
	var results = eval($('.screen').val());
  $('.screen').val(results);
}

function clearVal() {
  $('.screen').val('');
}