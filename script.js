const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const note = document.getElementById("note").value;

    const message =
        NOVI ZAHTEV ZA ZAKAZIVANJE%0A%0A +
        Ime i prezime: ${name}%0A +
        Telefon: ${phone}%0A +
        Usluga: ${service}%0A +
        Datum: ${date}%0A +
        Vreme: ${time}%0A +
        Napomena: ${note || "Nema napomene"};

    window.location.href = sms:0606006263?body=${message};
});
