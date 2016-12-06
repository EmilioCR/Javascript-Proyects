//-----------------ID Kid,hambu,Score,Hamb-Total--------------//
var $truck = $('#truck');
var $hambu = $('#hambu');
var $score = $('#score');
var $hamburguerTotal = $('#hamburguerTotal');

//-----------------ID Buttons--------------//
var $moreClick = $('#moreClick');
var $chef = $('#chef');
var $town = $('#town');
var $city = $('#city');

//-----------------ID Buttons Upgrades--------------//
var $upgradClick = $('#upgradClick');
var $secondClickUp = $('#secondClickUp');

var $upgradChef = $('#upgradChef');
var $secondChefUp = $('#secondChefUp');

var $upgradTown = $('#upgradTown');
var $secondTownUp = $('#secondTownUp');

var $upgradCity = $('#upgradCity');
var $secondCityUp = $('#secondCityUp');
//-----------------Contador Puntaje--------------//
var $n = 0;
var $totalHamb = 0;

//-----------------Deshabilitador de Items--------------//
$moreClick.prop( "disabled", true );
$chef.prop( "disabled", true );
$town.prop( "disabled", true );
$city.prop("disabled", true );

//-----------------Desabilitador de Upgrades--------------//
$upgradClick.prop("disabled", true );
$secondClickUp.prop("disabled", true );

$upgradChef.prop("disabled", true);
$secondChefUp.prop("disabled", true);

$upgradTown.prop("disabled", true);
$secondTownUp.prop("disabled", true);

$upgradCity.prop("disabled", true);
$secondCityUp.prop("disabled", true);

//-----------------Contador de Clicks--------------//
var $clickMore = 1;
var $clickChef = 1;
var $clickTown = 1;
var $clickCity = 1;

//-----------------Valores y Clicks por second--------------//
var i = 0;

//------------------Contador Por second----------------------//
var $hamburguerPs = $('#hamburguerPs')
var $clickPs = 0;
var $chefPs = 0;
var $townPs = 0;
var $cityPs = 0;

var $totalPs = 0;

//-----------------Contador para Habilitar Upgrades--------------//
var $cantClick = 0;
var $firstClickUpGrade = 10;
var $secondClickUpgrade = 10;

var $cantChef = 0;
var $firstChefUpGrade = 10;
var $secondChefUpgrade = 10;

var $cantTown = 0;
var $firstTownUpGrade = 10;
var $secondTownUpgrade = 10;

var $cantCity = 0;
var $firstCityUpGrade = 10;
var $secondCityUpgrade = 10;

//-----------------Audio Upgrades--------------//
var $buy = new Audio();
var $truckSound = new Audio();
var $startTruck = new Audio();
var $stopTruck = new Audio();

//---------------------------------------------------------------//

//---------------------------truck Functions------------------------------------//
$truck.mouseenter(function () {
	$stopTruck.pause();
	$startTruck.src = 'audio/startTruck.wav';
	$startTruck.play();
	$truck.animate({ top: '-=25px' }, 600, 'easeOutBounce', function () {
})

})

$truck.mouseleave(function () {
	$startTruck.pause();
	$stopTruck.src = 'audio/stop2.wav';
	$stopTruck.play();
	$truck.animate({ top: '+=25px' }, 600, 'easeOutBounce', function () { 
})

})

$truck.click(function (e) {
	$truckSound.src = 'audio/truck.wav';
	$truckSound.play();
	$n++
	$totalHamb++
	$score.text($n)
	$hamburguerTotal.text($totalHamb)
	$hambu.css({
       left:  e.pageX -20,
       top:   e.pageY -70
    });
	$hambu.show(100);
	$hambu.hide(50);

})
//---------------------------------------------------------------//

//---------------------------Click Functions Items------------------------------------//
var $upgrades = [
  { name:'click', price: 100, click: 1},
  { name:'chef', price: 2000, click: 2},
  { name:'town', price: 50000, click: 4},
  { name:'city', price: 1000000, click: 6},
];

$moreClick.click(function(){
  nombre('click')
})

$chef.click(function(){
  nombre('chef')
})
$town.click(function(){
  nombre('town')
})
$city.click(function(){
  nombre('city')
})


