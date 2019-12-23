import React from 'react';
import CellarList from '../CellarList/CellarList.js';
import CellarHeader from '../CellarHeader/CellarHeader.js';
import './Cellar.css';

class Cellar extends React.Component {
    constructor(props) {
        super(props);

        this.valueFromChild = this.valueFromChild.bind(this)
    }

    valueFromChild(dataFromChild) {
        this.props.sender(dataFromChild)
    }
    render() {
        return (
            <div className="cellar-container">
               <CellarHeader/>
               <CellarList valueSender={this.valueFromChild}/>
            </div>
        )
    }
}

export default Cellar;
