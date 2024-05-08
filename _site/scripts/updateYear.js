document.addEventListener('DOMContentLoaded', function() {
    const yearButton = document.getElementById('yearButton');
    const yearLinks = document.querySelectorAll('.dropdown-year');

    yearLinks.forEach(link => {
        link.addEventListener('click', function() {
            yearButton.textContent = this.textContent; // Updates the button's text to the selected year
        });
    });
});



