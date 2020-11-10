import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Layout from './components/ui/Layout/Layout';
import Pedidos from './pages/Pedidos/Pedidos';

import store from "./state/store";

import "./assets/css/styles.scss";

import * as serviceWorker from './serviceWorker';
import Anotacoes from './pages/Anotacoes/Anotacoes';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" component={Pedidos} exact={true} />
            <Route path="/anotacoes" component={Anotacoes} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
