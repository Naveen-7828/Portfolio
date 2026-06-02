const text = "Full Stack Developer🖥️";
let index = 0;

function typingEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typingEffect, 30);
  }
}

window.onload = () => {
  typingEffect();

  const cards = document.querySelectorAll(
    ".content-box, .project-card, .profile-image, .skill-card"
  );

  cards.forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {
      card.style.transition = "all .8s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, i * 150);
  });
};