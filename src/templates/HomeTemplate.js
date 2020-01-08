import React, { Fragment } from 'react';
import {Route} from 'react-router-dom';
import NavHome from '../components/Home/NavHome';
import Footer from '../components/Home/Footer';
const HomeLayout = props => {
    return (
        <Fragment>
            <NavHome />
            <div style={{ height: 50 }}></div>
            {props.children}
            <Footer/>
        </Fragment>
    );
}
export default function HomeTemplate({Component, ...props}) {
    return(
        <Route {...props}
        render ={
            propsComponent => {
                return (
                    <HomeLayout>
                        <Component {...propsComponent}/>
                    </HomeLayout>
                );
            }
        }/>
    );

};