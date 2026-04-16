import { use, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pv, setPv] = useState(100);
  const [or, setOr] = useState(0);
  const prixGuerrier = 10;
  const [guerrier, setGuerrier] = useState(0);
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
    const prix = 10;

    if (or >= prix) {
      setOr((prevOr) => prevOr - prix);
      setGuerrier((prevGuerriers) => prevGuerriers + 1);
    } else {
      alert("Pas assez d'or !");
    }
  };
  return (
    <div className="game-app">
      <aside className="shop">
        <button>Acheter un guerrier : {prixGuerrier} </button>
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
