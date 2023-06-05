const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const numberSlides = slides.length 
const arrowLeft = document.querySelector('#Arrowleft')
const arrowRight = document.querySelector('#Arrowright')
const dots = document.querySelector('.dots')
const slideImg = document.querySelector(".banner-img")
const slideText = document.querySelector('#banner p')

for (let i= 0; i<numberSlides; i++) {
	const dotDiv = document.createElement('div');
	dots.appendChild(dotDiv);
	dotDiv.classList.add('dot');
}

let allDot = document.querySelectorAll('.dot')
allDot[0].classList.add('dot_selected')

let nextImg = 0

arrowRight.addEventListener("click", function() {
	allDot[nextImg].classList.remove('dot_selected');
	nextImg++;
	if (nextImg == numberSlides) {
		nextImg = 0 }
	allDot[nextImg].classList.add('dot_selected');
	slideImg.setAttribute("src", "./assets/images/slideshow/"+ slides[nextImg].image)
	slideText.innerHTML = slides[nextImg].tagLine
})

arrowLeft.addEventListener("click", function() {
	allDot[nextImg].classList.remove('dot_selected');
	nextImg--;
	if (nextImg < 0 ) {
		nextImg = numberSlides -1
	 }
	allDot[nextImg].classList.add('dot_selected');
	slideImg.setAttribute("src", "./assets/images/slideshow/"+ slides[nextImg].image)
	slideText.innerHTML = slides[nextImg].tagLine
	
})











