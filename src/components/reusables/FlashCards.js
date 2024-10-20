import { useState, useRef, useEffect } from "react";

const FlashCards = (props) => {

    const [length, setLength] = useState(1);
    const [showTranslation, setShowTranslation] = useState(false);
    const flashContainerRef = useRef(null);

    useEffect(()=>{
        setLength(parseInt(props.numImg));
    },[props]);

    function handleSubmit() {
        if (length + 1 < props.category.data.length) {
            setLength(length + 1);
        }
        if(length+1===props.category.data.length){
            setLength(1);
           
        }
        setShowTranslation(false);
    }
    function handleClick(e) {
        setShowTranslation(true);
    }

    return (
        <div className="flashCards__right">
            <div className="flashcards__right__container" ref={flashContainerRef}>
                <div className="flashCards__right__header">Page {length}/{props.category.data.length-1}</div>
                <div className="flashCards__right__main" onClick={(e) => handleClick(e)}>
                    {showTranslation ? props.category.data[length].ukName : props.category.data[length].frName}
                    <br/>
                    {showTranslation ? `${props.category.data[length].frName}*` : ""}
                    </div>
                <div className="flashCards__right__bottom">
                    <p>Do you want to continue ?</p>
                    <div className="flashCardsAnswer">
                        <div className="btn">No</div>
                        <div className="btn" onClick={(e) => handleSubmit(e)}>Yes</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FlashCards;