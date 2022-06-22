//import LinkButton from '../../Components/LinkButton/LinkButton'
import { useNavigate } from 'react-router-dom'
import styles from './Loja.module.css'

function Loja(){
    const navigate = useNavigate()
    
    function navegar(){
        navigate('/Comprar')
    }

    return(
        <div className={styles.container}>
            <div className={styles.titulo}>
                <h1>Loja</h1>
            </div>

            <div className={styles.texto}>
                <p>
                    Facilite os processos da sua hidroponia utilizando nossas soluções tecnológicas
                </p>
                
                <p>
                    A hidroponia apresenta vantagens se comparados aos cultivos tradicionais (crescimento rápido, produtividade, controle de pragas, insetos e doenças).
                </p>

                <p>
                    As plantas hidroponicas recebem os minerais equilibrados na água resultando qualidade nutricional e sabor.
                </p>

                <p>
                    Sem o uso de agrotóxicos evita-se agressão ao solo e meio ambiente.
                </p>

                <p>
                    É necessário o monitoramento da temperatura, umidade, ph da mistura de nutrição, luminosidade, nível do reservatório. Qualquer ocilação que não for corrigida a tempo pode comprometer a produção.
                </p>

                <p>
                    A automação é a solução para tornar o sistema de hidroponia mais eficiente e confiável e minimizando a mão de obra. Para este sistema foi utilizado um sistema controlado por uma placa arduíno, assim revelando dados importantes para melhor produção.
                </p>

                <p>
                    Os dados coletados pelo sistema são enviados para um banco de dados podendo ser visualizados nesse site.
                </p>

                <p>
                    O controle ocorre desde o nível da água no reservatório, mostrando a necessidade de reposição de água ou dependendo deste nível impedindo o acionamento da bomba de água que circula no sistema evitando algum dano.
                </p>

                <p>
                    O controle da luminosidade natural da estufa também é realizado, para caso não tenha uma luminosidade natural é ativado o sistema de suplementação de luz artificial.
                </p>
            </div>
            
            <ul className={styles.albumFotos}>
                <li className={styles.foto01}></li>
                <li className={styles.foto02}></li>
                <li className={styles.foto03}></li>
                <li className={styles.foto04}></li>
                <li className={styles.foto05}></li>
                <li className={styles.foto06}></li>
            </ul>

            <button className={styles.btn} onClick={navegar}>Realizar pedido</button>
        </div>
    )
}

export default Loja

/*
<li className={styles.foto01}><span>Arduino</span></li>
                <li className={styles.foto02}><span>Estufa</span></li>
                <li className={styles.foto03}><span>Interior</span></li>
                <li className={styles.foto04}><span>Interior</span></li>
                <li className={styles.foto05}><span>Interior</span></li>
                <li className={styles.foto06}><span>Interior</span></li>

*/