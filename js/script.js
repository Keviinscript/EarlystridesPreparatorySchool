//LOADER
const loader = document.querySelector(".loader");
const main = document.querySelector(".main")

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none'
        main.style.display = 'block';
        setTimeout(() => main.style.opacity = 1, 50);
    }, 5000);
}

init()

const herobg =document.querySelector(".herobg")

var bgImageArray = ["herobg.jpg",
 "herobg1.jpg",
  "herobg2.jpg",
  "herobg3.jpg"
  ],
base = "./img/",
secs = 6;
bgImageArray.forEach(function(img){
    new Image().src = base + img; 
    // caches images, avoiding white flash between background replacements
});

function backgroundSequence() {
	window.clearTimeout();
	var k = 0;

	for (i = 0; i < bgImageArray.length; i++) {
		setTimeout(function(){ 
            let finalImage = base + bgImageArray[k]
            let style = "url(" + finalImage + ") no-repeat center center fixed"
            let linear =  "linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),"
			herobg.style.background =  style;
			herobg.style.backgroundSize ="cover";
            herobg.style.backgroundColor = "rgba(4, 9, 30, 0.7)"
            herobg.style.backgroundBlendMode = "multiply"
		if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }			
		}, (secs * 1000) * i)	
	}
}
backgroundSequence();

//REVEAL ELEMENTS 
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

function revealLeft() {
    var revealsLeft = document.querySelectorAll(".revealleft");

    for (var i = 0; i < revealsLeft.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealsLeft[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealsLeft[i].classList.add("active");
        } else {
            revealsLeft[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", revealLeft);

function revealRight() {
    var revealsRight = document.querySelectorAll(".revealright");

    for (var i = 0; i < revealsRight.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealsRight[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealsRight[i].classList.add("active");
        } else {
            revealsRight[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", revealRight);


let mybutton = document.getElementById("myBtn");

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// HAMBURGER MENU FOR MOBILE SCREEN
const btn = document.getElementById("menu-btn");

document.querySelector(".hamburger").addEventListener("click", function () {
    document.querySelector("#menu").classList.toggle("change")
    btn.classList.toggle("open");

})

//COUNTER JS
let sectionCounter = document.querySelector('#sectioncounter')
let counters = document.querySelectorAll('.counter')

let counterObserver = new IntersectionObserver((entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 180;
    counters.forEach((counter, index) => {
        function UpDateCounter() {
            const targetNumber = +counter.dataset.target;
            const initialNumber = +counter.innerText;
            const incPerCount = targetNumber / speed
            if (initialNumber < targetNumber) {
                counter.innerText = Math.ceil(initialNumber + incPerCount);
                setTimeout(UpDateCounter, 300);
            }
        }
        UpDateCounter()
        if (counter.parentElement.style.animation) {
            counter.parentElement.style.animation = ""
        } else {
            counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${index / counters.length + 0.5}s`;
        }
    })
    observer.unobserve(sectionCounter)
}, {
    root: null,
    threshold: 0.4,
})
counterObserver.observe(sectionCounter)



