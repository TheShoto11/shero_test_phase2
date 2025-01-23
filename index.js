document.addEventListener("DOMContentLoaded", function () {
  // Initialize Glide
  const glide = new Glide(".glide", {
    type: "carousel",
    perView: 4,
    gap: 10,
  })

  glide.mount()

  const imageUpload = document.getElementById("imageUpload")
  const imageTitle = document.getElementById("imageTitle")
  const addProductBtn = document.getElementById("addProductBtn")
  const removeProductBtn = document.getElementById("removeProductBtn")
  const slidesContainer = document.querySelector(".glide__slides")

  addProductBtn.addEventListener("click", function () {
    const file = imageUpload.files[0]
    const title = imageTitle.value.trim()

    if (file && title) {
      const reader = new FileReader()
      reader.onload = function (e) {
        const newSlide = document.createElement("li")
        newSlide.classList.add("glide__slide")
        newSlide.innerHTML = `
          <div class="footer-image">
            <img src="${e.target.result}" alt="${title}">
          </div>
          <p>${title}</p>
        `
        slidesContainer.appendChild(newSlide)
        glide.update()
      }
      reader.readAsDataURL(file)
      imageUpload.value = ""
      imageTitle.value = ""
    } else {
      alert("Please select an image and enter a title.")
    }
  })

  removeProductBtn.addEventListener("click", function () {
    const slides = document.querySelectorAll(".glide__slide")
    if (slides.length > 0) {
      slidesContainer.removeChild(slides[slides.length - 1])
      glide.update()
    } else {
      alert("No more products to remove!")
    }
  })
})
