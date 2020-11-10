import { combineReducers } from "redux";

import async from "./async";
import pedidos from "./pedidos";
import ciclos from "./ciclos";
import anos from "./anos";
import empresas from "./empresas";
import notas from "./notas";

export default combineReducers({
  async,
  pedidos,
  anos,
  ciclos,
  empresas,
  notas,
});
