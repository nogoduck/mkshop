import "./App.css";
import { FaShopify } from "react-icons/fa";
import { AiFillShopping } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

function App() {
  // const toggleBtn = document.querySelector(".navbar_togglebtn");
  // const menu = document.querySelector(".navbar_menu");
  // const icons = document.querySelector("navbar_icons");

  // toggleBtn.addEventListener(onClick, () => {
  //   menu.classList.toggle("active");
  //   icons.classList.toggle("active");
  // });

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar_logo">
          <span id="where">
            <FaShopify color="#d49466" />
          </span>
          <a href="#">Sales king</a>
        </div>
        <ul className="navbar_menu">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">List</a>
          </li>
          <li>
            <a href="">FQA</a>
          </li>
          <li>
            <a href="">Notice</a>
          </li>
        </ul>
        <ul className="navbar_icons">
          <li>
            <AiOutlineGoogle />
          </li>
          <li>
            <AiFillShopping />
          </li>
        </ul>
        <a href="" class="navbar_togglebtn" onClick='console.log("dsds")'>
          <FiMenu />
        </a>
      </nav>
    </div>
  );
}

export default App;
