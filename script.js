/* *************************
 Navbar Toggle:-
*****************************/


const hamburger = document.querySelector('.hamburger')
const ul = document.querySelector('ul')

hamburger.addEventListener('click', () => {
    ul.classList.toggle('ham_active');

    let ham_child = hamburger.firstElementChild;
    if (ul.classList.contains('ham_active')) {
        ham_child.classList.replace('fa-bars', 'fa-xmark')

    }
    else {

        ham_child.classList.replace('fa-xmark', 'fa-bars')
    }
});


/* *************************
 Smooth Scroll to Sections
*****************************/



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust offset if needed
                behavior: "smooth",
            });
        }
    });
});


