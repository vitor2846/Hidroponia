import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import Logo from '../../Imagens/Logo.png'


function NavBar(){

    return(
        <header className={styles.header}>

            <img className={styles.img} src={Logo} alt='Logo de hidroponia'/>

            <nav className={styles.navbar}>
                <ul className={styles.list}>
                    {parseInt(localStorage.getItem('status')) !== 1 && (
                        <li className={styles.item}>
                            <Link to='/'>Login</Link>
                        </li>
                    )}

                    {parseInt(localStorage.getItem('status')) === 1 && (
                        <li className={styles.item}>
                            <Link to='/Perfil'>Perfil</Link>
                        </li>
                    )}

                    {parseInt(localStorage.getItem('status')) === 1 &&  (
                        <li className={styles.item}>
                            <Link to='/Estufas'>Estufas</Link>
                        </li>
                    )}

                    <li className={styles.item}>
                        <Link to='/Loja'>Loja</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/Contato'>Contato</Link>
                    </li>         
                </ul>
            </nav>
        </header>
    )
}

export default NavBar