import React from 'react';
import './App.css';
import Cellar from './components/Cellar';
import Vocabulary from './components/Vocabulary';
class App extends React.Component {
    render() {
        return (
            <div className="row big-container">
                <div className="col-sm-3 left-home">
                    <Cellar/>
                </div>
                
                <div className="col-sm-9 right-home">
                    <Vocabulary/> 
                </div>
            </div>
        )
    }
}

export default App;

