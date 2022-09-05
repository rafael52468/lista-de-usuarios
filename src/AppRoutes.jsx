import {
  BrowserRouter as Routers,
  Route,
  Routes,
  Navigate,

} from "react-router-dom";

import TelaListaTarefas from "./pages/TelaTarefas";
import TelaListaUsuarios from "./pages/TelaUsuarios";
import TelaLogin from "./pages/LoginPage/TelaLogin";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginPage/>}> 
        </Route>
        <Route exact path="/" element={>Pages}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;