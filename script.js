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
        "NOVI ZAHTEV ZA ZAKAZIVANJE\n\n" +
        "Ime i prezime: " + name + "\n" +
        "Telefon: " + phone + "\n" +
        "Usluga: " + service + "\n" +
        "Datum: " + date + "\n" +
        "Vreme: " + time + "\n" +
        "Napomena: " + (note || "Nema napomene");

    window.location.href =
        "sms:0606006263?body=" + encodeURIComponent(message);
});
