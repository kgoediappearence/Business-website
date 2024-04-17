document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slideshow__slide");

    slides.forEach(function(slide) {
        slide.addEventListener("click", function() {
            const service = slide.getAttribute("data-service");
            window.location.href = service + ".html";
        });
    });
});
function submitForm() {
    const form = document.getElementById("contactForm");
    const formData = new FormData(form);

    fetch("send_email.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        const responseDiv = document.getElementById("response");
        responseDiv.textContent = data;
        form.reset();
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

