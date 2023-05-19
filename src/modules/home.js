import navBar from "./navBar";

function home() {
  let content = document.querySelector("#content");
  let main = document.createElement("div");
  let element;

  content.textContent = "";

  navBar();

  element = document.createElement("h1");
  element.textContent = "The Menu";
  main.append(element);

  element = document.createElement("p");
  element.textContent =
    "Prepare to be consumed by desire at The Menu: A culinary experience like no other";

  main.append(element);
  content.append(main);
}

export default home;
