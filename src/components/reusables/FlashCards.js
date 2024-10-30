import { useState, useEffect, useRef } from "react";

const FlashCards = (props) => {
    const [fcStatus, setFcStatus] = useState(); 
    const [length, setLength] = useState();
    const [category, setCategory] = useState();
    const [showTranslation, setShowTranslation] = useState(); 
    const [categoryChoice, setCategoryChoice] = useState();
    const [tempoCategory, setTempoCategory] = useState([]);
    const timeoutRef = useRef(null);
    const [panierIds, setpanierIds] = useState(props.panierIds);

    useEffect(() => {
        setFcStatus(props.fcStatus);
        setCategory(props.category);
        setLength(props.length);
        setCategoryChoice(props.categoryChoice);
        setShowTranslation(props.showTranslation);
        setpanierIds(props.panierIds);
    }, [props]);

    function handleYes() {
        setShowTranslation(false);
        props.backLength(length + 1);
        props.backFsStatus(true);
        
        const modifiedCategory = { ...category };
        modifiedCategory.data[length].validation = true;
        setTempoCategory(modifiedCategory);

        if (length + 1 === category.data.length) { 
            props.backCategory(tempoCategory);
            props.backFsStatus(false);
            props.backLength(0);
        }
    }

    function handleFaillure() {
        setShowTranslation(false);
        props.backLength(length + 1);
        props.backFsStatus(true);
        const currentPanier = [...panierIds];
        currentPanier.push(category.data[length].id)
        props.backPanierIds(currentPanier);
    
        if (length + 1 === category.data.length) {
            props.backFsStatus(false);
            props.backLength(0);
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

    function handleClick(e) {
        setShowTranslation(true);
        if (category && category.data && category.data[length]) {
            debounce(() => speak(category.data[length].ukName), 300)();
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

    function startFlashCards() {
        const virginCategory = { ...category };
        virginCategory.data.forEach((categoryArr) => categoryArr.validation = false);
        props.backCategory(virginCategory);
        props.backFsStatus(true);
    }

    return (
        <div className="flashCards__right">
            {fcStatus ? (<div className="flashcards__right__container">
                <div className="flashCards__right__header">Page {length + 1}/{category.data.length}</div>
                <div className="flashCards__right__main" onClick={(e) => handleClick(e)}>
                    <p className="showCaseName">{showTranslation ? category.data[length].ukName : category.data[length].frName}</p>
                    <br />
                    <p className="backCaseName">{showTranslation ? `${category.data[length].frName}*` : ""}</p>
                </div>
                <div className="flashCards__right__bottom">
                    <p>Do you want to continue ?</p>
                    <div className="flashCardsAnswer">
                        <div className="btn" onClick={(e) => handleFaillure(e)}>No</div>
                        <div className="btn" onClick={(e) => handleYes(e)}>Yes</div>
                    </div>
                </div>
            </div>) : (<div>
                <div className="btn-container"><div className="btn btn-openFc" onClick={() => startFlashCards()}>Start</div></div>
            </div>)}
        </div>
    );
};

export default FlashCards;
