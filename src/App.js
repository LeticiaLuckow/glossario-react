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
import 'react-pro-sidebar/dist/css/styles.css';
import Objetos from './Pages/Declaracoes/Objetos/Objetos';
import Constantes from './Pages/Declaracoes/Constantes/Constantes';
import UseStatePage from './Pages/Estados/UseStatePage/UseStatePage';
import UseStateSet from './Pages/Estados/UseStateSet/UseStateSet';
import UseStateInput from './Pages/Estados/UseStateInput/UseStateInput';
import IfElse from './Pages/Logica/IfElse/IfElse';
import For from './Pages/Logica/For/For';
import Ternario from './Pages/Logica/Ternario/Ternario';
import ConsoleLog from './Pages/Console/ConsoleLog/ConsoleLogPage';
import InputCheckboxPage from './Pages/Input/InputCheckbox/InputCheckboxPage';
import InputNumberPage from './Pages/Input/InputNumber/InputNumberPage';
import InputRadioPage from './Pages/Input/InputRadio/InputRadioPage';
import InputTextPage from './Pages/Input/InputText/InputTextPage';
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
                <MenuItem>
                  Switch
                  <Link to="/switch" />
                </MenuItem>
                <MenuItem>
                  Foreach
                  <Link to="/foreach" />
                </MenuItem>
                <MenuItem>
                  Ternario
                  <Link to="/ternario" />
                </MenuItem>
              </SubMenu>
              <SubMenu title="Console">
                <MenuItem>
                  ConsoleLog
                  <Link to="/console" />
                </MenuItem>
              </SubMenu>
              <SubMenu title="Input">
                <MenuItem>
                  InputCheckbox
                  <Link to="/inputcheckbox" />
                </MenuItem>
                <MenuItem>
                  InputNumber
                  <Link to="/inputnumber" />
                </MenuItem>
                <MenuItem>
                  InputRadio
                  <Link to="/inputradio" />
                </MenuItem>
                <MenuItem>
                  InputText
                  <Link to="/inputtext" />
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
            <Route exact path="/switch" element={<For />}></Route>
            <Route exact path="/foreach" element={<For />}></Route>
            <Route exact path="/ternario" element={<Ternario />}></Route>
            <Route exact path="/console" element={<ConsoleLog />}></Route>
            <Route
              exact
              path="/inputcheckbox"
              element={<InputCheckboxPage />}
            ></Route>
            <Route
              exact
              path="/inputnumber"
              element={<InputNumberPage />}
            ></Route>
            <Route
              exact
              path="/inputradio"
              element={<InputRadioPage />}
            ></Route>
            <Route exact path="/inputtext" element={<InputTextPage />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
