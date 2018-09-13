import * as React from 'react';
import './app.css';

import Login from "./modules/login/login";
import Footer from "./shared/layout/footer/footer";
import Header from "./shared/layout/header/header";

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Header/>
                <Login/>
                <Footer/>
            </div>
        );
    }
}

export default App;
