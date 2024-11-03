import FlashCardsPanier from "../reusables/FlashCardsPanier";
import { useState, useEffect, useRef } from "react";

const Panier = (props) => {

    const [panier, setPanier] = useState([]);
    const prevIdsRef = useRef([]);

    useEffect(() => {
        const filteredPanier = props.categories.flatMap((category) =>
            category.data.filter((item) => props.panierIds.includes(item.id))
        );
        setPanier(filteredPanier);
    }, [props.panierIds, props.categories]);

    useEffect(() => {
        const ids = panier.map((item) => item.id);

        if (JSON.stringify(ids) !== JSON.stringify(prevIdsRef.current)) {
            props.backPanierIds(ids);
            prevIdsRef.current = ids;
        }
    }, [panier]);


    return (
        <div className="panier">
            <h2>Panier</h2>
            <div className="panier__container">
                <FlashCardsPanier panier={panier} backPanier={setPanier} />
            </div>
        </div>
    );
};

export default Panier;