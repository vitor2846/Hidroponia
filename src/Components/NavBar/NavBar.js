import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import Logo from '../../Imagens/Logo.png'


function NavBar({logado}){

    return(
        <header className={styles.header}>

            <img className={styles.img} src={Logo} alt='Logo de hidroponia'/>

            <nav className={styles.navbar}>
                <ul className={styles.list}>
                    {logado !== 1 && (
                        <li className={styles.item}>
                            <Link to='/'>Login</Link>
                        </li>
                    )}

                    {logado === 1 && (
                        <li className={styles.item}>
                            <Link to='/Perfil'>Perfil</Link>
                        </li>
                    )}

                    {logado === 1 && (
                        <li className={styles.item}>
                            <Link to='/Estufas'>Estufas</Link>
                        </li>
                    )}

                    <li className={styles.item}>
                        <Link to='/Empresa'>Empresa</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/Contatos'>Contatos</Link>
                    </li>         
                </ul>
            </nav>
        </header>
    )
}

export default NavBar