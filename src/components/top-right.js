import React from 'react';
import rightImage from "../assets/images/top-right-rose.png";

class TopRight extends React.Component {
    render() {
        return (
            <div className="top-right-rose corner-image-container">
                <img src={rightImage} alt="Make It Real" title="Make It Real" className="corner-image" />
            </div>
        )
    }
}

export default TopRight;