function nombre (param) {
  var $upgradeespec;
  for (var i = 0; i < $upgrades.length; i++) {
    if( $upgrades[i].name == param) {
      $upgradeespec = $upgrades[i];
    }
  };

	$buy.src = 'audio/button.mp3';
    $buy.play();

  setInterval(function () {
    $n+=$upgradeespec.click;
    $totalHamb+=$upgradeespec.click;
    $score.text($n);
    $hamburguerTotal.text($totalHamb);
  },1000)

    if ( $upgradeespec.name == 'click') {
    	$n-=$upgradeespec.price;
    	$upgradeespec.price = $upgradeespec.price + ($upgradeespec.price * $clickMore * 0.5);
		$moreClick.val('Click' + ' ' +  '$' + $upgradeespec.price);
		$clickMore++;
		$cantClick++;
		$clickPs=$upgradeespec.click;
		$totalPs+=$clickPs;
		$hamburguerPs.text($totalPs);
    }

    if ( $upgradeespec.name == 'chef') {
    	$n-=$upgradeespec.price;
    	$upgradeespec.price = $upgradeespec.price + ($upgradeespec.price * $clickChef * 0.5);
		$chef.val('Chef' + ' ' +  '$' + $upgradeespec.price);
		$clickChef++;
		$cantChef++;
		$chefPs=$upgradeespec.click;
		$totalPs+=$chefPs;
		$hamburguerPs.text($totalPs);
    }

    if ( $upgradeespec.name == 'town') {
    	$n-=$upgradeespec.price;
    	$upgradeespec.price = $upgradeespec.price + ($upgradeespec.price * $clickTown * 0.5);
		$town.val('Town' + ' ' +  '$' + $upgradeespec.price);
		$clickTown++;
		$cantTown++;
		$townPs=$upgradeespec.click;
		$totalPs+=$townPs;
		$hamburguerPs.text($totalPs);
    }

    if ( $upgradeespec.name == 'city') {
    	$n-=$upgradeespec.price;
    	$upgradeespec.price = $upgradeespec.price + ($upgradeespec.price * $clickCity * 0.5);
		$city.val('City' + ' ' +  '$' + $upgradeespec.price);
		$clickCity++;
		$cantCity++;
		$cityPs=$upgradeespec.click;
		$totalPs+=$cityPs;
		$hamburguerPs.text($totalPs);
    }
}

//---------------------------------------------------------------//

//--------------------------Habilitar Buttons Functions-------------------------------------//

function habilitar() {

	setInterval(function () {	
	if ($n < $upgrades[i].price) {
		$moreClick.prop( "disabled", true );
		$moreClick.removeClass('active-class');
	}else if ($n >= $upgrades[i].price){
		$moreClick.prop( "disabled", false );
		$moreClick.addClass('active-class');
	}
	},100)

	setInterval(function () {	
	if ($n < $upgrades[1].price) {
		$chef.prop( "disabled", true );
		$chef.removeClass('active-class');
	}else if ($n >= $upgrades[1].price){
		$chef.prop( "disabled", false );
		$chef.addClass('active-class');
	}
	},100)

	setInterval(function () {	
	if ($n < $upgrades[2].price) {
		$town.prop( "disabled", true );
		$town.removeClass('active-class');
	}else if ($n >= $upgrades[2].price){
		$town.prop( "disabled", false );
		$town.addClass('active-class');
	}
	},100)

	setInterval(function () {	
	if ($n < $upgrades[3].price) {
		$city.prop( "disabled", true );
		$city.removeClass('active-class');
	}else if ($n >= $upgrades[3].price){
		$city.prop( "disabled", false );
		$city.addClass('active-class');
	}
	},100)

}

habilitar();
//---------------------------------------------------------------//

//-------------------------Upgrades Function Buttons--------------------------------------//

//----------------------------Click-----------------------------------//
$upgradClick.click(function () {
	$buy.src = 'audio/button.mp3';
	$buy.play();
	$clickPs = $clickPs
	$upgrades[i].click = $upgrades[i].click + ($upgrades[i].click * 1)
	$n-=10
	$totalPs+=$clickPs
	$hamburguerPs.text($totalPs)
	$upgradClick.remove()
})

$secondClickUp.click(function () {
	$buy.src = 'audio/button.mp3';
	$buy.play();
	$clickPs = $upgrades[i].click
	$upgrades[i].click = $upgrades[i].click + ($upgrades[i].click * 1)
	$n-=10
	$totalPs+=$clickPs
	$hamburguerPs.text($totalPs)
	$secondClickUp.remove()
})

//-------------------------Chef--------------------------------------//
$upgradChef.click(function () {
	$buy.src = 'audio/button.mp3';
	$buy.play();
	$chefPs = $upgrades[1].click
	$upgrades[1].click = $upgrades[1].click + ($upgrades[1].click*1)
	$n-=10
	$totalPs+=$chefPs
	$hamburguerPs.text($totalPs)
	$upgradChef.remove()
})

