import "./assets/css/index.css";

import Header from "./components/reusables/Header";
import Home from "./components/pages/Home";
import Suivi from "./components/pages/Suivi";
import Nav from "./components/reusables/Nav";
import Options from "./components/pages/Options";
import Times from "./components/pages/Times";
import Words from "./components/pages/Words";
import Verbes from "./components/pages/Verbe";

import tigre from "./assets/pictures/category/tigre.jpg";
import bedroom from "./assets/pictures/category/bedroom.jpg";
import cloths from "./assets/pictures/category/cloths.jpg";
import kitchen from "./assets/pictures/category/kitchen.jpg";
import food from "./assets/pictures/category/food.jpg";
import places from "./assets/pictures/category/places.jpg";
import fruits from "./assets/pictures/category/fruits.jpg";
import house from "./assets/pictures/category/house.jpg";
import sport from "./assets/pictures/category/sport.jpg";
import transport from "./assets/pictures/category/transport.jpg";
import vegetables from "./assets/pictures/category/vegetables.jpg";
import city from "./assets/pictures/category/city.jpg";
import orientation from "./assets/pictures/category/orientation.jpg";
import connectives from "./assets/pictures/category/connectives.jpg";
import vegetation from "./assets/pictures/category/vegetation.jpg";
import work from "./assets/pictures/category/work.jpg";
import body from "./assets/pictures/category/body.jpg";
import internalBody from "./assets/pictures/category/internalBody.jpg";
import weather from "./assets/pictures/category/weather.jpg";
import emotions from "./assets/pictures/category/emotions.jpg";
import education from "./assets/pictures/category/education.jpg";
import travel from "./assets/pictures/category/travel.jpg";
import arts from "./assets/pictures/category/arts.jpg";
import entertainment from "./assets/pictures/category/entertainment.jpg";
import tools from "./assets/pictures/category/tools.jpg";
import travelTerms from "./assets/pictures/category/travelTerms.jpg";
import cinema from "./assets/pictures/category/cinema.jpg";

import { animalsData } from "./data/animalsData";
import { bedroomData } from "./data/bedroomData";
import { clothingData } from "./data/clothingData";
import { kitchenData } from "./data/kitchenData";
import { foodData } from "./data/foodData";
import { placesData } from "./data/placesData";
import { fruitData } from "./data/fruitData";
import { houseData } from "./data/houseData";
import { sportData } from "./data/sportData";
import { transportData } from "./data/transportData";
import { vegetableData } from "./data/vegetableData";
import { cityData } from "./data/cityData";
import { orientationData } from "./data/orientationData";
import { connectivesData } from "./data/connectivesData";
import { vegetationData } from "./data/vegetationData";
import { workData } from "./data/workData";
import { bodyPartsData } from "./data/bodyPartsData";
import { internalBodyPartsData } from "./data/internalBodyPartsData";
import { emotionsData } from "./data/emotionsData";
import { educationData } from "./data/educationData";
import { weatherData } from "./data/weatherData";
import { travelData } from "./data/travelData";
import { artsData } from "./data/artsData";
import { entertainmentData } from "./data/entertainmentData";
import { toolsData } from "./data/toolsData";
import { travelTermsData } from "./data/travelTermsData";
import { cinemaData } from "./data/cinemaData";

import avatar1 from "./assets/pictures/avatars/avatar_1.png"
import avatar2 from "./assets/pictures/avatars/avatar2.png";
import avatar3 from "./assets/pictures/avatars/avatar3.png";
import avatar4 from "./assets/pictures/avatars/avatar_4.png";
import avatarVierge from "./assets/pictures/avatars/avatar_vierge.png";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {

  const [profil, setProfil] = useState(avatarVierge);
  const [restart, setRestart] = useState(false);

  useEffect(() => {
    setProfil(profil);
  }, [profil]);







  const [categories, setCategories] = useState([
    { name: "animals", data: animalsData, imgUrl: tigre },
    { name: "bedrooms", data: bedroomData, imgUrl: bedroom },
    { name: "clothings", data: clothingData, imgUrl: cloths },
    { name: "kitchen", data: kitchenData, imgUrl: kitchen },
    { name: "foodData", data: foodData, imgUrl: food },
    { name: "places", data: placesData, imgUrl: places },
    { name: "fruits", data: fruitData, imgUrl: fruits },
    { name: "house", data: houseData, imgUrl: house },
    { name: "sport", data: sportData, imgUrl: sport },
    { name: "transports", data: transportData, imgUrl: transport },
    { name: "vegetables", data: vegetableData, imgUrl: vegetables },
    { name: "city", data: cityData, imgUrl: city },
    { name: "orientation", data: orientationData, imgUrl: orientation },
    { name: "connectives", data: connectivesData, imgUrl: connectives },
    { name: "vegetation", data: vegetationData, imgUrl: vegetation },
    { name: "work", data: workData, imgUrl: work },
    { name: "body", data: bodyPartsData, imgUrl: body },
    { name: "internalBodyParts", data: internalBodyPartsData, imgUrl: internalBody },
    { name: "emotions", data: emotionsData, imgUrl: emotions },
    { name: "education", data: educationData, imgUrl: education },
    { name: "weather", data: weatherData, imgUrl: weather },
    { name: "travel", data: travelData, imgUrl: travel },
    { name: "arts", data: artsData, imgUrl: arts },
    { name: "entertainment", data: entertainmentData, imgUrl: entertainment },
    { name: "tools", data: toolsData, imgUrl: tools },
    { name: "travelTerms", data: travelTermsData, imgUrl: travelTerms },
    { name: "cinema", data: cinemaData, imgUrl: cinema }]);



  useEffect(() => {
    if ("validation" in categories[0].data || restart === true) {
      categories.forEach((category) => {
        return category.data.forEach((dataCat) => {
          dataCat.validation = false;
        })
      })

      setCategories(categories);
    }
    setRestart(false);

  }, [restart, categories]);

  return (
    <Router>
      <Header profil={profil} backProfil={setProfil} restart={restart} backRestart={setRestart} />
      <main>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/words" element={<Words categories={categories} backCategories={setCategories} />} />
          <Route path="/suivi" element={<Suivi key={restart} categories={categories} />} />
          <Route path="/options" element={<Options />} />
          <Route path="/words" element={<Words />} />
          <Route path="/times" element={<Times />} />
          <Route path="/verbes" element={<Verbes />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
