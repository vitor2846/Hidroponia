import { Link } from 'react-router-dom'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import styles from './EstufaCard.module.css'

function EstufaCard({estufa, handleRemove, idUsuario}){
    const remove = (e)=>{
        e.preventDefault()
        handleRemove(estufa.nome)
    }
    
    return (
        <div className={styles.estufa_card}>
            <h1>Nome: {estufa.nome}</h1>

            <ul className={styles.estufa_card_actions}>
                <li>
                    <Link to={`/Detalhes/${idUsuario}/${estufa.id}/${estufa.nome}`}>Detalhes</Link>
                </li>

                <li>
                    <Link to={`/Editar/${estufa.nome}/${idUsuario}`}>
                        <BsPencil/>Editar
                    </Link>
                </li>

                <li>
                    <button onClick={remove}>
                        <BsFillTrashFill/>Excluir
                    </button>
                </li>
            </ul>
            
        </div>
    )
}

export default EstufaCard