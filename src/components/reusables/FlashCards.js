import { useState, useRef, useEffect } from "react";

const FlashCards = (props) => {

    const [length, setLength] = useState(1);
    const [showTranslation, setShowTranslation] = useState(false);
    const flashContainerRef = useRef(null);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        setLength(parseInt(props.numImg));
        setIsStarted(props.isVisible);
    }, [props]);

    function handleSubmit() {
        if (length + 1 < props.category.data.length) {
            setLength(length + 1);
        }
        if (length + 1 === props.category.data.length) {
            setLength(1);
            setIsStarted(false);
        }
        setShowTranslation(false);
    }

    function handleClick(e) {
        setShowTranslation(true);
        speak(props.category.data[length].ukName);
    }

    function pass() {
        // const heartBeat = "https://universal-soundbank.com/sounds/350.mp3";
        // const magneto = "https://universal-soundbank.com/sounds/3802.mp3";
        // const clacquement = "https://universal-soundbank.com/sounds/2166.mp3";
        // const audio = new Audio();
        // audio.src = clacquement;
        // audio.volume = 0.1; 
        // audio.play();
    }

    function speak(text) {

        // Vérifier si le navigateur supporte l'API Web Speech
        if ('speechSynthesis' in window) {
            // Créer une instance de SpeechSynthesisUtterance
            const utterance = new SpeechSynthesisUtterance(text);
            // Définir la langue sur anglais
            utterance.lang = 'en-GB';

            // Utiliser speechSynthesis pour prononcer le texte
            window.speechSynthesis.speak(utterance);
        } else {
            alert('Sorry, your browser does not support speech synthesis.');
        }
    }

    function handleFaillure() {

    }

    return (
        <div className="flashCards__right">

            {isStarted ? (<div className="flashcards__right__container" ref={flashContainerRef}>
                <div className="flashCards__right__header">Page {length}/{props.category.data.length - 1}</div>
                <div className="flashCards__right__main" onClick={(e) => handleClick(e)}>
                    {showTranslation ? props.category.data[length].ukName : props.category.data[length].frName}
                    <br />
                    {showTranslation ? `${props.category.data[length].frName}*` : ""}
                </div>
                <div className="flashCards__right__bottom">
                    <p>Do you want to continue ?</p>
                    <div className="flashCardsAnswer">
                        <div className="btn" onClick={(e) => handleFaillure(e)}>No</div>
                        <div className="btn" onClick={(e) => handleSubmit(e)}>Yes</div>
                    </div>
                </div>
            </div>) : (<div>
                <div class="btn" onClick={() => setIsStarted(true)}>Start</div>
            </div>)}



        </div>
    );
};

export default FlashCards;