function calculate() {
  let price = Number(document.getElementById("type").value);
  let checkin = new Date(document.getElementById("checkin").value);
  let checkout = new Date(document.getElementById("checkout").value);

  if (checkout > checkin) {
    let days = (checkout - checkin) / (1000 * 60 * 60 * 24);
    document.getElementById("total").innerText = price * days;
  } else {
    document.getElementById("total").innerText = 0;
  }
}

function payPayPal() {
  calculate(); // 👈 force update
  let total = document.getElementById("total").innerText;
  if (Number(total) > 0) {
  const usd = Number("total");

  window.location.href =
    `https://www.paypal.me/CharlesNdonye/${usd}?currencyCode=USD`;
} else {
  alert("Select valid dates first.");
  }
}

function payMpesa() {
  let total = document.getElementById("total").innerText;
 if (total) {
  // extract USD number from "Total: $30"
  let usd = Number(total.replace(/[^0-9]/g, ""));

  if (usd <= 0) {
    alert("Select valid dates first.");
    return;
  }

  // conversion
  let ksh = usd * 129;

  alert(
    "M-PESA PAYMENT\n\n" +
    "Amount: KES " + ksh + "\n\n" +
    "Pay to:\n" +
    "0743 934 502\n\n" +
    "Steps:\n" +
    "1. Dial *334#\n" +
    "2. Choose Send Money\n" +
    "3. Enter number: 0743934502\n" +
    "4. Enter amount: " + ksh + "\n" +
    "5. Confirm with M-PESA PIN"
  );

  // open dial app
  window.location.href = "tel:*334#";

} else {
  alert("Select valid dates first.");
}
    
}

function bookWhatsApp() {
  let typeText = document.getElementById("type").options[
    document.getElementById("type").selectedIndex
  ].text;
  let checkin = document.getElementById("checkin").value;
  let checkout = document.getElementById("checkout").value;
  let total = document.getElementById("total").innerText;

  let message =
    `Hello Ceelx Beach Stay 👋\n\n` +
    `Booking request:\n` +
    `Type: ${typeText}\n` +
    `Check-in: ${checkin}\n` +
    `Check-out: ${checkout}\n` +
    `Total: $${total}\n\n` +
    `I am ready to pay / have paid via M-PESA.`;

  window.open(
    `https://wa.me/254743934502?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

document.addEventListener("DOMContentLoaded", () => {
  calculate();
});
