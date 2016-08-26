$(function() {

var $screen = $('#screen');
var $push = $('.buttons');
var $entered;
var $number = '';
var $total1;
var $total2;
// var $showingCurrent = $screen.text();




// function add($total1, $total2){
//
//     return ($total1 + $total2);
// }


$push.on('click', '.button',(
    function(event) {
        var $target = $(event.target);
        var $entered = $screen.text(`${$target.text()}`);
        // console.log($('#clear').text());
        // console.log($target);

        //clear
        if ($target.text() === $('#clear').text()){
            $number = '';
            console.log('clear');
            $total1 = 0;
            $total2 = 0;
            return;
        }

        //addition
        if ($target.text() === $('#add').text()){
            if($number === ''){
                return;
            }
            console.log('plus');
            $total1 = $total1 + $total2;
            $screen.text($total1);
            // $entered.text() = '';
        }

        //equals
        if ($target.text() === $('#equals').text()){
            if($number === ''){
                return;
            }
            console.log('equals');

        }

        //print to screen
        if ($target === $('.operator')){
            console.log('returned from hitting .operator');
            // $screen.text($entered);
            return;
        } else {
            $number = $number + $entered.text();
            //convert string to number with eval()
            $total1 = eval($number);
            $screen.text($number);
            //console print out
            console.log($entered.text());
            console.log($number);
            console.log($total1);
            console.log(typeof($total1));
            return;
        }


        // console.log($entered.text());
        // console.log($entered.text());
        // console.log(`${$target.text()}`);
}));

// $screen.text(`${$target.text()}`);
});
