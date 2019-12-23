import React from 'react';
import './App.css';
import Cellar from './components/Cellar';
import Vocabulary from './components/Vocabulary';
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: null };
        this.valueFromChild = this.valueFromChild.bind(this);
    }
    
    valueFromChild(dataFromChild) {
        this.setState({ value: dataFromChild })
    }

    render() {
        return (
            <div className="row big-container">
                <div className="col-sm-3 left-home">
                    <Cellar sender={this.valueFromChild}/>
                </div>
                <div className="col-sm-9 right-home">
                    <Vocabulary receiver={this.state.value}/> 
                </div>
            </div>
        )
    }
}

export default App;

