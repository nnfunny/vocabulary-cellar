import React from 'react';
import CellarList from '../CellarList/CellarList.js';
import CellarHeader from '../CellarHeader/CellarHeader.js';
import './Cellar.css';

class Cellar extends React.Component {
    render() {
        return (
            <div className="cellar-container">
               <CellarHeader/>
               <CellarList/>
            </div>
        )
    }
}

export default Cellar;
