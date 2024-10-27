import logoUk from "../../assets/pictures/logos/aaa.png";
import avatarVierge from "../../assets/pictures/avatars/avatar_vierge.png";
import { NavLink } from "react-router-dom";
import ModalProfil from "../others/ModalProfil";
import { useState, useEffect } from "react";
import NavBar from "../others/NavBar";

const Header = (props) => {

    const [isClicked, setIsClicked] = useState(false);
    const [toggleNav, setToggleNav] = useState(false);
    const [profil, setProfil] = useState(props.profil);
    const [restart, setRestart] = useState(props.restart);

    useEffect(() => {
        setProfil(profil);
        setRestart(restart);
        props.backRestart(restart);
    }, [profil, restart, props]);


    // CREER UN COMPOSANT NOUVEAU MENU POS ABS 
    return (
        <header>
            <div className="header__left">
                <NavLink className="nav__iconContainer bgBlue"  to="/">
                    <div className="squareIcon bgBlue">A</div>
                </NavLink>
            </div>
            <div className="header__right">
                <div className="header__right__logoArea">

                    <p>Envie d'apprendre du vocabulaire ?</p>
                </div>
                <div className="header__right__profilArea">
                    <i className="fa-solid fa-bars" onClick={(e) => setToggleNav(!toggleNav)}></i>
                    <img src={profil} onClick={() => setIsClicked(true)} alt="logo avatar" />
                    {isClicked && <ModalProfil profil={profil} toogle={setIsClicked} isClicked={isClicked} backProfil={setProfil} restart={restart} backRestart={setRestart} />}

                </div>
                {toggleNav && <NavBar backState={setToggleNav} />}

            </div>
        </header>
    )
};

export default Header;