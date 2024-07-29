const slides = document.querySelectorAll('.slide')
slides.forEach((slide, indx) => {
	slide.style.transform = `translateX(${indx * 100}%)`
})
const nextSlide = document.querySelector('.btn-next')
let curSlide = 0
let maxSlide = slides.length - 1;
const prevSlide = document.querySelector('.btn-prev')

nextSlide.addEventListener('click', function () {
	if (curSlide === maxSlide) {
		curSlide = 0
	} else {
		curSlide++
	}
	slides.forEach((slide, indx) => {
		slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`
	})
})

prevSlide.addEventListener('click', function () {
	if (curSlide == maxSlide) {
		curSlide = 0
	} else {
		curSlide--
	}
	slides.forEach((slide, indx) => {
		slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`
	})
})






let active = document.querySelector("ul");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    active.classList.toggle("active");
    console.log(clicked)
    
})






let icon = document.querySelector(".fa-bars");
let header_box = document.querySelector(".header-box");

icon.addEventListener("click", function () {
  header_box.classList.toggle("hide");
});



let btn1 = document.getElementById('click')

btn1.addEventListener('click', () => {
	let mood = document.getElementById('mood')
	if (mood.getAttribute('href') == './style.css') {
		mood.href = './black.css'
	} else {
		mood.href = './style.css'
	}
})




