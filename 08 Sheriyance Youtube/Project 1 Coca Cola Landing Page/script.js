document.addEventListener("DOMContentLoaded", function() {
    const toggleIcons = document.querySelectorAll(".toggle-icon");

    toggleIcons.forEach(function(icon) {
        icon.addEventListener("click", function() {
            const paragraph = this.parentElement.nextElementSibling;
            paragraph.classList.toggle("visible");
        });
    });
});
