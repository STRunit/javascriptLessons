const body = document.getElementsByTagName("body")[0];
const container = document.createElement("div");

const createCard = (text, imgUrl) => {
  const cardBox = document.createElement("div");
  const image = document.createElement("img");
  const label = document.createElement("p");

  container.classList.add("container");
  cardBox.classList.add("cardBox");
  label.classList.add("label");
  image.classList.add("img");

  image.src = imgUrl;

  label.innerText = text;

  cardBox.appendChild(image);
  cardBox.appendChild(label);
  container.appendChild(cardBox);
  body.appendChild(container);
};

createCard(
  "Hold shift to run – t-shrit print",
  "https://cdn.dribbble.com/userupload/14132602/file/original-186ca015a39adc6b3e65477aab3e2eab.png?resize=1200x900"
);

createCard(
  "Little Devil",
  "https://cdn.dribbble.com/userupload/14631893/file/original-917fef27dae39252a6337f7f3bf74473.png?resize=1024x688"
);

createCard(
  "Splitto [Ver. II]",
  "https://cdn.dribbble.com/userupload/14828456/file/original-12639612680a49f99532da911d7dcc70.jpg?resize=1200x1200"
);

createCard(
  "Camping joy",
  "https://cdn.dribbble.com/userupload/14609432/file/original-b62559248c7446223dec132acda0370a.png?resize=1200x1001"
);

createCard(
  "Culture Pulse",
  "https://cdn.dribbble.com/userupload/14791095/file/original-f7da5bf396be0d44ed38bd084cd5cb07.png?resize=1200x900"
);
