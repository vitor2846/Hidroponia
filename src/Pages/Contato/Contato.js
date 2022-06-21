import styles from './Contato.module.css'
import FormEmail from '../../Components/FormEmail/FormEmail'
import api from '../../Services/api'
import { useEffect, useState } from 'react'
import Loading from '../../Imagens/loading.svg'


function Contatos({usuario}){

    const [showLoading, setShowLoading] = useState(true)

    useEffect(()=>{
        setShowLoading(false)
    }, [])

    function enviarEmail(mensagem){
        setShowLoading(true)
        
        var date = new Date()
        var dia = String(date.getDate()).padStart(2, '0')
        var mes = String(date.getMonth() + 1).padStart(2, '0')
        var ano = date.getFullYear()
        var horas = parseInt(date.getHours())
        var minutos = parseInt(date.getMinutes())
        var segundos = parseInt(date.getSeconds())

        if (horas < 10){
            horas = '0' + horas
        }
        if (minutos < 10){
            minutos = "0" + minutos
        }
        if (segundos < 10){
            segundos = '0' + segundos
        }

        mensagem["data"] = ano + '-' + mes + '-' + dia
        mensagem["hora"] = horas + ':' + minutos + ':' + segundos


        setTimeout(()=>{
            api.post('/enviar_mensagem', mensagem)
            .then(({data})=>{
                alert(data.mensagem)
            })
            .catch((err)=>{console.log(err)})

            setShowLoading(false)
        }, 1000)
    }
    
    return(
        <div className={styles.container}>
            {!showLoading && (<h1>Entrar em contato</h1>)}
            {!showLoading && (<FormEmail handleSubmit={enviarEmail} usuario={usuario}/>)}
            {showLoading && (<img src={Loading} alt="Carregando"/>)}
        </div>
    )
}

export default Contatos