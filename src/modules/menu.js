import navBar from "./navBar";

function test() {
  console.log("test worked");
}

function createDish(name, description, price) {
  let card, dishName, dishDescription, dishPrice;

  card = document.createElement("div");
  card.classList.add("dish-card");

  dishName = document.createElement("h2");
  dishName.classList.add("dish-name");
  dishName.textContent = name;

  dishDescription = document.createElement("p");
  dishDescription.classList.add("dish-description");
  dishDescription.textContent = description;

  dishPrice = document.createElement("p");
  dishPrice.classList.add("dish-price");
  dishPrice.textContent = price;

  card.append(dishName);
  card.append(dishDescription);
  card.append(dishPrice);

  return card;
}

function menu() {
  let content = document.querySelector("#content");
  let main = document.createElement("div");
  let cardHolder = document.createElement("div");
  let element, card;

  content.textContent = "";

  navBar();
  element = document.createElement("h1");
  element.textContent = "The Menu";

  main.append(element);

  cardHolder.classList.add("dish-card-holder");
  card = createDish(
    "Amuse Bouche",
    "cuecumber melon , milk snow, charred lace",
    15
  );
  cardHolder.append(card);

  card = createDish(
    "The Island",
    "shore rocks, shore plants, filterd seawater",
    25
  );
  cardHolder.append(card);

  card = createDish(
    "Breadless Bread Plate ",
    "no bread, shore plants, savory accompaniments",
    20
  );
  cardHolder.append(card);

  card = createDish(
    "Memory",
    "house-smoked Bresse chicken thigh al pastor, house-made tortillas",
    30
  );
  cardHolder.append(card);

  card = createDish("Palate Cleanser", "wild bergmamot, red cleaver tea", 8);
  cardHolder.append(card);

  card = createDish(
    "Man's Folly",
    "dungeness crab, fermented yogurt whey, dried sea lettuce, umeboshi, kelp",
    25
  );
  cardHolder.append(card);

  card = createDish("Passard Egg", "egg, creme fraiche, maple", 17);
  cardHolder.append(card);

  card = createDish(
    "Tyler's Bullshit",
    `undercooked lamb, "inedible" shallot-leek butter sauce"`,
    10
  );
  cardHolder.append(card);

  card = createDish(
    "Supplemental Course: A Cheesburger",
    "just a well-made cheeseburger",
    24
  );
  cardHolder.append(card);

  card = createDish(
    "Dessert: S'More",
    "marshmallows, chocolate, graham crackers, chocolate, customer, staff",
    17
  );
  cardHolder.append(card);

  main.append(cardHolder);
  content.append(main);

  test();
}

export default menu;
