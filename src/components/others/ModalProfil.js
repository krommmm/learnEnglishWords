import avatar1 from "../../assets/pictures/avatars/avatar_1.png";
import avatar2 from "../../assets/pictures/avatars/avatar2.png";
import avatar3 from "../../assets/pictures/avatars/avatar3.png";
import avatar4 from "../../assets/pictures/avatars/avatar_4.png";
import React, { useRef } from 'react';
import { useState } from "react";

const ModalProfil = (props) => {

    const [toggle, setToggle] = useState(false);
    const ballContainerRef = useRef(null);
    const ballRef = useRef(null);
    const markRef = useRef(null);
    const minusRef = useRef(null);
    const checkRef = useRef(null);

    function handleRestart(e) {
        if (toggle === false) {
            ballContainerRef.current.classList.add("animationBallContainer");
            ballContainerRef.current.classList.remove("animationBallContainerBack");

            ballRef.current.classList.add("animationBall")
            ballRef.current.classList.remove("animationBallBack");

            markRef.current.style.display = "flex";
            minusRef.current.style.display = "none";
            checkRef.current.style.display = "none";
            setTimeout(() => {
                markRef.current.style.display = "none";
                minusRef.current.style.display = "none";
                checkRef.current.style.display = "flex";
            }, 400);
            markRef.current.style.display = "none";
            minusRef.current.style.display = "flex";
        } else {
            ballContainerRef.current.classList.remove("animationBallContainer");
            ballContainerRef.current.classList.add("animationBallContainerBack");

            ballRef.current.classList.remove("animationBall");
            ballRef.current.classList.add("animationBallBack")

            markRef.current.style.display = "none";
            minusRef.current.style.display = "none";
            checkRef.current.style.display = "flex";
            setTimeout(() => {
                markRef.current.style.display = "flex";
                minusRef.current.style.display = "none";
                checkRef.current.style.display = "none";
            }, 400);
     
            markRef.current.style.display = "none";
            minusRef.current.style.display = "flex";
            checkRef.current.style.display = "none";
        }

        setToggle(!toggle);
    }

    function handleLeave(){
        props.toogle(!props.isClicked);
    }

    return (
        <div className="modalProfil">
            <div className="modalProfil_contenent">
                <div className="menu"><i className="fa-solid fa-xmark" onClick={()=>handleLeave()}></i></div>
                <div className="content">

                    <h2>Choisissez un profil</h2>
                    <div className="modalProfil__avatars">
                        <img src={avatar1} alt="avatar 1" />
                        <img src={avatar2} alt="avatar 2" />
                        <img src={avatar3} alt="avatar 3" />
                        <img src={avatar4} alt="avatar 4" />
                    </div>
                    <div className="modalProfil_contenent__restart">
                        <h3>Recommencer depuis le début</h3>
                        <div className="restart_container" ref={ballContainerRef} onClick={(e) => { handleRestart(e) }}>
                            <div className="ball" ref={ballRef} >
                                <i className="fa-solid fa-xmark" ref={markRef}></i>
                                <i className="fa-solid fa-minus" ref={minusRef}></i>
                                <i className="fa-solid fa-check" ref={checkRef}></i>
                            </div>
                        </div>
                    </div>
                    <p className="description">Effacer votre profil et vos statistiques et redébuter l'apprentissage à partir de zéro.</p>
                </div>
                <div className="modalProfil_contenent__validation">
                    <div className="modalProfil_contenent__validation__annuler">Annuler</div>
                    <div className="modalProfil_contenent__validation__valider btn">Valider</div>
                </div>
            </div>
        </div>
    );
};

export default ModalProfil;