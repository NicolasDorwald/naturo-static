document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("open-calendly");

    if (!btn) return;

    btn.addEventListener("click", function(e) {
        e.preventDefault();

        Calendly.initPopupWidget({
            url: "https://calendly.com/nicolas-dorwald/consultation-naturopathie"
        });
    });
});
