import React,{useState} from 'react'
import Unico from './Unico.jsx'
import Alert from './Alert.jsx';

export default function(props) {

    const [unico,setUnico] = useState([]);
    const objUser = props.user;



    const parentes = [
        {
            id:1,
            nome: 'Joao',
            idade: 12,
            parente: 2,
            tipo: 'neto'
        },
        {
            id: 2,
            nome: 'Jose',
            idade: 22,
            parente: 1,
            tipo: 'primo'
        },
        {
            id: 3,
            nome: 'Marcos',
            idade: 20,
            parente: 4,
            tipo: 'primo'
        },
        {
            id:7,
            nome: 'Bastian',
            idade: 22,
            parente: 3,
            tipo: 'primo'
        }

    ];

    function familiar(value,pro) {

        const usu = objUser.filter((item) => item.id === value)
        const r = usu[0][pro]
        return r
        
    }
    function handleUser(id){

        const res = parentes.filter((item)=> item.id === id ) 
        // console.log(res)
        setUnico(res)
        
    }
    
    return (
        <>
            <table className="table table-striped table-hover my-5">
                <thead>
                    <tr>
                        <th scope="col">Parende de:</th>
                        <th scope="col">Parentesco:</th>
                        <th scope="col">Nome:</th>
                        <th scope="col">Idade:</th>
                        <th scope="col">ACESSE:</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        parentes.map((item,key) => (
                                
                            <tr key={key} data={item.id}>
                                <th>{familiar(item.parente,'nome')} {familiar(item.parente,'sobrenome')}</th>
                                <th>{item.tipo}</th>
                                <th>{item.nome}</th>
                                <th>{item.idade}</th>
                                <th>
                                    <button  className="btn btn-primary" onClick={() => handleUser(item.id)} type="button">ACESSAR</button>
                                </th>
                            </tr>
                        ))
                    }

                </tbody>

            </table>
            <Alert titulo="alerta randomico">
               <Unico uniq={unico}/> 
             </Alert>
        </>
    )
};