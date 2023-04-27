import React from "react";
import Spline from "@splinetool/react-spline";
import "./SplineComponent.css";
import ComponentSvg from "./ComponentSvg";

function SplineComponent() {
  return (
    <div>
      <div className="row row-content">
        <div className="row-card">
          <div className=" col-8 pig">
            <Spline scene="https://prod.spline.design/Kqs0S0GT4FFWmGp5/scene.splinecode" />
          </div>
          <div className=" col-4 gap-3">
            <h2>
              Un luogo a invito con tutto lo spazio necessario per parlare
            </h2>
            <p>
              I server Discord sono organizzati in canali tematici in cui puoi
              collaborare, condividere o semplicemente parlare della tua
              giornata senza intasare una chat di gruppo.
            </p>
          </div>
        </div>
      </div>

      <div className="row row-content ">
        <ComponentSvg />
        <div className="row-pink">
          <div className=" col-4">
            <h2>Dove trovarsi é facile</h2>
            <p>
              Mettiti comodo in un canale vocale quando hai tempo. Gli amici nel
              tuo sever possono vedere che sei li e unirsi istantaneamente senza
              dover chiamare. Mettiti comodo in un canale vocale quando hai
              tempo. Gli amici nel tuo sever possono vedere che sei li e unirsi
              istantaneamente senza dover chiamare.
            </p>
          </div>
          <div className=" col-8 pig">
            <Spline scene="https://prod.spline.design/hvC7JWYjXvOaxizI/scene.splinecode" />
          </div>
        </div>
        <span className="rotate">
          <ComponentSvg />
        </span>
      </div>

      <div className="row row-content">
        <div className="row-card">
          <div className=" col-8 pig">
            <Spline scene="https://prod.spline.design/0UWmVqL3nLzyxSsc/scene.splinecode" />
          </div>
          <div className=" col-4 gap-3">
            <h2>
              Un luogo a invito con tutto lo spazio necessario per parlare
            </h2>
            <p>
              I server Discord sono organizzati in canali tematici in cui puoi
              collaborare, condividere o semplicemente parlare della tua
              giornata senza intasare una chat di gruppo
            </p>
          </div>
        </div>
      </div>

      <div className="row row-content last-block">
        <ComponentSvg />
        <div className="row-pink">
          <div className=" col-8 pig">
            <Spline scene="https://prod.spline.design/XNAeRojAClovRYXg/scene.splinecode" />
          </div>
          <div className=" col-8">
            <h2>Dove trovarsi é facile</h2>
            <p>
              Mettiti comodo in un canale vocale quando hai tempo. Gli amici nel
              tuo sever possono vedere che sei li e unirsi istantaneamente senza
              dover chiamare. Mettiti comodo in un canale vocale quando hai
              tempo. Gli amici nel tuo sever possono vedere che sei li e unirsi
              istantaneamente senza dover chiamare.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplineComponent;
