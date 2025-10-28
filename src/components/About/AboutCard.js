import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br />
            Je suis un
            <span className="purple"> Embedded Software Developer</span>
            , passionné par la création de solutions embarquées innovantes et efficaces.
            je développe des solutions innovantes alliant hardware et software. 
            Spécialisé dans les protocoles de communication, l'intégration de capteurs, et le développement d'interfaces web modernes.
            <br />Actuellement en Master 2 Ingenieuris Informatique et Systèmes Embarqués à l'Université Ibn Zohr{" "}
            <span className="purple">Computer Science and Embedded systems</span> from{" "}
            <span className="purple">FS Agadir</span>.
            <br />
            <br />
           En dehors du codage, j’aime participer à des activités qui nourrissent ma créativité et m’inspirent.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Membre de Club Robotique FS Agadir ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Musique 🎵
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The purpose of life is to contribute in some way to making things better."{" "}
          </p>
          <footer className="blockquote-footer">Robert F. Kennedy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
