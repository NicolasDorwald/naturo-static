document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const messageDiv = document.getElementById("contact-message");
    const submitBtn = form.querySelector("button[type='submit']");

    if (!form || !submitBtn) return;

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const data = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                
                submitBtn.style.display = "none";
                messageDiv.textContent = "Merci, votre message a été envoyé !";
                messageDiv.style.color = "green";
                form.reset(); 
            } else {
                messageDiv.textContent = "Oups, une erreur est survenue. Réessayez.";
                messageDiv.style.color = "red";
            }
        })
        .catch(() => {
            messageDiv.textContent = "Oups, une erreur est survenue. Réessayez.";
            messageDiv.style.color = "red";
        });
    });
});
