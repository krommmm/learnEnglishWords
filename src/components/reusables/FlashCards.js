import { useState, useEffect } from "react";

const FlashCards = (props) => {

    const [fcStatus, setFcStatus] = useState(); // btn start ou flashCard
    const [length, setLength] = useState();
    const [category, setCategory] = useState();
    const [showTranslation, setShowTranslation] = useState(); // montrer la traduction ou pas
    const [categoryChoice, setCategoryChoice] = useState();


    useEffect(() => {
        setFcStatus(props.fcStatus);
        setCategory(props.category);
        setLength(props.length);
        setCategoryChoice(props.categoryChoice);
        setShowTranslation(props.showTranslation);
    }, [props]);




    // useEffect(() => {
    //     setCurrentCategory(props.category);
    //     setLength(parseInt(props.numImg));
    //     props.backIsVisible(isStarted);
    //     //setIsStarted(props.isVisible);
    // }, [props]);

    function handleYes() {
        setShowTranslation(false);
        props.backLength(length + 1);
        props.backFsStatus(true);

        if(length+1===category.data.length){
              props.backFsStatus(false);
        }
      

        // if (length + 1 < currentCategory.data.length) {

        //     props.backNumImg(length);

        //     const category = currentCategory.data;
        //     category[length].validation = true;
        //     props.backCurrentCategory(category);
        // }
        // if (length + 1 === currentCategory.data.length) {

        //     props.backNumImg(length);
        //     setIsStarted(false);
        // }
        // setShowTranslation(false);
    }

    function handleClick(e) {
        setShowTranslation(true);
        speak(category.data[length].ukName);
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

    function handleFaillure() {

    }

    return (
        <div className="flashCards__right">
            {fcStatus ? (<div className="flashcards__right__container">
                <div className="flashCards__right__header">Page {length + 1}/{category.data.length}</div>
                <div className="flashCards__right__main" onClick={(e) => handleClick(e)}>
                    {showTranslation ? category.data[length].ukName : category.data[length].frName}
                    <br />
                    {showTranslation ? `${category.data[length].frName}*` : ""}
                </div>
                <div className="flashCards__right__bottom">
                    <p>Do you want to continue ?</p>
                    <div className="flashCardsAnswer">
                        <div className="btn" onClick={(e) => handleFaillure(e)}>No</div>
                        <div className="btn" onClick={(e) => handleYes(e)}>Yes</div>
                    </div>
                </div>
            </div>) : (<div>
                <div className="btn" onClick={() => setFcStatus(true)}>Start</div>
            </div>)}



        </div>
    );
};

export default FlashCards;