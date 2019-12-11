import React from 'react';
import './MainBoard.css';

class MainBoard extends React.Component {
    render() {
        return(
            <div className="main-board">
                <div className="word-custom">
                    <button className="button-custom">Edit</button>
                    <span> | </span>
                    <button className="button-custom">Add Word</button>
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
