function navBar() {
  let content = document.querySelector("#content");
  let header = document.createElement("div");
  let nav = document.createElement("nav");
  let element = document.createElement("button");

  header.classList.add("header");
  nav.classList.add("nav");

  element.classList.add("nav-btn");
  element.textContent = "Home";
  nav.append(element);

  element = document.createElement("button");
  element.classList.add("nav-btn");
  element.textContent = "Menu";
  nav.append(element);

  element = document.createElement("button");
  element.classList.add("nav-btn");
  element.textContent = "Contact";
  nav.append(element);

  content.append(nav);
}

export default navBar;
