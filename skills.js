
document.addEventListener("DOMContentLoaded", function () {
    VANTA.WAVES({
        el: "#VantaHintergrund",
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x000000,
        points: 10.0,
        maxDistance: 20.0,
        spacing: 25.0,
        color1: 0x1e00ff
    });
});