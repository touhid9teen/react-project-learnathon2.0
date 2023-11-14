import "./style.css";
import Footer from "../Footer/Footer";
function Nav() {
    return (
        <div className="nav-bar">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
    );
}
export default Nav;
