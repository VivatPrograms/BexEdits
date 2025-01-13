document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.querySelector(".play-button");
    const video = document.querySelector(".showreel-video");

    playButton.addEventListener("click", () => {
        video.play();
        playButton.classList.add("hidden");
    });

    video.addEventListener("ended", () => {
        playButton.classList.remove("hidden");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".video-row");

    const handleScroll = () => {
        fadeInElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (isVisible) {
                element.classList.add("visible");
            } else {
                element.classList.remove("visible");
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on load in case elements are already in view
});
