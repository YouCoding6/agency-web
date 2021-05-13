import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';
import Works from 'pages/Works';
import Navbar from 'components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayModeContext from 'DisplayModeContext';
import 'Assets/sass/style.scss';
import imageMain from 'Assets/images/image-main.jpg'




const App = () => {
    const [mode, setMode] = useState(localStorage.length !== 0 ? localStorage.getItem('mode') : 'day')

    useEffect(() => {
        localStorage.setItem('mode', mode)
        setMode(localStorage.getItem('mode'))
    }, [mode])
    return (
        <div className={`${mode}`}>
            <DisplayModeContext.Provider value={{
                mode,
                dayMode: () => setMode('day'),
                nightMode: () => setMode('night')
            }}>
                <Router>
                    <main className="main">
                        <Navbar />
                        <div>
                            <img className="image-main" src={imageMain} alt="main" />
                        </div>
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/works">
                                <Works />
                            </Route>
                        </Switch>
                    </main>
                </Router>
            </DisplayModeContext.Provider>
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById('root'))