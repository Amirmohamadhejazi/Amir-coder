import React from "react";
import Nav from "./component/Nav";
import Home from "./component/page/Home";
import About from "./component/page/About";
import Buy from "./component/page/Buy"
import Work_samples from "./component/page/work_samples"
import Footer from "./component/footer";
import {Redirect, Switch, Route} from 'react-router-dom';
import error_page from "./component/page/error_page";
import './style/App.css';
import './style/bootstrap.min.css';

export default function App() {

    const home = () => (
        <div>
            {Home}
        </div>
    );
        return (
        <Route>
            <div className="h-container bg-container IRANSansWeb">
                <Nav/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/home' exact component={Home}/>
                    <Route path='/about' exact component={About}/>
                    <Route path='/Buy' exact component={Buy}/>
                    <Route path='/Work_samples' exact component={Work_samples}/>
                    <Route   component={error_page} />
                </Switch>
                <Footer/>
            </div>
        </Route>
    )
}