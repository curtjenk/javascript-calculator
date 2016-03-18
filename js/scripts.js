var height = $('#calculator').height();
$(document).ready(function() {
    //get the calculator's height
    height = $('#calculator').outerHeight();

    document.onkeyup = keyCheck;

    $('.operator, .number, .equal, .clear').click(function() {
        if ($(this).hasClass('equal')) {
            doIt();
        } else if ($(this).hasClass('clear'))  {
        		clearVal();
        } else {
            btnClick($(this).val());
        }
    });

    $('.card__back').click(function () {
        $('.card.effect__EasterEgg').removeClass('flipped');
        
    });
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
                doIt();
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
        if (e instanceof SyntaxError || e instanceof ReferenceError) {
            alert(e);
        }
        console.log(e);
        return;
    }
    $('.screen').val(results);
    //---- Easter Eggs! 
    if (results == 42) {
    	$('#meaning').addClass('move');
    }
    if (results == 360) {
        //make calculator spin
        $('#calculator').addClass('spin');
    }
    
    if (results == 7734) {
        // $('#calculator').addClass('flip');
        $('.card.effect__EasterEgg').addClass('flipped');
        
        console.log(height);
        $('#calculatorBack').css('height', height + 'px');
    }
    if (results > 1000000)
    {
        var win = window.open('http://www.google.com', '_blank');
        win.focus();
    }

}

function clearVal() {
    $('.screen').val('');
    $('#meaning').removeClass('move');
    $('#calculator').removeClass('spin');
    $('#calculator').removeClass('up-side-down');
}
