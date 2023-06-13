import React from "react";
import fardas from "./../../assets/fardas.svg";
import '../../global.css';
import '../../style.css';

export function Footer() {
    return (
        <footer>
        <div className="footer">

        <div className="row">
            <ul>
                <li><a href="https://drive.google.com/file/d/1RhBONV85ITgxqB9f9ltpWT2NGsX-b-hN/view?usp=sharing" target='blank'>Política de privacidade</a></li>
                <li><a href="https://drive.google.com/file/d/1mOujjPOGPGjZcdl2Ub4Ul5RAkr9h057J/view?usp=sharing" target='blank'>Termos de uso</a></li>
            </ul>
        </div>

        <div className="row">
            <img src={fardas} width={50} height={50}/>
        </div>
        </div>
    </footer>
    );
  }