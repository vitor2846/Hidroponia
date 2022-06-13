import styles from './Perfil.module.css'
import {Link, useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import FormEditEmail from '../../Components/FormEditEmail/FormEditEmail'
import FormEditSenha from '../../Components/FormEditSenha/FormEditSenha'
import api from '../../Services/api'
import Loading from '../../Imagens/loading.svg'


function Perfil({usuario, onClick}){
    const [showEditEmail, setShowEditEmail] = useState(false)
    const [showEditSenha, setShowEditSenha] = useState(false)
    const [showLoading, setShowLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(()=>{
        setShowLoading(false)
    }, [])

    function editEmail(){
        setShowEditEmail(!showEditEmail)
    }

    function editSenha(){
        setShowEditSenha(!showEditSenha)
    }

    function alterarEmail(body){
        setShowLoading(true)
        body.id_usuario = usuario.ID

        setTimeout(()=>{
            api.patch('/alterar_email', body)
            .then(({data})=>{ 
                alert(data.mensagem)
                if(data.alteracao){
                    setShowEditEmail(false)
                }
            })
            .catch((err)=>{console.log(err)})
            setShowLoading(false)
        }, 1)   
    }

    function alterarSenha(body){    
        setShowLoading(true)

        body.id_usuario = usuario.ID

        setTimeout(()=>{
            api.patch('/alterar_senha', body)
            .then(({data})=>{ 
                if(data.alteracao){
                    setShowEditSenha(false)
                }
            })
            .catch((err)=>{console.log(err)})
            setShowLoading(false)
        }, 1)
    }

    function excluirUsuario(){
        setShowLoading(true)

        const body = {'ID': usuario.ID}

        setTimeout(()=>{
            api.patch('/deletar_usuario', body)
            .then(({data})=>{
                alert(data.mensagem)

                if(data.alteracao){
                    onClick()
                    navigate('/')
                }

            })
            .catch((err)=>{console.log(err)})
            setShowLoading(false)
        }, 1)
    }

    return(
        <div className={styles.container}>
            {!showLoading && (
                <>
                    <div className={styles.divisao}>
                        <h1>Seja bem-vindo: &nbsp;<span>{usuario.NOME}</span></h1>
                    </div>

                    <div>
                        {!showEditEmail && <button className={styles.btn} onClick={editEmail}>Alterar Email</button>}

                        {showEditEmail && (
                            <>
                                <button className={styles.btn} onClick={editEmail}>Fechar</button>
                                <FormEditEmail handleSubmit={alterarEmail}/>
                            </>
                        )}
                    </div>
                    
                    <div>
                        {!showEditSenha && <button className={styles.btn} onClick={editSenha}>Alterar Senha</button>}

                        {showEditSenha && (
                            <>
                                <button className={styles.btn} onClick={editSenha}>Fechar</button>
                                <FormEditSenha handleSubmit={alterarSenha}/>
                            </>
                        )}
                    </div>

                    <div>
                        <button className={styles.btn} onClick={excluirUsuario}>Excluir conta</button>
                    </div>

                    <Link to='/'><button className={styles.btn} onClick={onClick}>Sair</button></Link>
                </>
            )}
            
            {showLoading && <img src={Loading} alt='Carregando'/>}
        </div>
    )
}

export default Perfil