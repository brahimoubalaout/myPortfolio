
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fpga from "../../Assets/Projects/fpga.jpg";
import serv from "../../Assets/Projects/serv.png";
import thingspeak from "../../Assets/Projects/thingspeak.png";

import shemaa from "../../Assets/Projects/shemaa.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes réalisations techniques
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={thingspeak}
              isBlog={false}
              title="Smart_home_IoT"
              description="Ce projet met en œuvre un système IoT basé sur une carte ESP32 et un capteur DHT22 pour mesurer la température, l’humidité ainsi que d’autres paramètres tels que la lumière (via une photorésistance) et le CO₂ (via un capteur analogique), puis envoie ces données vers une plateforme en ligne ThingSpeak."
              ghLink="https://github.com/brahimoubalaout/Smart_home_IoT"
              demoLink="https://wokwi.com/projects/397728085573534721"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shemaa}
              isBlog={false}
              title="MQTT_ESP32_DHT22_NeoPixel_Servo"
              description="Le projet met en œuvre une carte ESP32 équipée d’un capteur DHT22 pour mesurer la température et l’humidité, et envoie ces données via le protocole MQTT à un broker (ici « test.mosquitto.org ») en Wi-Fi. Le dispositif prend aussi en charge une bande de LEDs NeoPixel et un servo-moteur : il écoute des commandes MQTT pour changer la couleur des LEDs ou positionner le servo, tout en publiant en continu les relevés de température et d’humidité toutes les deux secondes."
              ghLink="https://wokwi.com/projects/420224554446749697"
              demoLink="https://wokwi.com/projects/420224554446749697"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fpga}
              isBlog={false}
              title="Comparateur IA FPGA "
              description="Développer un simulateur logiciel permettant de comparer les performances d’un modèle d’intelligence artificielle exécuté sur deux plateformes distinctes : FPGA et STM32."
              ghLink="https://github.com/brahimoubalaout"
              demoLink="https://colab.research.google.com/drive/1QaahN79coRlkskDpxP5VQHUZ25xD_Dz9"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={serv}
              isBlog={false}
              title="Surveillance de la température avec CORBA"
              description="Ce projet a pour but de concevoir une solution de surveillance de la température dans un environnement distribué, en combinant les technologies de l’IoT et les capacités de communication de CORBA. "
              ghLink="https://github.com/brahimoubalaout/SDR_PROJET"
              demoLink=""
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
