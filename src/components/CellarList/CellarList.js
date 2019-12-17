import React from 'react';
import './CellarList.css';
import { dataSetKV } from '../../data/dataSet.js';
import dataGet from '../../data/dataGet.js';
import dataDelete from '../../data/dataDelete.js';

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
        this.deleteCellar = this.deleteCellar.bind(this);
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

    deleteCellar() {
        let cellarList = dataGet("Cellars");
        let nameInput = document.getElementById("input-name");
        // Delete Cellar
        dataDelete(this.state.cellarName);
        
        // Delete Cellar in Cellars List
        let indexOfCellar = cellarList.indexOf(this.state.cellarName);
        if(indexOfCellar > -1) {
            cellarList.splice(indexOfCellar,1);
            dataSetKV("Cellars", cellarList);
            this.setState({ cellars: dataGet("Cellars") })
            nameInput.value = "";
        } else {
            let nameInput = document.getElementById("input-name");
            nameInput.value = "";
            nameInput.placeholder = "Enter correct name, please!!!";
        }
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
                    <div>
                        <button className="open-addition-box" onClick={this.addCellar}>Add</button>
                        <button className="open-addition-box" onClick={this.deleteCellar}>Delete</button>
                        <button className="open-addition-box" onClick={this.toggleBox}>Close</button>

                    </div>
                </div> : <div></div>

            }
                <div className="addition">
                    <button className="add-cellar" onClick={this.toggleBox} >Add Cellar</button>
                    <button className="add-cellar" onClick={this.toggleBox} >Delete Cellar</button>

                </div>
                {
                    this.state.cellars === [] ?
                        <div></div>    
                        : 
                        this.state.cellars.map((cellar, index) => (
                        <div key={index} value={cellar} className="cellar-item">
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
