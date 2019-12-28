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
            deletedWord: null,
            defination: null,
            listWord: [],
            listDefination: []
        }

        this.getWord = this.getWord.bind(this);
        this.getDefination = this.getDefination.bind(this);
        this.getDeletedWord = this.getDeletedWord.bind(this);
    }

    componentDidUpdate(prevProps) {
        if(this.props.valueReceivedFromCellar !== prevProps.valueReceivedFromCellar) {
            let listWordUpdate = [];
            let listDefinationUpdate = [];
            let selectedList = dataGet(this.props.valueReceivedFromCellar);


            for(let key in selectedList) {
                listWordUpdate.push(key);
                listDefinationUpdate.push(selectedList[key])
            }

            this.setState({ listWord: listWordUpdate, listDefination: listDefinationUpdate })
        }
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
        const { word, defination, listWord, listDefination } = this.state;
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

        if(listWord !== []) {
            listWord.push(word);
            listDefination.push(defination)
            this.setState({editBox: true});
        }
    }
    
    updateWord() {
        const { word, defination, listWord, listDefination } = this.state;
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
            
            let indexOfUpdatedWord = listWord.indexOf(word);
            listDefination[indexOfUpdatedWord] = defination;
            this.setState({ editBox: true })
        }

    }

    getDeletedWord(e) {
        this.setState({ deletedWord: e.target.value });
    }
    
    deleteWord() {
        const { deletedWord, listWord } = this.state;
        let deleteWordInput = document.getElementById("delete-word-input");
        let selectedCellar = this.props.valueReceivedFromCellar;
        
        // Delete in local storage
        dataDelete(`${selectedCellar}.${deletedWord}`);

        // Delete within component state
        let indexOfWord = listWord.indexOf(deletedWord);
        if(indexOfWord > -1) {
            listWord.splice(indexOfWord, 1)
            deleteWordInput.value = "";
            this.setState({ deleteBox: true })
        } else {
            deleteWordInput.value = "";
            deleteWordInput.placeholder = "Correct vocabulary, please!!!" 
        }
    }

    render() {
        const { editBox, deleteBox, listWord, listDefination } = this.state
        return(
            <div className="main-board">
            {
                deleteBox ? 
                    <div className="delete-word-box">
                         <span className="reminder-delete">Please select the cellar before you delete vocabulary</span>
                        <label for="delte-word">Please enter the vocabulary to be deleted</label>
                        <input type="text" id="delete-word-input" onChange={this.getDeletedWord} />
                        <div className="delete-button-group">
                            <button className="delete-button" onClick={(e) => this.deleteWord(e)}>Delete</button>
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
                            <span className="reminder">Please enter the correct vocabulary (lower/uppercase) if updating it</span>
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
                            <button className="edit-box-close" onClick={(e) => this.updateWord(e)}>Update</button>
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
                {
                    listWord.map((word, index) => (
                        <div className="vocabulary"  key={index}>
                            <div className="word">
                                <span>{word}</span>
                            </div>
                            <div className="explanation">
                               <p>{listDefination[index]}</p>  
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default MainBoard;
