import styles from './FormLogin.module.css'
import styleds from '../Formulario/Button/Button.module.css'
import Button from '../Formulario/Button/Button'
import Input from '../Formulario/Input/Input'
import { useState } from 'react'
import CryptoJs from 'crypto-js'


function FormLogin ({handleSubmit, func}){
    const [usuario, setUsuario] = useState({})

    function handleChange(e){
        if (e.target.name === 'senha'){
            setUsuario({...usuario, [e.target.name]: CryptoJs.MD5(e.target.value).toString() })
        }
        else{
            setUsuario({...usuario, [e.target.name]: e.target.value })
        }
    }

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(usuario)
    }

    return (
        <>
            <form className={styles.formulario} onSubmit={submit}>
                <Input text='E-mail' type='text' placeholder='Digite o seu e-mail...' name='email' handleOnChange={handleChange}/>
                <Input text='Senha' type='password' placeholder='Digite a sua senha...' name='senha' handleOnChange={handleChange}/>
                <Button text='Login' />
                <button className={styleds.btn} onClick={func}>Criar conta</button>
            </form>            
        </>
    )
}

export default FormLogin