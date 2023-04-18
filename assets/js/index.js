let navBarEl = document.getElementById("navBarSvg");
let closeNavEl = document.getElementById("closeNavSvg");
let dropdownEl = document.getElementById("dropdown");

navBarEl.onclick = () => {
  navBarEl.style.display = "none";
  closeNavEl.style.display = "block";
  dropdownEl.style.display = "flex";
};

closeNavEl.onclick = () => {
  navBarEl.style.display = "block";
  closeNavEl.style.display = "none";
  dropdownEl.style.display = "none";
};
