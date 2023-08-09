
const filterItems = document.querySelectorAll(".item"); 
const filterImages = document.querySelectorAll(".image"); 
const previewBox = document.querySelector(".preview-box");
const imageBox = previewBox.querySelector(".image-box");
const title = previewBox.querySelector(".title");
const closeButton = previewBox.querySelector(".icon"); 
const shadow = document.querySelector(".shadow"); 

const filterImagesByCategory = (category) => {
    filterImages.forEach((image) => {
        const imageFilterName = image.getAttribute("data-name");
        if (category === imageFilterName || category === "all") {
            image.classList.remove("hide");
            image.classList.add("show");
        } else {
            image.classList.remove("show");
            image.classList.add("hide");
        }
    });
};

const showPreview = (category, imageUrl) => {
    title.innerHTML = `Image Category: <p>${category}</p>`;
    imageBox.innerHTML = `<img src="${imageUrl}" alt="" srcset="">`;
    previewBox.classList.add("show");
    shadow.classList.add("show");
};

const closePreview = () => {
    previewBox.classList.remove("show");
    shadow.classList.remove("show");
};


const handleFilterClick = (event) => {
    const selectedItem = event.target;
    if (selectedItem.classList.contains("item")) {
        filterItems.forEach((item) => {
            item.classList.remove("active");
        });
        selectedItem.classList.add("active");
        const filterName = selectedItem.getAttribute("data-name");
        filterImagesByCategory(filterName);
    }
};


const handleImageClick = (event) => {
    const clickedImage = event.currentTarget;
    const category = clickedImage.getAttribute("data-name");
    const imageUrl = clickedImage.querySelector("img").getAttribute("src");
    showPreview(category, imageUrl);
};

window.onload = () => {
    filterItems.forEach((item) => {
        item.onclick = handleFilterClick;
    });

    filterImages.forEach((image) => {
        image.onclick = handleImageClick;
    });

    closeButton.onclick = closePreview;
    shadow.onclick = closePreview;

    filterImagesByCategory("all");
};