import React from 'react';
import './Vocabulary.css';
import VocabularyHeader from '../VocabularyHeader/VocabularyHeader.js';
import MainBoard from '../MainBoard/MainBoard.js';

class Vocabulary extends React.Component {
    render() {
        return (
            <div className="vocabulary-container">
                <VocabularyHeader/>
                <MainBoard/>
            </div>
        )
    }
}

export default Vocabulary;
