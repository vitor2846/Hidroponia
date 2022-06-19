import LinkButton from '../../Components/LinkButton/LinkButton'
import styles from './Loja.module.css'

function Loja(){
    return(
        <div className={styles.container}>
            <div className={styles.titulo}>
                <h1>Loja</h1>
            </div>

            <p>Aqui vai o texto</p>

            <ul className={styles.albumFotos}>
                <li className={styles.foto01}><span>Arduino</span></li>
                <li className={styles.foto02}><span>Estufa</span></li>
                <li className={styles.foto03}><span>Interior</span></li>
                <li className={styles.foto04}><span>Interior</span></li>
                <li className={styles.foto05}><span>Interior</span></li>
                <li className={styles.foto06}><span>Interior</span></li>
            </ul>

            <LinkButton to='/Comprar' text='Comprar'/>
        </div>
    )
}

export default Loja