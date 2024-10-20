import logoUk from "../../assets/pictures/logos/logo_uk.png";
import avatarVierge from "../../assets/pictures/avatars/avatar_vierge.png";
import { NavLink } from "react-router-dom";
import ModalProfil from "../others/ModalProfil";
import { useState } from "react";
import NavBar from "../others/NavBar";

const Header = () => {

    const [isClicked, setIsClicked] = useState(false);
    const [toggleNav, setToggleNav] = useState(false);


    // CREER UN COMPOSANT NOUVEAU MENU POS ABS
    return (
        <header>
            <div className="header__left">
                <NavLink className="nav__iconContainer bgBlue" to="/">
                    <i className="fa-solid fa-igloo squareIcon bgGreen"></i>
                </NavLink>
            </div>
            <div className="header__right">
                <div className="header__right__logoArea">
                    <img src={logoUk} alt="logo uk" />
                    <p>Envie d'apprendre du vocabulaire ?</p>
                </div>
                <div className="header__right__profilArea">
                <i class="fa-solid fa-bars" onClick={(e)=>setToggleNav(!toggleNav)}></i>
                    <img src={avatarVierge} onClick={() => setIsClicked(true)} alt="logo avatar" />
                    {isClicked && <ModalProfil toogle={setIsClicked} isClicked={isClicked}/>}
                    
                </div>
                {toggleNav && <NavBar  backState={setToggleNav}/>}

            </div>
        </header>
    )
};

export default Header;