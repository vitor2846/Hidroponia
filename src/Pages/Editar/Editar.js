import { useParams } from "react-router-dom"
import styles from './Editar.module.css'
import FormEditEst from '../../Components/FormEditEst/FormEditEst'
import Loading from '../../Imagens/loading.svg'
import { useEffect, useState } from "react"
import api from "../../Services/api"

function Editar(props){
    
    const {nome, idUsuario} = useParams()
    const [showLoading, setShowLoading] = useState(true)

    const [nomeExib, setNomeExib] = useState(nome)
    
    useEffect(()=>{
        setShowLoading(false)
    }, [])

    function alterarNomeEstufa(estufa){
        setShowLoading(true)
        
        estufa.id_usuario = parseInt(idUsuario)
        estufa.nome_estufa = nome

        setTimeout(()=>{
            api.patch('/alterar_estufa/nome', estufa)
            .then(({data})=>{ 
                alert(data.mensagem)
                if(data.alteracao){
                    setNomeExib(estufa.novo_nome)
                }
            })
            .catch((err)=>{console.log(err)})

            setShowLoading(false)
        }, 1)

    }

    return(
        <div className={styles.container}>
            <h1><span>Estufa:</span> {nomeExib}</h1>
            
            {!showLoading && <FormEditEst nomeAtual={nome} handleSubmit={alterarNomeEstufa} />}
            
            {showLoading && <img className={styles.imagem} src={Loading} alt='Loading'/>}

        </div>
    )
}

export default Editar