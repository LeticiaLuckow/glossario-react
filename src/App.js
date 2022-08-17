import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarHeader,
  SubMenu,
} from 'react-pro-sidebar';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ArrayPage from './Pages/Declarações/Array/ArrayPage';
import Constantes from './Pages/Declarações/Constantes/Constantes';
import 'react-pro-sidebar/dist/css/styles.css';
import Objetos from './Pages/Declarações/Objetos/Objetos';
import UseStatePage from './Pages/Estados/UseStatePage/UseStatePage';
import UseStateSet from './Pages/Estados/UseStateSet/UseStateSet';
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
                  <Link to="/usestateset" />
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
            <Route path="/usestateset" element={<UseStateSet />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
