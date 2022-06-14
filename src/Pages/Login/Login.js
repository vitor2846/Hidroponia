import { useState, useEffect } from 'react'
import FormCad from '../../Components/FormCad/FormCad'
import FormLogin from '../../Components/FormLogin/FormLogin'
import styles from './Login.module.css'
import Loading from '../../Imagens/loading.svg'
import LinkButton from '../../Components/LinkButton/LinkButton'


function Login({logado, login, formCad, sair, cadastrar}){
    
    const [showLoading, setShowLoading] = useState(true)

    useEffect(()=>{
        setShowLoading(false)
    }, [])

    function logar(usuario){
        setShowLoading(true)
        
        setTimeout(()=>{
            login(usuario)
            setShowLoading(false)
        }, 1000)
    }

    function cadastra(usuario){
        setShowLoading(true)
        
        setTimeout(()=>{
            cadastrar(usuario)
            setShowLoading(false)
        }, 1000)
    }

    return(
        <div className={styles.container}>
            {logado === 0 && !showLoading && <FormLogin handleSubmit={logar} func={formCad} />}
            {logado === 2 && !showLoading && <FormCad handleSubmit={cadastra} func={sair} />}
            {logado === 1 && (
                <>
                    <h1>Bem-vindo ao Ge<wbr/>ren<wbr/>ci<wbr/>a<wbr/>dor de Estufas</h1>
                    <p>Comece a gerenciar suas estufas agora mesmo!</p>
                    <LinkButton to='/Estufas' text='Estufas' />
                    <LinkButton to='/Novaestufa' text='Criar Estufa' />
                </>
            )}
            {showLoading && <img src={Loading} alt='Carregando'/>}
        </div>
    )
}

export default Login
