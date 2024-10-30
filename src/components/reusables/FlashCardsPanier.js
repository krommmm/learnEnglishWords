import { useState, useEffect, useRef } from "react";

const FlashCardsPanier = (props) => {

    const [fcStatus, setFcStatus] = useState(false);
    const [length, setLength] = useState(0);
    const [showTranslation, setShowTranslation] = useState();
    const [panier, setPanier] = useState();
    const timeoutRef = useRef(null);
 
    useEffect(() => {
        setPanier(props.panier);
    }, [props]);


    function handleYes() {
        setShowTranslation(false);
        setLength(length + 1);
        setFcStatus(true);

        if (length + 1 === panier.length) {
            setLength(0);
            setFcStatus(false);
            props.backPanier(panier);
        }
    }

    function handleDelete() {

        const myPanier = [];
        panier.forEach((cell) => {
            if (panier[length].id !== cell.id) {
                myPanier.push(cell);

            }
        });

        setLength(0);
        setFcStatus(true);
        setPanier(myPanier);

        if (length + 1 === panier.length) {
            setLength(0);
            setFcStatus(false);
            props.backPanier(myPanier);
        }
    }

    function startFlashCards() {
        if (panier.length !== 0) {
            setFcStatus(true);
        }
    }

    function handleClick(e) {
        setShowTranslation(true);
        if (panier && panier[length]) {
            debounce(() => speak(panier[length].ukName), 300)();
        }
    }

    function speak(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-GB';
            window.speechSynthesis.speak(utterance);
        } else {
            alert('Sorry, your browser does not support speech synthesis.');
        }
    }

    function debounce(func, delay) {
        return function () {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                if (typeof func === 'function') {
                    func();
                }
            }, delay);
        };
    }

    return (

        <div className="flashCards__right">
            {fcStatus ? (<div className="flashcards__right__container">
                <div className="flashCards__right__header">Page {length + 1}/{panier.length}</div>
                <div className="flashCards__right__main" onClick={(e) => handleClick(e)}>
                    <p className="showCaseName">{showTranslation ? panier[length].ukName : panier[length].frName}</p>
                    <br />
                    <p className="backCaseName">{showTranslation ? `${panier[length].frName}*` : ""}</p>
                </div>
                <div className="flashCards__right__bottom">
                    <p>Voulez vous garder ce mot ?</p>
                    <div className="flashCardsAnswer">
                        <div className="btn" onClick={(e) => handleDelete(e)}>No</div>
                        <div className="btn" onClick={(e) => handleYes(e)}>Yes</div>
                    </div>
                </div>
            </div>) : (<div>
                <div className="btn-container"><div className="btn btn-openFc" onClick={() => startFlashCards()}>Start</div></div>
            </div>)}
        </div>

    );
};

export default FlashCardsPanier;