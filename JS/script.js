// slider////////////

const slider = document.querySelector('.sec2');
const sliderBoxes = document.querySelectorAll('.slider-box');


var prevBtn = document.querySelector(".prev-btn")

var nextBtn = document.querySelector(".next-btn")




let currentSlide = 0;
const slidesToShow = 1;

sliderBoxes.forEach(box => box.style.display = 'none');


for (let i = 0; i < slidesToShow; i++) {
  sliderBoxes[i].style.display = 'inline-block';
}


prevBtn.addEventListener('click', () => {

  if (currentSlide === 0) {
    currentSlide = sliderBoxes.length - 1;
  } else {
    currentSlide--;
  }
  updateSlides();
});

nextBtn.addEventListener('click', () => {

  if (currentSlide === sliderBoxes.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  updateSlides();
});


function updateSlides() {
  sliderBoxes.forEach(box => {
    box.style.display = 'none';
    box.style.transition = 'none';
  });
  sliderBoxes[currentSlide].style.display = 'inline-block';
  sliderBoxes[currentSlide].style.transition = '3s all';
}


let autoSlideInterval = setInterval(() => {
  if (currentSlide === sliderBoxes.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  updateSlides();
}, 3000);




//////////////elements/////////   



function showpup() {
  document.getElementById("pup").style.display = "block";


}

function closebtn() {
  document.getElementById("pup").style.display = "none";

}

function showpup2() {
  document.getElementById("pup2").style.display = "block";


}

function closebtn2() {
  document.getElementById("pup2").style.display = "none";


}



function showpup3() {
  document.getElementById("pup3").style.display = "block";


}

function closebtn3() {
  document.getElementById("pup3").style.display = "none";

}


function showpup4() {
  document.getElementById("pup4").style.display = "block";


}

function closebtn4() {
  document.getElementById("pup4").style.display = "none";

}
////////imgs///////// 
var bag = document.querySelector(".bag");
var smalls = document.querySelectorAll(".imgch1");

for (var i = 0; i < smalls.length; i++) {
  smalls[i].addEventListener('click', function () {
    bag.src = this.src;
    this.src = bag.src;
  });
}



var bag2 = document.querySelector(".bag2");
var smalls2 = document.querySelectorAll(".imgch2");

for (var i = 0; i < smalls2.length; i++) {
  smalls2[i].addEventListener('click', function () {
    bag2.src = this.src;
    this.src = bag2.src;
  });
}



var bag3 = document.querySelector(".bag3");
var smalls3 = document.querySelectorAll(".imgch3");

for (var i = 0; i < smalls3.length; i++) {
  smalls3[i].addEventListener('click', function () {
    bag3.src = this.src;
    this.src = bag3.src;
  });
}


var bag4 = document.querySelector(".bag4");
var smalls4 = document.querySelectorAll(".imgch4");

for (var i = 0; i < smalls4.length; i++) {
  smalls4[i].addEventListener('click', function () {
    bag4.src = this.src;
    this.src = bag4.src;
  });
}


//////count///// 

var countElement = document.querySelector(".sum");
var sum = 0;
var cards = document.querySelectorAll(".fa-cart-plus");

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', function () {
    sum++;
    countElement.textContent = sum;
  });
}

countElement.textContent = sum;
//////////////////////contact page /////////





