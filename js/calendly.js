document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("open-calendly");

    if (!btn) return;

    btn.addEventListener("click", function(e) {
        e.preventDefault();

        // Ouvre le popup Calendly
        Calendly.initPopupWidget({
            url: "https://calendly.com/nicolas-dorwald/consultation-naturopathie"
        });
    });
});
