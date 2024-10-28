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
                <NavLink className="nav__iconContainer bgBordeaux" to="/words">
                    <div className="squareIcon">W</div>
                </NavLink>
                <div className="nav__description">Words</div>
            </div>


            <div>
                <NavLink className="nav__iconContainer bgGreenPal" to="/suivi">
                    <div className="squareIcon">S</div>
                </NavLink>
                <div className="nav__description">Suivi</div>
            </div>
            <div>
                <NavLink className="nav__iconContainer bgJaune" to="/panier">
                    <div className="squareIcon">P</div>
                </NavLink>
                <div className="nav__description">Panier</div>
            </div>
        </nav>
    );
};

export default Nav;