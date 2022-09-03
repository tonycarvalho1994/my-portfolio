import React from "react";
import Header from "./Header";
import Particles from "./Particles";

/*
Componente Home
Possui um Header com o avatar e o texto que fica digitando
E componente Particles, que são as partículas que ficam se movimentando no background
*/
const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Particles />
    </React.Fragment>
  );
};

export default Home;
