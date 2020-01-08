import React, { Fragment } from 'react';
import { Route, Redirect } from "react-router-dom";
import NavAdmin from './../components/Admin/NavAdmin';

const AdminLayout = props => {
  return (
    <Fragment>
      
        <div className="row">
          <NavAdmin />
          <div className="col-10">
          {props.children}
          </div>
        </div>
      
    </Fragment>
  );
};

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => {
        if (localStorage.getItem("userAdmin")) {
          return (<AdminLayout>
            <Component {...propsComponent} />
          </AdminLayout>);
        }
        return <Redirect to="/admin" />
      }
      }
    />
  );
}
