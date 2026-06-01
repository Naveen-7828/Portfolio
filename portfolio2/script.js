// Typing Effect

const text = "Java Full Stack Developer";
let index = 0;

function typeWriter() {

    if (index < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 100);
    }
}


// Page Navigation

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {

        page.classList.remove("active");

    });

    document
        .getElementById(pageId)
        .classList.add("active");

}


// Load Animations

window.onload = () => {

    typeWriter();

    const elements = document.querySelectorAll(
        ".card, .navbar a, .profile-image, .hero-left, .content-box"
    );

    elements.forEach((element, i) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(40px)";

        setTimeout(() => {

            element.style.transition = "all .8s ease";

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";

        }, i * 150);

    });

};