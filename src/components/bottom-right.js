import React from 'react';
import bottomRightImage from "../assets/images/make-it-real-1980.png";

class BottomRight extends React.Component {
    render() {
        return (
            <div className="bottom-right-rose">
                <img src={bottomRightImage} alt="Make It Real" title="Make It Real" />
            </div>
        )
    }
}

export default BottomRight;