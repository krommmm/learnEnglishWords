import { useState, useEffect, useRef } from "react";

const Suivi = (props) => {

    const [categoryPercent, setCategoryPercent] = useState(0);
    const fillRef = useRef(null);

    useEffect(() => {
        const scaleY = categoryPercent / 100;
        fillRef.current.style.transform = `scaleY(${scaleY})`;
    }, [categoryPercent]);

    // function setProgressCharacter(percentage) {
    //     const fillElement = document.querySelector('.fill');
    //     const scaleY = percentage / 100;  // Calcule l'échelle Y en fonction du %
    //     fillElement.style.transform = `scaleY(${scaleY})`;
    //   }

    //   // Exemple : remplir à 75%
    //   setProgressCharacter(5);


    useEffect(() => {
        const categoryLength = props.categories.length;
        const categoriesValidated = props.categories.filter((category) => {
            return category.data.every((cell) => cell.validation === true);
        });

        // traduire la length en %
        const categoriesValidatedLength = categoriesValidated.length;
        const diviseur = 100 / 27;
        const categoriesValidatedLengthEnPourcentage = Math.round(categoriesValidatedLength * diviseur);
        console.log(categoriesValidatedLengthEnPourcentage);
        setCategoryPercent(categoriesValidatedLengthEnPourcentage);

    }, []);


    return (

        <>
            {console.log(props.categories[17].data)}
            <div className="suivi">
                <div className="suivi__pictorialFractionChart">
                    <div className="progress-character">
                        <div className="fill" ref={fillRef}></div>
                    </div>
                </div>
            </div>


        </>
    );
};




export default Suivi;


// Maison et vie quotidienne :

//     house
//     bedrooms
//     kitchen
//     tools
//     clothings

// Nature et environnement :

//     animals
//     vegetation
//     fruits
//     vegetables
//     weather

// Culture, arts et divertissements :

//     arts
//     cinema
//     entertainment
//     education
//     sport

// Voyages et lieux :

//     places
//     city
//     transports
//     travel
//     travelTerms

// Corps et émotions :

//     body
//     internalBodyParts
//     emotions
//     orientation
//     connectives