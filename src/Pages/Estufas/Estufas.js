import { useState, useEffect} from 'react'
import LinkButton from '../../Components/LinkButton/LinkButton'
import styles from './Estufas.module.css'
import api from '../../Services/api'
import EstufaCard from './EstufaCard/EstufaCard'
import Loading from '../../Imagens/loading.svg'


function Estufas({ID}){
    const [estufas, setEstufas] = useState([])
    const [showLoading, setShowLoading] = useState(true)
    
    useEffect(()=>{
        setShowLoading(true)
    
        const body = {'id': ID}

        setTimeout(()=>{
            api.post('/lista_estufas', body)
            .then(({data})=>{
                if(data.estufa){
                    setEstufas(data.estufa)
                }
            })
            .catch((err)=>{console.log(err)})

            setShowLoading(false)
        }, 2000)

        // eslint-disable-next-line
    }, [])

    function removeEstufa(nome){
        setShowLoading(true)

        const body = {'id_usuario': ID, 'nome_estufa': nome}
        
        setTimeout(()=>{
            api.patch('/deletar_estufa', body)
            .then((data)=>{
                setEstufas(estufas.filter((estufa)=>estufa.nome !== nome))       
            })
            .catch(err=>console.log(err))

            setShowLoading(false)
        }, 1)
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
                {estufas.length > 0 && !showLoading && estufas.map((estufa)=>(<EstufaCard estufa={estufa} handleRemove={removeEstufa} idUsuario={ID}></EstufaCard>))}
                {estufas.length === 0 && !showLoading && (<p>Você não possui nenhuma estufa cadastrada.</p>)} 
                {showLoading && <img src={Loading} alt='loading'/>}
            </div>
        </div>
    )
}

export default Estufas
