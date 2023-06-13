import React from "react";
import CardService from '../../Components/CardService'
import '../../style.css';

export function Services() {
    const servicesData = [
        {
          "id": 1,
          "title": "Comodidade",
          "description": "Busca de lojas mais perto de você, para sua comodidade!"
        },
        {
            "id": 2,
            "title": "Praticidade",
            "description": "Opção de entrega ou retirada na loja!"
        },
        {
            "id": 3,
            "title": "Eficiência",
            "description": "Pagamento em Pix, boleto ou cartão, direto no app!"
        }
      ]

    return (
        <section className="services" >
        <div className="header-services">
            <h2>No Fardas FA você tem:</h2>
        </div>
        <div className="container-services">
            <div className="grid-services">
                {servicesData.map(service =>
                    <CardService
                        key={service.id}
                        id={service.id}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                )}
            </div>
        </div>
    </section>
    );
  }