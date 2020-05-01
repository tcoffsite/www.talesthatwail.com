import React from 'react';

const Title = (props) => {
        return (
            <div className="row">
            <div className="col-12 text-right mt-5">
              <h2 className="black">{"......." + props.text }</h2>
            </div>
          </div>
        )
}

export default Title;