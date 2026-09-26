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