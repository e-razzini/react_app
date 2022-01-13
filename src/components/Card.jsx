import React from 'react';

export default function exec(props) {
    const {nome,sobrenome,idade,sexo} = props.usuarios;

    function setSexo(value) {
        return value === 'M' ? 'Masculino' : 'Feminino'
    }

    function setPenal(value) {
        return value > 18 ? 'Maior de idade' : 'Menor de idade'
    }

    return (

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
            <div className="Card my-2" >
                <div className="card-header">
                    <h5 className="card-text">{nome +' '+ sobrenome}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text my-0 fw-bold text-uppercase">informações:</p>
                    <p className="card-text my-0">Nome: {nome}</p>
                    <p className="card-text my-0">Idade: {idade}</p>
                    <p className="card-text my-0">Idade penal: {setPenal(idade)}</p>
                    <p className="card-text my-0">Sexo: {setSexo(sexo)}</p>
                </div>
                <div className="card-header"></div>
            </div>
        </div>
    )
}