var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");
//const selectONe = document.getElementById("sliderOne");
//const selectTwo = document.getElementById("sliderTwo");
//const selectThree = document.getElementById("sliderThree");
//let currentSlide = 1;
function currentSlide(n){
	console.log("teeeeeeeeeeest");
	if( n === 1){
	document.getElementById('slideOne')
	.src="../images/slider1.jpg";
	}
	else if(n === 2){
		document.getElementById('slideTwo')
		.src="../images/slider2.jpg";
	}
	else{
		document.getElementById('slideThree')
		.src="../images/slider.jpg";
	}
}
/*
// Javascript for image slider manual navigation
var manualNav = function (manual) {
	slides.forEach((slide) => {
		slide.classList.remove("active");

		btns.forEach((btn) => {
			btn.classList.remove("active");
		});
	});

	slides[manual].classList.add("active");
	btns[manual].classList.add("active");
};

btns.forEach((btn, i) => {
	console.log( btn ,"hhhhhhhhhhhhhh");
	btn.addEventListener("click", () => {
		manualNav(i);
		currentSlide = i;
	});
});
*/
// Javascript for image slider autoplay navigation
var repeat = function (activeClass) {
	let active = document.getElementsByClassName("active");
	let i = 1;

	var repeater = () => {
		setTimeout(function () {
			[...active].forEach((activeSlide) => {
				activeSlide.classList.remove("active");
			});

			slides[i].classList.add("active");
			btns[i].classList.add("active");
			i++;

			if (slides.length == i) {
				i = 0;
			}
			if (i >= slides.length) {
				return;
			}
			repeater();
		}, 10000);
	};
	repeater();
};
repeat();

//currentSlide();


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}