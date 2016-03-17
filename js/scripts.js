

$(document).ready(function() {
	"use strict";
    document.onkeyup = keyCheck;
});

function keyCheck() {
	"use strict";
    var keyID = event.keyCode;
    var curVal = $('.screen').val();
    var entered = keyID - 48;
    console.log('keyID=' + keyID);

    if (entered >= 0 && entered < 10) {
        $('.screen').val(curVal + entered);
        // console.log('entered=' + entered);
    } else {
        switch (keyID) {
        	  case 67: //"c" key
        	     clearVal();
        	     break;
            case 88:
                $('.screen').val(curVal + '*');
                break;
             case 190:
                $('.screen').val(curVal + '.');
                break;
            case 191:
                $('.screen').val(curVal + '/');
                break;
            case 189:
                $('.screen').val(curVal + '-');
                break;
            case 187:
            console.log("hit equal");
               //equal
                break;
            case 13:
            // console.log("hit enter/return key");
                doIt();
                break;
        }
    }
}

function btnClick(value) {
    var curVal = $('.screen').val();
    $('.screen').val(curVal + value);
}

function doIt() {
	var results;
	try {
    results = eval($('.screen').val());
  } catch (e) {
  	if ( e instanceof SyntaxError || e instanceof ReferenceError) {
  		alert(e);
  	}
  	console.log(e);
  	return;
  }
   $('.screen').val(results);
}

function clearVal() {
    $('.screen').val('');
}
