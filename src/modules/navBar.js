function navBar() {
  let content = document.querySelector("#content");
  let header = document.createElement("div");
  let nav = document.createElement("nav");
  let element = document.createElement("button");

  header.classList.add("header");
  nav.classList.add("nav");

  element.classList.add("nav-btn");
  element.textContent = "Home";
  element.setAttribute("id", "home-btn")
  nav.append(element);

  element = document.createElement("button");
  element.classList.add("nav-btn");
  element.textContent = "Menu";
  element.setAttribute("id", "menu-btn")
  nav.append(element);

  element = document.createElement("button");
  element.classList.add("nav-btn");
  element.textContent = "About";
  element.setAttribute("id", "about-btn")
  nav.append(element);

  content.append(nav);
}

export default navBar;
