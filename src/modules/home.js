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

  element = document.createElement("img");
  element.src =
    "https://decider.com/wp-content/uploads/2023/01/THE-MENU-HBO-MAX-REVIEW.jpg?quality=75&strip=all";
  main.append(element);

  element = document.createElement("p");
  element.textContent = `"The Grand Feast" is an exclusive restaurant nestled in a remote location, accessible only by a private helicopter or boat. The interior is lavish and opulent, with plush velvet furnishings, ornate chandeliers, and a grandiose dining hall that overlooks the ocean.
        The menu at "The Grand Feast" is carefully curated by the enigmatic chef, who uses exotic and rare ingredients sourced from all over the world to create one-of-a-kind dishes that are as beautiful as they are delicious. The courses are presented as works of art, with intricate plating and elaborate garnishes.
    Each guest is seated at a grand table with a group of other wealthy and influential diners, creating an intimate and exclusive atmosphere. As the meal progresses, the guests are encouraged to engage in lively conversation, and the restaurant's staff ensures that every need is met, from wine pairings to custom-made cocktails.
    However, as the night wears on, the guests begin to realize that there is something unusual about the food they are consuming. The flavors seem to evoke memories and emotions that they cannot explain, and the effects of the meal start to take a strange and unsettling turn.
    As the night comes to a close, the guests realize that they have been part of a twisted game with deadly consequences, orchestrated by the restaurant's enigmatic and sinister chef. "The Grand Feast" is not just a restaurant, but a journey into a dark and dangerous world where nothing is as it seems.`;

  main.append(element);
  content.append(main);
}

export default home;
