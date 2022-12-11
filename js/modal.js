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

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == modalTwo) {
    modal.style.display = "none";
    modalTwo.style.display = "none";
  }
};
