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
  let total = document.getElementById("total").innerText;
  if (total > 0) {
    window.location.href = `https://www.paypal.me/CharlesNdonye/${total}`;
  } else {
    alert("Select valid dates first.");
  }
}

function payMpesa() {
  let total = document.getElementById("total").innerText;
  if (total > 0) {
    alert(
      `M-PESA STK REQUEST\n\n` +
      `An STK prompt will be sent to:\n` +
      `0743934502\n\n` +
      `Amount: USD ${total}\n\n` +
      `After paying, confirm via WhatsApp.`
    );
    bookWhatsApp();
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
