import styles from './Contato.module.css'
import FormEmail from '../../Components/FormEmail/FormEmail'

function Contatos({usuario}){
    
    function enviarEmail(mensagem){
        console.log('mensagem enviada: ')
        console.log(mensagem)
    }
    
    return(
        <div className={styles.container}>
            <h1>Entrar em contato</h1>
            <FormEmail handleSubmit={enviarEmail} usuario={usuario}/>
        </div>
    )
}

export default Contatos