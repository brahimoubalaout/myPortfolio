import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Développeur Systèmes Embarqués & IoT",
          "Étudiant Master 2 Informatique et Systèmes Embarqués",
          "Spécialiste ESP32 & Arduino",
          "Passionné de Technologies",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
