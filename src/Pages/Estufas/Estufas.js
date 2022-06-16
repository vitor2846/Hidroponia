import { useState, useEffect} from 'react'
import LinkButton from '../../Components/LinkButton/LinkButton'
import styles from './Estufas.module.css'
import api from '../../Services/api'
import EstufaCard from './EstufaCard/EstufaCard'
import Loading from '../../Imagens/loading.svg'
import { useNavigate } from 'react-router-dom'


function Estufas({usuario}){
    const [estufas, setEstufas] = useState([])
    const [showLoading, setShowLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(()=>{
        setShowLoading(true)
        if(parseInt(localStorage.getItem('status')) === 1){
            
            var user = JSON.parse(localStorage.getItem('usuario'))

            const body = {'id': user.ID}

            setTimeout(()=>{
                api.post('/lista_estufas', body)
                .then(({data})=>{
                    if(data.estufa){
                        setEstufas(data.estufa)
                    }
                })
                .catch((err)=>{console.log(err)})

                setShowLoading(false)
            }, 1000)
        }
        else{
            navigate('/')
        }

        // eslint-disable-next-line
    }, [])

    function removeEstufa(nome){
        setShowLoading(true)
        if(parseInt(localStorage.getItem('status')) === 1){
            var user = JSON.parse(localStorage.getItem('usuario'))

            const body = {'id_usuario': user.ID, 'nome_estufa': nome}
            
            setTimeout(()=>{
                api.patch('/deletar_estufa', body)
                .then((data)=>{
                    setEstufas(estufas.filter((estufa)=>estufa.nome !== nome))       
                })
                .catch(err=>console.log(err))

                setShowLoading(false)
            }, 1)
        }
        else{
            navigate('/')
        }
    }

    return (
        <div className={styles.projeto_container}>            
            <div className={styles.title_container}>
                <h1>Minhas Estufas</h1>
                
                <div className={styles.botao}>
                    <LinkButton to='/Novaestufa' text='Criar Estufa'/>
                </div>
                
            </div>

            <div className={styles.cards}>
                {estufas.length > 0 && !showLoading && estufas.map((estufa)=>(<EstufaCard estufa={estufa} handleRemove={removeEstufa} idUsuario={usuario.ID}></EstufaCard>))}
                {estufas.length === 0 && !showLoading && (<p>Você não possui nenhuma estufa cadastrada.</p>)} 
                {showLoading && <img src={Loading} alt='loading'/>}
            </div>
        </div>
    )
}

export default Estufas
