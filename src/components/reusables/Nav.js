import { NavLink } from "react-router-dom";
import suivi from "../../assets/pictures/logos/suivi.png";
import option from "../../assets/pictures/logos/options.png";
import words from "../../assets/pictures/logos/words.png";
import time from "../../assets/pictures/logos/time.png";
import verb from "../../assets/pictures/logos/irregularVerbs.png";


const Nav = () => {

    return (
        <nav>
            <div>
                <NavLink className="nav__iconContainer bgBlue" to="/words">
                    <div className="squareIcon">W</div>
                </NavLink>
                <div className="nav__description">Words</div>
            </div>

            <div>
                <NavLink className="nav__iconContainer bgGreenPal" to="/times">
                    <div className="squareIcon">T</div>
                </NavLink>
                <div className="nav__description">Times</div>
            </div>
            <div>
                <NavLink className="nav__iconContainer bgBordeaux" to="/verbes">
                    <div className="squareIcon">V</div>
                </NavLink>
                <div className="nav__description">Verbes</div>
            </div>

            <div className="SeparationOptions"></div>

            <div>
                <NavLink className="nav__iconContainer bgCramoisi" to="/suivi">
                    <div className="squareIcon">S</div>
                </NavLink>
                <div className="nav__description">Suivi</div>
            </div>
            <div>
                <NavLink className="nav__iconContainer bgJaune" to="/options">
                    <div className="squareIcon">O</div>
                </NavLink>
                <div className="nav__description optionsDescription">Options</div>
            </div>
        </nav>
    );
};

export default Nav;