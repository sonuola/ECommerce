import styles from "./Header.module.css";
import { Link } from "react-router-dom";
// import SearchBar from "./Searchbar/SearchBar";
export default function Header() {
  return (
    <div>
      <nav className={styles.navBar}>
        <Link className={styles.logoAndTitle} to="/">
          <img
            className={styles.logoImage}
            src="https://img.freepik.com/premium-vector/coder-completed-task-wrote-code-joy-development-programming-coding-technologies_569013-340.jpg?w=2000"
            alt="cart"
          ></img>

          <h4>Ecommerce App</h4>
        </Link>

        <div className={styles.buttons}>
          <div className={styles.searchBarAndValues}>
            {/* <SearchBar isSearched = {isSearched} setIsSearched = {setIsSearched} setSearchResults = {setSearchResults}/> */}
          </div>
          <img
            className={styles.cartImage}
            src="https://img.lovepik.com/free-png/20210918/lovepik-shopping-cart-png-image_400246975_wh1200.png"
            alt="cart"
          ></img>
          <Link className={styles.button} to="/register">
            Register
          </Link>
          <Link className={styles.button} to="/login">
            Login
          </Link>
          <Link className={styles.button} to="/contact">
            Contact us
          </Link>
          <Link className={styles.button} to="/admin">
            Admin
          </Link>
        </div>
      </nav>
    </div>
  );
}
