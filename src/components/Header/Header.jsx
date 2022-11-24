import styles from "./Header.module.css";
import newzyLogo from "../../assets/newzylogo.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className={styles.navigation}>
                <div className={styles.logo}>
                    <a href="/">
                        <img src={newzyLogo} alt="logo newzy" width="100px" />
                    </a>
                </div>
                <div className={styles.navBar}>
                    <ul className={styles.navList}>
                        <li><Link to={"books"}>Books</Link></li>
                        <li><Link to={"sports"}>Sports</Link></li>
                        <li><Link to={"culture"}>Culture</Link></li>
                        <li><Link to={"business"}>Business</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;