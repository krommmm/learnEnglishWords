import { NavLink } from "react-router-dom";

const NavBar = (props) => {


    function handleClick() {
        props.backState(false);
    }

    function handleQuit(e) {
        props.backState(false); 
    }

    return (
        <div className="navBar">
            <div className="navBarContainer">
                <div className="navBarContainer__header">
                    <i className="fa-solid fa-xmark" onClick={(handleQuit)}></i>
                </div>
                <div>
                    <NavLink className="nav__iconContainer bgBlue" onClick={() => handleClick()} to="/">
                        <div className="squareIcon">Accueil</div>
                    </NavLink>

                </div>
                <div>
                    <NavLink className="nav__iconContainer bgGreenPal" onClick={() => handleClick()} to="/words">
                        <div className="squareIcon">Words</div>
                    </NavLink>

                </div>

                <div>
                    <NavLink className="nav__iconContainer bgBordeaux" onClick={() => handleClick()} to="/suivi">
                        <div className="squareIcon">Suivi</div>
                    </NavLink>
                </div>
                <div>
                    <NavLink className="nav__iconContainer bgBordeaux" onClick={() => handleClick()} to="/panier">
                        <div className="squareIcon">Panier</div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
export default NavBar;