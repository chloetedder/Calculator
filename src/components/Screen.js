import React from 'react';

const Screen = (props) => {
    return (
        <div className="output">
            <input type="text" readOnly value={props.value} />
        </div>
    )
}


export default Screen;