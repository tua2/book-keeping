import React from "react";

const ErrorMessage=({warn})=>{
    return(
        <div style={{background: 'red', color: 'white', padding:'5px'}}>
            {warn}

        </div>
    );
};

export default ErrorMessage;