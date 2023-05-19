import home from "./modules/home";
import menu from "./modules/menu";
import about from "./modules/about";
import './styles.css';



//home()
function navBarListen() {
    const homeBtn = document.querySelector("#home-btn");
    homeBtn.addEventListener("click", () => {
      home();
      navBarListen();
    });
  
    const menuBtn = document.querySelector("#menu-btn");
    menuBtn.addEventListener("click", () => {
      menu();
      navBarListen();
    });
  
    const aboutBtn = document.querySelector("#about-btn");
    aboutBtn.addEventListener("click", () => {
      about();
      navBarListen();
    });
  }

  home()
  navBarListen()