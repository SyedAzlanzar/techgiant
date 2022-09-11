
function revealheader() {
  var video = document.getElementById("myVideo");
  var header = document.getElementById("header");

  var windowheight = window.pageYOffset;
  var rtop = video.getBoundingClientRect().top + 300;
  if (rtop < windowheight) {
    header.classList.add("active");

  } else {
    header.classList.remove("active");
  }


}
window.addEventListener("scroll", revealheader);



const loader = document.getElementById('loader')
const container = document.getElementById('container')

window.addEventListener('load', () => {
  loader.style.display = 'none'
  container.style.display = "block"

})


// services
const content = document.querySelectorAll(".content");
const btn = document.querySelectorAll(".btn");

btn.forEach((value, index) => {
  btn[index].addEventListener("click", () => {
    if (
      content[index].style.height == "" &&
      content[index].style.overflow == ""
    ) {
      content[index].style.height = "180px";
      content[index].style.overflow = "none";
      btn[index].querySelector('button').innerHTML = 'Show Less';

    }

    else {
      content[index].style.height = "";
      content[index].style.overflow = "";
      btn[index].querySelector('button').innerHTML = 'Show More'

    }
  });
});

// revealcard
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    // console.log(revealtop)
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    }
    // else{
    //   reveals[i].classList.remove('active');
    // }
  }
}

// revealimage
window.addEventListener("scroll", revealimage);
function revealimage() {
  var revealimage = document.querySelectorAll(".revealimage");

  for (var i = 0; i < revealimage.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = revealimage[i].getBoundingClientRect().top;
    // console.log(revealtop)
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      revealimage[i].classList.add("active");
    }
    // else{
    //   reveals[i].classList.remove('active');
    // }
  }
}
// testimonial js

$(document).ready(function () {

  $('.items').slick({
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });
});



// onclick navbar hidden
const navbar= document.getElementById("nav");
const a_tag= document.querySelectorAll(".anchor");

for(var i = 0; i < a_tag.length;i++ ){
  a_tag[i].addEventListener('click' , () =>{
    navbar.classList.remove('active')
  })
}




