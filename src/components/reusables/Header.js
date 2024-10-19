import logoUk from "../../assets/pictures/logos/logo_uk.png";
import avatarVierge from "../../assets/pictures/avatars/avatar_vierge.png";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="header__left">
                <NavLink className="nav__iconContainer bgBlue" to="/">
                    <i class="fa-solid fa-igloo squareIcon bgGreen"></i>
                </NavLink>
            </div>
            <div className="header__right">
                <div className="header__right__logoArea">
                    <img src={logoUk} alt="logo uk" />
                    <p>Envie d'apprendre du vocabulaire ?</p>
                </div>
                <div className="header__right__profilArea">
                    <img src={avatarVierge} alt="logo avatar" />
                </div>

            </div>
        </header>
    )
};

export default Header;