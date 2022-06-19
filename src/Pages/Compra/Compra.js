import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Compra.module.css'
import Loading from '../../Imagens/loading.svg'
import FormCompra from '../../Components/FormCompra/FormCompra'
import api from '../../Services/api'


function Compra(){
    const [usuario, setUsuario] = useState()
    const [showLoading, setShowLoading] = useState(true)
    const [mesage, setMesage] = useState()
    const [showMesage, setShowMesage] = useState(false)
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
        info.id_usuario = usuario.ID

        var date = new Date()
        var dia = String(date.getDate()).padStart(2, '0')
        var mes = String(date.getMonth() + 1).padStart(2, '0')
        var ano = date.getFullYear()
        var horas = parseInt(date.getHours())
        var minutos = parseInt(date.getMinutes())

        if (horas < 10){
            horas = '0' + horas
        }
        if (minutos < 10){
            minutos = "0" + minutos
        }

        info["data"] = ano + '-' + mes + '-' + dia
        info["hora"] = horas + ':' + minutos + ':00'

        api.post('/cadastrar_pedido', info)
            .then(({data})=>{
                if(data.cadastro){
                    setShowMesage(true)
                    setMesage(`Pedido realizado com sucesso, em alguns instantes você receberá um e-mail com o link para o pagamento.`)
                }
                else{
                    alert(`O pedido não foi realizado`)
                }
            })
            .catch((err)=>{console.log(err)})
    }

    return(
        <div className={styles.container}>
            {!showLoading && !showMesage && (<FormCompra usuario={usuario} handleSubmit={submit}/>)}
            {showLoading && !showMesage && <img src={Loading} alt="Carregando"/>}
            {!showLoading && showMesage && (<p className={styles.sucess}>{mesage}</p>)}
        </div>
    )
}

export default Compra