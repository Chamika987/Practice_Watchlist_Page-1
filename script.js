function payNow(button) {
  alert("..........Processing..........");
  button.style.backgroundColor = "white";
  button.style.cursor = "none";
  button.disabled = true;
}

function addCart(button) {
  alert("...Cart adding successfully...");
  button.textContent = "Visit Your cart";
  button.style.backgroundColor = "RoyalBlue";
  button.style.width = "10em";
  button.style.height = "2.5em";
  button.style.margin = "0";
  button.style.padding = "0";
  button.style.cursor = "none";
  button.style.gap = "0.00000001em";
  button.style.mar = "0.00000001em";
  button.disabled = true;

  const card = button.closest(".card");
  const payButton = card.querySelector(".payNow");
  payButton.style.marginRight = "0";
}
