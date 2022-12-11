const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.add("open-nav");
});

close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});

const dropdown = document.querySelector(".dropdown");
const item = document.querySelector(".menu-dropdown");
dropdown.addEventListener("click", () => {
  item.classList.toggle("open-item");
});

// get button swap overlay
const swap = document.querySelector(".swap-overlay");

// Get the modal
const modal = document.getElementById("myModal");
const modalTwo = document.querySelector(".modal-1");

// Get the button that opens the modal

const btn = document.getElementById("myBtn");
btn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Get the <span> element that closes the modal
const tutup = document.querySelector(".tutup");
const tutupTwo = document.querySelector(".tutup-2");

// When the user clicks on the button, open the modal
// btn.onClick = function () {
//   modal.style.display = "block";
// };

// When the user clicks on <span> (x), close the modal
tutup.addEventListener("click", () => {
  modal.style.display = "none";
});

tutupTwo.onClick = function () {
  modalTwo.style.display = "none";
  modal.style.display = "none";
};

swap.onClick = function () {
  modalTwo.style.display = "block";
};

// When the user clicks anywhere outside of the modal, close it
// window.addEventListener("click", (event) => {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   } else if (event.target == modalTwo) {
//     modal.style.display = "none";
//     modalTwo.style.display = "none";
//   }
// });
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == modalTwo) {
    modal.style.display = "none";
    modalTwo.style.display = "none";
  }
};

console.log(swap);

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   const slides = document.getElementsByClassName("mySlides");
//   const dots = document.getElementsByClassName("dot");
//   console.log(dots);
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }
