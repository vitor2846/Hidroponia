import {useState, useEffect} from 'react'
import api from '../../Services/api'
import { useNavigate, useParams } from "react-router-dom"
import { Chart } from "react-google-charts"
import styles from './Detalhes.module.css'
import LinkButton from '../../Components/LinkButton/LinkButton'
import Loading from '../../Imagens/loading.svg'


function Detalhes(props){
    const [showLoading, setShowLoading] = useState(true)
    const {idEstufa, nomeEstufa} = useParams()
    const [dados, setDados] = useState({})
    const [medias, setMedias] = useState([])
    const [tableDados, setTableDados] = useState([])
    const [mediaTemp, setMediaTemp] = useState([])
    const [mediaHum, setMediaHum] = useState([])
    const [mediaPh, setMediaPh] = useState([])
    const [mediaLum, setMediaLum] = useState([])
    const [tam, setTam] = useState(0)
    const navigate = useNavigate()

    useEffect(()=>{
        if(parseInt(localStorage.getItem('status')) !== 1){
            navigate('/')
        }
        
        // eslint-disable-next-line
    }, [])

    useEffect(()=>{
        var usuario = JSON.parse(localStorage.getItem('usuario'))
        const body = {'id_estufa': parseInt(idEstufa), 'id_usuario': parseInt(usuario.ID)}

        setTimeout(() => {
            api.post('/dados_estufa', body)
            .then(({data})=>{
                if(data.conteudo){
                    setDados(data.conteudo)
                }
            })
            .catch((err)=>{console.log(err)})

            api.post('/media_dados', body)
            .then(({data})=>{
                if(data.conteudo){
                    setMedias(data.conteudo)
                }
            })
            .catch((err)=>{console.log(err)})

            setShowLoading(false)
        }, 2000)

    }, [idEstufa])

    useEffect(()=>{
        var nivelReservatorio = ""
        var luminosidade = ""

        if(dados){
            const arraydata1 = [["Element", "Temperatura"]]
            const arraydata3 = [["Element", "Umidade"]]
            const arraydata4 = [["Element", "PH"]]
            const arraydata5 = [["Element", "Luminosidade"]]
            for(let i=0; i < medias.length; i++){
                arraydata1.push([medias[i].data, medias[i].temperatura])
                arraydata3.push([medias[i].data, medias[i].humidade])
                arraydata4.push([medias[i].data, medias[i].ph])
                arraydata5.push([medias[i].data, medias[i].luminosidade])
            }

            setMediaTemp(arraydata1)
            setMediaHum(arraydata3)
            setMediaPh(arraydata4)
            setMediaLum(arraydata5)


            const arraydata2 = [["Temperatura", "Umidade", "PH", "Luminosidade", "Nivel", "Data", "Hora", "Bomba", "Lâmpada"]]
            for(let i=0; i < dados.length; i++){
                if(dados[i].nivel_res === "0.00"){
                    nivelReservatorio = "Vazio"
                }
                else if(dados[i].nivel_res === "1.00"){
                    nivelReservatorio = "Metadade da capacidade"
                }
                else if(dados[i].nivel_res === "2.00"){
                    nivelReservatorio = "Cheio"
                }
                else{
                    nivelReservatorio = "None"
                }

                if(dados[i].luminosidade < 50){
                    luminosidade = "Claro"
                }
                else if(dados[i].luminosidade >= 50 && dados[i].luminosidade < 500){
                    luminosidade = "Pouca luz"
                }
                else{
                    luminosidade = "Escuro"
                }

                arraydata2.push([dados[i].temperatura, dados[i].humidade, dados[i].ph, luminosidade, nivelReservatorio, dados[i].data, dados[i].hora, dados[i].statusBomba, dados[i].statusLampada])                    
            }

            setTableDados(arraydata2)
            setTam(dados.length)
        }

        // eslint-disable-next-line
    }, [dados])

    const options = {
        allowHtml: true,
        showRowNumber: true,
        width: "90%",
        height: "600px",
    }

    const formatters = [
        {
            type: "NumberFormat",
            column: 1
        }
    ]

    const options2 = {
        width: "95%",
        height: "600px",
    }


    return(
        <div className={styles.projeto_container}>

            {!showLoading && (
                <>
                    <h1><span>Nome da estufa:</span> {nomeEstufa}</h1>

                    <LinkButton to="/Estufas" text="Voltar"/>

                    
                    <div className={styles.ultimosDados}>
                        <h1>Últimos dados capturados:</h1>
                        {tam > 1 && (
                            <ul>
                                <li>Temperatura: <span>{tableDados[tam][0]}</span></li>
                                <li>Umidade: <span>{tableDados[tam][1]}</span></li>
                                <li>PH: <span>{tableDados[tam][2]}</span></li>
                                <li>Luminosidade: <span>{tableDados[10][3]}</span></li>
                                <li>Nivel Reservatório: <span>{tableDados[tam][4]}</span></li>
                                <li>Data: <span>{tableDados[tam][5]}</span></li>
                                <li>Hora: <span>{tableDados[tam][6]}</span></li>
                                <li>Bomba: <span>{tableDados[tam][7]}</span></li>
                                <li>Lâmpada: <span>{tableDados[tam][8]}</span></li>
                            </ul>
                        )}

                        {tam <= 1 && <p>A estufa não possui nenhum dado ainda.</p>}
                    </div>

                    {mediaTemp.length > 1 && (
                        <div className={styles.container_tabela}>
                            <h1>Média da temperatura diária:</h1>
                            <Chart className={styles.chart} chartType="ColumnChart" options={options2} data={mediaTemp} />
                        </div>
                    )}
                    
                    {mediaHum.length > 1 && (
                        <div className={styles.container_tabela}>
                            <h1>Média da umidade diária:</h1>
                            <Chart className={styles.chart} chartType="ColumnChart" options={options2} data={mediaHum} />
                        </div>
                    )}

                    {mediaPh.length > 1 && (
                        <div className={styles.container_tabela}>
                            <h1>Média do ph diária:</h1>
                            <Chart className={styles.chart} chartType="ColumnChart" options={options2} data={mediaPh} />
                        </div>
                    )}
                    
                    {mediaLum.length > 1 && (
                    <div className={styles.container_tabela}> 
                        <h1>Média da luminosidade diária:</h1>
                        <Chart className={styles.chart} chartType="ColumnChart" options={options2} data={mediaLum} />
                    </div>
                    )}

                    {tableDados.length > 1 && (
                        <div className={styles.container_tabela}>
                            <h1>Histórico dos dados:</h1>
                            <Chart className={styles.chart} chartType="Table" data={tableDados} options={options} formatters={formatters} />
                        </div>
                    )}
                </>
            )}

            {showLoading && <img src={Loading} alt="Carregando"/>}
        </div>
    )
}

export default Detalhes
