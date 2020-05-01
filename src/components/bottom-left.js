import React from 'react';
import bottomLeftImage from "../assets/images/bottom-left-rose.png";

class BottomLeft extends React.Component {
    render() {
        return (
            <div className="bottom-left-rose corner-image-container">
                <img src={bottomLeftImage} alt="Make It Real" title="Make It Real" className="bottom-left-rose corner-image" />
            </div>
        )
    }
}

export default BottomLeft;