const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const createGallery = (pictureInfo) => {
  //create li
  const galleryItemEl = document.createElement("li");
  galleryItemEl.classList.add("gallery-item");
  //create a
  const galleryLinkEl = document.createElement("a");
  galleryLinkEl.classList.add("gallery-link");
  galleryLinkEl.href = pictureInfo.original;
  galleryItemEl.append(galleryLinkEl);

  //create img
  const galleryImgEl = document.createElement("img");
  galleryImgEl.classList.add("gallery-image");
  galleryImgEl.src = pictureInfo.preview;
  galleryImgEl.setAttribute("data-source", pictureInfo.original);
  //galleryImgEl.dataSource = pictureInfo.original;
  galleryImgEl.alt = pictureInfo.description;
  galleryItemEl.append(galleryImgEl);

  return galleryItemEl;
};

//console.log(createGallery(images));

const imagesArray = images.map((image) => createGallery(image));
const galleryListEl = document.querySelector(".gallery");
galleryListEl.append(...imagesArray);

const itemsList = document.querySelectorAll(".gallery-item");
const link = document.querySelector(".gallery-link");
const imagesList = document.querySelectorAll(".gallery-image");
const gallery = document.querySelector(".gallery");

//Prevent links from default downloading images
/*link.addEventListener("click", (event) => {
  event.preventDefault();
});*/

//console.log(imagesList);
//console.log(itemsList);

//const modal = document.querySelector(".bigImage");

imagesList.forEach((item) => {
  item.addEventListener("click", (event) => {
    const imageSrc = event.target.dataset.source;
    basicLightbox
      .create(
        `
		<img width="640" height="1112" src="${imageSrc}" class="bigImage">
	`
      )
      .show();
  });
});
