import * as React from 'react';
import './app.css';

import Home from "./modules/home/home";
import Footer from "./shared/layout/footer/footer";
import Header from "./shared/layout/header/header";

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Header/>
                <Home/>
                <Footer/>
            </div>
        );
    }
}

export default App;
