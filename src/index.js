import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CadastroVideo from './pages/cadastro/Video';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroCategoria from './pages/cadastro/Categoria';



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App}></Route>
      <Route path="/cadastro/video" component={CadastroVideo}></Route>
      <Route path="/cadastro/categoria" component={CadastroCategoria}></Route>
      <Route component={() => (<div>Página 404</div>)}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);