import "./style.css";
import loadHomepage from "./homepage";
import loadMenuPage from "./menu";
import loadContactPage from "./contact";

// select button
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");

// select div content
const content = document.getElementById("content");

function switchContentPage(loadContentPage) {
  content.innerHTML = "";
  content.appendChild(loadContentPage());
}

home.addEventListener("click", () => {
  switchContentPage(loadHomepage);
});
menu.addEventListener("click", () => {
  switchContentPage(loadMenuPage);
});
contact.addEventListener("click", () => {
  switchContentPage(loadContactPage);
});

content.appendChild(loadHomepage());
