const titles = document.querySelectorAll(".title");
const background = document.querySelector(".background");
let zoomAnimation;

titles.forEach((title) => {
  title.addEventListener("mouseover", () => {
  
    const imageUrl = title.getAttribute("data-img");

    background.style.backgroundImage = `url(${imageUrl})`;
    background.style.opacity = "1";
    background.style.animation = "slow-zoom 10s linear infinite"


    titles.forEach((t) => {
      if (t !== title) t.style.opacity = "0.5";
    });
  });

  title.addEventListener("mouseout", () => {
    background.style.opacity = "0";
    background.style.animation = "none"

    titles.forEach((t) => {
      t.style.opacity = "1";
    });
  });
});
