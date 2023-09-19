const clickableImages = ({mainImageId,imagesIds}) => {
  const images = imagesIds.map((id) => document.getElementById(id));
  const mainContainer = document.getElementById(mainImageId);
  images[0].classList.add("active");

  mainContainer.innerHTML = images[0].querySelector("img").outerHTML;

  images.forEach((imgContainer) => {
    imgContainer.classList.add("image-container");
    const image = imgContainer.querySelector("img");
    imgContainer.addEventListener("click", () => {
      images
        .filter((image) => image.classList.contains("active"))[0]
        .classList.remove("active");
      imgContainer.classList.add("active");
      mainContainer.innerHTML = image.outerHTML;
    });
  });
};

