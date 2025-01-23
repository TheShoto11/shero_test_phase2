document.addEventListener("DOMContentLoaded", function () {
  new Glide(".glide", {
    type: "carousel",
    perView: 4,
    gap: 10,
    breakpoints: {
      768: { perView: 2 }, // Adjust for tablet
      480: { perView: 1 }, // Adjust for mobile
    },
  }).mount()
})