$secondChefUp.click(function () {
	$buy.src = 'audio/button.mp3';
	$buy.play();
	$chefPs = $upgrades[1].click
	$upgrades[1].click = $upgrades[1].click + ($upgrades[1].click*1)
	$n-=10
	$totalPs+=$chefPs
	$hamburguerPs.text($totalPs)
	$secondChefUp.remove()
})

//--------------------------Town-------------------------------------//
$upgradTown.click(function () {
	$buy.src = 'audio/button.mp3';
	$buy.play();
	$townPs = $upgrades[2].click
	$upgrades[2].click = $upgrades[2].click + ($upgrades[2].click*1)
	$n-=10
	$totalPs+=$townPs
	$hamburguerPs.text($totalPs)
	$upgradTown.remove()
})

$secondTownUp.click(function () {
	$buy.src = 'audio/button.mp3';
	$buy.play();
	$townPs = $upgrades[2].click
	$upgrades[2].click = $upgrades[2].click + ($upgrades[2].click*1)
	$n-=10
	$totalPs+=$townPs
	$hamburguerPs.text($totalPs)
	$secondTownUp.remove()
})

//--------------------------City-------------------------------------//
$upgradCity.click(function () {
	$buy.src = 'audio/button.mp3';
	$buy.play();
	$cityPs = $upgrades[3].click
	$upgrades[3].click = $upgrades[3].click + ($upgrades[3].click*1)
	$n-=10
	$totalPs+=$cityPs
	$hamburguerPs.text($totalPs)
	$upgradCity.remove()
})

$secondCityUp.click(function () {
	$buy.src = 'audio/button.mp3';
	$buy.play();
	$cityPs = $upgrades[3].click
	$upgrades[3].click = $upgrades[3].click + ($upgrades[3].click*1)
	$n-=10
	$totalPs+=$cityPs
	$hamburguerPs.text($totalPs)
	$secondCityUp.remove()
})

//---------------------------------------------------------------------//


//----------------------------Upgrades Item--------------------------------------//
function upgradesItem() {
//----------------------------Click-----------------------------------//
	setInterval(function () {	
	if ($cantClick < $firstClickUpGrade) {
		$upgradClick.prop( "disabled", true );
	}else if ($cantClick >= $firstClickUpGrade){
		$upgradClick.show()
		if ($n < 1000) {
			$upgradClick.prop( "disabled", true);
			$upgradClick.removeClass('active-upgrades');
		}else if($n >= 1000) {
			$upgradClick.prop( "disabled", false );
			$upgradClick.addClass('active-upgrades');
		}
	}
	},100)

	setInterval(function () {	
	if ($cantClick < $secondClickUpgrade) {
		$secondClickUp.prop( "disabled", true );
		$secondClickUp.removeClass('active-upgrades');
	}else if ($cantClick >= $secondClickUpgrade){
		$secondClickUp.show()
		if ($n < 2000) {
			$secondClickUp.prop( "disabled", true);
			$secondClickUp.removeClass('active-upgrades');
		}else if($n >= 2000) {
			$secondClickUp.prop( "disabled", false );
			$secondClickUp.addClass('active-upgrades');
		}
	}
	},100)

//-------------------------Chef--------------------------------------//
	setInterval(function () {	
	if ($cantChef < $firstChefUpGrade) {
		$upgradChef.prop( "disabled", true );
	}else if ($cantChef >= $firstChefUpGrade){
		$upgradChef.show()
		if ($n < 2000) {
			$upgradChef.prop( "disabled", true);
			$upgradChef.removeClass('active-upgrades');
		}else if($n >= 2000) {
			$upgradChef.prop( "disabled", false );
			$upgradChef.addClass('active-upgrades');
		}
	}
	},100)

	setInterval(function () {	
	if ($cantChef < $secondChefUpgrade) {
		$secondChefUp.prop( "disabled", true );
		$secondChefUp.removeClass('active-upgrades');
	}else if ($cantChef >= $secondChefUpgrade){
		$secondChefUp.show()
		if ($n < 4000) {
			$secondChefUp.prop( "disabled", true);
			$secondChefUp.removeClass('active-upgrades');
		}else if($n >= 4000) {
			$secondChefUp.prop( "disabled", false );
			$secondChefUp.addClass('active-upgrades');
		}
	}
	},100)

//--------------------------Town-------------------------------------//
	setInterval(function () {	
	if ($cantTown < $firstTownUpGrade) {
		$upgradTown.prop( "disabled", true );
	}else if ($cantTown >= $firstTownUpGrade){
		$upgradTown.show()
		if ($n < 4000) {
			$upgradTown.prop( "disabled", true);
			$upgradTown.removeClass('active-upgrades');
		}else if($n >= 4000) {
			$upgradTown.prop( "disabled", false );
			$upgradTown.addClass('active-upgrades');
		}
	}
	},100)

	setInterval(function () {	
	if ($cantTown < $secondTownUpgrade) {
		$secondTownUp.prop( "disabled", true );
		$secondTownUp.removeClass('active-upgrades');
	}else if ($cantTown >= $secondTownUpgrade){
		$secondTownUp.show()
		if ($n < 6000) {
			$secondTownUp.prop( "disabled", true);
			$secondTownUp.removeClass('active-upgrades');
		}else if($n >= 6000) {
			$secondTownUp.prop( "disabled", false );
			$secondTownUp.addClass('active-upgrades');
		}
	}
	},100)

//--------------------------Town-------------------------------------//
	setInterval(function () {	
	if ($cantCity < $firstCityUpGrade) {
		$upgradCity.prop( "disabled", true );
	}else if ($cantCity >= $firstCityUpGrade){
		$upgradCity.show()
		if ($n < 6000) {
			$upgradCity.prop( "disabled", true);
			$upgradCity.removeClass('active-upgrades');
		}else if($n >= 6000) {
			$upgradCity.prop( "disabled", false );
			$upgradCity.addClass('active-upgrades');
		}
	}
	},100)

	setInterval(function () {	
	if ($cantCity < $secondCityUpgrade) {
		$secondCityUp.prop( "disabled", true );
		$secondCityUp.removeClass('active-upgrades');
	}else if ($cantCity >= $secondCityUpgrade){
		$secondCityUp.show()
		if ($n < 8000) {
			$secondCityUp.prop( "disabled", true);
			$secondCityUp.removeClass('active-upgrades');
		}else if($n >= 8000) {
			$secondCityUp.prop( "disabled", false );
			$secondCityUp.addClass('active-upgrades');
		}
	}
	},100)

}

