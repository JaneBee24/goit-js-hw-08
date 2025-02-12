document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".gallery");
    const modal = document.querySelector(".modal");
    const modalImage = document.querySelector(".modal img");

    for (let i = 1; i <= 9; i++) {
        const img = document.createElement("img");
        img.src = `./images/img${i}.jpg`;
        img.alt = `Image ${i}`;
        img.addEventListener("click", () => {
            modalImage.src = img.src;
            modal.classList.add("active");
        });
        gallery.appendChild(img);
    }

    modal.addEventListener("click", () => {
        modal.classList.remove("active");
    });
});
