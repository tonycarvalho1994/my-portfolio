import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Resume from "./components/Resume";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import "./App.css";

/* 
Principal arquivo do projeto React
Aqui iremos declarar o componente App, que engloba todos os componentes filhos

Resumindo ao mais importante, temos um componente Navbar, que é o menu de navegação
Um componente Switch do pacote React-Router, englobando as rotas da aplicação.
Cada rota define um path, que aponta para um componente filho.
O componente será chamado e renderizado em tela quando uma rota for acessada

A maior parte visual dos componentes foi feita utilizando o pacote material-ui,
Que já possui muitos componentes prontos e estilizados para poupar tempo.
Similar ao Bootstrap.
*/
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/my-portfolio" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