upgradesItem();
//---------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------

//-------------------------Ramdom Bonus--------------------------------------//
var hamburger = $('<div class="bonus"></div>');

function bonus() {
	hamburger.css({
		top: "0",
		opacity: '100',
		display: "inline"
	})
   $('#bonus').prepend(hamburger);
   hambuX = Math.floor(Math.random() * $('body').width());
   hambuSpd = Math.floor(Math.random() + 5000);
       hamburger.css({'left':hambuX+'px'});
       hamburger.animate({
           top: "400px",
           opacity: '0'
       }, hambuSpd);
}

//var timer = 1800000;
var timer = 6000;
window.setInterval(function(){
    bonus();
}, timer);

$('#bonus').click(function () {
	$buy.src = 'audio/button.mp3';
	$buy.play();
	$n = $n + 5;
	$totalHamb = $totalHamb + 5;
	$score.text($n)
	$hamburguerTotal.text($totalHamb)
	hamburger.remove()
})

//-----------------------------------------------------------------------------------------------------
$(document).ready(function(){

    var time = {
        hora: 0,
        minute: 0,
        second: 0
    };

		setInterval(function(){
            time.second++;
            if(time.second >= 60)
            {
                time.second = 0;
                time.minute++;
            }      

            if(time.minute >= 60)
            {
                time.minute = 0;
                time.hora++;
            }
            var $hour = (time.hora < 10 ? '0' + time.hora : time.hora);
            var $minute = (time.minute < 10 ? '0' + time.minute : time.minute);
            var $seconds = (time.second < 10 ? '0' + time.second : time.second);
            var $timer = $('#chronometer').text($hour + ':' + $minute + ':' + $seconds)
        }, 1000);
})
//-----------------------Local----------------------------------------//
//$(document).ready(function(){    
//    $('#save').click(function(){        
//        
//        /*Guardando los datos en el LocalStorage*/
//        localStorage.setItem("Score", $n);
//        localStorage.setItem($score);
//
//        
//    });   
//});
//
//
//$(document).ready(function(){  
//   $('#load').click(function(){                      
///*Obtener datos almacenados*/
//	sessionStorage.getItem("Score");
//	sessionStorage.getItem($score)
///*Mostrar datos almacenados*/    
//	$score.Number($n)
//    
//   });  
//});