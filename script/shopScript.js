//product array
const myProducts = [
  {
    productId: 1,
    prodName: "T-shirt",
    prodPrice: 15,
    prodImageUrl: "./images/products/1/p2.jpeg",
    rating: 4.0,
  },
  {
    productId: 2,
    prodName: "Jacket",
    prodPrice: 50,
    prodImageUrl: "./images/products/2/p1.webp",
    rating: 4.4,
  },
  {
    productId: 10,
    prodName: "Cap",
    prodPrice: 74,
    prodImageUrl: "./images/products/3/p1.jpeg",
    rating: 4.8,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  document.preventde;
  document.getElementById("receipt").style.display = "none";
});

$(document).ready(function () {});
function submitForm(e) {
  e.preventDefault();
  //   $("form#saleForm").submit(function (e) {
  console.log("here");

  clearErrorMessages();
  // Get user inputs
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const tshirt = document.getElementById("tshirts").value;
  const caps = document.getElementById("caps").value;
  const jackets = document.getElementById("jackets").value;

  let valid = true;

  if (tshirt != "" || caps != "" || jackets != "") {
    // Validate name and email (mandatory fields)
    if (!name) {
      displayErrorMessage("*Name is a mandatory field.", "p_name");
      valid = false;
    }
    //validate phone number
    if (!phone || !validatePhoneNumber(document.getElementById("phone"))) {
      displayErrorMessage(
        "*Please enter valid phone number in (xxx)-xxx-xxxx.",
        "p_phone"
      );
      valid = false;
    }
    // validation for tshirts
    if (
      tshirt < 0 ||
      (tshirt && !validateNumberInput(document.getElementById("tshirts")))
    ) {
      displayErrorMessage("*Please enter a valid input.", "p_tshirts");
      valid = false;
    }
    //validation for caps
    if (
      caps < 0 ||
      (caps && !validateNumberInput(document.getElementById("caps")))
    ) {
      displayErrorMessage("*Please enter a valid input.", "p_caps");
      valid = false;
    }
    //validation for jackets
    if (
      jackets < 0 ||
      (jackets && !validateNumberInput(document.getElementById("jackets")))
    ) {
      displayErrorMessage("*Please enter a valid input.", "p_jackets");
      valid = false;
    }
  } else {
    valid = false;
    alert("Please enter quantity for any of the three items");
  }

  if (valid == true) {
    let tshirt_price = "";
    let caps_price = "";
    let jackets_price = "";
    //checking product prices
    for (const prod in myProducts) {
      if (myProducts[prod].prodName == "T-shirt") {
        tshirt_price = myProducts[prod].prodPrice;
      }
      if (myProducts[prod].prodName == "Cap") {
        caps_price = myProducts[prod].prodPrice;
      }
      if (myProducts[prod].prodName == "Jacket") {
        jackets_price = myProducts[prod].prodPrice;
      }
    }
    // creating receipt content
    var inner_content = `<table><tr><td>Customer Name</td><td>${name}</td></tr>
      <tr><td>Phone Number</td><td>${phone}</td></tr>`;

    if (tshirt > 0) {
      inner_content += `<tr><td>Number of T-shirts: </td><td>${tshirt} X $${tshirt_price}</td><td>$${
        tshirt * tshirt_price
      }</td></tr>`;
    }
    if (caps > 0) {
      inner_content += `<tr><td>Number of Caps: </td><td>${caps} X $${tshirt_price}</td><td>$${
        caps * caps_price
      }</td></tr>`;
    }
    if (jackets > 0) {
      inner_content += `<tr><td>Number of Jackets: </td><td>${jackets} X $${tshirt_price}</td><td>$${
        jackets * jackets_price
      }</td></tr>`;
    }
    inner_content += `</table>`;

    document.getElementById("receipt").style.display = "block";
    // add receipt html tags to DOM
    const receiptContainer = document.getElementById("cust_receipt");
    receiptContainer.innerHTML = "";
    const table = document.createElement("table");
    table.classList.add("table");
    table.innerHTML = inner_content;
    receiptContainer.appendChild(table);

    let subTotal =
      jackets * jackets_price + caps * caps_price + tshirt * tshirt_price;
    let tax = subTotal * 0.13;
    let salesTotal = subTotal + tax;

    let inner_content2 = "";

    inner_content2 = `<table><tr><td>SubTotal</td><td>$${subTotal}</td></tr>
    <tr><td>Tax</td><td>$${tax}</td></tr>
    <tr><td>Sales Total</td><td><strong>$${salesTotal}</strong></td></tr></table>`;

    const final = document.getElementById("final");
    final.innerHTML = "";
    const table_total = document.createElement("table");
    table_total.classList.add("table");
    table_total.innerHTML = inner_content2;
    final.appendChild(table_total);
  }

  // e.preventDefault();
  // return false;
}

// function validateForm() {

// }

function validatePhoneNumber(number) {
  // Regular expression to match the (xxx)-xxx-xxxx format
  var regex = /^\(\d{3}\)-\d{3}-\d{4}$/;
  console.log(regex.test(number.value));
  if (regex.test(number.value)) {
    return true;
  } else {
    return false;
  }
}
//error message function
function displayErrorMessage(message, field_id) {
  const errorDiv = document.getElementById(field_id);
  const errorMessage = document.createElement("span");
  errorMessage.classList.add("span_error");
  errorMessage.textContent = message;
  errorDiv.appendChild(errorMessage);
}

function validateNumberInput(inputField) {
  var inputValue = inputField.value;

  // Check if the input is a valid number
  if (!isNaN(inputValue) && inputValue.trim() !== "") {
    return true;
  } else {
    return false;
  }
}
// Function to clear error messages
function clearErrorMessages() {
  const errorDiv = document.getElementsByClassName("span_error");

  if (errorDiv.length > 0) {
    for (let elm in errorDiv) {
      if (errorDiv.length > elm) {
        errorDiv[elm].innerHTML = "";
      }
    }
  }
}
//cancel form function
function cancelForm() {
  // Reset form fields or navigate away from the form page
  document.getElementById("myForm").reset();
}
