const Panier = (props) => {

    return (
        <div className="panier">
           {props.panier.map((cell,index)=>(
            <div key={index}>
                <p>{cell}</p>
                </div>
           ))}
        </div>
    );
};

export default Panier;