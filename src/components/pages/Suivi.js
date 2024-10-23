const Suivi = (props) => {

    return (
        
     <>
     {console.log(props.categories[17].data)}
        <div className="suivi">
        <p>page suivi</p>
        {props.categories[17].data.map((truc)=>(
            <div key={truc.frName}>
               <p>{`${truc.frName} : ${truc.validation}`}</p>
            </div>
        ))}
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