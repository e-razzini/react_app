import React from 'react';

export default function exec(dados) {

    return (
        <>
            <div className="alert alert-primary" role="alert">
                 <p>{dados.titulo}</p>
                 <div>
                     {dados.children}   
                 </div> 
            </div>

        </>
    );
}