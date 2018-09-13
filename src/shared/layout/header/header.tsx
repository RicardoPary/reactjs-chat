import * as React from 'react';

import logo from '../../../logo.svg';
import './header.css';

class Header extends React.Component {
    public render() {
        return (
            <div className="Header">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginBottom: '15px'}}>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Principal <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contactos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Usuarios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Estadisticas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Comentarios</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;