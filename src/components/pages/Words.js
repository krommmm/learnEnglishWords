import FlashCards from "../reusables/FlashCards";
import { useState, useRef } from "react";

const Words = (props) => {
    const imgRef = useRef(null);
    const [categories, setCategories] = useState(props.categories);
    const [category, setCategory] = useState(props.categories[0]);
    const [length, setLength] = useState(0);
    const [categoryChoice, setCategoryChoice] = useState(false);
    const [fcStatus, setFcStatus] = useState(false);
    const [showTranslation, setShowTranslation] = useState(false);



    function handleClickImg(e) {
        // Definit le tableau de category 
        const categoryName = e.target.closest(".words__categories__category").dataset.category;
        const currentCategory = categories.find((category) => category.name === categoryName);
        setCategory(currentCategory);
        // UI l'image de la category
        imgRef.current.src = currentCategory.imgUrl;
        // reset le fcStatus à false
        setFcStatus(false);
        // reset de la length à 0
        setLength(0);
        // reset de la translation
        setShowTranslation(false);
    }

    function handleImageLoad(e) {
        const container = e.target.parentNode; // Accède directement à l'élément parent
        if (container.classList.contains("unloaded")) {
            container.classList.remove("unloaded");
        }
    }


    return (
        <div className="words">
            <h2>Categories</h2>
            <p className="description">Choisissez une catégorie de vocabulaire.</p>
            <div className="words__categories">

                {categories.map((category) => (
                    <div key={category.name}
                        className="words__categories__category unloaded"
                        data-category={category.name}
                        onClick={(e) => handleClickImg(e)}>
                        <img src={category.imgUrl} alt="" onLoad={(e) => handleImageLoad(e)} />
                    </div>
                ))}

            </div>

            <div className="flashCards">
                <div className="flashCards__left">
                    <img src={categories[0].imgUrl} ref={imgRef} alt="img category" />
                </div>
                <FlashCards category={category} fcStatus={fcStatus} length={length} categoryChoice={categoryChoice} showTranslation={showTranslation}
                    backCategory={setCategory} backLength={setLength} backFsStatus={setFcStatus} backTranslation={setShowTranslation} />
            </div>
        </div>
    );
};

export default Words;