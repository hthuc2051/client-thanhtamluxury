import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <HomePage />
                </div>
            </Router>

        );
    }

    // showContentMenus = (routes) => {
    //     var result = null;
    //     if (routes.length > 0) {
    //         result = routes.map((route, index) => {
    //             return (
    //                 <Route
    //                     key={index}
    //                     path={route.path}
    //                     exact={route.exact}
    //                     component={route.main}
    //                 />
    //             );
    //         });
    //     }
    //     return <Switch>{result}</Switch>;
    // }

}

export default App;
