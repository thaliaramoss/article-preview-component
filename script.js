const shareBtn = document.querySelector(".share");
const activeSocials = document.querySelector(".socials");

shareBtn.addEventListener("click", function() {
    activeSocials.style.display = activeSocials.style.display === "none" ? "flex" : "none";
    shareBtn.classList.toggle("active", activeSocials.style.display === "flex");
});
