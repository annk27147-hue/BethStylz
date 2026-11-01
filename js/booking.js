const bookingForm = document.getElementById("bookingForm");
const successMessage = document.getElementById("successMessage");

const dateInput = document.getElementById("date");


// Prevent clients from selecting dates in the past

const today = new Date().toISOString().split("T")[0];

dateInput.min = today;



bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const service =
        document.getElementById("service").value;

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;

    const message =
        document.getElementById("message").value.trim();



    // Basic required-field check

    if (name === "" || phone === "" || service === "") {

        successMessage.style.color = "red";

        successMessage.textContent =
            "Please enter your name, phone number and select a service.";

        return;

    }



    // BethStylz WhatsApp number

    const whatsappNumber = "254792513307";



    // Format date

    const formattedDate = date

        ? new Date(date + "T00:00:00")
            .toLocaleDateString("en-KE", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            })

        : "Not specified";



    // Format time

    const formattedTime = time

        ? new Date(`1970-01-01T${time}`)
            .toLocaleTimeString("en-KE", {
                hour: "numeric",
                minute: "2-digit"
            })

        : "Not specified";



    // WhatsApp message

    const whatsappMessage =

        `Hello BethStylz! 👋\n\n` +

        `I'd like to make a booking/enquiry.\n\n` +

        `Name: ${name}\n` +

        `Phone: ${phone}\n` +

        `Service: ${service}\n` +

        `Preferred Date: ${formattedDate}\n` +

        `Preferred Time: ${formattedTime}\n` +

        `Message: ${message || "No additional message"}\n\n` +

        `Please confirm availability and the appointment time.`;


    // WhatsApp URL

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;



    // Open WhatsApp

    window.open(whatsappURL, "_blank");



    // Success message

    successMessage.style.color = "green";

    successMessage.textContent =
        "✅ Opening WhatsApp — BethStylz will confirm your appointment.";



    // Clear form

    bookingForm.reset();


    // Keep date restriction after reset

    dateInput.min = today;

});