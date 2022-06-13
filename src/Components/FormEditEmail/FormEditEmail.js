import { useState } from "react"
import Input from "../Formulario/Input/Input"
import Button from "../Formulario/Button/Button"
import styles from './FormEditEmail.module.css'

function FormEditEmail({handleSubmit}){
    
    const [body, setBody] = useState({})

    function handleChange(e){
        setBody({...body, [e.target.name]: e.target.value })
    }    

    function submit(e){
        e.preventDefault()
        handleSubmit(body)
    }

    return(
        <form className={styles.formulario} onSubmit={submit}>

            <Input type='text' text='Novo email' name='novo_email' placeholder='Digite o novo email...' handleOnChange={handleChange}/>
            <Button text='Alterar'/>

        </form>
    )
}

export default FormEditEmail