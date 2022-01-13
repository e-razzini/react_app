import React from 'react';

export default function execute(props) {
     
    const {min,max}= props

    function rand(min, max) {
        const ale = Math.floor(Math.random() * (max - min + 1)) + min
        return ale
    }
    return (
        <>
            <h2>{rand(min,max)}</h2>
        </>
    )
    
} 