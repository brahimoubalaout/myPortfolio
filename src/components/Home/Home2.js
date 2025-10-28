import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              laissez-moi me <span className="purple"> présente </span>
            </h1>
            <p className="home-about-body">
              Passionné par les systèmes embarqués et l'IoT, je développe des solutions innovantes alliant hardware et software. Spécialisé dans les protocoles de communication, l'intégration de capteurs, et le développement d'interfaces web modernes.

Actuellement en Master 2 Ingénierie Informatique et Systèmes Embarqués à l'Université Ibn Zohr, et je continue à approfondir mes connaissances dans les technologies de pointe.
              <br />
              <br />
                Je suis étudiant en systèmes embarqués, avec une solide maîtrise de l’Embedded C, du C++, du Python, du VHDL et du Java. Je suis passionné par la conception et le développement de logiciels embarqués, la création de solutions basées sur FPGA, 
                et l’intégration harmonieuse entre le matériel et le logiciel.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
