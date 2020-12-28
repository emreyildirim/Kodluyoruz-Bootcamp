import React,{useContext} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { routes } from "../../config/Router";
import {Logo,Nav,NavItem} from './Navbar.styles';
import {HamburgerContext} from "../../contexts/HamburgerContext"
const Navbar = () => {
  const {setSelectedIngredients } = useContext(HamburgerContext);
  return (
    <Router>
      <Nav>
        <Logo
          src="https://www.tiklagelsin.com/cmsfiles/categories/burger-king.png?v=207"
          alt="logo"
        />
        <div>
          {routes
            .filter((route) => !route.isPrivate)
            .map((route) => (
              <NavItem>
                <Link onClick={()=>setSelectedIngredients([])} to={route.path}>{route.title}</Link>
              </NavItem>
            ))}
        </div>
      </Nav>
      <Switch>
        {routes.map((route) => (
          <Route exact={route.exact} path={route.path}>
            {route.component()}
          </Route>
        ))}
      </Switch>
     
    </Router>
  );
};

export default Navbar;
