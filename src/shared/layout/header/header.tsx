import * as React from 'react';

import logo from '../../../logo.svg';
import './header.css';

class Header extends React.Component {
    public render() {
        return (
            <div className="Header">
                <div id="app-header" className="app-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </div>
            </div>
        );
    }
}

export default Header;