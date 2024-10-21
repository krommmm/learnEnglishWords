import FlashCards from "../reusables/FlashCards";

import { useState, useEffect, useRef } from "react";



const Words = (props) => {
    const [toggle, setToggle] = useState(false);
    const imgRef = useRef(null);
    const [currentCategory, setCurrentCategory] = useState([]);
    const [isCategoryChoosen, setIsCategoryChoosen] = useState(false);


    const categories = props.categories;


    useEffect(() => {
        const category = categories[0];
        setCurrentCategory(category);
        setIsCategoryChoosen(true);
    }, [isCategoryChoosen]);

    function handleClickImg(e) {
        const name = e.target.closest(".words__categories__category").dataset.category;
        const category = categories.find((category) => category.name === name);
        setCurrentCategory(category);
        console.log(category);
        if (category && imgRef.current) {
            imgRef.current.src = category.imgUrl;
        }
        setIsCategoryChoosen(true);
    }

    return (
        <div className="words">
            <h2>Categories</h2>
            <p className="description">Choisissez une catégorie de vocabulaire.</p>
            <div className="words__categories">

                {categories.map((category) => (
                    <div key={category.name}
                        className="words__categories__category"
                        data-category={category.name}
                        onClick={handleClickImg}>
                        <img src={category.imgUrl} alt="" />
                    </div>
                ))}
                
            </div>

            <div className="flashCards">
                <div className="flashCards__left">
                    <img src={categories[0].imgUrl} ref={imgRef} alt="img tigre" />
                </div>
                {isCategoryChoosen && <FlashCards category={currentCategory} numImg="1" />}
            </div>
        </div>
    );
};

export default Words;