
document.addEventListener("DOMContentLoaded", function () {
    VANTA.GLOBE({
        el: "#VantaHintergrund",
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.3,
        scaleMobile: 1.0,
        backgroundColor: 0x000000,
        points: 10.0,
        maxDistance: 20.0,
        spacing: 18.0,
        color: 0xed135f,
        color2: 0xff003c
    });
});