import React from 'react';

export default function exec(props) {

    const usu = props.uniq
    
    return (

        <>
            {
                usu.map((item, index) => (
                    <ul className="list-group list-group-flush" key={index} >
                        <li className="list-group-item">{item.nome}</li>
                        <li className="list-group-item">{item.idade}</li>
                        <li className="list-group-item">{item.tipo}</li>
                        <li className="list-group-item">{item.sexo}</li>
                    </ul>
                ))
            }

        </>
    )
}