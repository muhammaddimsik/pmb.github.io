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

// Get the <span> element that closes the modal
const tutup = document.querySelector(".tutup");
const tutupTwo = document.querySelector(".tutup-2");

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
tutup.onclick = function () {
  modal.style.display = "none";
};

tutupTwo.onclick = function () {
  modalTwo.style.display = "none";
  modal.style.display = "none";
};

swap.onclick = function () {
  modalTwo.style.display = "block";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == modalTwo) {
    modal.style.display = "none";
    modalTwo.style.display = "none";
  }
};
