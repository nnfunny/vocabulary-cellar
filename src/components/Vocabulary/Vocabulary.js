import React from 'react';
import './Vocabulary.css';
import VocabularyHeader from '../VocabularyHeader/VocabularyHeader.js';
import MainBoard from '../MainBoard/MainBoard.js';

class Vocabulary extends React.Component {
    render() {
        return (
            <div className="vocabulary-container">
                <VocabularyHeader dataFromCellar={this.props.receiver}/>
                <MainBoard valueReceivedFromCellar={this.props.receiver}/>
            </div>
        )
    }
}

export default Vocabulary;
