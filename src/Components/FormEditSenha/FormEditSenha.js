import { useState } from "react"
import CryptoJs from 'crypto-js'
import Input from "../Formulario/Input/Input"
import Button from "../Formulario/Button/Button"
import styles from './FormEditSenha.module.css'

function FormEditEmail({handleSubmit}){
    const [body, setBody] = useState({})

    function handleChange(e){
        setBody({...body, [e.target.name]: CryptoJs.MD5(e.target.value).toString() })
    }    

    function submit(e){
        e.preventDefault()
        
        if(body.nova_senha === body.nova_senha2){
            delete body.nova_senha2
            handleSubmit(body)
        }
        else{
            alert('As senhas não correspondem')
        }
        
    }


    return(
        <form className={styles.formulario} onSubmit={submit}>

            <Input type='password' text='Nova senha' name='nova_senha' placeholder='Digite a nova senha...' handleOnChange={handleChange}/>
            <Input type='password' text='Repetir a nova senha' name='nova_senha2' placeholder='Digite a nova senha novamente...' handleOnChange={handleChange}/>
            <Button text='Alterar'/>

        </form>
    )
}

export default FormEditEmail