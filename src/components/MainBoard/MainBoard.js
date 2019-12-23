import React from 'react';
import './MainBoard.css';
import { dataSetKV } from '../../data/dataSet.js';
import dataGet from '../../data/dataGet.js';
import dataDelete from '../../data/dataDelete.js';

class MainBoard extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            editBox : false,
            deleteBox: false,
            word: null,
            defination: null
        }

        this.getWord = this.getWord.bind(this);
        this.getDefination = this.getDefination.bind(this);
    }

    getDefination(e) {
        this.setState({ defination: e.target.value })
    }

    getWord(e) {
        this.setState({ word: e.target.value })
    }

    toggleBox() {
        this.setState({ editBox: !this.state.editBox })
    }

    toggleDeleteBox() {
        this.setState({ deleteBox: !this.state.deleteBox });
    }

    addWord() {
        const { word, defination } = this.state;
        let selectedCellar = this.props.valueReceivedFromCellar;
        let wordInput = document.getElementById("word-input");
        let definationInput = document.getElementById("defination-input");

        if(!word) {
            wordInput.placeholder = "Please enter your word!!!";
        } else if(!defination) {
            definationInput.placeholder = "Please enter the defination!!!"; 
        }


        if(word && defination && selectedCellar) {    
            dataSetKV(`${selectedCellar}.${word}`, defination);
            wordInput.value = "";
            definationInput.value = "";
        } 
    }

    render() {
        const { editBox, deleteBox , word, defination } = this.state
        return(
            <div className="main-board">
                {defination}
                {this.props.valueReceivedFromCellar}
            {
                deleteBox ? 
                    <div className="delete-word-box">
                         <span className="reminder-delete">Please select the cellar before you delete vocabulary</span>
                        <label for="delte-word">Please enter the vocabulary to be deleted</label>
                        <input type="text" id="delete-word-input" />
                        <div className="delete-button-group">
                            <button className="delete-button">Delete</button>
                            <button className="delete-button" onClick={(e) => this.toggleDeleteBox(e)}>Close</button>
                        </div>
                    </div>        
                    :
                    <div></div>
            }

            {
                editBox ?
                    <div className="edit-word-box">
                        <div className="edit-form">
                            <span className="reminder">Please select the cellar before you add or update vocabulary</span>
                            <div className="edit-vocabulary">
                                <label for="vocabulary">Vocabulary</label>
                                <input 
                                    type="text"
                                    placeholder="Enter a new/update-needed word"
                                    id="word-input"
                                    onChange={this.getWord}
                                />
                            </div>
                            <div className="edit-defination">
                                <label for="defination">Defination</label>
                                <textarea 
                                    placeholder="Enter the above word's defination"
                                    id="defination-input"
                                    onChange={this.getDefination}
                                />
                            </div>
                        </div>
                        <div className="vocab-button-group">
                            <button className="edit-box-close" onClick={(e) => this.addWord(e)}>Add</button>
                            <button className="edit-box-close" onClick={(e) => this.toggleBox(e)}>Update</button>
                            <button className="edit-box-close" onClick={(e) => this.toggleBox(e)}>Close</button>
                        </div>
                    </div>
                    :
                    <div></div>
            }
                <div className="word-custom">
                    <button className="button-custom" onClick={(e) => this.toggleBox(e)}>Edit</button>
                    <span> | </span>
                    <button className="button-custom" onClick={(e) => this.toggleBox(e)}>Add</button>
                    <span> | </span>
                    <button className="button-custom" onClick={(e) => this.toggleDeleteBox(e)}>Delete Word</button>
                </div>
                <div className="vocabularies">
                    <div className="vocabulary">
                        <div className="word">
                            <span>Shrivel</span>
                        </div>
                        <div className="explanation">
                            <p>- Become or make something dry and wrinkled as a result of heat, cold or being old.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainBoard;
