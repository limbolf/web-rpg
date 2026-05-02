import { use, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pv, setPv] = useState(100);
  const [or, setOr] = useState(0);
  const [prixGuerrier, setPrixGuerrier] = useState(10);
  const [prixMagicien, setPrixMagicien] = useState(50);
  const [guerrier, setGuerrier] = useState(0);
  const [magicien, setMagicien] = useState(0);
  const handleAttack = () => {
    setPv((prev) => prev - 10);
  };
  useEffect(() => {
    if (pv <= 0) {
      setOr((prev) => prev + 10);
      setPv(100);
      console.log("Le monstre est vaincu ! vous gagnez 10 d'or");
    }
  }, [pv]);

  const acheterGuerrier = () => {
    if (or >= prixGuerrier) {
      setOr((prev) => prev - prixGuerrier);
      setGuerrier((prevGuerriers) => prevGuerriers + 1);
      setPrixGuerrier((prevPrixGuerrier) => Math.round(prevPrixGuerrier * 1.1));
    } else {
      alert("Pas assez d'or !");
    }
  };

  const acheterMagicien = () => {
    if (or >= prixMagicien) {
      setOr((prev) => prev - prixMagicien);
      setMagicien((prevMagicien) => prevMagicien + 1);
    } else {
      alert("Pas assez d'or !");
    }
  };

  useEffect(() => {
    let degatsGuerrier = guerrier * 5;
    let intervalGuerrier = setInterval(() => {
      if (degatsGuerrier > 0) {
        setPv((prev) => prev - degatsGuerrier);
      }
    }, 2000);
    return () => clearInterval(intervalGuerrier);
  }, [guerrier]);

  useEffect(() => {
    let degatsMagicien = magicien * 12;
    let intervalMagicien = setInterval(() => {
      if (degatsMagicien > 0) {
        setPv((prev) => prev - degatsMagicien);
      }
    }, 4000);
    return () => clearInterval(intervalMagicien);
  }, [magicien]);

  return (
    <div className="game-app">
      <aside className="shop">
        <p>Prix d'un guerrier {prixGuerrier} </p>
        <button onClick={acheterGuerrier}>Acheter un guerrier</button>
        <p>Guerriers possédés : {guerrier}</p> <br />
        <p>Prix d'un magicien {prixMagicien} </p>
        <button onClick={acheterMagicien}>Acheter un magicien</button>
        <p>Magiciens possédés : {magicien}</p>
      </aside>
      <div className="battle-floor">
        <button onClick={handleAttack}>Attack</button>
        <p>Pv : {pv} </p>
        <p>Or : {or} </p>
      </div>
    </div>
  );
}

export default App;
