// document.querySelectorAll(".experience-item").forEach((card) => {
//     card.addEventListener("mousemove", (e) => {
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;

//         const centerX = rect.width / 2;
//         const centerY = rect.height / 2;

//         const rotateX = (y - centerY) / 15; // Vertical tilt
//         const rotateY = (centerX - x) / 15; // Horizontal tilt

//         // Update card tilt
//         card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

//         // Update dynamic gradient
//         const gradientX = (x / rect.width) * 100;
//         const gradientY = (y / rect.height) * 100;
//         card.style.background = `radial-gradient(circle at ${gradientX}% ${gradientY}%, #333 10%, #000 80%)`;
//     });

//     card.addEventListener("mouseleave", () => {
//         card.style.transform = "rotateX(0) rotateY(0)";
//         card.style.background = "radial-gradient(circle at center, #222 10%, #000 80%)"; // Reset gradient
//     });
// });
