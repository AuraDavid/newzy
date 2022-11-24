import { Link } from "react-router-dom";
import styles from "./Footer.module.css"
import newzyLogo from "../../assets/newzylogo.png";

const Footer = () => {
    return (
        <div>
            <footer>
                <div className={styles.sectionSection1}>
                    <Link to={"/"}>
                        <img src={newzyLogo} alt="logo newzy" />
                    </Link>
                </div>
            </footer>
        </div>
    );
}

export default Footer;