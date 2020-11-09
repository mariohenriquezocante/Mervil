//Js para o slider.
$('.slider-principal').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: false,
    pauseOnHover: false
});


/*Código para fazer o contador dos dados.
    $("#dados").ready(function() {
        var numero = document.getElementById('numero1');
        var min = 0;
        var max = 100;
        var duração = 1000; // 5 segundos
    
        for (var i = min; i <= max; i++) {
        setTimeout(function(nr) {
            numero.innerHTML = nr;
        }, i * 1000 / max, i);
        }
    }); 
    
    

    $("#dados").ready(function() {
        var numero = document.getElementById('numero2');
        var min = 0;
        var max = 130;
        var duração = 1000; // 5 segundos
    
        for (var i = min; i <= max; i++) {
        setTimeout(function(nr) {
            numero.innerHTML = nr;
        }, i * 1000 / max, i);
        }
    }); 

    $("#dados").ready(function() {
        var numero = document.getElementById('numero3');
        var min = 0;
        var max = 1250;
        var duração = 1000; // 5 segundos
    
        for (var i = min; i <= max; i++) {
        setTimeout(function(nr) {
            numero.innerHTML = '+ ' + nr + ' ton.';
        }, i * 1000 / max, i);
        }
    }); 
    */

    