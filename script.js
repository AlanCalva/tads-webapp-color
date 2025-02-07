document.addEventListener("DOMContentLoaded", function () {
    const redRange = document.getElementById("redRange");
    const greenRange = document.getElementById("greenRange");
    const blueRange = document.getElementById("blueRange");

    const redInput = document.getElementById("redInput");
    const greenInput = document.getElementById("greenInput");
    const blueInput = document.getElementById("blueInput");

    const colorBox = document.getElementById("colorBox");
    const hexCode = document.getElementById("hexCode");

    function updateColor() {
        const r = parseInt(redRange.value);
        const g = parseInt(greenRange.value);
        const b = parseInt(blueRange.value);
        
        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        colorBox.style.backgroundColor = rgbColor;

        const hex = `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
        hexCode.textContent = hex;

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;
    }

    function updateFromInput() {
        const r = Math.min(255, Math.max(0, parseInt(redInput.value) || 0));
        const g = Math.min(255, Math.max(0, parseInt(greenInput.value) || 0));
        const b = Math.min(255, Math.max(0, parseInt(blueInput.value) || 0));

        redRange.value = r;
        greenRange.value = g;
        blueRange.value = b;

        updateColor();
    }

    [redRange, greenRange, blueRange].forEach(input => input.addEventListener("input", updateColor));
    [redInput, greenInput, blueInput].forEach(input => input.addEventListener("input", updateFromInput));

    updateColor();
});
