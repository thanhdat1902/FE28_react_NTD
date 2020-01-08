import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LogIn from './pages/Admin/logIn';
import { routesAdmin, routesHome } from './routes'
import AdminTemplate from './templates/AdminTemplate'
import HomeTemplate from './templates/HomeTemplate';
import OrderTicket from './pages/Home/OrderTicket';
function App() {
  const showMenuAdmin = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return <AdminTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      })
    }
  }
  const showMenuHome = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return <HomeTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      })
    }
  }
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {showMenuAdmin(routesAdmin)}
          {showMenuHome(routesHome)}
          <Route exact path="/admin" component={LogIn} />
          <Route path="/check-out/:id" exact component={OrderTicket} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
