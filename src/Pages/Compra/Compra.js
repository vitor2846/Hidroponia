import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Compra.module.css'
import Loading from '../../Imagens/loading.svg'
import FormCompra from '../../Components/FormCompra/FormCompra'


function Compra(){
    const [usuario, setUsuario] = useState()
    const [showLoading, setShowLoading] = useState(true)
    const navigate = useNavigate()

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
    
    function submit(info){
        console.log('cadastrou no BD')
    }

    return(
        <div className={styles.container}>
            {!showLoading && (<FormCompra usuario={usuario} handleSubmit={submit}/>)}
            {showLoading && <img src={Loading} alt="Carregando"/>}
        </div>
    )
}

export default Compra