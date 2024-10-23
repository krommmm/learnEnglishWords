import logo from "../../assets/pictures/logos/aaa.png";

const Home = () => {

    return (
        <div className="home">
            <div className="home__top">
                <div className="home__top__logo">
                    <h1>Application pour apprendre du vocabulaire</h1>
                    <p>Apprenez du vocabulaire en utilisant les flash-cards</p>
                </div>
            </div>
            <div className="home__botttom">
                <div className="home__botttom__league">
                    <h2>Souvenez vous de plus de 1000 mots de vocabulaire !</h2>
                    <div className="btn">Commencer</div>
                    <img src={logo} alt="league diamant" />

                </div>
            </div>
        </div>
    );
};

export default Home;