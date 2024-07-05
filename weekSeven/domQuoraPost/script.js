const body = document.getElementsByTagName("body")[0];

const container = document.createElement("div");
container.className = "container";

const exit = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;

const logo = `https://asset.brandfetch.io/iddd_fYAYR/idBfVGN342.svg`;

const upVote = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-arrow-up"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/></svg>`;

const downVote = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-arrow-down"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 8v8"/><path d="m8 12 4 4 4-4"/></svg>`;

const menu = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`;

let voteCounter = 0;

const quoraPost = () => {
  //created elements
  const header = document.createElement("div");
  const headerLeft = document.createElement("div");
  const headerLogo = document.createElement("img");
  const headerLabel = document.createElement("h4");
  const exitButton = document.createElement("button");
  const headerExit = document.createElement("svg");

  const textMain = document.createElement("h3");
  const text = document.createElement("p");

  const imageHero = document.createElement("img");

  const footer = document.createElement("div");
  const footerEngage = document.createElement("div");
  const upvoteButton = document.createElement("button");
  const upvoteIcon = document.createElement("svg");
  const voteMain = document.createElement("div");
  let voteCount = document.createElement("span");
  const downvoteButton = document.createElement("button");
  const downvoteIcon = document.createElement("svg");

  const footerMenu = document.createElement("svg");

  //class names
  header.className = "header";
  headerLeft.className = "headerLeft";
  headerLogo.className = "headerLogo";
  headerLabel.className = "headerLabel";
  exitButton.className = "exitButton";
  headerExit.className = "headerExit";

  textMain.className = "textMain";
  text.className = "text";

  imageHero.className = "imageHero";

  footer.className = "footer";
  footerEngage.className = "footerEngage";
  upvoteButton.className = "upvoteButton";
  upvoteIcon.className = "upvoteIcon";
  voteMain.className = "voteMain";
  voteCount.className = "voteCount";
  downvoteButton.className = "downvoteButton";
  downvoteIcon.className = "downvoteIcon";

  footerMenu.className = "footerMenu";

  //edit elements
  headerLogo.src = logo;
  headerLabel.innerText = "Grammarly";
  headerExit.innerHTML = exit;

  textMain.innerText = "Review your English writing for mistakes.";
  text.innerText =
    "Write clearly in English with no mistakes. Try for free writing app !";

  imageHero.src =
    "https://images.pexels.com/photos/7112/woman-typing-writing-windows.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  upvoteIcon.innerHTML = upVote;
  voteMain.innerText = "Upvote. ";
  voteCount.innerText = voteCounter;

  downvoteIcon.innerHTML = downVote;

  footerMenu.innerHTML = menu;

  // appended childs

  headerLeft.appendChild(headerLogo);
  headerLeft.appendChild(headerLabel);
  exitButton.appendChild(headerExit);

  header.appendChild(headerLeft);
  header.appendChild(exitButton);

  upvoteButton.appendChild(upvoteIcon);
  downvoteButton.appendChild(downvoteIcon);

  voteMain.appendChild(voteCount);

  footerEngage.appendChild(upvoteButton);
  footerEngage.appendChild(voteMain);
  footerEngage.appendChild(downvoteButton);

  footer.appendChild(footerEngage);
  footer.appendChild(footerMenu);

  container.appendChild(header);
  container.appendChild(textMain);
  container.appendChild(text);
  container.appendChild(imageHero);
  container.appendChild(footer);

  body.appendChild(container);
};
quoraPost();

const voteIncrement = document.getElementsByClassName("upvoteButton")[0];
const voteDecrement = document.getElementsByClassName("downvoteButton")[0];
const givenVote = document.getElementsByClassName("voteCount")[0];

function changeNumber() {
  givenVote.innerText = voteCounter;
}

function clickUpvote() {
  voteCounter++;
  changeNumber(voteCounter);
}

function clickDownvote() {
  voteCounter--;
  changeNumber(voteCounter);
}

voteIncrement.onclick = clickUpvote;
voteDecrement.onclick = clickDownvote;
