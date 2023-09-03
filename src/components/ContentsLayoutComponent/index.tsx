import React from 'react';
export default ({children}) => {
    return (<>
        <h2>## Contents Layout</h2>
        <div>
            <h3>### Children: </h3>
            {children}
        </div>
        <div>
            <h3>### Chilren#1:</h3>
            <>{children?.[0] || "none"}</>
        </div>
        <div>
            <h3>### Chilren#2:</h3>
            <>{children?.[1] || "none"}</>
        </div>
        <div>
            <h3>### Chilren#3:</h3>
            <>{children?.[3] || "none"}</>
        </div>
        <div>
            <h3>### Chilren#4:</h3>
            <>{children?.[4] || "none"}</>
        </div>
    </>);
};