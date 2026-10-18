function showBar() {
    const sidebar = document.querySelector('.mobile_navbar');
    sidebar.style.display="flex";
}
function hideBar() {
    const sidebar = document.querySelector('.mobile_navbar');
    sidebar.style.display="none";
}




// Top button
const topButton = document.querySelector('.top-button');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        topButton.classList.add('show'); 
    } else {
        topButton.classList.remove('show'); 
    }
});








const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Αν το στοιχείο μπήκε στην οθόνη
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible'); // Βάλε την κλάση που το εμφανίζει
            observer.unobserve(entry.target); // Σταμάτα να το παρακολουθείς (για να γίνει μόνο μια φορά)
        }
    });
}, {
    threshold: 0.45 
});

// Βρίσκουμε όλα τα στοιχεία με την κλάση .fade-in και βάζουμε το ραντάρ να τα κοιτάει
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});
