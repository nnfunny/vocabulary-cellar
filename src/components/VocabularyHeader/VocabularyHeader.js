import React from 'react';
import './VocabularyHeader.css';

class VocabularyHeader extends React.Component {
    render() {
        return (
            <div className="vocabulary-header">
                <div className="inner-header">
                    {this.props.dataFromCellar} 
                </div>  
            </div>
        )
    }
}

export default VocabularyHeader;

