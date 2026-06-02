const text = "Java Full Stack Developer🖥️";
let index = 0;

function typingEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typingEffect, 50);
  }
}

window.onload = () => {
  typingEffect();

  const cards = document.querySelectorAll(
    ".profile-image, .content-box, .project-card, .skill-card"
  );

  cards.forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {
      card.style.transition = "all .7s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, i * 120);
  });
};