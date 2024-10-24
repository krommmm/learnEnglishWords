import { useState, useEffect, useRef } from "react";

const Suivi = (props) => {

    const [categoryPercent, setCategoryPercent] = useState(0);
    const [arrCategoryPercent, setarrCategoryPercent] = useState([]);
    const [grandGroupesState, setGrandGroupeState] = useState([]);
    const fillRef = useRef(null);
    const circleRef = useRef(null);

    useEffect(() => {
        const scaleY = categoryPercent / 100;
        fillRef.current.style.transform = `scaleY(${scaleY})`;
    }, [categoryPercent,]);


    useEffect(() => {
        const categoryLength = props.categories.length;
        const categoriesValidated = props.categories.filter((category) => {
            return category.data.every((cell) => cell.validation === true);
        });
        const categoriesValidatedLength = categoriesValidated.length;
        const diviseur = 100 / 27;
        const categoriesValidatedLengthEnPourcentage = Math.round(categoriesValidatedLength * diviseur);
        setCategoryPercent(categoriesValidatedLengthEnPourcentage);

    }, []);

    useEffect(() => {
        const categoriesPercentages = [];
        props.categories.forEach((category) => {
            const categoryLength = category.data.length;
            const diviseur = 100 / categoryLength;
            const nbValidated = category.data.filter((cat) => cat.validation === true).length;
            categoriesPercentages.push({ name: category.name, percentil: Math.round(nbValidated * diviseur) });
            setarrCategoryPercent([...categoriesPercentages]);
        });
    }, []);


    useEffect(() => {
        const grandGroupesNames = [
            { name: "maison et vie quotidienne", data: ["house", "bedrooms", "kitchen", "tools", "clothings"] },
            { name: "nature et environnement", data: ["animals", "vegetation", "fruits", "vegetables", "weather"] },
            { name: "culture, arts et divertissements", data: ["arts", "cinema", "entertainment", "education", "sport"] },
            { name: "voyages et lieux", data: ["places", "city", "transports", "travel", "travelTerms"] },
            { name: "corps et émotions", data: ["body", "internalBodyParts", "emotions", "orientation", "connectives"] },
        ];
   
  
        const grandGroupesArray = [];
       
        grandGroupesNames.forEach((groupe)=>{
            const groupeEnCours = [];
            arrCategoryPercent.forEach((category)=>{
                if(groupe.data.includes(category.name)){
                    groupeEnCours.push(category.percentil);
                }
            });
        
            let sum=0;
            groupeEnCours.forEach((cell)=>sum+=cell);
            grandGroupesArray.push({name:groupe.name, percentil:sum/groupeEnCours.length});
        });
        setGrandGroupeState([...grandGroupesArray]);


    }, [arrCategoryPercent]);


    return (

        <>

            <div className="suivi">
                <h2>Suivi</h2>
                <p className="description">Suivez vos progrès</p>
                <div className="suivi__graphs">
                    <div className="suivi__pictorialFractionChart">
                        <p className="suivi__pictorialFractionChart__percentage">{categoryPercent}%</p>
                        <div className="progress-character">
                            <div className="fill" ref={fillRef}></div>
                        </div>
                    </div>
                    <div className="suivi__donutsChart">
                        {grandGroupesState.map((category) => (
                            <div key={category.name}>
                                <div className="progress-circle">
                                    <div className="circle" ref={circleRef} style={{ background: `conic-gradient(#3498db 0 ${category.percentil}%, #e0e0e0 ${category.percentil}%)` }}>
                                        <div className="mask full">
                                            <div className="fill"></div>
                                        </div>
                                        <div className="mask half">
                                            <div className="fill"></div>
                                        </div>
                                        <div className="inside-circle">{category.percentil}%</div>
                                    </div>
                                    <p>{category.name}</p>
                                </div>
                            </div>
                        ))}
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