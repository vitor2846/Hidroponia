import {useState} from 'react'
import CryptoJs from 'crypto-js'
import Button from '../Formulario/Button/Button'
import Input from '../Formulario/Input/Input'
import styles from './FormCad.module.css'
import styleds from '../Formulario/Button/Button.module.css'
import Loading from '../../Imagens/loading.svg'

function FormCad ({handleSubmit, func, showLoading}){
    
    const [usuario, setUsuario] = useState({})

    function handleChange(e){
        if ((e.target.name === 'senha1') || (e.target.name === 'senha2')){
            setUsuario({...usuario, [e.target.name]: CryptoJs.MD5(e.target.value).toString() })
        }
        else{
            setUsuario({...usuario, [e.target.name]: e.target.value })
        }
    }

    const submit = (e) => {
        e.preventDefault()

        if (usuario.senha1 === usuario.senha2){
            handleSubmit(usuario)
        }
        else{
            alert('As senhas não correspondem')
        }
        
    }

    return (
        <>
            <form className={styles.formulario} onSubmit={submit}>
                <Input text='Nome' type='text' placeholder='Digite o seu nome...' name='nome' handleOnChange={handleChange}/>
                <Input text='E-mail' type='text' placeholder='Digite o seu e-mail...' name='email' handleOnChange={handleChange}/>
                <Input text='Senha' type='password' placeholder='Digite a sua senha...' name='senha1' handleOnChange={handleChange}/>
                <Input text='Senha' type='password' placeholder='Digite novamente a sua senha...' name='senha2' handleOnChange={handleChange}/>
                <Button text='Cadastrar conta'/>
                <button className={styleds.btn} onClick={func}>Voltar</button>
            </form>

            {showLoading && <img src={Loading} alt='Loading'/>}
        </>
    )
}

export default FormCad