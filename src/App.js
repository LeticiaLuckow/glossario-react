import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarHeader,
  SubMenu,
} from 'react-pro-sidebar';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ArrayPage from './Pages/Declaracoes/Array/ArrayPage';
import Constantes from './Pages/Declarações/Constantes/Constantes';
import 'react-pro-sidebar/dist/css/styles.css';
import Objetos from './Pages/Declarações/Objetos/Objetos';
import UseStatePage from './Pages/Estados/UseStatePage/UseStatePage';
import UseStateSet from './Pages/Estados/UseStateSet/UseStateSet';
import UseStateInput from './Pages/Estados/UseStateInput/UseStateInput';
import IfElse from './Pages/Logica/IfElse/IfElse';
import For from './Pages/Logica/For/For';
function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <ProSidebar style={{ minHeight: '100vh' }}>
          <SidebarHeader>
            <div style={{ padding: '12px' }}> Glossario React</div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square" style={{ minHeight: '100vh' }}>
              <SubMenu title="Declarações">
                <MenuItem>
                  Constantes
                  <Link to="/" />
                </MenuItem>
                <MenuItem>
                  Array
                  <Link to="/array" />
                </MenuItem>
                <MenuItem>
                  Objetos
                  <Link to="/objetos" />
                </MenuItem>
              </SubMenu>
              <SubMenu title="Estados">
                <MenuItem>
                  UseState
                  <Link to="/usestate" />
                </MenuItem>
                <MenuItem>
                  UseState - alterar valor do estado
                  <Link to="/usestateset" />
                </MenuItem>
                <MenuItem>
                  UseState - controlar valor do input
                  <Link to="/usestateinput" />
                </MenuItem>
              </SubMenu>
              <SubMenu title="Logica">
                <MenuItem>
                  If e Else
                  <Link to="/ifelse" />
                </MenuItem>
                <MenuItem>
                  For
                  <Link to="/for" />
                </MenuItem>
              </SubMenu>
            </Menu>
          </SidebarContent>
        </ProSidebar>
        <div style={{ padding: '12px' }}>
          <Routes>
            <Route path="/" element={<Constantes />}></Route>
            <Route path="/array" element={<ArrayPage />}></Route>
            <Route path="/objetos" element={<Objetos />}></Route>
            <Route path="/usestate" element={<UseStatePage />}></Route>
            <Route exact path="/usestateset" element={<UseStateSet />}></Route>
            <Route
              exact
              path="/usestateinput"
              element={<UseStateInput />}
            ></Route>
            <Route exact path="/ifelse" element={<IfElse />}></Route>
            <Route exact path="/for" element={<For />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
