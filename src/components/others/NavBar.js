import { NavLink } from "react-router-dom";

const NavBar = (props) => {


    function handleClick(){
        props.backState(false);
    }
    return (
        <div className="navBar">
            <div className="navBarContainer">
            <div>
                <NavLink className="nav__iconContainer bgBlue"  onClick={()=>handleClick()} to="/">
                    <div className="squareIcon">Accueil</div>
                </NavLink>
             
            </div>
                <div>
                    <NavLink className="nav__iconContainer bgBlue" onClick={()=>handleClick()} to="/words">
                        <div className="squareIcon">Words</div>
                    </NavLink>
             
                </div>

                <div>
                    <NavLink className="nav__iconContainer bgGreenPal" onClick={()=>handleClick()} to="/times">
                        <div className="squareIcon">Times</div>
                    </NavLink>
    
                </div>
                <div>
                    <NavLink className="nav__iconContainer bgBordeaux" onClick={()=>handleClick()} to="/verbes">
                        <div className="squareIcon">Verbes</div>
                    </NavLink>
            
                </div>

         
                <div>
                    <NavLink className="nav__iconContainer bgCramoisi" onClick={()=>handleClick()} to="/suivi">
                        <div className="squareIcon">Suivi</div>
                    </NavLink>

                </div>
                <div>
                    <NavLink className="nav__iconContainer bgJaune" onClick={()=>handleClick()} to="/options">
                        <div className="squareIcon">Options</div>
                    </NavLink>
 
                </div>
            </div>
        </div>
    );
}
export default NavBar;