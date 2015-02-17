// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});


function displayDate() {
    document.getElementById("whatTime").innerHTML = Date();
};



// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});



//game code
    function playGame() {
    var Animal = function(n, s, f) {
      this.name = n;
      this.speed = s;
      this.focus = f;
      this.position = 0;
      this.report = function() {
        return this.name + " is at " + this.position;
      };
      this.run = function() {
        if(this.focus > (Math.random() * 10)) {
        this.position += this.speed;  
        }
      };
    }

    var turtle = new Animal("Timmy", 2, 8),
        rabbit = new Animal("Rascal", 8, 3);

    var distance = 25;

    var dayOfWeek = new Date();
    console.log(dayOfWeek.getDay());

    if (dayOfWeek.getDay() == 4) {
      alert ("BANG!!!!! Thursday is rabbit stew day at Farmer Brown's house...turtle wins this one.");
    }

    else {

      while(turtle.position < distance && rabbit.position < distance) {
        turtle.run(); 
        rabbit.run(); 
        alert ((turtle.report()) + ', and ' + (rabbit.report()));
      }


      if (turtle.position > 25) {
        alert ('TURTLE WINS!!!');
      }
      else {alert ('RABBIT WINS!!!');
      }
    }
  }