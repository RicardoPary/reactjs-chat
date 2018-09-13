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
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>

                <Footer/>
            </div>
        );
    }
}

export default App;
