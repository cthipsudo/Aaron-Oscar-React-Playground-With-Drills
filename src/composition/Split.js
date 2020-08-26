import React from 'react'
import './Split.css'

function Split(propsTwo) {
    const combinedClassName = `split ${propsTwo.className}`;
    const newStyles = {flex: propsTwo.flexBasis}
    return (
        <div className={combinedClassName}
            style={newStyles}
        >
            {propsTwo.children}
            Some Content here
        </div>
    );
}

export default Split;