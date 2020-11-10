import React from 'react';

const FielError = (props) => {
    const { show } = props;

    if(!show) {
        return null;
    }

    return (  
        <span className="text-danger">{props.children}</span>
    );
}
 
export default FielError;