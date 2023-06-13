import React from "react";
import fardas from "./../../assets/fardas.svg";
import '../../style.css';
import '../../global.css';

export function Home() {
    return (
      <section className="hero-section">
            <div className="container-hero">

                <div className="content-hero">

                    <div className="left-side">
                        <h1>Fardas-Fa</h1>
                        <p>Fardas FA é o seu novo app de compras de fardas e acessórios militares. Compre das melhores lojas da sua cidade através do aplicativo e receba em sua casa!</p>
                    </div>


                    <div className="right-side">
                        <img src={fardas} width={250} height={250} />
                    </div>

                </div>

            </div>
        </section>
    );
  }