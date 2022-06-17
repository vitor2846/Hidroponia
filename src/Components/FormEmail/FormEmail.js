import { useState } from 'react'
import Input from '../Formulario/Input/Input'
import Button from '../Formulario/Button/Button'
import styles from './FormEmail.module.css'

function FormEmail({handleSubmit, usuario}){
    
    const [mensagem, setMensagem] = useState()

    function handleChange(e){
        setMensagem({...mensagem, [e.target.name]: e.target.value })
    }

    const submit = (e)=>{
        e.preventDefault()
        handleSubmit(mensagem) 
    }
    
    return(

        <form className={styles.formulario} onSubmit={submit}>
            <Input text='Nome' type='text' placeholder='Digite o seu nome...' name='nome' handleOnChange={handleChange} value={usuario ? usuario.NOME : ''}/>
            <Input text='E-mail' type='email' placeholder='Digite o seu e-mail...' name='email' handleOnChange={handleChange} value={usuario ? usuario.EMAIL : ''}/>
            <label htmlFor={mensagem}>Mensagem:</label>
            <textarea placeholder='Digite uma mensagem...' name='msg' onChange={handleChange}/>
            <Button text='enviar'/>
        </form>

    )
}

export default FormEmail