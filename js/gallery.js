// Gallery Lightbox
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(image => {
    image.addEventListener("click", () => {

        const lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");

        const largeImage = document.createElement("img");
        largeImage.src = image.src;
        largeImage.alt = image.alt;

        const closeButton = document.createElement("span");
        closeButton.classList.add("lightbox-close");
        closeButton.innerHTML = "&times;";

        lightbox.appendChild(closeButton);
        lightbox.appendChild(largeImage);
        document.body.appendChild(lightbox);

        closeButton.addEventListener("click", () => {
            lightbox.remove();
        });

        lightbox.addEventListener("click", (event) => {
            if (event.target === lightbox) {
                lightbox.remove();
            }
        });
    });
});