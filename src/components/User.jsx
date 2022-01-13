import React from 'react';
// import Ale from './Aleatorio.jsx';

import Familia from './Familiar.jsx'
import Card from './Card.jsx'


export default function execute() {

    const user = [
        {
            id: 1,
            nome: 'Joao',
            sobrenome: 'silva',
            idade: 30,
            sexo: 'M'
        },
        {
            id: 2,
            nome: 'Antonio',
            sobrenome: 'santos',
            idade: 32,
            sexo: 'M'
        },
        {
            id: 3,
            nome: 'Joaquim',
            sobrenome: 'Perreira',
            idade: 20,
            sexo: 'M'
        },
        {

            id: 4,
            nome: 'Ana',
            sobrenome: 'hort',
            idade: 15,
            sexo: 'F'

        }

    ];
    // var convertida = user.map(function(obj) {
    //     return Object.keys(obj).map(function(chave) {
    //         return obj[chave];
    //     });
    // });
    return (
        <div className="row mt-5">

            {
                user.map((usu, index) => (
                    <Card usuarios={usu} key={index} />
                ))
            }

            <Familia user={user} />

           

        </div>
    )
}