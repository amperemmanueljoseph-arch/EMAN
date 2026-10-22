const stage = document.querySelector("#image-stage");
const swatches = document.querySelectorAll(".swatch");
const zoomDialog = document.querySelector("#zoom-dialog");

swatches.forEach((swatch) => {
    swatch.addEventListener("click", () => {
        const theme = swatch.dataset.theme;
        stage.dataset.theme = theme;

        swatches.forEach((option) => {
            const selected = option === swatch;
            option.classList.toggle("is-active", selected);
            option.setAttribute("aria-pressed", String(selected));
        });
    });
});

document.querySelector("#open-zoom").addEventListener("click", () => {
    zoomDialog.showModal();
});

document.querySelector("#close-zoom").addEventListener("click", () => {
    zoomDialog.close();
});

zoomDialog.addEventListener("click", (event) => {
    if (event.target === zoomDialog) {
        zoomDialog.close();
    }
});