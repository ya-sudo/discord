import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Hero.css";
import img from "./img/logo_discord.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="header_section">
        <div className="header_nav">
          <div className="header_logo col-1_6">
            <a href="/">
              <img src={img} alt="" />
            </a>
          </div>

          <div className="header_list col-4_6">
            <ul>
              <li>
                <a href="/">Scarica</a>
              </li>
              <li>
                <a href="/">Perché Discord</a>
              </li>
              <li>
                <a href="/">Nitro</a>
              </li>
              <li>
                <a href="/">Sicurezza</a>
              </li>
              <li>
                <a href="/">Assistenza</a>
              </li>
            </ul>
          </div>
          <div className="nav_button">
            <a className=" btn-light" href="/">
              Accedi
            </a>
          </div>
        </div>

        <div className="header_box_text col-4_6">
          <h1>Il tuo posto per parlare</h1>
          <p className="header_text">
            Che tu facci a parte di un club scolastico, gruppo di gamer,
            comunità artistica mondiale, o semplicemente di un piccolo gruppo di
            amici che vuole passre il tempo assieme, Discord rende più facile
            chiaccherare ogni giorno e ritrovarsi più spesso
          </p>
          <div className="header_box-text-button">
            <a className="btn-light" href="/">
              ⇩ Scarica per Mac
            </a>
            <a className="btn-dark" href="/">
              Apri Discord nel tuo browser
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
