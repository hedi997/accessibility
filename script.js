const openModal = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const accessibleModal = document.getElementById("accessibleModal");

openModal.addEventListener("click", () => {
  accessibleModal.classList.add("open");
  closeModalBtn.focus();
});

closeModalBtn.addEventListener("click", () => {
  accessibleModal.classList.remove("open");
  openModal.focus();
});

const openDialog = document.getElementById("openDialog");
const accessibleDialog = document.getElementById("accessibleDialog");
const closeDialogBtn = document.getElementById("closeDialogBtn");

openDialog.addEventListener("click", () => {
  accessibleDialog.showModal();
  closeDialogBtn.focus();
});

closeDialogBtn.addEventListener("click", () => {
  accessibleDialog.close();
  openDialog.focus();
});

const menuButton = document.getElementById("menuButton");
const menuContent = document.getElementById("menuContent");

menuButton.addEventListener("click", () => {
  if (menuContent.classList.contains("open")) {
    menuContent.classList.remove("open");
    menuContent.setAttribute("aria-expanded", "false");
  } else {
    menuContent.classList.add("open");
    menuContent.setAttribute("aria-expanded", "true");

    const firstListItem = menuContent.querySelector("ul li:first-child");
    if (firstListItem) {
      firstListItem.querySelector("a").focus();
    }
  }
});
