import FormEst from '../../Components/FormEst/FormEst'
import api from '../../Services/api'
import {useNavigate} from 'react-router-dom'
import styles from './NovaEstufa.module.css'
import {useState, useEffect} from 'react'
import Loading from '../../Imagens/loading.svg' 

function NovaEstufa(){
    
    const navigate = useNavigate()
    const [showLoading, setShowLoading] = useState(true)
    const [usuario, setUsuario] = useState()

    useEffect(()=>{
        if(parseInt(localStorage.getItem('status')) === 1){
            setShowLoading(false)
            setUsuario(JSON.parse(localStorage.getItem('usuario')))
        }
        else{
            navigate('/')
        }
        
        // eslint-disable-next-line
    }, [])

    function cadastrarEstufa(estufa){
        setShowLoading(true)

        setTimeout(()=>{
            api.post('/cadastrar_estufa', estufa)
            .then(({data})=>{ 
                alert(data.mensagem)
                if(data.cadastro){
                    navigate('/Estufas')
                }
            })
            .catch((err)=>{console.log(err)})
            setShowLoading(false)
        }, 1)
    }

    return(
        <div className={styles.container}>
            {!showLoading && <FormEst handleSubmit={cadastrarEstufa} idUsuario={usuario.ID} showLoading={showLoading}/>}
            {showLoading && <img src={Loading} alt='Carregando' />}
        </div>
    )
}

export default NovaEstufa