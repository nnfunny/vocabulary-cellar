import React from 'react';
import './CellarList.css';
import { dataSetKV } from '../../data/dataSet.js';
import dataGet from '../../data/dataGet.js';

class CellarList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            boxAddition: false,
            cellarName: "",
            cellars: [],
        }

        this.addCellar = this.addCellar.bind(this);
        this.getName = this.getName.bind(this);
        this.toggleBox = this.toggleBox.bind(this);
    }
    
    componentDidMount() {
        let cellarList = dataGet("Cellars");
        if(cellarList !== undefined ) {
            this.setState({ cellars: dataGet("Cellars") })
        }
    }
    
    addCellar() {
        let nameInput = document.getElementById("input-name");
        let cellarList = dataGet("Cellars");
         
        if(cellarList === [] || cellarList === undefined) {
            dataSetKV("Cellars", [this.state.cellarName]);    
            dataSetKV(this.state.cellarName,[]);
        } else {
            cellarList.push(this.state.cellarName);
            dataSetKV("Cellars", cellarList);
            dataSetKV(this.state.cellarName,[]);
        }
        
        this.setState({ cellars: dataGet("Cellars") })
        nameInput.value = "";
        this.setState({boxAddition: false})
    }

    getName(e) { 
        this.setState({ cellarName: e.target.value })
    }

    toggleBox() {
        this.setState({boxAddition: !this.state.boxAddition})
    }

    render() {
        const { boxAddition } = this.state;
        return (
            <div className="cellar-list"> 
            {
                boxAddition ? 
                <div className="cellar-addition-box">
                    <div className="addition-form">
                        <label for="cellar-name">Cellar Name</label>
                        <input type="text" 
                               onChange={this.getName}
                               placeholder="Enter your cellar name..."
                               id="input-name"
                        />
                    </div>
                    <button className="open-addition-box" onClick={this.addCellar}>Add</button>
                </div> : <div></div>

            }
                <div className="addition">
                    <button className="add-cellar" onClick={this.toggleBox} >Add Cellar</button>
                </div>
                {
                    this.state.cellars === [] ?
                        <div></div>    
                        : 
                        this.state.cellars.map((cellar, index) => (
                        <div className="cellar-item">
                            <span>
                                {cellar}
                            </span>
                        </div>
                    ))
                }   
            </div>
        )
    }
}

export default CellarList;
