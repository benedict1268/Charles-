// Calculate number of days between two dates
function calculateDays(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diffTime = endDate - startDate;
  if (diffTime <= 0) return 0;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// Send WhatsApp booking
function sendWhatsApp() {
  const stay = document.getElementById("stayType").value;
  const checkIn = document.getElementById("checkIn").value;
  const checkOut = document.getElementById("checkOut").value;

  if (!checkIn || !checkOut) {
    alert("Please select both check-in and check-out dates.");
    return;
  }

  const days = calculateDays(checkIn, checkOut);
  if (days <= 0) {
    alert("Check-out must be after check-in.");
    return;
  }

  // Determine price per type
  let pricePerDay = 0;
  if (stay.includes("Single Person")) pricePerDay = 12;
  else if (stay.includes("Couple")) pricePerDay = 15;
  else if (stay.includes("Family")) pricePerDay = 20;

  const total = days * pricePerDay;

  const message =
    `Hello CEELX 👋%0A%0A` +
    `Booking request:%0A` +
    `${stay}%0A` +
    `Check-in: ${checkIn}%0A` +
    `Check-out: ${checkOut}%0A` +
    `Number of days: ${days}%0A` +
    `Total Price: $${total}%0A%0A` +
    `Kindly confirm availability and payment details.`;

  const phone = "254743934502"; // <-- Replace with your WhatsApp number
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

// PayPal button with total price
function payWithPayPal() {
  const stay = document.getElementById("stayType").value;
  const checkIn = document.getElementById("checkIn").value;
  const checkOut = document.getElementById("checkOut").value;

  if (!checkIn || !checkOut) {
    alert("Please select both check-in and check-out dates before paying.");
    return;
  }

  const days = calculateDays(checkIn, checkOut);
  if (days <= 0) {
    alert("Check-out must be after check-in.");
    return;
  }

  // Determine price per type
  let pricePerDay = 0;
  if (stay.includes("Single Person")) pricePerDay = 12;
  else if (stay.includes("Couple")) pricePerDay = 15;
  else if (stay.includes("Family")) pricePerDay = 20;

  const total = days * pricePerDay;

  // Replace with your PayPal email
  const paypalEmail = "youremail@example.com";

  // Create PayPal payment link
  const paypalLink ="ceelx16@gmail.com" `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${paypalEmail}&amount=${total}&currency_code=USD&item_name=${encodeURIComponent(stay)}`;

  window.open(paypalLink, "_blank");
}