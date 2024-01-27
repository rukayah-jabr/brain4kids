let inputA = false;
let inputB = false;

document.getElementById("inputA").addEventListener("click", function() {
    inputA = !inputA;
    this.textContent = `Input A: ${inputA ? "ON" : "OFF"}`;
    updateLight();
});

document.getElementById("inputB").addEventListener("click", function() {
    inputB = !inputB;
    this.textContent = `Input B: ${inputB ? "ON" : "OFF"}`;
    updateLight();
});

document.getElementById("operator").addEventListener("change", updateLight);

function updateLight() {
    const operator = document.getElementById("operator").value;
    let isOn = false;

    if (operator === "AND") {
        isOn = inputA && inputB;
    } else if (operator === "OR") {
        isOn = inputA || inputB;
    }

    const lightBulb = document.getElementById("lightBulb");
    if (isOn) {
        lightBulb.classList.add("bulb-on");
        lightBulb.classList.remove("bulb-off");
    } else {
        lightBulb.classList.add("bulb-off");
        lightBulb.classList.remove("bulb-on");
    }
}
