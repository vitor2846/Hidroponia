import {useState} from 'react'
import Button from '../Formulario/Button/Button'
import Input from '../Formulario/Input/Input'
import styles from './FormEst.module.css'
import LinkButton from '../LinkButton/LinkButton'

function FormEst ({handleSubmit, idUsuario}){
    
    const [estufa, setEstufa] = useState({'id_usuario': idUsuario})

    function handleChange(e){
        setEstufa({...estufa, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(estufa)
    }

    return (
        <>
            <form className={styles.formulario} onSubmit={submit}>
                <Input text='Nome da estufa' type='text' placeholder='Digite o nome da estufa...' name='nome' handleOnChange={handleChange}/>
                <Button text='Cadastrar estufa'/>
                <LinkButton to='/Estufas' text='Voltar'/>
            </form>
        </>
    )
}

export default FormEst